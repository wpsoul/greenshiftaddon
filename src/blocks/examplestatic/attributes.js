// Import gspb dependencies
const { collectionsObjects } = gspblib.helpers;

/**
 * Set the block attributes
 * @type {Object}
 */
const defaultIcon = JSON.parse(JSON.stringify(collectionsObjects.iconPicker));
defaultIcon.icon.font = 'rhicon rhi-shopping-bag';
defaultIcon.fill = 'currentColor';
defaultIcon.fillhover = 'currentColor';
defaultIcon.iconSize = [16];

export default {
    id: {
        type: 'string',
        default: null,
    },
    inlineCssStyles: {
        type: 'string',
    },
    dynamicGClasses: {
		type: "array",
	},        
    interactionLayers: {
		type: "array",
	},
    stylebook_class: {
		type: "string",
	},
	stylebook_attrs: {
		type: "object",
	},
    csstransform: {
        type: 'object',
        default: collectionsObjects.csstransform,
    },
    position: {
        type: 'object',
        default: collectionsObjects.position,
    },
    animation: {
        type: 'object',
        default: collectionsObjects.animation,
    },
    spacing: {
        type: 'object',
        default: collectionsObjects.spacing,
    },
    responsive: {
        type: 'object',
        default: collectionsObjects.responsive
    },
    shadow: {
        type: 'object',
        default: collectionsObjects.shadow,
    },
    border: {
        type: 'object',
        default: collectionsObjects.border,
    },
    background: {
        type: 'object',
        default: collectionsObjects.background,
    },
    typography: {
        type: 'object',
        default: collectionsObjects.typography,
    },
    blockWidth: {
		type: 'object',
		default: collectionsObjects.blockWidth
	},
    align: {
        type: 'string',
        default: '',
    },
    titleTag: {
        type: 'string',
        default: '',
    },
    customcolor: {
        type: 'string',
        default: '#ff0000',
    },
    sizeCustom: {
        type: 'array',
        default: ['200px'],
    },
    iconBox_icon: {
        type: 'object',
        default: defaultIcon,
    },
    enableicon: {
        type: 'boolean',
    },
    selecttype: {
        type: 'string',
    },
    tabDefault: {
        type: 'object',
        default: {
            typography: collectionsObjects.typography,
            background: collectionsObjects.background,
            border: collectionsObjects.border,
            csstransform: collectionsObjects.csstransform,
            shadow: collectionsObjects.shadow,
            spacing: collectionsObjects.spacing,
        }
    },
};
