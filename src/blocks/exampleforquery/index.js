import { __ } from '@wordpress/i18n';
import edit from './edit';
import {registerBlockType} from '@wordpress/blocks';
import blockIcon from './icon';
import attributes from './attributes';
import './styles.editor.scss';

registerBlockType( 'greenshift-blocks/exampleforquery', {
    category: 'greenShiftAddon',
    icon: blockIcon,
    example: {},
    title: __('Dynamic post title example', 'greenshiftquery'),
    description: __('Use in Query builder block. Requires Query Addon', 'greenshiftquery'),
    keywords: [],
    usesContext: [ "postId", "postType", "greenshiftquery_post_type", "postName" ],
    attributes: attributes,
    edit,
    save: () => null
});