<?php


namespace greenshiftaddon\Blocks;
defined('ABSPATH') OR exit;


class Renderbox{

	public function __construct(){
		add_action('init', array( $this, 'init_handler' ));
	}

	public function init_handler(){
		register_block_type(__DIR__, array(
			'render_callback' => array( $this, 'render_block' ),
			'attributes'      => $this->attributes
		)
		);
	}

	public $attributes = array(
		'id' => array(
			'type'    => 'string',
			'default' => null,
		),
		'inlineCssStyles' => array(
			'type'    => 'string',
			'default' => '',
		),
		'animation' => array(
			'type' => 'object',
			'default' => array(),
		),
		'customcolor'       => array(
			'type'    => 'string',
			'default' => '#ff0000',
		),
		'align'       => array(
			'type'    => 'string',
			'default' => '',
		),

	);

	public function render_block($settings = array(), $inner_content=''){
		extract($settings);

		$blockId = 'gspb_id-'.$id;
		$blockClassName = 'gspb-examplebox '.$blockId.' '.(!empty($className) ? $className : '').' ';

		$out = '<div id="'.$blockId.'" class="'.$blockClassName.'"'.gspb_AnimationRenderProps($animation).'>';
			$out .= '<span class="gspb_example_value">'.$customcolor.'</span>';
		$out .='</div>';
		return $out;
	}
}

new Renderbox;