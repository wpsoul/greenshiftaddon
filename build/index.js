/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/exampledynamic/attributes.js":
/*!*************************************************!*\
  !*** ./src/blocks/exampledynamic/attributes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Import gspb dependencies
const {
  collectionsObjects
} = gspblib.helpers;
/**
 * Set the block attributes
 * @type {Object}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  id: {
    type: 'string',
    default: null
  },
  inlineCssStyles: {
    type: 'string'
  },
  csstransform: {
    type: 'object',
    default: collectionsObjects.csstransform
  },
  position: {
    type: 'object',
    default: collectionsObjects.position
  },
  animation: {
    type: 'object',
    default: collectionsObjects.animation
  },
  spacing: {
    type: 'object',
    default: collectionsObjects.spacing
  },
  responsive: {
    type: 'object',
    default: collectionsObjects.responsive
  },
  shadow: {
    type: 'object',
    default: collectionsObjects.shadow
  },
  border: {
    type: 'object',
    default: collectionsObjects.border
  },
  background: {
    type: 'object',
    default: collectionsObjects.background
  },
  typography: {
    type: 'object',
    default: collectionsObjects.typography
  },
  blockWidth: {
    type: 'object',
    default: collectionsObjects.blockWidth
  },
  align: {
    type: 'string',
    default: ''
  },
  titleTag: {
    type: 'string',
    default: ''
  },
  customcolor: {
    type: 'string',
    default: '#ff0000'
  },
  size: {
    type: 'array',
    default: [200]
  },
  sizeUnit: {
    type: 'array',
    default: ['px', 'px', 'px', 'px']
  },
  selecttype: {
    type: 'string'
  }
});

/***/ }),

/***/ "./src/blocks/exampledynamic/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/exampledynamic/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/exampledynamic/attributes.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/exampledynamic/icons.js");








 // Import greenshift dependencies

const {
  gspb_setBlockId
} = gspblib.utilities;
const {
  BlockToolBar
} = gspblib.components;
const {
  CssTransform,
  Position,
  Animation,
  Spacing,
  Responsive,
  Shadow,
  BlockWidth,
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
  gspb_width_cssGen,
  gspb_background_cssGen,
  gspb_typography_cssGen,
  gspb_Css_Final
} = gspblib.utilities;
const {
  CssUnits,
  Devices,
  InspectorTabs,
  InspectorTab,
  BlpgeColorPicker,
  RadioAdvanced,
  StylesforBlock,
  GsbpFormLabel
} = gspblib.components;
const {
  gspb_cssGen
} = gspblib.helpers;
const {
  AnimationWrapper,
  AnimationRenderProps
} = gspblib.collections;
const {
  gspb_getDeviceStateIndex
} = gspblib.utilities;
const {
  gspb_inherit_values
} = gspblib.helpers;

function edit(props) {
  const {
    attributes,
    setAttributes,
    className,
    clientId
  } = props;
  const {
    id,
    csstransform,
    position,
    animation,
    spacing,
    responsive,
    shadow,
    border,
    background,
    typography,
    blockWidth,
    customcolor,
    align,
    titleTag,
    selecttype,
    size,
    sizeUnit
  } = attributes;
  let animationchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].animation["default"], props.attributes.animation) ? false : true;
  let csstransformchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].csstransform["default"], props.attributes.csstransform) ? false : true;
  let positionchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].position["default"], props.attributes.position) ? false : true;
  let responsivechange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].responsive["default"], props.attributes.responsive) ? false : true;
  const ALIGNMENT_CONTROLS = [{
    icon: 'editor-alignleft',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Left', 'greenshiftaddon'),
    align: 'flex-start'
  }, {
    icon: 'editor-aligncenter',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Center', 'greenshiftaddon'),
    align: 'center'
  }, {
    icon: 'editor-alignright',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Right', 'greenshiftaddon'),
    align: 'flex-end'
  }];
  gspb_setBlockId(props);
  let blockId = `gspb_id-${id}`;
  let blockClassName = `gspb-examplebox ${blockId} ${className}`;
  let css_selector_by_user = `#${blockId}`; //Render Animation Properties

  let AnimationProps = {};
  AnimationProps = AnimationRenderProps(animation); // Get Device state

  const deviceStateIndex = gspb_getDeviceStateIndex();
  const [devstate, setdevState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Final CSS for the block

  let final_css = ''; //Align

  final_css = gspb_cssGen(`${css_selector_by_user}`, ['display', 'justify-content'], [["flex"], [align]], final_css); // Css transform

  final_css = gspb_csstransform_cssGen(csstransform, css_selector_by_user, final_css, animation); // Position

  final_css = gspb_position_cssGen(position, 'body.gspb-bodyfront ' + css_selector_by_user, final_css); // Animation

  final_css = aos_animation_cssGen(animation, css_selector_by_user, final_css); // Spacing

  final_css = gspb_spacing_cssGen(spacing, css_selector_by_user, final_css); // blockWidth

  final_css = gspb_width_cssGen(blockWidth, `${css_selector_by_user}`, final_css); // Responsive classes

  final_css = gspb_responsive_cssGen(responsive, css_selector_by_user, final_css); // Shadow

  final_css = gspb_shadow_cssGen(shadow, css_selector_by_user, final_css); // Border

  final_css = gspb_border_cssGen(border, css_selector_by_user, final_css); // Background

  final_css = gspb_background_cssGen(background, css_selector_by_user, final_css); // Typography

  final_css = gspb_typography_cssGen(typography, `${css_selector_by_user} .gspb_example_value`, final_css); // Width example with responsive options

  final_css = gspb_cssGen(`${css_selector_by_user} .gspb_example_value`, ['width', 'display'], [[[size[0], sizeUnit[0]], [size[1], sizeUnit[1]], [size[2], sizeUnit[2]], [size[3], sizeUnit[3]]], ["block"]], final_css); // Get The Stored CSS

  gspb_Css_Final(id, final_css, props);
  let editor_css = final_css; // Position

  editor_css = gspb_position_cssGen(position, '#block-' + clientId, editor_css);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_inspector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTabs, {
    tabs: ['general', 'advance'],
    activeAdvance: animationchange || csstransformchange || positionchange || responsivechange ? true : false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTab, {
    key: 'general'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Settings', 'greenshiftaddon')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GsbpFormLabel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select type", 'greenshiftaddon'),
    clearFun: () => setAttributes({
      selecttype: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      marginBottom: 15,
      clear: "both"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(StylesforBlock, {
    columns: 3,
    value: selecttype,
    onChange: val => setAttributes({
      selecttype: val
    }),
    options: [{
      value: 'regular',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_7__.rtransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transform', 'greenshiftaddon')
    }, {
      value: 'stagger_transformations',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_7__.staggertransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stagger', 'greenshiftaddon')
    }, {
      value: 'text_transformations',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_7__.ttransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inner Text', 'greenshiftaddon')
    }, {
      value: 'svg_motion_path',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_7__.svgtransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SVG Path', 'greenshiftaddon')
    }, {
      value: 'svg_line_draw',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_7__.svgdraw,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SVG draw', 'greenshiftaddon')
    }, {
      value: 'svg_morph',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_7__.svgmorph,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Svg morph', 'greenshiftaddon')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioAdvanced, {
    label: '',
    fluid: 'yes',
    value: titleTag,
    onChange: value => {
      setAttributes({
        titleTag: value
      });
    },
    options: [{
      label: 'H2',
      value: 'h2',
      title: 'H2'
    }, {
      label: 'H3',
      value: 'h3',
      title: 'H3'
    }, {
      label: 'H4',
      value: 'h4',
      title: 'H4'
    }, {
      label: 'H5',
      value: 'h5',
      title: 'H5'
    }, {
      label: 'H6',
      value: 'h6',
      title: 'H6'
    }, {
      label: 'div',
      value: 'div',
      title: 'div'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioAdvanced, {
    value: align,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Align', 'greenshiftaddon'),
    fluid: '',
    onChange: value => {
      setAttributes({
        align: value
      });
    },
    options: [{
      icon: 'dashicon dashicons dashicons-editor-alignleft',
      value: 'flex-start',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'greenshiftaddon')
    }, {
      icon: 'dashicon dashicons dashicons-editor-aligncenter',
      value: 'center',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'greenshiftaddon')
    }, {
      icon: 'dashicon dashicons dashicons-editor-alignright',
      value: 'flex-end',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'greenshiftaddon')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col",
    style: {
      marginTop: 15
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Greenshift color", 'greenshiftaddon'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6",
    style: {
      textAlign: 'right',
      justifyContent: 'flex-end'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlpgeColorPicker, {
    color: customcolor,
    onChange: value => setAttributes({
      customcolor: value.rgb ? `rgba(${value.rgb.r}, ${value.rgb.g}, ${value.rgb.b}, ${value.rgb.a})` : value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      marginTop: 10
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_inspector_property-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'greenshiftaddon'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Devices, {
    className: "gspb_inspector_device-icons--small gspb_inspector_device-icons--nomargin",
    onChange: () => setdevState(!devstate)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6",
    style: {
      justifyContent: 'space-between'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CssUnits, {
    units: ['px', '%', 'vw', 'em', 'rem'],
    attribute: sizeUnit[deviceStateIndex] == null ? '' : sizeUnit[deviceStateIndex],
    onChange: value => {
      let currentValue = sizeUnit.slice();
      currentValue[deviceStateIndex] = value;
      setAttributes({
        sizeUnit: currentValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col row-wide-range",
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--11"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: gspb_inherit_values(size, deviceStateIndex),
    onChange: value => {
      let currentValue = size.slice();
      currentValue[deviceStateIndex] = value;
      setAttributes({
        size: currentValue
      });
    },
    trackColor: "#2184f9",
    min: sizeUnit[deviceStateIndex] == 'px' ? 1 : 0.01,
    max: sizeUnit[deviceStateIndex] == 'px' ? 5000 : 1000,
    step: sizeUnit[deviceStateIndex] == 'px' ? 1 : 0.01
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_inspector_clear_btn--right",
    onClick: () => {
      let currentValue = size.slice();
      currentValue[deviceStateIndex] = null;
      setAttributes({
        size: currentValue
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "rhicon rhi-undo"
  }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].typography["default"], props.attributes.typography) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Typography, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "typography",
    includegradient: true,
    includeHoverlinks: true
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Block Spacing", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].spacing["default"], props.attributes.spacing) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spacing, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "spacing",
    overflow: false
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background and Opacity", 'greenshiftaddon'),
    initialOpen: false,
    className: `gspb_smallpadding_btn ${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].background["default"], props.attributes.background) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Background, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "background",
    exclude: ['video']
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].border["default"], props.attributes.border) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Border, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "border"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Shadow", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].shadow["default"], props.attributes.shadow) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Shadow, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "shadow"
  }, props, {
    predefined: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Width and Height", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].blockWidth["default"], props.attributes.blockWidth) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockWidth, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "blockWidth",
    include: ['height']
  }, props)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTab, {
    key: 'advance'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Animation", 'greenshiftaddon'),
    initialOpen: true,
    className: `${!animationchange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Animation, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "animation"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Css Transform", 'greenshiftaddon'),
    initialOpen: false,
    className: `${!csstransformchange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CssTransform, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "csstransform"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Position", 'greenshiftaddon'),
    initialOpen: false,
    className: `${!positionchange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Position, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "position"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Responsive and Custom css", 'greenshiftaddon'),
    initialOpen: false,
    className: `${!responsivechange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Responsive, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "responsive"
  }, props))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockToolBar, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: align,
    onChange: align => setAttributes({
      align
    }),
    alignmentControls: ALIGNMENT_CONTROLS
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(AnimationWrapper, {
    attributes: attributes,
    props: props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: blockId,
    className: blockClassName
  }, AnimationProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_example_value"
  }, customcolor), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: editor_css
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./src/blocks/exampledynamic/icon.js":
/*!*******************************************!*\
  !*** ./src/blocks/exampledynamic/icon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 101.15 122.88"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#2184f9",
  d: "M18.03,27.19c8.26,2.76,19.76,4.46,32.53,4.46c12.77,0,24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22 c0-2.87-4.48-5.8-11.74-8.22C74.83,8,63.33,6.29,50.56,6.29c-12.77,0-24.27,1.71-32.53,4.46C2.65,15.89,2.22,21.91,18.03,27.19 L18.03,27.19z M94.84,85.59c-2.58,1.77-5.87,3.32-9.76,4.62c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-3.84-1.28-7.11-2.82-9.68-4.55v18.85c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46s24.27-1.71,32.53-4.46 c5.01-1.67,8.69-3.59,10.5-5.55c1.49-1.62,1.25-2.69,1.25-4.64V85.59L94.84,85.59z M0,18.97C0,13.1,6.13,8.12,16.04,4.81 C24.94,1.84,37.15,0,50.56,0c13.41,0,25.62,1.84,34.52,4.81c9.02,3.01,14.91,7.41,15.89,12.61c0.12,0.33,0.18,0.69,0.18,1.06v86.74 c0,6.01-11.49,11.33-16.07,12.86c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-4.69-1.57-15.97-6.71-15.97-12.86c0-0.72,0-1.32,0-2.01C0.07,75.12,0,47.04,0,18.97L0,18.97z M6.36,76.64 c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46s24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22h0.03 V57.73c-2.58,1.77-5.89,3.32-9.78,4.62c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-3.84-1.28-7.11-2.82-9.68-4.55V76.64L6.36,76.64z M6.36,48.78c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46 s24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22h0.03V28.52c-2.58,1.77-5.89,3.32-9.78,4.62 c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81c-3.84-1.28-7.11-2.82-9.68-4.55V48.78L6.36,48.78z"
}))));

/***/ }),

/***/ "./src/blocks/exampledynamic/icons.js":
/*!********************************************!*\
  !*** ./src/blocks/exampledynamic/icons.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "batchicon": () => (/* binding */ batchicon),
/* harmony export */   "planeicon": () => (/* binding */ planeicon),
/* harmony export */   "rtransform": () => (/* binding */ rtransform),
/* harmony export */   "staggertransform": () => (/* binding */ staggertransform),
/* harmony export */   "svgdraw": () => (/* binding */ svgdraw),
/* harmony export */   "svgmorph": () => (/* binding */ svgmorph),
/* harmony export */   "svgtransform": () => (/* binding */ svgtransform),
/* harmony export */   "ttransform": () => (/* binding */ ttransform)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const planeicon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-icon": "meteor",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#2184f9",
  d: "M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027ZM319.951,320.00207A127.98041,127.98041,0,1,0,191.97061,448.00046,127.97573,127.97573,0,0,0,319.951,320.00207Zm-127.98041-31.9996a31.9951,31.9951,0,1,1-31.9951-31.9996A31.959,31.959,0,0,1,191.97061,288.00247Zm31.9951,79.999a15.99755,15.99755,0,1,1-15.99755-15.9998A16.04975,16.04975,0,0,1,223.96571,368.00147Z"
}));
const rtransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  height: "20px",
  "data-icon": "compress",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"
}));
const ttransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "text-height",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z"
}));
const staggertransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  height: "20px",
  "data-icon": "stream",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
}));
const svgdraw = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "paint-roller",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"
}));
const svgtransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "bezier-curve",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"
}));
const svgmorph = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "draw-polygon",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
}));
const batchicon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 511.98",
  height: "20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.34 0h119.33c3.5 0 6.34 2.85 6.34 6.34v119.33c0 3.5-2.84 6.34-6.34 6.34H6.34c-3.49 0-6.34-2.84-6.34-6.34V6.34C0 2.85 2.85 0 6.34 0zm379.99 379.98h119.33c3.49 0 6.34 2.83 6.34 6.34v119.33c0 3.48-2.85 6.33-6.34 6.33H386.33c-3.5 0-6.34-2.85-6.34-6.33V386.32c0-3.51 2.84-6.34 6.34-6.34zm0-190h119.33c3.49 0 6.34 2.85 6.34 6.34v119.34c0 3.49-2.85 6.33-6.34 6.33H386.33c-3.5 0-6.34-2.84-6.34-6.33V196.32c0-3.49 2.84-6.34 6.34-6.34zm0-189.98h119.33c3.49 0 6.34 2.85 6.34 6.34v119.33c0 3.5-2.85 6.34-6.34 6.34H386.33c-3.5 0-6.34-2.84-6.34-6.34V6.34c0-3.49 2.84-6.34 6.34-6.34zM196.34 379.98h119.34c3.49 0 6.34 2.83 6.34 6.34v119.33c0 3.48-2.85 6.33-6.34 6.33H196.34c-3.49 0-6.34-2.85-6.34-6.33V386.32c0-3.51 2.85-6.34 6.34-6.34zm0-190h119.34c3.49 0 6.34 2.85 6.34 6.34v119.34c0 3.49-2.85 6.33-6.34 6.33H196.34c-3.49 0-6.34-2.84-6.34-6.33V196.32c0-3.49 2.85-6.34 6.34-6.34zm0-189.98h119.34c3.49 0 6.34 2.85 6.34 6.34v119.33c0 3.5-2.85 6.34-6.34 6.34H196.34c-3.49 0-6.34-2.84-6.34-6.34V6.34c0-3.49 2.85-6.34 6.34-6.34zm-190 379.98h119.33c3.5 0 6.34 2.83 6.34 6.34v119.33c0 3.48-2.84 6.33-6.34 6.33H6.34c-3.49 0-6.34-2.85-6.34-6.33V386.32c0-3.51 2.85-6.34 6.34-6.34zm0-190h119.33c3.5 0 6.34 2.85 6.34 6.34v119.34c0 3.49-2.84 6.33-6.34 6.33H6.34c-3.49 0-6.34-2.84-6.34-6.33V196.32c0-3.49 2.85-6.34 6.34-6.34z"
}));

/***/ }),

/***/ "./src/blocks/exampledynamic/index.js":
/*!********************************************!*\
  !*** ./src/blocks/exampledynamic/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/exampledynamic/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/exampledynamic/icon.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/exampledynamic/styles.editor.scss");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/exampledynamic/attributes.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('greenshift-blocks/exampledynamic', {
  category: 'greenShiftAddon',
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: {},
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Example Block', 'greenshiftaddon'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Example block', 'greenshiftaddon'),
  keywords: [],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => null
});

/***/ }),

/***/ "./src/blocks/examplestatic/attributes.js":
/*!************************************************!*\
  !*** ./src/blocks/examplestatic/attributes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Import gspb dependencies
const {
  collectionsObjects
} = gspblib.helpers;
/**
 * Set the block attributes
 * @type {Object}
 */

const defaultIcon = JSON.parse(JSON.stringify(collectionsObjects.iconPicker));
defaultIcon.icon.font = 'rhicon rhi-shopping-bag';
defaultIcon.fill = 'currentColor';
defaultIcon.fillhover = 'currentColor';
defaultIcon.iconSize = [16];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  id: {
    type: 'string',
    default: null
  },
  inlineCssStyles: {
    type: 'string'
  },
  csstransform: {
    type: 'object',
    default: collectionsObjects.csstransform
  },
  position: {
    type: 'object',
    default: collectionsObjects.position
  },
  animation: {
    type: 'object',
    default: collectionsObjects.animation
  },
  spacing: {
    type: 'object',
    default: collectionsObjects.spacing
  },
  responsive: {
    type: 'object',
    default: collectionsObjects.responsive
  },
  shadow: {
    type: 'object',
    default: collectionsObjects.shadow
  },
  border: {
    type: 'object',
    default: collectionsObjects.border
  },
  background: {
    type: 'object',
    default: collectionsObjects.background
  },
  typography: {
    type: 'object',
    default: collectionsObjects.typography
  },
  blockWidth: {
    type: 'object',
    default: collectionsObjects.blockWidth
  },
  align: {
    type: 'string',
    default: ''
  },
  titleTag: {
    type: 'string',
    default: ''
  },
  customcolor: {
    type: 'string',
    default: '#ff0000'
  },
  size: {
    type: 'array',
    default: [200]
  },
  sizeUnit: {
    type: 'array',
    default: ['px', 'px', 'px', 'px']
  },
  iconBox_icon: {
    type: 'object',
    default: defaultIcon
  },
  enableicon: {
    type: 'boolean'
  },
  selecttype: {
    type: 'string'
  }
});

/***/ }),

/***/ "./src/blocks/examplestatic/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/examplestatic/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons.js */ "./src/blocks/examplestatic/icons.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./src/blocks/examplestatic/attributes.js");








 // Import greenshift dependencies

const {
  gspb_setBlockId
} = gspblib.utilities;
const {
  BlockToolBar
} = gspblib.components;
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
  Typography
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
  gspb_Css_Final
} = gspblib.utilities;
const {
  CssUnits,
  Devices,
  InspectorTabs,
  InspectorTab,
  BlpgeColorPicker,
  RadioAdvanced,
  StylesforBlock,
  GsbpFormLabel
} = gspblib.components;
const {
  gspb_cssGen
} = gspblib.helpers;
const {
  AnimationWrapper,
  AnimationRenderProps
} = gspblib.collections;
const {
  gspb_getDeviceStateIndex
} = gspblib.utilities;
const {
  IconViewer
} = gspblib.components;
const {
  gspb_inherit_values
} = gspblib.helpers;

function edit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    id,
    csstransform,
    position,
    animation,
    spacing,
    responsive,
    shadow,
    border,
    background,
    typography,
    blockWidth,
    customcolor,
    align,
    titleTag,
    iconBox_icon,
    enableicon,
    selecttype,
    size,
    sizeUnit
  } = attributes;
  let animationchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].animation["default"], props.attributes.animation) ? false : true;
  let csstransformchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].csstransform["default"], props.attributes.csstransform) ? false : true;
  let positionchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].position["default"], props.attributes.position) ? false : true;
  let responsivechange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].responsive["default"], props.attributes.responsive) ? false : true;
  const ALIGNMENT_CONTROLS = [{
    icon: 'editor-alignleft',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Left', 'greenshiftaddon'),
    align: 'flex-start'
  }, {
    icon: 'editor-aligncenter',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Center', 'greenshiftaddon'),
    align: 'center'
  }, {
    icon: 'editor-alignright',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Right', 'greenshiftaddon'),
    align: 'flex-end'
  }];
  gspb_setBlockId(props);
  let blockId = `gspb_id-${id}`;
  let css_selector_by_user = `.${blockId}`;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `gspb-examplebox ${blockId}`
  }); //Render Animation Properties

  let AnimationProps = {};
  AnimationProps = AnimationRenderProps(animation); // Get Device state

  const deviceStateIndex = gspb_getDeviceStateIndex();
  const [devstate, setdevState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Final CSS for the block

  let final_css = ''; //Align

  final_css = gspb_cssGen(`${css_selector_by_user}`, ['display', 'justify-content'], [["flex"], [align]], final_css); // Css transform

  final_css = gspb_csstransform_cssGen(csstransform, css_selector_by_user, final_css, animation); // Position

  final_css = gspb_position_cssGen(position, 'body.gspb-bodyfront ' + css_selector_by_user, final_css); // Animation

  final_css = aos_animation_cssGen(animation, css_selector_by_user, final_css); // Spacing

  final_css = gspb_spacing_cssGen(spacing, css_selector_by_user, final_css); // Responsive classes

  final_css = gspb_responsive_cssGen(responsive, css_selector_by_user, final_css); // blockWidth

  final_css = gspb_width_cssGen(blockWidth, `${css_selector_by_user}`, final_css); // Shadow

  final_css = gspb_shadow_cssGen(shadow, css_selector_by_user, final_css); // Border

  final_css = gspb_border_cssGen(border, css_selector_by_user, final_css); // Background

  final_css = gspb_background_cssGen(background, css_selector_by_user, final_css); // Typography

  final_css = gspb_typography_cssGen(typography, `${css_selector_by_user} .gspb_example_value`, final_css); //Icon 

  let iconPiccker_object = JSON.parse(JSON.stringify(iconBox_icon));
  const iconType = iconPiccker_object.type;
  let iconSelector = 'svg';

  if (iconType === 'image') {
    iconSelector = 'img';
  }

  if (enableicon) {
    final_css = gspb_iconPicker_cssGen(iconPiccker_object, `${css_selector_by_user} .gspb_example_icon ${iconSelector}`, final_css);
  } // Width example with responsive options


  final_css = gspb_cssGen(`${css_selector_by_user} .gspb_example_value`, ['width', 'display'], [[[size[0], sizeUnit[0]], [size[1], sizeUnit[1]], [size[2], sizeUnit[2]], [size[3], sizeUnit[3]]], ["block"]], final_css); // Get The Stored CSS

  gspb_Css_Final(id, final_css, props);
  let editor_css = final_css; // Position

  editor_css = gspb_position_cssGen(position, '#block-' + clientId, editor_css);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_inspector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTabs, {
    tabs: ['general', 'advance'],
    activeAdvance: animationchange || csstransformchange || positionchange || responsivechange ? true : false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTab, {
    key: 'general'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: true,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Main Settings', 'greenshiftaddon')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(GsbpFormLabel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select type", 'greenshiftaddon'),
    clearFun: () => setAttributes({
      selecttype: ''
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      marginBottom: 15,
      clear: "both"
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(StylesforBlock, {
    columns: 3,
    value: selecttype,
    onChange: val => setAttributes({
      selecttype: val
    }),
    options: [{
      value: 'regular',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_6__.rtransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Transform', 'greenshiftaddon')
    }, {
      value: 'stagger_transformations',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_6__.staggertransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Stagger', 'greenshiftaddon')
    }, {
      value: 'text_transformations',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_6__.ttransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inner Text', 'greenshiftaddon')
    }, {
      value: 'svg_motion_path',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_6__.svgtransform,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SVG Path', 'greenshiftaddon')
    }, {
      value: 'svg_line_draw',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_6__.svgdraw,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('SVG draw', 'greenshiftaddon')
    }, {
      value: 'svg_morph',
      svg: _icons_js__WEBPACK_IMPORTED_MODULE_6__.svgmorph,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Svg morph', 'greenshiftaddon')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioAdvanced, {
    label: '',
    fluid: 'yes',
    value: titleTag,
    onChange: value => {
      setAttributes({
        titleTag: value
      });
    },
    options: [{
      label: 'H2',
      value: 'h2',
      title: 'H2'
    }, {
      label: 'H3',
      value: 'h3',
      title: 'H3'
    }, {
      label: 'H4',
      value: 'h4',
      title: 'H4'
    }, {
      label: 'H5',
      value: 'h5',
      title: 'H5'
    }, {
      label: 'H6',
      value: 'h6',
      title: 'H6'
    }, {
      label: 'div',
      value: 'div',
      title: 'div'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioAdvanced, {
    value: align,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Align', 'greenshiftaddon'),
    fluid: '',
    onChange: value => {
      setAttributes({
        align: value
      });
    },
    options: [{
      icon: 'dashicon dashicons dashicons-editor-alignleft',
      value: 'flex-start',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'greenshiftaddon')
    }, {
      icon: 'dashicon dashicons dashicons-editor-aligncenter',
      value: 'center',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'greenshiftaddon')
    }, {
      icon: 'dashicon dashicons dashicons-editor-alignright',
      value: 'flex-end',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'greenshiftaddon')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col",
    style: {
      marginTop: 15
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Greenshift color", 'greenshiftaddon'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6",
    style: {
      textAlign: 'right',
      justifyContent: 'flex-end'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlpgeColorPicker, {
    color: customcolor,
    onChange: value => setAttributes({
      customcolor: value.rgb ? `rgba(${value.rgb.r}, ${value.rgb.g}, ${value.rgb.b}, ${value.rgb.a})` : value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      marginTop: 10
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_inspector_property-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'greenshiftaddon'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Devices, {
    className: "gspb_inspector_device-icons--small gspb_inspector_device-icons--nomargin",
    onChange: () => setdevState(!devstate)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6",
    style: {
      justifyContent: 'space-between'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CssUnits, {
    units: ['px', '%', 'vw', 'em', 'rem'],
    attribute: sizeUnit[deviceStateIndex] == null ? '' : sizeUnit[deviceStateIndex],
    onChange: value => {
      let currentValue = sizeUnit.slice();
      currentValue[deviceStateIndex] = value;
      setAttributes({
        sizeUnit: currentValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col row-wide-range",
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--11"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: gspb_inherit_values(size, deviceStateIndex),
    onChange: value => {
      let currentValue = size.slice();
      currentValue[deviceStateIndex] = value;
      setAttributes({
        size: currentValue
      });
    },
    trackColor: "#2184f9",
    min: sizeUnit[deviceStateIndex] == 'px' ? 1 : 0.01,
    max: sizeUnit[deviceStateIndex] == 'px' ? 5000 : 1000,
    step: sizeUnit[deviceStateIndex] == 'px' ? 1 : 0.01
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_inspector_clear_btn--right",
    onClick: () => {
      let currentValue = size.slice();
      currentValue[deviceStateIndex] = null;
      setAttributes({
        size: currentValue
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "rhicon rhi-undo"
  }))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'greenshiftaddon'),
    className: `${!enableicon ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    checked: enableicon,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable icon?", "greenshiftwoo"),
    onChange: value => setAttributes({
      enableicon: value
    })
  }), enableicon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(IconPicker, {
    icon: iconPiccker_object,
    onChange: icon => {
      setAttributes({
        iconBox_icon: icon
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].typography["default"], props.attributes.typography) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Typography, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "typography",
    includegradient: true,
    includeHoverlinks: true
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Block Spacing", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].spacing["default"], props.attributes.spacing) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Spacing, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "spacing",
    padding: true,
    margin: true,
    overflow: true
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background and Opacity", 'greenshiftaddon'),
    initialOpen: false,
    className: `gspb_smallpadding_btn ${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].background["default"], props.attributes.background) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Background, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "background",
    exclude: ['video']
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].border["default"], props.attributes.border) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Border, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "border"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Shadow", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].shadow["default"], props.attributes.shadow) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Shadow, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "shadow"
  }, props, {
    predefined: true
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Width and Height", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_7__["default"].blockWidth["default"], props.attributes.blockWidth) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockWidth, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "blockWidth",
    include: ['height']
  }, props)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTab, {
    key: 'advance'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Animation", 'greenshiftaddon'),
    initialOpen: true,
    className: `${!animationchange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Animation, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "animation"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Css Transform", 'greenshiftaddon'),
    initialOpen: false,
    className: `${!csstransformchange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CssTransform, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "csstransform"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Position", 'greenshiftaddon'),
    initialOpen: false,
    className: `${!positionchange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Position, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "position"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Responsive and Custom css", 'greenshiftaddon'),
    initialOpen: false,
    className: `${!responsivechange ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Responsive, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "responsive"
  }, props))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockToolBar, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: align,
    onChange: align => setAttributes({
      align
    }),
    alignmentControls: ALIGNMENT_CONTROLS
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(AnimationWrapper, {
    attributes: attributes,
    props: props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, AnimationProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_example_value"
  }, customcolor), enableicon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_example_icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(IconViewer, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "iconBox_icon",
    size: 16,
    color: "#565D66"
  }, props))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: editor_css
    }
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./src/blocks/examplestatic/icon.js":
/*!******************************************!*\
  !*** ./src/blocks/examplestatic/icon.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 101.15 122.88"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#2184f9",
  d: "M18.03,27.19c8.26,2.76,19.76,4.46,32.53,4.46c12.77,0,24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22 c0-2.87-4.48-5.8-11.74-8.22C74.83,8,63.33,6.29,50.56,6.29c-12.77,0-24.27,1.71-32.53,4.46C2.65,15.89,2.22,21.91,18.03,27.19 L18.03,27.19z M94.84,85.59c-2.58,1.77-5.87,3.32-9.76,4.62c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-3.84-1.28-7.11-2.82-9.68-4.55v18.85c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46s24.27-1.71,32.53-4.46 c5.01-1.67,8.69-3.59,10.5-5.55c1.49-1.62,1.25-2.69,1.25-4.64V85.59L94.84,85.59z M0,18.97C0,13.1,6.13,8.12,16.04,4.81 C24.94,1.84,37.15,0,50.56,0c13.41,0,25.62,1.84,34.52,4.81c9.02,3.01,14.91,7.41,15.89,12.61c0.12,0.33,0.18,0.69,0.18,1.06v86.74 c0,6.01-11.49,11.33-16.07,12.86c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-4.69-1.57-15.97-6.71-15.97-12.86c0-0.72,0-1.32,0-2.01C0.07,75.12,0,47.04,0,18.97L0,18.97z M6.36,76.64 c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46s24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22h0.03 V57.73c-2.58,1.77-5.89,3.32-9.78,4.62c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81 c-3.84-1.28-7.11-2.82-9.68-4.55V76.64L6.36,76.64z M6.36,48.78c0.57,2.67,4.92,5.37,11.67,7.62c8.26,2.76,19.76,4.46,32.53,4.46 s24.27-1.71,32.53-4.46c7.25-2.42,11.74-5.35,11.74-8.22h0.03V28.52c-2.58,1.77-5.89,3.32-9.78,4.62 c-8.9,2.97-21.11,4.81-34.52,4.81c-13.41,0-25.62-1.84-34.52-4.81c-3.84-1.28-7.11-2.82-9.68-4.55V48.78L6.36,48.78z"
}))));

/***/ }),

/***/ "./src/blocks/examplestatic/icons.js":
/*!*******************************************!*\
  !*** ./src/blocks/examplestatic/icons.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "batchicon": () => (/* binding */ batchicon),
/* harmony export */   "planeicon": () => (/* binding */ planeicon),
/* harmony export */   "rtransform": () => (/* binding */ rtransform),
/* harmony export */   "staggertransform": () => (/* binding */ staggertransform),
/* harmony export */   "svgdraw": () => (/* binding */ svgdraw),
/* harmony export */   "svgmorph": () => (/* binding */ svgmorph),
/* harmony export */   "svgtransform": () => (/* binding */ svgtransform),
/* harmony export */   "ttransform": () => (/* binding */ ttransform)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const planeicon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-icon": "meteor",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#2184f9",
  d: "M511.328,20.8027c-11.60759,38.70264-34.30724,111.70173-61.30311,187.70077,6.99893,2.09372,13.4042,4,18.60653,5.59368a16.06158,16.06158,0,0,1,9.49854,22.906c-22.106,42.29635-82.69047,152.795-142.47819,214.40356-.99984,1.09373-1.99969,2.5-2.99954,3.49995A194.83046,194.83046,0,1,1,57.085,179.41009c.99985-1,2.40588-2,3.49947-3,61.59994-59.90549,171.97367-120.40473,214.37343-142.4982a16.058,16.058,0,0,1,22.90274,9.49988c1.59351,5.09368,3.49947,11.5936,5.5929,18.59351C379.34818,35.00565,452.43074,12.30281,491.12794.70921A16.18325,16.18325,0,0,1,511.328,20.8027ZM319.951,320.00207A127.98041,127.98041,0,1,0,191.97061,448.00046,127.97573,127.97573,0,0,0,319.951,320.00207Zm-127.98041-31.9996a31.9951,31.9951,0,1,1-31.9951-31.9996A31.959,31.959,0,0,1,191.97061,288.00247Zm31.9951,79.999a15.99755,15.99755,0,1,1-15.99755-15.9998A16.04975,16.04975,0,0,1,223.96571,368.00147Z"
}));
const rtransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  height: "20px",
  "data-icon": "compress",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"
}));
const ttransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "text-height",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z"
}));
const staggertransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  height: "20px",
  "data-icon": "stream",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
}));
const svgdraw = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "paint-roller",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"
}));
const svgtransform = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "bezier-curve",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"
}));
const svgmorph = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  height: "20px",
  focusable: "false",
  "data-icon": "draw-polygon",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M384 352c-.35 0-.67.1-1.02.1l-39.2-65.32c5.07-9.17 8.22-19.56 8.22-30.78s-3.14-21.61-8.22-30.78l39.2-65.32c.35.01.67.1 1.02.1 35.35 0 64-28.65 64-64s-28.65-64-64-64c-23.63 0-44.04 12.95-55.12 32H119.12C108.04 44.95 87.63 32 64 32 28.65 32 0 60.65 0 96c0 23.63 12.95 44.04 32 55.12v209.75C12.95 371.96 0 392.37 0 416c0 35.35 28.65 64 64 64 23.63 0 44.04-12.95 55.12-32h209.75c11.09 19.05 31.49 32 55.12 32 35.35 0 64-28.65 64-64 .01-35.35-28.64-64-63.99-64zm-288 8.88V151.12A63.825 63.825 0 0 0 119.12 128h208.36l-38.46 64.1c-.35-.01-.67-.1-1.02-.1-35.35 0-64 28.65-64 64s28.65 64 64 64c.35 0 .67-.1 1.02-.1l38.46 64.1H119.12A63.748 63.748 0 0 0 96 360.88zM272 256c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zM400 96c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM64 80c8.82 0 16 7.18 16 16s-7.18 16-16 16-16-7.18-16-16 7.18-16 16-16zM48 416c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16-16-7.18-16-16zm336 16c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"
}));
const batchicon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 511.98",
  height: "20"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6.34 0h119.33c3.5 0 6.34 2.85 6.34 6.34v119.33c0 3.5-2.84 6.34-6.34 6.34H6.34c-3.49 0-6.34-2.84-6.34-6.34V6.34C0 2.85 2.85 0 6.34 0zm379.99 379.98h119.33c3.49 0 6.34 2.83 6.34 6.34v119.33c0 3.48-2.85 6.33-6.34 6.33H386.33c-3.5 0-6.34-2.85-6.34-6.33V386.32c0-3.51 2.84-6.34 6.34-6.34zm0-190h119.33c3.49 0 6.34 2.85 6.34 6.34v119.34c0 3.49-2.85 6.33-6.34 6.33H386.33c-3.5 0-6.34-2.84-6.34-6.33V196.32c0-3.49 2.84-6.34 6.34-6.34zm0-189.98h119.33c3.49 0 6.34 2.85 6.34 6.34v119.33c0 3.5-2.85 6.34-6.34 6.34H386.33c-3.5 0-6.34-2.84-6.34-6.34V6.34c0-3.49 2.84-6.34 6.34-6.34zM196.34 379.98h119.34c3.49 0 6.34 2.83 6.34 6.34v119.33c0 3.48-2.85 6.33-6.34 6.33H196.34c-3.49 0-6.34-2.85-6.34-6.33V386.32c0-3.51 2.85-6.34 6.34-6.34zm0-190h119.34c3.49 0 6.34 2.85 6.34 6.34v119.34c0 3.49-2.85 6.33-6.34 6.33H196.34c-3.49 0-6.34-2.84-6.34-6.33V196.32c0-3.49 2.85-6.34 6.34-6.34zm0-189.98h119.34c3.49 0 6.34 2.85 6.34 6.34v119.33c0 3.5-2.85 6.34-6.34 6.34H196.34c-3.49 0-6.34-2.84-6.34-6.34V6.34c0-3.49 2.85-6.34 6.34-6.34zm-190 379.98h119.33c3.5 0 6.34 2.83 6.34 6.34v119.33c0 3.48-2.84 6.33-6.34 6.33H6.34c-3.49 0-6.34-2.85-6.34-6.33V386.32c0-3.51 2.85-6.34 6.34-6.34zm0-190h119.33c3.5 0 6.34 2.85 6.34 6.34v119.34c0 3.49-2.84 6.33-6.34 6.33H6.34c-3.49 0-6.34-2.84-6.34-6.33V196.32c0-3.49 2.85-6.34 6.34-6.34z"
}));

/***/ }),

/***/ "./src/blocks/examplestatic/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/examplestatic/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/examplestatic/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/examplestatic/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/blocks/examplestatic/icon.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/examplestatic/styles.editor.scss");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/examplestatic/attributes.js");







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('greenshift-blocks/examplestatic', {
  category: 'greenShiftAddon',
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: {},
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Example Static Block', 'greenshiftaddon'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Example block', 'greenshiftaddon'),
  keywords: [],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/examplestatic/save.js":
/*!******************************************!*\
  !*** ./src/blocks/examplestatic/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




const {
  AnimationRenderProps
} = gspblib.collections;
const {
  IconViewer
} = gspblib.components;

function save(props) {
  const {
    customcolor,
    id,
    animation,
    enableicon
  } = props.attributes;
  let blockId = `gspb_id-${id}`;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: `gspb-examplebox ${blockId}`
  }); //Render Animation Properties

  let AnimationProps = {};
  AnimationProps = AnimationRenderProps(animation);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, AnimationProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_example_value"
  }, customcolor), enableicon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_example_icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(IconViewer, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "iconBox_icon",
    size: 16,
    color: "#565D66"
  }, props)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/blocks/exampledynamic/styles.editor.scss":
/*!******************************************************!*\
  !*** ./src/blocks/exampledynamic/styles.editor.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/examplestatic/styles.editor.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/examplestatic/styles.editor.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_exampledynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/exampledynamic */ "./src/blocks/exampledynamic/index.js");
/* harmony import */ var _blocks_examplestatic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/examplestatic */ "./src/blocks/examplestatic/index.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */


})();

/******/ })()
;
//# sourceMappingURL=index.js.map