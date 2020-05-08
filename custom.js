(function($) {
    $(document).on('click', '.product-summary-wrap form.cart .yith-wocc-button', function(){
        $(this).closest('form').find('[name="_yith_wocc_one_click"]').val('is_one_click');
    });
    $(document).ready(function(){
        $('#mini-cart .cart-head').click(function(){
            document.location.href = porto_custom_vars.cart_url;
        });

        $('.filter-item-list .filter-image').attr('data-toggle', 'tooltip').attr('data-placement', 'top');
        $('.filter-item-list .filter-image').each(function(){
            $(this).attr('title', $(this).text());
            $(this).tooltip();
        });
    });
}).apply(this, [jQuery]);