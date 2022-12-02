import { useRef, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';
import { PanelBody, BaseControl, TextControl, __experimentalNumberControl as NumberControl, RangeControl, DateTimePicker } from '@wordpress/components';
import "./editor.scss";

const { gspb_setBlockId } = gspblib.utilities;
const {
	Responsive,
	CssTransform,
	Position,
	Animation,
	Spacing,
	Shadow,
	Background,
} = gspblib.collections;
const { gspb_getDeviceStateIndex } = gspblib.utilities;
const {
	gspb_position_cssGen,
	gspb_csstransform_cssGen,
	gspb_responsive_cssGen,
	aos_animation_cssGen,
	gspb_spacing_cssGen,
	gspb_shadow_cssGen,
	gspb_background_cssGen,
	gspb_Css_Final
} = gspblib.utilities;
const { gspb_cssGen } = gspblib.helpers;
const { InspectorTabs, InspectorTab, Devices, BlpgeColorPicker } = gspblib.components;
const { AnimationWrapper, AnimationRenderProps } = gspblib.collections;
const { BlockToolBar } = gspblib.components;


function edit(props) {
	const {
		attributes: {
			id,
			csstransform, position, responsive, animation, spacing, shadow, background,
			align,
		},
		setAttributes,
		isSelected,
		clientId
	} = props;

	gspb_setBlockId(props);

	const AddonRef = useRef();

	const deviceStateIndex = gspb_getDeviceStateIndex();
	const [devstate, setdevState] = useState(0);

	const ALIGNMENT_CONTROLS = [
		{
			icon: 'editor-alignleft',
			title: __('Align Text Left','greenshiftaddon'),
			align: 'flex-start',
		},
		{
			icon: 'editor-aligncenter',
			title: __('Align Text Center','greenshiftaddon'),
			align: 'center',
		},
		{
			icon: 'editor-alignright',
			title: __('Align Text Right','greenshiftaddon'),
			align: 'flex-end',
		}
	];

	useEffect(() => {
		if (!endtime) {
			setAttributes({ endtime: new Date() });
		}
		const clock = CountdownRef.current;
		const daysSpan = clock.querySelector('.days');
		const hoursSpan = clock.querySelector('.hours');
		const minutesSpan = clock.querySelector('.minutes');
		const secondsSpan = clock.querySelector('.seconds');
		function GSupdateClock() {
			const t = GSgetTimeRemaining(endtime);
			daysSpan.innerHTML = ('0' + t.days).slice(-2);
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
			if (t.total <= 0) {
				clearInterval(timeinterval);
				daysSpan.innerHTML = hoursSpan.innerHTML = minutesSpan.innerHTML = secondsSpan.innerHTML = '00';
			}
		}
		GSupdateClock();
		var timeinterval = setInterval(GSupdateClock, 1000);
		return () => {
			window.clearInterval(timeinterval);
		}
	}, [endtime]);

	//Render Animation Properties
	let AnimationProps = {};
	AnimationProps = AnimationRenderProps(animation);

	let addonId = `gspb_id-${id}`;
	let css_selector_by_user = `.${addonId}`;

	const blockProps = useBlockProps({
		className: `gspb-addonwrap ${addonId}`
	});

	let final_css = '.gspb-addonwrap{display:flex;align-items:center}';

	if (align) {
		final_css += `${css_selector_by_user}{justify-content:${align}}`;
	}

	final_css = gspb_cssGen(
		`${css_selector_by_user} .gs-countdown__item_label`,
		['font-size', 'color'],
		[
			[
				[fontSizeL[0] ? fontSizeL[0] + 'px' : null],
				[fontSizeL[1] ? fontSizeL[1] + 'px' : null],
				[fontSizeL[2] ? fontSizeL[2] + 'px' : null],
				[fontSizeL[3] ? fontSizeL[3] + 'px' : null],
			],
			labelColor
		],
		final_css
	);
	// Spacing
	final_css = gspb_spacing_cssGen(
		spacing,
		css_selector_by_user + ' .gs-countdown__item',
		final_css
	);
	final_css = gspb_spacing_cssGen(
		blockspacing,
		css_selector_by_user,
		final_css
	);

	final_css = gspb_cssGen(
		`${css_selector_by_user} .gs-countdown__colon`,
		['padding-bottom'],
		[
			[
				[fontSize[0] ? fontSize[0] / 4 + 'px' : null],
				[fontSize[1] ? fontSize[1] / 4 + 'px' : null],
				[fontSize[2] ? fontSize[2] / 4 + 'px' : null],
				[fontSize[3] ? fontSize[3] / 4 + 'px' : null],
			],
		],
		final_css
	);

	// Shadow
	final_css = gspb_shadow_cssGen(
		shadow,
		css_selector_by_user + ' .gs-countdown__item',
		final_css
	);

	// Background
	final_css = gspb_background_cssGen(
		background,
		css_selector_by_user + ' .gs-countdown__item',
		final_css
	);

	// Animation
	final_css = aos_animation_cssGen(
		animation,
		css_selector_by_user + ' .gs-countdown',
		final_css
	);

	// Responsive classes
	final_css = gspb_responsive_cssGen(
		responsive,
		css_selector_by_user,
		final_css,
	);

	// Position
	final_css = gspb_position_cssGen(
		position,
		'body.gspb-bodyfront ' + css_selector_by_user + ' .gs-countdown',
		final_css,
	);

	// Css transform
	final_css = gspb_csstransform_cssGen(
		csstransform,
		css_selector_by_user + ' .gs-countdown',
		final_css,
		animation
	);

	// Get The Stored CSS
	gspb_Css_Final(id, final_css, props);
	let editor_css = final_css;

	// Position
	editor_css = gspb_position_cssGen(
		position,
		'#block-' + clientId,
		editor_css,
	);

	return (
		<>
			{isSelected && (
				<>
					<InspectorControls>
						<div className="gspb_inspector">
							<InspectorTabs tabs={['general', 'advance']}>
								<InspectorTab key={'general'}>

									{ /* Spacing */}
									<PanelBody title={__("Item Spacing",'greenshiftaddon')} initialOpen={false}>
										<Spacing attributeName="spacing" overflow={false} {...props} />
									</PanelBody>


									{ /* Background Settings */}
									<PanelBody
										title={__("Background for items",'greenshiftaddon')}
										initialOpen={false}
										className="gspb_inspector"
									>
										<Background
											attributeName="background"
											exclude={['video']}
											{...props}
										/>
									</PanelBody>

									{ /* Shadow Settings */}
									<PanelBody title={__("Shadow",'greenshiftaddon')} initialOpen={false}>
										<Shadow attributeName="shadow" {...props} predefined={true} />
									</PanelBody>

								</InspectorTab>
								<InspectorTab key={'advance'}>
									{ /* Animations Tab */}
									<PanelBody title={__("Animation",'greenshiftaddon')} initialOpen={true}>
										<Animation
											attributeName="animation"
											{...props}
										/>
									</PanelBody>
									{ /* Css Transform */}
									<PanelBody title={__("Css Transform",'greenshiftaddon')} initialOpen={false}>
										<CssTransform attributeName="csstransform" {...props} />
									</PanelBody>

									{ /* Position Tab */}
									<PanelBody title={__("Position",'greenshiftaddon')} initialOpen={false}>
										<Position attributeName="position" {...props} />
									</PanelBody>
									{ /* Responsive */}
									<PanelBody title={__("Responsive and Custom Css", "greenshift-animation-and-page-builder-blocks")} initialOpen={false}>
										<Responsive attributeName="responsive" {...props} />
									</PanelBody>
								</InspectorTab>
							</InspectorTabs>
						</div>

					</InspectorControls>
					<BlockToolBar {...props} />
					<BlockControls>
						<AlignmentToolbar
							value={align}
							onChange={align => setAttributes({ align })}
							alignmentControls={ALIGNMENT_CONTROLS}
						/>
					</BlockControls>
				</>
			)}
			<AnimationWrapper attributes={props.attributes} props={props}>
				<div {...blockProps}>
					<div className="gspbaddondiv" {...AnimationProps}>

					</div>
					<style
						dangerouslySetInnerHTML={{
							__html: editor_css,
						}}
					/>
				</div>
			</AnimationWrapper>
		</>
	);
}

export default edit;
