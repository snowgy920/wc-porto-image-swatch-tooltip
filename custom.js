(function($) {
    $(document).ready(function(){
        $('.filter-item-list .filter-image, .filter-item-list .filter-color').attr('data-toggle', 'tooltip').attr('data-placement', 'top');
        $('.filter-item-list .filter-image, .filter-item-list .filter-color').each(function(){
            $(this).attr('title', $(this).text());
            $(this).tooltip();
        });
    });
})(jQuery);