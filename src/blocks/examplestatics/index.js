import { __ } from '@wordpress/i18n';
import edit from './edit';
import save from './save';
import {registerBlockType} from '@wordpress/blocks';
import attributes from './attributes'
import blockIcon from './icon';

registerBlockType( 'greenshift-blocks/examplestatic', {
	apiVersion: 2,
	title: __("Static example",'greenshiftaddon'),
    description: __("For making static",'greenshiftaddon'),
	category: 'greenShiftAddon',
	keywords: ['greenshiftaddon'],
	icon: blockIcon,
	supports: {
		"anchor": true
	},
	example: {},
	attributes: attributes,
    edit,
    save
});