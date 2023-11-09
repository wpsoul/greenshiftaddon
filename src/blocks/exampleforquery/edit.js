import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Spinner, ToggleControl, BaseControl } from '@wordpress/components';
import { ProductSelect } from "../components/ProductSelect/ProductSelect";
import { useSelect } from "@wordpress/data";
import isEqual from 'lodash/isEqual';
import attributesDefault from './attributes';

// Import greenshift dependencies
const { gspb_setBlockId, gspb_getDeviceStateIndex } = gspblib.utilities;
const { BlockToolBar, StylesforBlock } = gspblib.components;
const {
	CssTransform,
	Position,
	Animation,
	Spacing,
	Responsive,
	Shadow,
	Border,
	Background,
	Typography,
	BlockWidth,
	ProChecker
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
	gspb_width_cssGen,
	gspb_Css_Final
} = gspblib.utilities;
const { InspectorTabs, InspectorTab, RadioAdvanced, Devices } = gspblib.components;
const { gspb_cssGen } = gspblib.helpers;
const { AnimationWrapper, AnimationRenderProps } = gspblib.collections;

function edit(props) {

	const { attributes, setAttributes, className, clientId, context } = props;

	const {
		id, csstransform, position, animation, spacing, responsive, shadow, border, background, typography, align,
		sourceType, postId, loading, headingTag, post_type, link_enable, blockWidth, clamp,
		clampEnable, enablemask,
	} = attributes;

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
	let blockClassName = `gspb-dynamic-post-title ${blockId} ${className}`;
	let css_selector_by_user = `.${blockId}`;

	const [devstate, setdevState] = useState(0);
	const deviceStateIndex = gspb_getDeviceStateIndex();

	//Render Animation Properties
	let AnimationProps = {};
	AnimationProps = AnimationRenderProps(animation);

	// categories state
	const [title, setTitle] = useState('Dynamic Post Title');

	function decodeHTMLEntities(text) {
		let textArea = document.createElement('textarea');
		textArea.innerHTML = text;
		return textArea.value;
	}

	function getMetaValue(postId, part, type = '') {
		setAttributes({
			loading: true,
		});
		let posttype = type || post_type;
		wp.apiFetch({
			path: `/greenshift/v1/get-post-part?part=${part}&post_id=${postId}&post_type=${posttype}`,
			method: 'GET'
		}).then(response => {
			const data = JSON.parse(response);
			setAttributes({
				loading: false,
			});
			setTitle(decodeHTMLEntities(data));
		}).catch(error => {
			setAttributes({
				loading: false,
			});
		});
	}

	// We define context and set title conditionally
	//If block is part of Query builder block and enabled in loop, postName is available and set immediatelly
	//If block is part of Query builder but in Builder mode, then, we will use post type from context and show latest post title
	//If block is part of Query Loop, we will use postId from context to detect title
	// Otherwise we will set ID as 0 and in this scenario, getMetaValue function will detect latest published ID and use it to get title
	useEffect(() => {
		if(context.postName){
			setTitle(decodeHTMLEntities(context.postName));
		}else if (sourceType === 'latest_item' && context.greenshiftquery_post_type) {
			getMetaValue(0, "title", context.greenshiftquery_post_type);
		}
		else if (sourceType === 'latest_item' && context.postId) {
			getMetaValue(context.postId, "title");
		} else if (sourceType === 'latest_item') {
			getMetaValue(0, "title");
		}
		else {
			getMetaValue(postId, "title");
		}
	}, [postId, sourceType, post_type, context.greenshiftquery_post_type]);

	const postTypes = useSelect(
		(select) => select('core').getPostTypes({ per_page: -1 }), []
	);

	let postTypeOptions = !Array.isArray(postTypes) ? postTypes : postTypes
		.filter(
			postType => postType.viewable == true)
		.map(
			(postType) => ({
				label: postType.labels.singular_name,
				value: postType.slug,
			})
		);
	if (postTypeOptions) {
		let newArray = {
			label: __('Select Post type', 'greenshiftquery'),
			value: '',
		};
		postTypeOptions = [newArray].concat(postTypeOptions);
	}

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
		`${css_selector_by_user} ${headingTag}`,
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
		`${css_selector_by_user} ${headingTag}`,
		final_css
	);

	// Border
	final_css = gspb_border_cssGen(
		border,
		`${css_selector_by_user} ${headingTag}`,
		final_css
	);

	// Background
	final_css = gspb_background_cssGen(
		background,
		`${css_selector_by_user} ${headingTag}`,
		final_css
	);

	if (enablemask) {
		final_css += `${css_selector_by_user} ${headingTag}{-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;text-fill-color: transparent;}`;
	}

	// blockWidth
	final_css = gspb_width_cssGen(
		blockWidth,
		`${css_selector_by_user} ${headingTag}`,
		final_css,
	);


	// Typography
	final_css = gspb_typography_cssGen(
		typography,
		`${css_selector_by_user} ${headingTag}`,
		final_css
	);

	//Align
	final_css = gspb_cssGen(
		`${css_selector_by_user}`,
		['display', 'align-items', 'justify-content'],
		["flex", "center", align],
		final_css
	);

	if (clampEnable) {
		final_css = gspb_cssGen(
			`${css_selector_by_user} ${headingTag}`,
			['-webkit-line-clamp', 'display', '-webkit-box-orient', 'overflow'],
			[
				[
					[clamp[0] ? clamp[0] : null],
					[clamp[1] ? clamp[1] : null],
					[clamp[2] ? clamp[2] : null],
					[clamp[3] ? clamp[3] : null],
				],
				'-webkit-box',
				'vertical',
				'hidden'
			],
			final_css
		);
	}

	// Get The Stored CSS
	gspb_Css_Final(id, final_css, props);
	let editor_css = final_css;

	// Position
	editor_css = gspb_position_cssGen(
		position,
		'#block-' + clientId,
		editor_css,
	);

	let animationchange = isEqual(attributesDefault.animation.default, props.attributes.animation) ? false : true;
	let csstransformchange = isEqual(attributesDefault.csstransform.default, props.attributes.csstransform) ? false : true;
	let positionchange = isEqual(attributesDefault.position.default, props.attributes.position) ? false : true;
	let responsivechange = isEqual(attributesDefault.responsive.default, props.attributes.responsive) ? false : true;

	const HeadingTag = headingTag;
	return (
		<>
			<InspectorControls>
				<div className="gspb_inspector">
					<InspectorTabs tabs={['general', 'advance']} activeAdvance={(animationchange || csstransformchange || positionchange || responsivechange) ? true : false}>
						<InspectorTab key={'general'}>
							<PanelBody
								initialOpen={true}
								title={__('Source Settings', 'greenshiftquery')}
							>
								<ProChecker addonVar={greenshiftQUERY.can_use_premium_code} />
								<div style={{ marginBottom: 10 }}>
									<div style={{ marginBottom: 5, marginTop: 12 }}>{__('Source', 'greenshiftquery')}</div>
									<StylesforBlock columns={2}
										value={sourceType}
										onChange={(value) => {
											setAttributes({ sourceType: value });
											if (value === 'latest_item') setAttributes({ postId: 0 });
										}}
										options={[
											{ label: __('Current/Latest', 'greenshift'), value: 'latest_item' },
											{ label: __('Definite', 'greenshift'), value: 'definite_item' },
										]}
									/>
								</div>

								{sourceType === 'definite_item' &&
									<>
										<div style={{ marginTop: 15 }}>
											<SelectControl
												label={__('Select Post type', 'greenshiftquery')}
												value={post_type}
												options={postTypeOptions}
												onChange={(value) => {
													setAttributes({ post_type: value, postId: 0 });
												}}
											/>
										</div>

										<div style={{ marginTop: 15 }}>
											<ProductSelect
												label={__('Choose definite item', 'greenshiftseo')}
												multiple={false}
												currentValue={postId !== 0 ? postId : ''}
												onChange={({ value }) => {
													setAttributes({ postId: value })
												}}
												// onChange={({ value }) => { fetchProductData(value, setAttributes); }}
												type={post_type}
											/>
										</div>
									</>
								}
							</PanelBody>

							<PanelBody
								initialOpen={true}
								title={__('Heading Settings', 'greenshiftquery')}
							>
								<div style={{ width: '100%' }}>
									<span className="gspb_inspector_property-title">{__('Heading Tag', 'greenshiftquery')}</span>
									<RadioAdvanced
										label={''}
										fluid={true}
										value={headingTag}
										onChange={(value) => {
											setAttributes({
												headingTag: value,
											});
										}}
										options={[
											{ label: __('H1'), value: 'h1', title: 'H1' },
											{ label: __('H2'), value: 'h2', title: 'H2' },
											{ label: __('H3'), value: 'h3', title: 'H3' },
											{ label: __('H4'), value: 'h4', title: 'H4' },
											{ label: __('H5'), value: 'h5', title: 'H5' },
											{ label: __('H6'), value: 'h6', title: 'H6' },
											{ label: __('DIV'), value: 'div', title: 'DIV' }
										]}
									/>
								</div>
								<ToggleControl
									label={__('Link to Page', 'greenshiftquery')}
									checked={link_enable}
									onChange={(value) => {
										setAttributes({ link_enable: value })
									}}
								/>
							</PanelBody>

							<PanelBody title={__("Typography for Title", 'greenshiftquery')} initialOpen={false} className={`${isEqual(attributesDefault.typography.default, props.attributes.typography) ? '' : 'gspb_panel_changed'}`}>
								<Typography
									attributeName="typography"
									includegradient={true}
									includeHoverlinks={true}
									{...props}
								/>
							</PanelBody>

							{ /* Spacing */}
							<PanelBody title={__("Block Spacing", 'greenshiftquery')} initialOpen={false} className={`${isEqual(attributesDefault.spacing.default, props.attributes.spacing) ? '' : 'gspb_panel_changed'}`}>
								<Spacing attributeName="spacing" overflow={true} {...props} />
							</PanelBody>
							{ /* Background Settings */}
							<PanelBody
								title={__("Background and Opacity", 'greenshiftquery')}
								initialOpen={false}
								className={`gspb_smallpadding_btn ${isEqual(attributesDefault.background.default, props.attributes.background) ? '' : 'gspb_panel_changed'}`}
							>
								<BaseControl help={__("Add also Background image for this option", 'greenshiftquery')}>
									<ToggleControl
										label={__("Enable Image Mask", 'greenshiftquery')}
										checked={enablemask}
										onChange={(value) => {
											setAttributes({ enablemask: value });
										}
										}
									/>
								</BaseControl>
								<Background
									attributeName="background"
									exclude={['video']}
									{...props}
								/>
							</PanelBody>

							{ /* Border Settings */}
							<PanelBody title={__("Border", 'greenshiftquery')} initialOpen={false} className={`${isEqual(attributesDefault.border.default, props.attributes.border) ? '' : 'gspb_panel_changed'}`}>
								<Border attributeName="border" {...props} />
							</PanelBody>

							{ /* Shadow Settings */}
							<PanelBody title={__("Shadow", 'greenshiftquery')} initialOpen={false} className={`${isEqual(attributesDefault.shadow.default, props.attributes.shadow) ? '' : 'gspb_panel_changed'}`}>
								<Shadow attributeName="shadow" {...props} predefined={true} />
							</PanelBody>

							{ /* Width Settings */}
							<PanelBody
								title={__("Width, Height, Clamp", 'greenshiftquery')}
								initialOpen={false}
								className={`${isEqual(attributesDefault.blockWidth.default, props.attributes.blockWidth) ? '' : 'gspb_panel_changed'}`}
							>
								<BlockWidth
									attributeName="blockWidth"
									include={["height"]}
									{...props}
								/>
								<div style={{ marginTop: 20 }}>
									<ToggleControl
										label={__('Enable Text Clamp?', 'greenshiftquery')}
										checked={clampEnable}
										onChange={(clampEnable) => {
											setAttributes({ clampEnable })
										}}
									/>

									{clampEnable && (
										<>
											<div style={{ marginBottom: 10 }}>
												{__('Line Clamp', 'greenshiftquery')}
												<Devices
													className="gspb_inspector_device-icons--small"
													onChange={() =>
														setdevState(!devstate)
													}
												/>
												<div
													className="gspb_inspector_clear_btn--right"
													onClick={() => {
														let currentValue = clamp.slice();
														currentValue[
															deviceStateIndex
														] = null;
														setAttributes({
															clamp: currentValue,
														});
													}}
												>
													<i className="rhicon rhi-undo" />
												</div>
											</div>

											<RadioAdvanced
												label={''}
												fluid={true}
												value={clamp[deviceStateIndex]}
												onChange={(value) => {
													let currentValue = clamp.slice();
													currentValue[
														deviceStateIndex
													] = value;
													setAttributes({
														clamp: currentValue,
													});
												}}
												options={[
													{ label: __('No', 'greenshift'), value: null, title: __('Default', 'greenshift') },
													{ label: '1', value: 1, title: '1' },
													{ label: '2', value: 2, title: '2' },
													{ label: '3', value: 3, title: '3' },
													{ label: '4', value: 4, title: '4' },
													{ label: '5', value: 5, title: '5' },
													{ label: '6', value: 6, title: '6' },
													{ label: '7', value: 7, title: '7' },
												]}
											/>
										</>
									)}
								</div>
							</PanelBody>

						</InspectorTab>
						<InspectorTab key={'advance'}>
							{ /* Animations Tab */}
							<PanelBody
								title={__("Animation", 'greenshift')}
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
								title={__("Css Transform", 'greenshift')}
								initialOpen={false}
								className={`${!csstransformchange ? '' : 'gspb_panel_changed'}`}
							>
								<CssTransform attributeName="csstransform" {...props} />
							</PanelBody>

							{ /* Position Tab */}
							<PanelBody
								title={__("Position", 'greenshift')}
								initialOpen={false}
								className={`${!positionchange ? '' : 'gspb_panel_changed'}`}
							>
								<Position attributeName="position" {...props} />
							</PanelBody>

							{ /* Responsive */}
							<PanelBody title={__("Responsive and Custom CSS", "greenshift")} initialOpen={false}
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
					className={blockClassName}
					{...AnimationProps}
				>
					{loading && <Spinner />}
					{(!loading) && (
						<>
							<HeadingTag>
								{link_enable &&
									<a href="#">{title}</a>
								}
								{!link_enable && title}
							</HeadingTag>
						</>
					)}
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