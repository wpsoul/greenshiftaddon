// Import gspb dependencies
const { collectionsObjects } = gspblib.helpers;

/**
 * Set the block attributes
 * @type {Object}
 */

export default {
    id:{
        type: 'string',
        default: null
    },
    inlineCssStyles: {
        type: 'string',
    },
    dynamicGClass: {
        type: "string",
    },
    spacing: {
        type: 'object',
        default: collectionsObjects.spacing,
    },
    blockspacing: {
        type: 'object',
        default: collectionsObjects.spacing,
    },
    responsive: {
        type: 'object',
        default: collectionsObjects.responsive
    },
    position: {
        type: 'object',
        default: collectionsObjects.position,
    },
    csstransform: {
        type: 'object',
        default: collectionsObjects.csstransform,
    },
    animation: {
        type: 'object',
        default: collectionsObjects.animation,
    },
    align: {
        type: 'string',
        default: 'center'
    },
    shadow: {
        type: 'object',
        default: collectionsObjects.shadow,
    },	
    background: {
        type: 'object',
        default: collectionsObjects.background,
    },	    
};
