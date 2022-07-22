import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { isEqual } from 'lodash';
import attributesDefault from './attributes';

// Import greenshift dependencies
const { gspb_setBlockId } = gspblib.utilities;
const { BlockToolBar } = gspblib.components;
const {
	CssTransform,
	Position,
	Animation,
	Spacing,
	Responsive,
	Shadow,
	Border,
	Background,
	Typography
} = gspblib.collections;

const {
	gspb_csstransform_cssGen,
	gspb_position_cssGen,
	aos_animation_cssGen,
	gspb_spacing_cssGen,
	gspb_responsive_cssGen,
	gspb_shadow_cssGen,
	gspb_border_cssGen,
	gspb_background_cssGen,
	gspb_typography_cssGen,

	gspb_Css_Final
} = gspblib.utilities;
const { CssUnits, Devices, InspectorTabs, InspectorTab, BlpgeColorPicker, RadioAdvanced } = gspblib.components;
const { gspb_cssGen } = gspblib.helpers;
const { AnimationWrapper, AnimationRenderProps } = gspblib.collections;
const { gspb_getDeviceStateIndex } = gspblib.utilities;

function edit(props) {

	const { attributes, setAttributes, className, clientId } = props;
	const {
		id, csstransform, position, animation, spacing, responsive, shadow, border, background, typography,
		customcolor, align, titleTag,
		size, sizeUnit

	} = attributes;

	let animationchange = isEqual(attributesDefault.animation.default, props.attributes.animation) ? false : true;
	let csstransformchange = isEqual(attributesDefault.csstransform.default, props.attributes.csstransform) ? false : true;
	let positionchange = isEqual(attributesDefault.position.default, props.attributes.position) ? false : true;
	let responsivechange = isEqual(attributesDefault.responsive.default, props.attributes.responsive) ? false : true;

	const ALIGNMENT_CONTROLS = [
		{
			icon: 'editor-alignleft',
			title: __('Align Text Left', 'greenshift'),
			align: 'flex-start',
		},
		{
			icon: 'editor-aligncenter',
			title: __('Align Text Center', 'greenshift'),
			align: 'center',
		},
		{
			icon: 'editor-alignright',
			title: __('Align Text Right', 'greenshift'),
			align: 'flex-end',
		}
	];

	gspb_setBlockId(props);
	let blockId = `gspb_id-${id}`;
	let blockClassName = `gspb-examplebox ${blockId} ${className}`;
	let css_selector_by_user = `#${blockId}`;

	//Render Animation Properties
	let AnimationProps = {};
	AnimationProps = AnimationRenderProps(animation);

	// Get Device state
	const deviceStateIndex = gspb_getDeviceStateIndex();
	const [devstate, setdevState] = useState(0);

	// Final CSS for the block
	let final_css = '';

	// Css transform
	final_css = gspb_csstransform_cssGen(
		csstransform,
		css_selector_by_user,
		final_css,
		animation
	);

	// Position
	final_css = gspb_position_cssGen(
		position,
		'body.gspb-bodyfront ' + css_selector_by_user,
		final_css,
	);

	// Animation
	final_css = aos_animation_cssGen(
		animation,
		css_selector_by_user,
		final_css
	);

	// Spacing
	final_css = gspb_spacing_cssGen(
		spacing,
		css_selector_by_user,
		final_css
	);

	// Responsive classes
	final_css = gspb_responsive_cssGen(
		responsive,
		css_selector_by_user,
		final_css,
	);

	// Shadow
	final_css = gspb_shadow_cssGen(
		shadow,
		css_selector_by_user,
		final_css
	);

	// Border
	final_css = gspb_border_cssGen(
		border,
		css_selector_by_user,
		final_css
	);

	// Background
	final_css = gspb_background_cssGen(
		background,
		css_selector_by_user,
		final_css
	);


	// Typography
	final_css = gspb_typography_cssGen(
		typography,
		`${css_selector_by_user} .gspb_example_value`,
		final_css
	);

	// Width example with responsive options
	final_css = gspb_cssGen(
		`${css_selector_by_user} .gspb_example_value`,
		['width'],
		[
			[
				[size[0], sizeUnit[0]],
				[size[1], sizeUnit[1]],
				[size[2], sizeUnit[2]],
				[size[3], sizeUnit[3]],
			],
		],
		final_css
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
			<InspectorControls>
				<div className="gspb_inspector">
					<InspectorTabs tabs={['general', 'advance']} activeAdvance={(animationchange || csstransformchange || positionchange || responsivechange) ? true : false}>
						<InspectorTab key={'general'}>
							<PanelBody
								initialOpen={true}
								title={__('Main Settings', 'greenshiftaddon')}
							>
								<RadioAdvanced
									label={''}
									fluid={'yes'}
									value={titleTag}
									onChange={(value) => {
										setAttributes({ titleTag: value });
									}}
									options={[
										{ label: 'H2', value: 'h2', title: 'H2' },
										{ label: 'H3', value: 'h3', title: 'H3' },
										{ label: 'H4', value: 'h4', title: 'H4' },
										{ label: 'H5', value: 'h5', title: 'H5' },
										{ label: 'H6', value: 'h6', title: 'H6' },
										{ label: 'div', value: 'div', title: 'div' },
									]}
								/>
								<RadioAdvanced
									value={align}
									label={__('Title Align', 'greenshift')}
									fluid={''}
									onChange={(value) => { setAttributes({ align: value }) }}
									options={[
										{ icon: 'dashicon dashicons dashicons-editor-alignleft', value: 'left', title: __('Left', 'greenshift') },
										{ icon: 'dashicon dashicons dashicons-editor-aligncenter', value: 'center', title: __('Center', 'greenshift') },
										{ icon: 'dashicon dashicons dashicons-editor-alignright', value: 'right', title: __('Right', 'greenshift') },
									]}
								/>
								<div className="gspb_row gspb_row--no-padding-col" style={{ marginTop: 15 }}>
									<div className="gspb_row__col--6">
										<div>{__("Greenshift color picker", 'greenshiftaddon')}</div>
									</div>
									<div
										className="gspb_row__col--6"
										style={{ textAlign: 'right', justifyContent: 'flex-end' }}
									>
										<BlpgeColorPicker
											color={customcolor}
											onChange={(value) =>
												setAttributes({ customcolor: value.rgb ? `rgba(${value.rgb.r}, ${value.rgb.g}, ${value.rgb.b}, ${value.rgb.a})` : value })
											}
										/>
									</div>
								</div>
								<div style={{ marginTop: 10 }}>
									<div className="gspb_row gspb_row--no-padding-col">
										<div className="gspb_row__col--7">
											<span className="gspb_inspector_property-title">
												{__('Size', 'greenshiftaddon')}
												<Devices
													className="gspb_inspector_device-icons--small"
													onChange={() =>
														setdevState(!devstate)
													}
												/>
											</span>
										</div>
										<div
											className="gspb_row__col--5"
											style={{
												justifyContent: 'space-between',
											}}
										>
											<div>
												<div
													className="gspb_inspector_clear_btn--right"
													style={{ marginLeft: 5 }}
													onClick={() => {
														let currentValue = size.slice();
														currentValue[
															deviceStateIndex
														] = null;
														setAttributes({
															size: currentValue,
														});
													}}
												>
													<i className="rhicon rhi-undo" />
												</div>
												<CssUnits
													units={['px', '%', 'vw']}
													attribute={
														sizeUnit[deviceStateIndex] ==
															null
															? ''
															: sizeUnit[deviceStateIndex]
													}
													onChange={(value) => {
														let currentValue = sizeUnit.slice();
														currentValue[
															deviceStateIndex
														] = value;
														setAttributes({
															sizeUnit: currentValue,
														});
													}}
												/>

											</div>
										</div>
										<div style={{ width: '100%' }}>
											<RangeControl
												value={
													size[deviceStateIndex] == null
														? ''
														: size[deviceStateIndex]
												}
												onChange={(value) => {
													let currentValue = size.slice();
													currentValue[
														deviceStateIndex
													] = value;
													setAttributes({
														size: currentValue,
													});
												}}
												trackColor='#2184f9'
												min={
													sizeUnit[deviceStateIndex] ==
														'px'
														? 10
														: 1
												}
												max={
													sizeUnit[deviceStateIndex] ==
														'px'
														? 1800
														: 100
												}
											/>
										</div>
									</div>
								</div>
							</PanelBody>

							<PanelBody
								title={__("Typography", 'greenshiftaddon')}
								initialOpen={false}
								className={`${isEqual(attributesDefault.typography.default, props.attributes.typography) ? '' : 'gspb_panel_changed'}`}
							>
								<Typography
									attributeName="typography"
									includegradient={false}
									includeHoverlinks={true}
									{...props}
								/>
							</PanelBody>

							{ /* Spacing */}
							<PanelBody
								title={__("Block Spacing", 'greenshiftaddon')}
								initialOpen={false}
								className={`${isEqual(attributesDefault.spacing.default, props.attributes.spacing) ? '' : 'gspb_panel_changed'}`}
							>
								<Spacing attributeName="spacing" overflow={false} {...props} />
							</PanelBody>
							{ /* Background Settings */}
							<PanelBody
								title={__("Background and Opacity", 'greenshiftaddon')}
								initialOpen={false}
								className={`gspb_smallpadding_btn ${isEqual(attributesDefault.background.default, props.attributes.background) ? '' : 'gspb_panel_changed'}`}
							>
								<Background
									attributeName="background"
									exclude={['video']}
									{...props}
								/>
							</PanelBody>

							{ /* Border Settings */}
							<PanelBody
								title={__("Border", 'greenshiftaddon')}
								initialOpen={false}
								className={`${isEqual(attributesDefault.border.default, props.attributes.border) ? '' : 'gspb_panel_changed'}`}
							>
								<Border attributeName="border" {...props} />
							</PanelBody>

							{ /* Shadow Settings */}
							<PanelBody
								title={__("Shadow", 'greenshiftaddon')}
								initialOpen={false}
								className={`${isEqual(attributesDefault.shadow.default, props.attributes.shadow) ? '' : 'gspb_panel_changed'}`}
							>
								<Shadow attributeName="shadow" {...props} predefined={true} />
							</PanelBody>

						</InspectorTab>
						<InspectorTab key={'advance'}>
							{ /* Animations Tab */}
							<PanelBody
								title={__("Animation", 'greenshiftaddon')}
								initialOpen={true}
								className={`${!animationchange ? '' : 'gspb_panel_changed'}`}
							>
								<Animation
									attributeName="animation"
									{...props}
								/>
							</PanelBody>

							{ /* Css Transform */}
							<PanelBody
								title={__("Css Transform", 'greenshiftaddon')}
								initialOpen={false}
								className={`${!csstransformchange ? '' : 'gspb_panel_changed'}`}
							>
								<CssTransform attributeName="csstransform" {...props} />
							</PanelBody>

							{ /* Position Tab */}
							<PanelBody
								title={__("Position", 'greenshiftaddon')}
								initialOpen={false}
								className={`${!positionchange ? '' : 'gspb_panel_changed'}`}
							>
								<Position attributeName="position" {...props} />
							</PanelBody>

							{ /* Responsive */}
							<PanelBody
								title={__("Responsive and Custom css", 'greenshiftaddon')} initialOpen={false}
								className={`${!responsivechange ? '' : 'gspb_panel_changed'}`}
							>
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
			<AnimationWrapper attributes={attributes} props={props}>
				<div
					id={blockId}
					className={blockClassName}
					{...AnimationProps}
				>
					<span className="gspb_example_value">{customcolor}</span>
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