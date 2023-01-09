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
    enablemask: {
		type: 'boolean'
	},
    dynamicGClass: {
        type: "string",
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
    align: {
        type: 'string',
        default: '',
    },
    sourceType: {
        type: 'string',
        default: 'latest_item'
    },
    loading: {
        type: 'boolean',
    },
    postId: {
        type: 'number',
        default: 0
    },
    headingTag: {
        type: 'string',
        default: 'h2'
    },
    post_type: {
        type: 'string',
        default: 'post',
    },
    link_enable: {
        type: 'boolean',
        default: true
    },
    blockWidth: {
		type: 'object',
		default: collectionsObjects.blockWidth
	},
    clampEnable: {
		type: 'boolean',
	}, 
    clamp: {
        type: 'array',
        default: [null, null, null, null],
    },  
};
