import { __ } from '@wordpress/i18n';
import edit from './edit';
import save from './save';
import {registerBlockType} from '@wordpress/blocks';
import blockIcon from './icon';
import './styles.editor.scss';
import attributes from './attributes';

registerBlockType( 'greenshift-blocks/examplestatic', {
    category: 'greenShiftAddon',
    icon: blockIcon,
    example: {},
    title: __('Example Static Block', 'greenshiftaddon'),
    description: __('Example block', 'greenshiftaddon'),
    keywords: [],
    attributes,
    edit,
    save
});