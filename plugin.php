<?php
/**
 * Plugin Name: Greenshift Boilerplate Addon
 * Description: Extend your blocks with Greenshift high quality library and perfomance
 * Author: Wpsoul
 * Author URI: https://wpsoul.com
 * Version: 0.1
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define Dir URL
define('GREENSHIFTADDON_DIR_URL', plugin_dir_url(__FILE__));
define( 'GREENSHIFTADDON_DIR_PATH', plugin_dir_path( __FILE__ ) );

/* Costants */
if ( ! defined( 'GREENSHIFTADDON_PLUGIN_VER' ) ){
    define( 'GREENSHIFTADDON_PLUGIN_VER', '0.1' );
}

if ( defined('GREENSHIFT_DIR_URL' )) {
    add_action('enqueue_block_editor_assets', 'greenShiftAddon_editor_assets');
} else {
    add_action( 'admin_notices', 'gspb_boilerplate_admin_notice_warning' );
}
//////////////////////////////////////////////////////////////////
// Show if parent is not loaded
//////////////////////////////////////////////////////////////////
function gspb_boilerplate_admin_notice_warning() {
	?>
	<div class="notice notice-warning">
		<p><?php printf( __( 'Please, activate %s plugin to use Boilerplate Addon' ), '<a href="https://wordpress.org/plugins/greenshift-animation-and-page-builder-blocks" target="_blank">Greenshift</a>' ) ; ?></p>
	</div>
	<?php
}

/**
 * GreenShift Blocks Category
 */
if(!function_exists('gspb_greenShiftAddon_category')){
	function gspb_greenShiftAddon_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'greenShiftAddon',
					'title' => __( 'GreenShift Addon'),
				),
			),
			$categories
		);
	}
}
add_filter( 'block_categories_all', 'gspb_greenShiftAddon_category', 1, 2 );

//////////////////////////////////////////////////////////////////
// Register server side
//////////////////////////////////////////////////////////////////
require_once GREENSHIFTADDON_DIR_PATH .'blockrender/example/block.php';

//////////////////////////////////////////////////////////////////
// Functions to render conditional scripts
//////////////////////////////////////////////////////////////////

// Hook: Frontend assets.
add_action('wp_enqueue_scripts', 'greenShiftAddon_register_init');

if(!function_exists('greenShiftAddon_register_init')){
	function greenShiftAddon_register_init()
	{

		 wp_register_script(
		 	'gspbaddonscript',
		 	GREENSHIFTADDON_DIR_URL . 'libs/example/index.js',
		 	array(),
		 	'1.0',
		 	true
		 );

        wp_register_style(
            'gspbaddonstyle',
            GREENSHIFTADDON_DIR_URL . 'libs/example/index.css',
            array(),
            '1.1',
        );
	}
}

//////////////////////////////////////////////////////////////////
// Enqueue Gutenberg block assets for backend editor.
//////////////////////////////////////////////////////////////////

if(!function_exists('greenShiftAddon_editor_assets')){
	function greenShiftAddon_editor_assets()
	{
		// phpcs:ignor
	
		$index_asset_file = include(GREENSHIFTADDON_DIR_PATH . 'build/index.asset.php');
	
	
		// Blocks Assets Scripts
		wp_enqueue_script(
			'greenShiftAddon-block-js', // Handle.
			GREENSHIFTADDON_DIR_URL . 'build/index.js',
			array('greenShift-editor-js', 'greenShift-library-script', 'wp-block-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data'),
            rand(1, 9999),
			true
		);
		
	
		// Styles.
		wp_enqueue_style(
			'greenShiftAddon-block-css', // Handle.
			GREENSHIFTADDON_DIR_URL . 'build/index.css', // Block editor CSS.
			array('greenShift-library-editor', 'wp-edit-blocks'),
			$index_asset_file['version']
		);

	}
}

//////////////////////////////////////////////////////////////////
// REST routes to save and get settings
//////////////////////////////////////////////////////////////////

add_action('rest_api_init', 'gspb_boilerplate_register_route');
function gspb_boilerplate_register_route()
{

}

//////////////////////////////////////////////////////////////////
// Frontend Scripts
//////////////////////////////////////////////////////////////////

add_filter('render_block', 'greenShiftAddon_block_script_assets', 10, 2);
if(!function_exists('greenShiftAddon_block_script_assets')){
	function greenShiftAddon_block_script_assets($html, $block)
	{
		// phpcs:ignore
	
		//Main styles for blocks are loaded via Redux in main plugin. Can be found in src/customJS/editor/store/index.js
	
		if(!is_admin()){

             if ($block['blockName'] == 'greenshift-blocks/exampledynamic') {
			 	wp_enqueue_script('gspbaddonscript');
                 wp_enqueue_style('gspbaddonstyle');
			 }

		}

		return $html;
	}
}
