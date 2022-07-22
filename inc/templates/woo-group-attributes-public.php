<?php
/**
 * Product Groupped attributes template
 */
 
if ( !defined( 'ABSPATH' ) ) exit;

$has_row = false;
$attributes_group = gspbwoo_get_attributes_group( $product );
if(is_array($attributes_group)){
	$count = count($attributes_group);
}
ob_start();
?>
<table class="woocommerce-group-attributes-public">

	<?php
	foreach( $attributes_group as $key => $attribute_group ):
		if(isset($attribute_group['attributes'])){
		?>	
			<?php if ($count > 1) :?>
			<tr class="attribute_group_row attribute_group_row_<?php echo $key ?>">
				<th class="attribute_group_name" colspan="2">
				<?php
					if(isset($attribute_group['img']) && !empty($attribute_group['img'])){
						echo $attribute_group['img'];
					}
					echo __($attribute_group['name']);
				?>
				</th>
			</tr>
			<?php endif;?>
		<?php
		} else {
			continue;
		}
		?>

		<tr class="attribute_row attribute_row_<?php echo $key ?>">
			<td>
				<table class="woocommerce-product-attributes shop_attributes">
				<?php
				if(!is_array($attribute_group['attributes'])) {
					continue;
				}
				
				ksort($attribute_group['attributes']);

				foreach ( $attribute_group['attributes'] as $attribute ) {
					if ( empty( $attribute['is_visible'] ) || ( $attribute['is_taxonomy'] && ! taxonomy_exists( $attribute['name'] ) ) ) {
						continue;
					} else {
						$has_row = true;
					}
					?>
					<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_<?php echo esc_attr( $attribute->get_name() ); ?>">
						<?php 
						$hasImage = apply_filters('woocommerce_attribute_name_image', wc_attribute_label( $attribute->get_name() ), $attribute->get_id()); 
						
						if($hasImage) {
							$attribute_name = $hasImage;
						} else {
							$attribute_name = wc_attribute_label( $attribute->get_name() );
						}
						?>
						<th class="woocommerce-product-attributes-item__label"><?php echo wp_kses_post( $attribute_name ); ?></th>
						<td class="woocommerce-product-attributes-item__value">
							<?php
							$values = array();
							if ( $attribute->is_taxonomy() ) {
								$attribute_taxonomy = $attribute->get_taxonomy_object();
								$attribute_values = wc_get_product_terms( $product->get_id(), $attribute->get_name(), array( 'fields' => 'all' ) );

								foreach ( $attribute_values as $attribute_value ) {

									$hasImage = apply_filters('woocommerce_attribute_value_image', esc_html( $attribute_value->name ), $attribute_value->term_id);
									if(!empty($hasImage)) {
										$value_name = $hasImage;
									} else {
										$value_name = esc_html( $attribute_value->name );
									}
									
									if ( $attribute_taxonomy->attribute_public ) {
										$values[] = '<a href="' . esc_url( get_term_link( $attribute_value->term_id, $attribute->get_name() ) ) . '" rel="tag">' . $value_name . '</a>';
									} else {
										$values[] = $value_name;
									}
								}
							} else {
								$values = $attribute->get_options();

								foreach ( $values as &$value ) {
									$value = make_clickable( esc_html( $value ) );
								}
							}
							echo apply_filters( 'woocommerce_attribute', wpautop(wptexturize( implode( apply_filters( 'gspbwoo_woo_group_attributes_divider', ', ' ), $values ))), $attribute, $values );
							?>
						</td>
					</tr>
				<?php } ?>
				</table>
			</td>
		</tr>
	<?php endforeach; ?>
	<?php
		// Display weight and dimensions before attribute list.
	    $display_dimensions = apply_filters( 'wc_product_enable_dimensions_display', $product->has_weight() || $product->has_dimensions() );

	   	if($display_dimensions){
	   		echo '<tr class="attribute_group_row attribute_group_row_dimensions">
	   			<th class="attribute_group_name" colspan="2">'.__( "Dimensions", "greenshiftwoo" ).'</th></tr>';
	   		echo '<tr class="attribute_row attribute_row_dimensions">
					<td>
						<table class="woocommerce-product-attributes shop_attributes">
							<tbody>';
						    if ( $product->has_weight() ) {
						    	echo '<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_weight">
										<th class="woocommerce-product-attributes-item__label">'.__( "Weight", "greenshiftwoo" ).'</th>
										<td class="woocommerce-product-attributes-item__value">'.wc_format_weight( $product->get_weight() ).'</td>
									</tr>';
						    }
						    if ( $product->has_dimensions() ) {
						    	echo '<tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_dimensions">
										<th class="woocommerce-product-attributes-item__label">'.__( "Dimensions", "greenshiftwoo" ).'</th>
										<td class="woocommerce-product-attributes-item__value">'.wc_format_dimensions( $product->get_dimensions( false ) ).'</td>
									</tr>';
						    }
			echo '
							</tbody>
						</table>
					</td>
				</tr>';
	   	}
    ?>
</table>
<?php
if ( $has_row ) {
	echo ob_get_clean();
} else {
	ob_end_clean();
}