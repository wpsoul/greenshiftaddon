<?php

namespace greenshiftaddon\Blocks;
defined('ABSPATH') OR exit;


class DynamicPostTitle{

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
    'sourceType'       => array(
        'type'    => 'string',
        'default' => 'latest_item',
    ),
    'label'       => array(
        'type'    => 'string',
        'default' => '',
    ),
    'postfix'       => array(
        'type'    => 'string',
        'default' => '',
    ),
    'postId'       => array(
        'type'    => 'number',
        'default' => 0,
    ),
    'headingTag' => array(
      'type' => 'string',
      'default' => 'h2'
    ),
    'post_type' => array(
      'type' => 'string',
      'default' => 'h2'
    ),
    'link_enable'       => array(
      'type'    => 'boolean',
      'default' => true,
  ),
	);

	public function render_block($settings = array(), $inner_content=''){
		extract($settings);

    if($sourceType == 'latest_item'){
      global $post;
      $postId = $post->ID;

    }else{
      $postId = (isset($postId) && $postId > 0) ? (int)$postId : 0;
    }

    $_post = gspb_get_post_object_by_id($postId, $post_type);

    if(!$_post) $title = __('Post not found.', 'greenshiftquery');
    else $title = !empty($_post->post_title) ? $_post->post_title : __('Post don\'t has a title.', 'greenshiftquery');

		$blockId = 'gspb_id-'.$id;
		$blockClassName = 'gspb-dynamic-post-title '.$blockId.' '.(!empty($className) ? $className : '').' ';

		$out = '<div class="'.$blockClassName.'"'.gspb_AnimationRenderProps($animation).'>';
    $out .= '<' . $headingTag . '>';
    if($link_enable) $out .= '<a href="'.get_permalink($postId).'">';
    $out .= $title;
    if($link_enable) $out .= '</a>';
    $out .= '</' . $headingTag . '>';
		$out .='</div>';
		return $out;
	}
}

new DynamicPostTitle;