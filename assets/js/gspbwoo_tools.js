jQuery(document).ready(function($) {
    if($('.gspbwoo-tools-tab-content').length) {
        const $table = $('.gspbwoo-tools-tab-content table')

        // $table.append('<tfoot><tr><th><button class="button-primary add-new-tab">+</button></th></tr></tfoot>')

        $('body').on('click', '.add-new-tab', function (e){
            e.preventDefault()
            const count = parseInt($("[name*='gspbwoo_tab_product_title_']").length) + 1;

            $.ajax({
                method: "POST",
                url: gspbwoovars.ajax_url,
                data: { action: 'gspbwoo_tools_add_tab', i: count },
            })
            .success(function( data ) {
                $table.find('tbody').append(data.html)
                $('#gspbwoo_tabs_count').val(count)
            })
            .error(function( data ) {
                // error
            });
        })

        $('body').on('click', '.remove-last-tab', function (e){
            e.preventDefault()
            const count = parseInt($("[name*='gspbwoo_tab_product_title_']").length);

            if(count < 2) return false;

            $("[name*='gspbwoo_tab_product_title_"+count+"']").closest('tr').remove()
            $("[name*='gspbwoo_tab_product_content_"+count+"']").closest('tr').remove()
            $("[name*='gspbwoo_tab_product_order_"+count+"']").closest('tr').remove()

            $('#gspbwoo_tabs_count').val(count - 1)

        })
    }
})