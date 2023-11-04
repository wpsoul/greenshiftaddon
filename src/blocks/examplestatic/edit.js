import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { InspectorControls, AlignmentToolbar, BlockControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { isEqual } from 'lodash';
import { rtransform, ttransform, svgtransform, svgdraw, staggertransform, svgmorph, batchicon } from "./icons.js";
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
	BlockWidth,
	Background,
	IconPicker,
	Typography,
	StyleTabs,
	InteractionsPanel,
} = gspblib.collections;

const {
	gspb_csstransform_cssGen,
	gspb_position_cssGen,
	aos_animation_cssGen,
	gspb_spacing_cssGen,
	gspb_responsive_cssGen,
	gspb_width_cssGen,
	gspb_shadow_cssGen,
	gspb_border_cssGen,
	gspb_iconPicker_cssGen,
	gspb_background_cssGen,
	gspb_typography_cssGen,
	getFinalCssFromDynamicLocalClasses,
	getDataAttributesfromDynamic,
	getFinalCssFromTabs,
	gspb_Css_Final
} = gspblib.utilities;
const { InspectorTabs, InspectorTab, BlpgeColorPicker, RadioAdvanced, StylesforBlock, GsbpFormLabel, UnitControl, ResizalbeMarginBox } = gspblib.components;
const { gspb_cssGen } = gspblib.helpers;
const { AnimationWrapper, AnimationRenderProps } = gspblib.collections;
const { gspb_getDeviceStateIndex } = gspblib.utilities;
const { IconViewer } = gspblib.components;
const { gspb_inherit_values } = gspblib.helpers;
const { collectionsObjects } = gspblib.helpers;

function edit(props) {

	const { attributes, setAttributes, className, clientId } = props;
	const {
		id, csstransform, position, animation, spacing, responsive, shadow, border, background, typography, blockWidth,
		customcolor, align, titleTag, iconBox_icon, enableicon, selecttype,
		sizeCustom, interactionLayers, tabDefault

	} = attributes;

	let animationchange = isEqual(attributesDefault.animation.default, props.attributes.animation) ? false : true;
	let csstransformchange = isEqual(attributesDefault.csstransform.default, props.attributes.csstransform) ? false : true;
	let positionchange = isEqual(attributesDefault.position.default, props.attributes.position) ? false : true;
	let responsivechange = isEqual(attributesDefault.responsive.default, props.attributes.responsive) ? false : true;
	let interactionchange = (typeof props.attributes.interactionLayers != 'undefined' && props.attributes.interactionLayers.length > 0) ? true : false;

	const ALIGNMENT_CONTROLS = [
		{
			icon: 'editor-alignleft',
			title: __('Align Text Left', 'greenshiftaddon'),
			align: 'flex-start',
		},
		{
			icon: 'editor-aligncenter',
			title: __('Align Text Center', 'greenshiftaddon'),
			align: 'center',
		},
		{
			icon: 'editor-alignright',
			title: __('Align Text Right', 'greenshiftaddon'),
			align: 'flex-end',
		}
	];

	// Generate Unique ID for The Block
	useEffect(() => {
		gspb_setBlockId(props);
	}, []);


	let blockId = `gspb_id-${id}`;
	let css_selector_by_user = `.${blockId}`;

	let DynamicDataAttributes = getDataAttributesfromDynamic(props);
	const blockProps =
	{
		className: `gspb-examplebox ${blockId} gspb-selector-element ${(typeof props.attributes.className !== 'undefined' && props.attributes.className != 'undefined') ? props.attributes.className : ''}`,
		...DynamicDataAttributes
	};
	blockProps.id = blockId;

	//Render Animation Properties
	let AnimationProps = {};
	AnimationProps = AnimationRenderProps(animation, interactionLayers);

	// Get Device state
	const deviceStateIndex = gspb_getDeviceStateIndex();
	const [devstate, setdevState] = useState(false);

	// Final CSS for the block
	let final_css = '';

	//Align
	final_css = gspb_cssGen(
		`${css_selector_by_user}`,
		['display', 'justify-content'],
		[
			["flex"],
			[align]
		],
		final_css
	);

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

	// blockWidth
	final_css = gspb_width_cssGen(
		blockWidth,
		`${css_selector_by_user}`,
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

	//Icon 
	let iconPiccker_object = JSON.parse(JSON.stringify(iconBox_icon));
	const iconType = iconPiccker_object.type;
	let iconSelector = 'svg';
	if (iconType === 'image') {
		iconSelector = 'img';
	}
	if (enableicon) {
		final_css = gspb_iconPicker_cssGen(
			iconPiccker_object,
			`${css_selector_by_user} .gspb_example_icon ${iconSelector}`,
			final_css
		);
	}

	// Width example with responsive options
	final_css = gspb_cssGen(
		`${css_selector_by_user} .gspb_example_value`,
		['width', 'display'],
		[
			[
				[sizeCustom[0]],
				[sizeCustom[1]],
				[sizeCustom[2]],
				[sizeCustom[3]],
			],
			["block"]
		],
		final_css
	);

	final_css = getFinalCssFromTabs(tabDefault, css_selector_by_user, final_css);

	final_css = getFinalCssFromDynamicLocalClasses(
		props,
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

	const wrapperBlockProps = useBlockProps({
		"data-gspb-block-id": props.attributes.id
	});
	wrapperBlockProps.className = wrapperBlockProps.className.replace(props.attributes.className, '');

	return (
		<div {...wrapperBlockProps}>
			{props.isSelected &&
				<>
					<InspectorControls>
						<div className="gspb_inspector">
							<InspectorTabs tabs={['general', 'advance']} activeAdvance={(animationchange || csstransformchange || positionchange || responsivechange || interactionchange) ? true : false} {...props}>
								<InspectorTab key={'general'}>
									<PanelBody
										initialOpen={true}
										title={__('Main Settings', 'greenshiftaddon')}
									>
										<GsbpFormLabel
											title={__("Select type", 'greenshiftaddon')}
											clearFun={() => setAttributes({ selecttype: '' })}
											devices={'big'}
											onChange={() => setdevState(!devstate)}
										/>
										<div style={{ marginBottom: 15, marginTop:15, clear: "both" }}>
											<StylesforBlock columns={3} value={selecttype} onChange={val => setAttributes({ selecttype: val })}
												options={[
													{ value: 'regular', svg: rtransform, label: __('Transform', 'greenshiftaddon') },
													{ value: 'stagger_transformations', svg: staggertransform, label: __('Stagger', 'greenshiftaddon') },
													{ value: 'text_transformations', svg: ttransform, label: __('Inner Text', 'greenshiftaddon') },
													{ value: 'svg_motion_path', svg: svgtransform, label: __('SVG Path', 'greenshiftaddon') },
													{ value: 'svg_line_draw', svg: svgdraw, label: __('SVG draw', 'greenshiftaddon') },
													{ value: 'svg_morph', svg: svgmorph, label: __('Svg morph', 'greenshiftaddon') },
												]}
											/>
										</div>
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
											label={__('Title Align', 'greenshiftaddon')}
											fluid={''}
											onChange={(value) => { setAttributes({ align: value }) }}
											options={[
												{ icon: 'dashicon dashicons dashicons-editor-alignleft', value: 'flex-start', title: __('Left', 'greenshiftaddon') },
												{ icon: 'dashicon dashicons dashicons-editor-aligncenter', value: 'center', title: __('Center', 'greenshiftaddon') },
												{ icon: 'dashicon dashicons dashicons-editor-alignright', value: 'flex-end', title: __('Right', 'greenshiftaddon') },
											]}
										/>
																				<div style={{ marginBottom: 10 }}>
											<div class="gspb_row_inspector gspb_row--no-padding-col" style={{ justifyContent: "space-between" }}>
												<div class="gspb_row__col--8">
													<span class="gspb_inspector_property-title">
														{__('Width', 'greenshift-animation-and-page-builder-blocks')}
													</span>

													<div
														className="gspb_inspector_clear_btn--right"
														style={{ marginRight: 10 }}
														onClick={() => {
															let currentValue = sizeCustom.slice();
															currentValue[
																deviceStateIndex
															] = attributesDefault.sizeCustom.default[deviceStateIndex];
															setAttributes({
																sizeCustom: currentValue,
															});
														}}
													>
														<i className="rhicon rhi-undo" />
													</div>
												</div>
												<div class="gspb_row__col--4">
													<UnitControl
														onChange={(value) => {
															let currentValue = sizeCustom.slice();
															currentValue[
																deviceStateIndex
															] = value;
															setAttributes({
																sizeCustom: currentValue,
															});
														}}

														value={gspb_inherit_values(sizeCustom, deviceStateIndex)}

													/>
												</div>
											</div>
										</div>
										<div className="gspb_row gspb_row--no-padding-col" style={{ marginTop: 15 }}>
											<div className="gspb_row__col--6">
												<div>{__("Greenshift color", 'greenshiftaddon')}</div>
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
										<div style={{marginBottom: 10}}>
											{__("Common component for design options", 'greenshiftaddon')}
										</div>
										{ /* you can set defaultTab="Typography" to make it opened by default */}
										<StyleTabs
											typographyAttribute={tabDefault.typography || collectionsObjects.typography}
											typographyTitle={__("Typography", 'greenshift-animation-and-page-builder-blocks')}
											typographyDefault={collectionsObjects.typography}
											typographyChange={
												(value) => {
													let newValue = JSON.parse(JSON.stringify(tabDefault));
													newValue.typography = value;
													setAttributes({ tabDefault: newValue });
												}
											}
											backgroundAttribute={tabDefault.background || collectionsObjects.background}
											backgroundTitle={__("Background", 'greenshift-animation-and-page-builder-blocks')}
											backgroundDefault={collectionsObjects.background}
											backgroundChange={
												(value) => {
													let newValue = JSON.parse(JSON.stringify(tabDefault));
													newValue.background = value;
													setAttributes({ tabDefault: newValue });
												}
											}
											borderAttribute={tabDefault.border || collectionsObjects.border}
											borderTitle={__("Border", 'greenshift-animation-and-page-builder-blocks')}
											borderDefault={collectionsObjects.border}
											borderChange={
												(value) => {
													let newValue = JSON.parse(JSON.stringify(tabDefault));
													newValue.border = value;
													setAttributes({ tabDefault: newValue });
												}
											}
											spacingAttribute={tabDefault.spacing || collectionsObjects.spacing}
											spacingTitle={__("Spacing", 'greenshift-animation-and-page-builder-blocks')}
											spacingDefault={collectionsObjects.spacing}
											spacingChange={
												(value) => {
													let newValue = JSON.parse(JSON.stringify(tabDefault));
													newValue.spacing = value;
													setAttributes({ tabDefault: newValue });
												}
											}
											shadowAttribute={tabDefault.shadow || collectionsObjects.shadow}
											shadowTitle={__("Shadow", 'greenshift-animation-and-page-builder-blocks')}
											shadowDefault={collectionsObjects.shadow}
											shadowChange={
												(value) => {
													let newValue = JSON.parse(JSON.stringify(tabDefault));
													newValue.shadow = value;
													setAttributes({ tabDefault: newValue });
												}
											}
											csstransformAttribute={tabDefault.csstransform || collectionsObjects.csstransform}
											csstransformTitle={__("CSS transform", 'greenshift-animation-and-page-builder-blocks')}
											csstransformDefault={collectionsObjects.csstransform}
											csstransformChange={
												(value) => {
													let newValue = JSON.parse(JSON.stringify(tabDefault));
													newValue.csstransform = value;
													setAttributes({ tabDefault: newValue });
												}
											}

											{...props}
										/>
									</PanelBody>

									<PanelBody initialOpen={false} title={__('Icon', 'greenshiftaddon')} className={`${!enableicon ? '' : 'gspb_panel_changed'}`}>
										<>
											<ToggleControl
												checked={enableicon}
												label={__("Enable icon?", "greenshiftwoo")}
												onChange={(value) => setAttributes({ enableicon: value })}
											/>
											{enableicon &&

												<IconPicker
													icon={iconPiccker_object}
													onChange={(icon) => {
														setAttributes({ iconBox_icon: icon });
													}}
												/>
											}
										</>
									</PanelBody>

									<PanelBody
										title={__("Typography", 'greenshiftaddon')}
										initialOpen={false}
										className={`${isEqual(attributesDefault.typography.default, props.attributes.typography) ? '' : 'gspb_panel_changed'}`}
									>
										<Typography
											attributeName="typography"
											includegradient={true}
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
										<Spacing attributeName="spacing" padding={true} margin={true} overflow={true} {...props} />
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

									{ /* Width Settings */}
									<PanelBody
										title={__("Width and Height", 'greenshiftaddon')}
										initialOpen={false}
										className={`${isEqual(attributesDefault.blockWidth.default, props.attributes.blockWidth) ? '' : 'gspb_panel_changed'}`}
									>
										<BlockWidth
											attributeName="blockWidth"
											include={['height']}
											{...props}
										/>
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

									<PanelBody
										title={__("Interaction Layers", 'greenshift-animation-and-page-builder-blocks')}
										initialOpen={false}
										className={`${interactionchange ? 'gspb_panel_changed' : ''}`}
									>
										<InteractionsPanel {...props} />
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
				</>
			}

			<AnimationWrapper attributes={attributes} props={props}>
				<ResizalbeMarginBox
					blockSelector={css_selector_by_user}
					attributeName="spacing"
					direction="top"
					{...props}
				/>
				<div
					{...blockProps}
					{...AnimationProps}
				>
					<div className="gspb_example_value">{customcolor}</div>
					{enableicon &&
						<div className="gspb_example_icon">
							<IconViewer attributeName="iconBox_icon" size={16} color={"#565D66"} {...props} />
						</div>
					}
					<style
						dangerouslySetInnerHTML={{
							__html: editor_css,
						}}
					/>
				</div>
				<ResizalbeMarginBox
					blockSelector={css_selector_by_user}
					attributeName="spacing"
					direction="bottom"
					{...props}
				/>
			</AnimationWrapper>

		</div>
	);
}

export default edit;