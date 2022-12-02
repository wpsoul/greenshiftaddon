import { __ } from '@wordpress/i18n';
import edit from './edit';
import {registerBlockType} from '@wordpress/blocks';
import blockIcon from './icon';
import './styles.editor.scss';
import attributes from './attributes';

registerBlockType( 'greenshift-blocks/exampledynamic', {
    category: 'greenShiftAddon',
    icon: blockIcon,
    example: {},
    title: __('Example Block', 'greenshiftaddon'),
    description: __('Example block', 'greenshiftaddon'),
    keywords: [],
    attributes,
    edit,
    save: () => null
});