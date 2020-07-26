(function($) {
    $('.nav-link').click(function(e) {
        $('.nav-item.active').removeClass('active');
        $(e.target).parent().addClass('active');
        console.log('click');
    });

    // Cache selectors
    let menuItems = $("#mainMenu").find("a");
    let scrollItems = menuItems.map(function() {
        let item = $($(this).attr("href"));
            if (item.length) { return item; }
    });

    $(window).scroll(function() {
        let top = $(this).scrollTop();

        let cur = scrollItems.map(function() {
            if ($(this).offset().top <= top) return this;
        });

        cur = cur[cur.length - 1];

        let id = cur && cur.length ? cur[0].id : '';

        menuItems.parent().removeClass("active");
        menuItems.filter("[href='#"+id+"']").parent().addClass("active");
    });

})(jQuery);