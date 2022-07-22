(function( $ ) {
	'use strict';

	$(document).ready(function() {
		if($('.post-type-attribute_group select').length > 0) {
			$('.post-type-attribute_group select').select2Sortable();
		}

		function attribute_row_indexes() {
			$( '.product_attributes .woocommerce_attribute' ).each( function( index, el ) {
				$( '.attribute_position', el ).val( parseInt( $( el ).index( '.product_attributes .woocommerce_attribute' ), 10 ) );
			});
		}

		var load_attribute_group = $('#load_attribute_group');
		load_attribute_group.on('click', function(e) {
			e.preventDefault();

			var attribute_group_select = $('#woocommerce_attribute_groups');
			var attribute_group_id = attribute_group_select.val();

			load_attributes(attribute_group_id);
    	})

		var load_attribute_group_category = $('#load_attribute_group_category');
		load_attribute_group_category.on('click', function(e) {
			e.preventDefault();

			var attribute_group_category_option = $('#woocommerce_attribute_group_categories option:selected');
			var attribute_groups_in_category = attribute_group_category_option.data('attribute-groups').toString();
			var attribute_groups = attribute_groups_in_category.split(',');

			$.each(attribute_groups, function() {
				load_attributes(this);
			});
    	})

    	function load_attributes (attribute_group_id) {

			if(attribute_group_id == "") {
				return;
			}
		
			$.ajax({
	            type : 'post',
	            async: false,
	            dataType : 'json',
	            url : ajaxurl,
	            data : {
	                action : 'get_attributes_by_attribute_group_id',
	                attribute_group_id: attribute_group_id
	            },
	            success : function( response ) {

					var size         = $( '.product_attributes .woocommerce_attribute' ).length;
					var $wrapper     = $( '#product_attributes' );
					var $attributes  = $wrapper.find( '.product_attributes' );
					
					var product_type = $( 'select#product-type' ).val();
	            	$.each(response, function(i, index) {
	            		var $existingAttributes  = $( '.product_attributes .woocommerce_attribute' );
	            		var attribute = index.taxonomy;
						var data         = {
							action:   'woocommerce_add_attribute',
							taxonomy: attribute,
							i:        size,
							security: woocommerce_admin_meta_boxes.add_attribute_nonce
						};

						$wrapper.block({
							message: null,
							overlayCSS: {
								background: '#fff',
								opacity: 0.6
							}
						});

						var exists = false;
						$.each($existingAttributes, function(i, index) {
							var existingTaxonomy = $(this).data('taxonomy');
							
							if(attribute == existingTaxonomy) {
								if($(this).css('display') == 'none') {
									$(this).fadeIn();
								} 
								exists = true;
								return;
							}
						})
						if(exists) {
							$wrapper.unblock();
							return;
						}

						$.ajax({
				            type : 'post',
				            // dataType : 'json',
				            url : ajaxurl,
				            data : data,
				            async: false,
				            success : function( response ) {
								$attributes.append( response );

								if ( 'variable' !== product_type ) {
									$attributes.find( '.enable_variation' ).hide();
								}

								$( document.body ).trigger( 'wc-enhanced-select-init' );

								attribute_row_indexes();

								$attributes.find( '.woocommerce_attribute' ).last().find( 'h3' ).click();

								$wrapper.unblock();

								$( document.body ).trigger( 'woocommerce_added_attribute' );
							}
							});

							if ( attribute ) {
								$( 'select.attribute_taxonomy' ).find( 'option[value="' + attribute + '"]' ).attr( 'disabled','disabled' );
								$( 'select.attribute_taxonomy' ).val( '' );
							}
						size = size + 1;
					});
	        	}
	    	});	
    	}
	})
})( jQuery );