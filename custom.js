(function($) {
    $(document).ready(function(){
        $('.filter-item-list .filter-image').each(function(){
            $(this).attr('title', $(this).text());
        });
    });
})(jQuery);
