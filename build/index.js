/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/example/attributes.js":
/*!******************************************!*\
  !*** ./src/blocks/example/attributes.js ***!
  \******************************************/
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
    default: [200, null, null, null]
  },
  sizeUnit: {
    type: 'array',
    default: ['px', 'px', 'px', 'px']
  }
});

/***/ }),

/***/ "./src/blocks/example/edit.js":
/*!************************************!*\
  !*** ./src/blocks/example/edit.js ***!
  \************************************/
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
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/blocks/example/attributes.js");







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
const {
  CssUnits,
  Devices,
  InspectorTabs,
  InspectorTab,
  BlpgeColorPicker,
  RadioAdvanced
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
    customcolor,
    align,
    titleTag,
    size,
    sizeUnit
  } = attributes;
  let animationchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].animation["default"], props.attributes.animation) ? false : true;
  let csstransformchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].csstransform["default"], props.attributes.csstransform) ? false : true;
  let positionchange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].position["default"], props.attributes.position) ? false : true;
  let responsivechange = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].responsive["default"], props.attributes.responsive) ? false : true;
  const ALIGNMENT_CONTROLS = [{
    icon: 'editor-alignleft',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Left', 'greenshift'),
    align: 'flex-start'
  }, {
    icon: 'editor-aligncenter',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Center', 'greenshift'),
    align: 'center'
  }, {
    icon: 'editor-alignright',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Text Right', 'greenshift'),
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

  let final_css = ''; // Css transform

  final_css = gspb_csstransform_cssGen(csstransform, css_selector_by_user, final_css, animation); // Position

  final_css = gspb_position_cssGen(position, 'body.gspb-bodyfront ' + css_selector_by_user, final_css); // Animation

  final_css = aos_animation_cssGen(animation, css_selector_by_user, final_css); // Spacing

  final_css = gspb_spacing_cssGen(spacing, css_selector_by_user, final_css); // Responsive classes

  final_css = gspb_responsive_cssGen(responsive, css_selector_by_user, final_css); // Shadow

  final_css = gspb_shadow_cssGen(shadow, css_selector_by_user, final_css); // Border

  final_css = gspb_border_cssGen(border, css_selector_by_user, final_css); // Background

  final_css = gspb_background_cssGen(background, css_selector_by_user, final_css); // Typography

  final_css = gspb_typography_cssGen(typography, `${css_selector_by_user} .gspb_example_value`, final_css); // Width example with responsive options

  final_css = gspb_cssGen(`${css_selector_by_user} .gspb_example_value`, ['width'], [[[size[0], sizeUnit[0]], [size[1], sizeUnit[1]], [size[2], sizeUnit[2]], [size[3], sizeUnit[3]]]], final_css); // Get The Stored CSS

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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RadioAdvanced, {
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
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title Align', 'greenshift'),
    fluid: '',
    onChange: value => {
      setAttributes({
        align: value
      });
    },
    options: [{
      icon: 'dashicon dashicons dashicons-editor-alignleft',
      value: 'left',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Left', 'greenshift')
    }, {
      icon: 'dashicon dashicons dashicons-editor-aligncenter',
      value: 'center',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'greenshift')
    }, {
      icon: 'dashicon dashicons dashicons-editor-alignright',
      value: 'right',
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Right', 'greenshift')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row gspb_row--no-padding-col",
    style: {
      marginTop: 15
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Greenshift color picker", 'greenshiftaddon'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
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
    className: "gspb_row__col--7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "gspb_inspector_property-title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'greenshiftaddon'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Devices, {
    className: "gspb_inspector_device-icons--small",
    onChange: () => setdevState(!devstate)
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_row__col--5",
    style: {
      justifyContent: 'space-between'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "gspb_inspector_clear_btn--right",
    style: {
      marginLeft: 5
    },
    onClick: () => {
      let currentValue = size.slice();
      currentValue[deviceStateIndex] = null;
      setAttributes({
        size: currentValue
      });
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "rhicon rhi-undo"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(CssUnits, {
    units: ['px', '%', 'vw'],
    attribute: sizeUnit[deviceStateIndex] == null ? '' : sizeUnit[deviceStateIndex],
    onChange: value => {
      let currentValue = sizeUnit.slice();
      currentValue[deviceStateIndex] = value;
      setAttributes({
        sizeUnit: currentValue
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      width: '100%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    value: size[deviceStateIndex] == null ? '' : size[deviceStateIndex],
    onChange: value => {
      let currentValue = size.slice();
      currentValue[deviceStateIndex] = value;
      setAttributes({
        size: currentValue
      });
    },
    trackColor: "#2184f9",
    min: sizeUnit[deviceStateIndex] == 'px' ? 10 : 1,
    max: sizeUnit[deviceStateIndex] == 'px' ? 1800 : 100
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Typography", 'greenshiftaddon'),
    initialOpen: false,
    className: `${(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEqual)(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"].typography["default"], props.attributes.typography) ? '' : 'gspb_panel_changed'}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Typography, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    attributeName: "typography",
    includegradient: false,
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
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorTab, {
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

/***/ "./src/blocks/example/icon.js":
/*!************************************!*\
  !*** ./src/blocks/example/icon.js ***!
  \************************************/
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

/***/ "./src/blocks/example/index.js":
/*!*************************************!*\
  !*** ./src/blocks/example/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/example/edit.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/blocks/example/icon.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/example/styles.editor.scss");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/blocks/example/attributes.js");






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

/***/ "./src/blocks/example/styles.editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/example/styles.editor.scss ***!
  \***********************************************/
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
/* harmony import */ var _blocks_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/example */ "./src/blocks/example/index.js");
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