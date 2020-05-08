(function($) {
    $(document).ready(function(){
        $('.filter-item-list .filter-image').attr('data-toggle', 'tooltip').attr('data-placement', 'top');
        $('.filter-item-list .filter-image').each(function(){
            $(this).attr('title', $(this).text());
            $(this).tooltip();
        });
    });
})(jQuery);