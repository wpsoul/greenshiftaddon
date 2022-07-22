<?php if (!defined('ABSPATH')) exit; // Exit if accessed directly 
?>
<?php global $post; ?>
<?php $postid = $post->ID;
$isproduct = false ?>
<?php if (isset($json_innerargs)) {
    $innerargs = (array) json_decode(urldecode($json_innerargs), true);
    extract($innerargs);
} ?>
<?php $disclaimer = (isset($disclaimer) && $disclaimer) ? $disclaimer : ''; ?>
<?php $contentpos = (isset($contentpos) && $contentpos) ? $contentpos : 'titleexc'; ?>
<?php $headingtag = (isset($headingtag) && $headingtag) ? $headingtag : 'h2'; ?>
<?php $togglelink = (isset($togglelink) && $togglelink) ? $togglelink : ''; ?>
<?php $togglecontent = (isset($togglecontent) && $togglecontent) ? $togglecontent : ''; ?>
<?php $togglefield = (isset($togglefield) && $togglefield) ? $togglefield : ''; ?>
<?php $togglelabel = (isset($togglelabel) && $togglelabel) ? $togglelabel : esc_html__('More details +', 'greenshiftquery'); ?>
<?php if (get_post_type($postid) == 'product') {
    global $product;
    $isproduct = true;
}; ?>
<?php
if (isset($afflink) && $afflink == '1' && $isproduct) {
    $link = $product->add_to_cart_url();
    $target = ' rel="nofollow sponsored" target="_blank"';
} else {
    $link = get_the_permalink();
    $target = '';
}
?>
<div class="gspb-expandable-wrapper gspb_listitem <?php if (isset($stacktablet) && $stacktablet) : ?> stacktablet<?php endif; ?><?php if ($isproduct) : ?> woocommerce<?php endif; ?>">
    <?php if ($contentpos == 'titlerow') : ?>
        <div class="listitem_title_row" style="padding: 5px 15px; overflow:hidden; border-bottom: 1px solid rgba(206,206,206,0.3);">
            <?php if ($togglelink == 'title') : ?>
                <span class="gspb-toggle-listlink gspb-expandable-trigger"><?php echo '' . $togglelabel; ?></span>
            <?php endif; ?>
            <<?php echo esc_attr($headingtag); ?> style="font-size:inherit; margin:0; padding:0; font-weight: bold;"><a href="<?php echo '' . $link; ?>" <?php echo '' . $target; ?>><?php the_title(); ?></a></<?php echo esc_attr($headingtag); ?>>
        </div>
    <?php endif; ?>
    <div class="gspb-flex-stretch-align gspb-flex-justify-center <?php if (isset($stacktablet) && $stacktablet) : ?> gspbtabletblock<?php else : ?>gspbmobblock<?php endif; ?>">
        <?php if (isset($image) && $image) : ?>
            <div class="listbuild_image gspb_listitem_column gspb-text-center">
                <figure class="position-relative">
                    <span class="rank_count" id="rank_<?php echo (int)$i ?>"><?php echo (int)$i ?></span>
                    <a class="gspb-flex-center-align gspb-flex-justify-center" href="<?php echo '' . $link; ?>" <?php echo '' . $target; ?>>
                        <?php the_post_thumbnail('post-thumbnail'); ?>
                    </a>
                </figure>
                <?php if ($togglelink == 'image') : ?>
                    <span class="gspb-toggle-listlink gspb-expandable-trigger" style="margin-top:8px"><?php echo '' . $togglelabel; ?></span>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <?php if ($contentpos == 'titleexc') : ?>
            <div class="gspb-flex-grow1 listitem_title gspb_listitem_column">
                <<?php echo esc_attr($headingtag); ?> class="gspb_top_rating_title"><a href="<?php echo '' . $link; ?>" <?php echo '' . $target; ?>><?php the_title(); ?></a></<?php echo esc_attr($headingtag); ?>>
                <div class="postcont">
                    <?php if ($post->post_excerpt) : ?>
                        <?php echo '' . $post->post_excerpt; ?>
                    <?php endif; ?>
                </div>
                <?php if (!empty($contshortcode)) : ?>
                    <div class="list_shortcode_area mb10">
                        <?php
                        $contshortcode = urldecode($contshortcode);
                        $contshortcode = wp_kses_post($contshortcode); ?>
                        <?php echo do_shortcode($contshortcode); ?>
                    </div>
                <?php endif; ?>
                <?php if (isset($userrating) && $userrating=='1' && $isproduct) : ?>
                    <div class="list_userrating_area">
                        <?php $average_rating = $product->get_average_rating();
                        if ($average_rating > 0) {
                            echo wc_get_rating_html($average_rating);
                        } ?>
                    </div>
                <?php endif; ?>
                <?php if ($togglelink == 'title') : ?>
                    <span class="gspb-toggle-listlink gspb-expandable-trigger"><?php echo '' . $togglelabel; ?></span>
                <?php endif; ?>
            </div>
        <?php endif; ?>


        <?php if (!empty($section) && isset($section[0]['sectiontype']) && $section[0]['sectiontype'] != 'empty') : ?>
            <div class="gspb-flex-center-align gspb-flex-justify-center gspb-flex-grow1 gspb_listitem_column listitem_content_meta<?php if (isset($stackmobile) && $stackmobile) : ?> mobilesblockdisplay<?php endif; ?>">
                <?php foreach ($section as $item) : ?>
                    <div class="gspb-flex-center-align listitem_meta_index gspb-flex-grow1 gspb-flex-justify-center gspb-text-center gspb-repeater-item-<?php echo esc_attr($item['_id']); ?>">
                        <div>
                            <?php $type = $item['sectiontype']; ?>
                            <?php if ($type == 'custom') : ?>
                                <div class="listitem_custom_val">
                                    <?php
                                    $atts = array();
                                    if (!empty($item['field'])) {
                                        $atts['type'] = 'custom';
                                        $atts['field'] = $item['field'];
                                        if (!empty($item['unit'])) {
                                            if (!empty($item['unitbefore'])) {
                                                $atts['label'] = $item['unit'];
                                            } else {
                                                $atts['posttext'] = $item['unit'];
                                            }
                                        }
                                        $atts['show_empty'] = '1';
                                        if (!empty($item['imageMapper'])) {
                                            $atts['imageMapper'] = $item['imageMapper'];
                                        }
                                        echo gspb_query_get_custom_value($atts);
                                    }
                                    ?>
                                </div>
                            <?php elseif ($type == 'attribute' || $type == 'swatch') : ?>
                                <div class="listitem_custom_val">
                                    <?php
                                    $atts = array();
                                    if (!empty($item['attrfield'])) {
                                        $atts['type'] = $type;
                                        $atts['attrfield'] = $item['attrfield'];
                                        if (!empty($item['unit'])) {
                                            if (!empty($item['unitbefore'])) {
                                                $atts['label'] = $item['unit'];
                                            } else {
                                                $atts['posttext'] = $item['unit'];
                                            }
                                        }
                                        $atts['show_empty'] = '1';
                                        if (!empty($item['imageMapper'])) {
                                            $atts['imageMapper'] = $item['imageMapper'];
                                        }
                                        echo gspb_query_get_custom_value($atts);
                                    }
                                    ?>
                                </div>
                            <?php elseif ($type == 'shortcode') : ?>
                                <div class="listitem_custom_val listitem_custom_val_shortcode">
                                    <?php
                                    if (!empty($item['shortcodefield'])) {
                                        if (!empty($item['unit']) && !empty($item['unitbefore'])) {
                                            echo '<span class="meta_v_label">' . esc_attr($item['unit']) . '</span>';
                                        }
                                        $sectionshortcode = urldecode($item['shortcodefield']);
                                        $sectionshortcode = wp_kses_post($sectionshortcode);
                                        echo do_shortcode($sectionshortcode);
                                        if (!empty($item['unit']) && empty($item['unitbefore'])) {
                                            echo '<span class="meta_v_posttext">' . esc_attr($item['unit']) . '</span>';
                                        }
                                    }
                                    ?>
                                </div>
                            <?php endif; ?>
                            <?php $posttext = (!empty($item['posttext'])) ? $item['posttext'] : ''; ?>
                            <?php if ($posttext) : ?>
                                <div class="meta_posttext blockstyle"><?php echo esc_html($posttext); ?></div>
                            <?php endif; ?>
                            <?php $tooltip = (!empty($item['tooltip'])) ? $item['tooltip'] : ''; ?>
                            <?php if ($tooltip) : ?>
                                <div class="gspb-tooltip">
                                    <svg x="0px" y="0px" viewBox="0 0 512 512">
                                        <g>
                                            <g>
                                                <path d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256 C512,114.497,397.492,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216 c119.393,0,216,96.615,216,216C472,375.393,375.384,472,256,472z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <path d="M256,214.33c-11.046,0-20,8.954-20,20v128.793c0,11.046,8.954,20,20,20s20-8.955,20-20.001V234.33 C276,223.284,267.046,214.33,256,214.33z" />
                                            </g>
                                        </g>
                                        <g>
                                            <g>
                                                <circle cx="256" cy="162.84" r="27" />
                                            </g>
                                        </g>
                                    </svg>
                                    <div class="gspb-tooltip-top">
                                        <?php echo esc_attr($item['tooltip']); ?>
                                        <i></i>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <?php if (isset($review) && $review && !empty($reviewkey)) : ?>
            <div class="listbuild_review gspb_listitem_column gspb-text-center gspb-flex-center-align gspb-aligncenter">
                <?php $rscore = get_post_meta($postid, esc_attr($reviewkey), true);
                $scorecalculate = 440 - (440 * (float)$rscore * 10) / 100; ?>
                <?php if (!isset($reviewcirclecolor)) $reviewcirclecolor = '#cc0000'; ?>
                <?php if ($rscore) : ?>
                    <?php if (isset($reviewcircle) && $reviewcircle) : ?>
                        <div class="gspb-reviewcircle">
                            <svg viewBox="0 0 154 154" style="transform: rotate(270deg); width: 70px; height: 70px; position: absolute; margin:0">
                                <circle cx="70" cy="70" r="70" style="stroke: #ffffff7d; stroke-dashoffset: <?php echo $scorecalculate; ?>; stroke-width: 14px; transform: translate(7px, 7px); fill: none">
                                </circle>
                                <circle cx="70" cy="70" r="70" style="stroke-dasharray: 440px; stroke: <?php echo esc_attr($reviewcirclecolor); ?>; stroke-dashoffset: <?php echo (float)$scorecalculate; ?>; stroke-width: 14px; transform: translate(7px, 7px); fill: none; stroke-linecap: round"></circle>
                            </svg>
                            <div class="gspb-reviewcircle__number">
                                <?php echo (float)$rscore; ?>
                            </div>
                        </div>
                    <?php else : ?>
                        <svg height="512" viewBox="0 0 512 512" width="512" xmlns="https://www.w3.org/2000/svg">
                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="512" y2="0">
                                <stop offset="0" stop-color="#fd5900"></stop>
                                <stop offset="1" stop-color="#ffde00"></stop>
                            </linearGradient>
                            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="392.353" y2="91">
                                <stop offset="0" stop-color="#ffe59a"></stop>
                                <stop offset="1" stop-color="#ffffd5"></stop>
                            </linearGradient>
                            <g id="Star">
                                <g>
                                    <g>
                                        <circle cx="256" cy="256" fill="url(#SVGID_1_)" r="256"></circle>
                                    </g>
                                </g>
                                <g>
                                    <g>
                                        <path d="m412.924 205.012c-1.765-5.43-6.458-9.388-12.108-10.209l-90.771-13.19-40.594-82.252c-2.527-5.12-7.742-8.361-13.451-8.361s-10.924 3.241-13.451 8.362l-40.594 82.252-90.771 13.19c-5.65.821-10.345 4.779-12.109 10.209s-.292 11.391 3.796 15.376l65.683 64.024-15.506 90.404c-.965 5.627 1.348 11.315 5.967 14.671 4.62 3.356 10.743 3.799 15.797 1.142l81.188-42.683 81.188 42.683c5.092 2.676 11.212 2.189 15.797-1.142 4.619-3.356 6.933-9.043 5.968-14.671l-15.506-90.404 65.682-64.024c4.088-3.986 5.559-9.947 3.795-15.377z" fill="url(#SVGID_2_)"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <?php echo esc_attr($rscore) ?>
                    <?php endif; ?>

                <?php endif; ?>
            </div>
        <?php endif; ?>
        <?php if (isset($button) && $button) : ?>
            <div class="listbuild_btn gspb_listitem_column">
                <?php if ($isproduct) : ?>
                    <span class="gspb-listbuild-price"><?php echo '' . $product->get_price_html(); ?></span>
                    <?php if ($product->add_to_cart_url() != '') : ?>
                        <div class="priced_block">
                            <?php echo apply_filters(
                                'woocommerce_loop_add_to_cart_link',
                                sprintf(
                                    '<a href="%s" data-product_id="%s" data-product_sku="%s" class="gspb_track_btn re_track_btn btn-offer %s %s product_type_%s"%s %s>%s</a>',
                                    esc_url($product->add_to_cart_url()),
                                    esc_attr($product->get_id()),
                                    esc_attr($product->get_sku()),
                                    $product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '',
                                    $product->supports('ajax_add_to_cart') ? 'ajax_add_to_cart' : '',
                                    esc_attr($product->get_type()),
                                    $product->get_type() == 'external' ? ' target="_blank"' : '',
                                    $product->get_type() == 'external' ? ' rel="nofollow sponsored"' : '',
                                    esc_html($product->add_to_cart_text())
                                ),
                                $product
                            ); ?>
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
                <a href="<?php the_permalink(); ?>" class="read_full font70"><?php esc_html_e('Read full review', 'greenshiftquery'); ?></a>
                <?php if ($togglelink == 'button') : ?>
                    <span class="gspb-toggle-listlink gspb-expandable-trigger" style="margin-top:8px"><?php echo '' . $togglelabel; ?></span>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
    <?php if ($disclaimer) : ?>
        <?php $field = trim(esc_html($disclaimer));
        $disclaimercontent = get_post_meta($postid, $field, true); ?>
        <?php if ($disclaimercontent) : ?>
            <div class="gspb-listbuild-disclaimer">
                <div><?php echo wp_kses($disclaimercontent, 'post'); ?></div>
                <?php if ($togglelink == 'disclaimer') : ?>
                    <span class="gspb-toggle-listlink gspb-expandable-trigger"><?php echo '' . $togglelabel; ?></span>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    <?php endif; ?>
    <?php if ($togglelink != 'no') : ?>
        <div class="gspb-expandable-content" style="padding-left:25px; padding-right:25px; display:none;border-top:1px solid #eee; padding-top:25px">
            <?php if ($togglecontent == 'content') : ?>
                <article class="post pt20 pb20"><?php echo apply_filters('the_content', $post->post_content); ?></article>
            <?php elseif ($togglecontent == 'field') : ?>
                <?php $field = trim(esc_html($togglefield));
                $cont = get_post_meta($postid, $field, true); ?>
                <?php if ($cont) : ?>
                    <article class="post pt20 pb20"><?php echo apply_filters('the_content', $cont); ?></article>
                <?php endif; ?>
            <?php endif; ?>


        </div>
    <?php endif; ?>
</div>