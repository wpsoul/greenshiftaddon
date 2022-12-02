// Import gspb dependencies
const { collectionsObjects } = gspblib.helpers;

/**
 * Set the block attributes
 * @type {Object}
 */

export default {
    id: {
        type: 'string',
        default: null,
    },
    inlineCssStyles: {
        type: 'string',
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
    size: {
        type: 'array',
        default: [200],
    },
    sizeUnit: {
        type: 'array',
        default: ['px', 'px', 'px', 'px' ],
    },  
    selecttype: {
        type: 'string',
    }  
};
