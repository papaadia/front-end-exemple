(function($) {
    'use strict';

    $(document).ready(function() {
        //Chevron-event
        $('.container').on('click', '.chevron', function() {
            var path = $(this).parent();
            if (this.id == "action") {
                $(this).css({
                    'border-top': '0px',
                    'border-left': '6px solid transparent',
                    'border-right': '6px solid transparent',
                    'border-bottom': '8px solid #504e4f'
                });
                $(path).children("p").css({ height: "16px" });
                $(path).children(".tags").css({ height: "19px" });
                $(this).removeAttr("id");
                $(path.parent()).children(".delete").css({ display: "none" });
                $(path.parent()).children(".like").css({ display: "none" });
            } else {
                $(this).attr('id', 'action');
                $(this).css({
                    'border-bottom': '0',
                    'border-left': '6px solid transparent',
                    'border-right': '6px solid transparent',
                    'border-top': '8px solid #a19fa0'
                });
                $(path).children("p").css({ height: "100%" });
                $(path).children(".tags").css({ height: "100%" });
                $(path.parent()).children(".delete").css({ display: "flex" });
                $(path.parent()).children(".like").css({ display: "flex" });
            }
        });
        //Pagination AJAX query
        $('body').on('click', 'a.nav-link', function(e) {
            e.preventDefault();
            var page = $(this).data('page');
            $.ajax({
                url: 'pagination_ajax.php',
                type: 'GET',
                data: { page: page },
                success: function(res) {
                    $('.container').empty();
                    $('.container').hide().fadeIn(500).html(res);
                    pictureHide = $('.container>ul>li').slice(2, 8);
                    windowSize();
                    $(window).resize(windowSize);
                },
                error: function() {
                    alert('Error');
                }
            });
        });
        //Response
        var pictureHide = $('.container>ul>li').slice(2, 8);

        function windowSize() {
            if ($(window).width() <= '479') {
                pictureHide.hide();
            }
            if ($(window).width() > '479') {
                pictureHide.show();
            }
        }
        $(window).load(windowSize);
        $(window).resize(windowSize);

        //Изменение количества страниц на экране
        // $(window).resize(function() {
        //     var perpage;
        //     var nowWith = $(window).width();
        //     if (nowWith > 1200) {
        //         perpage = 8;
        //     }
        //     if (nowWith < 1200 && nowWith > 1036) {
        //         perpage = 6;
        //     }
        //     if (nowWith < 1036 && nowWith > 716) {
        //         perpage = 4;
        //     }
        //     if (nowWith < 716) {
        //         perpage = 2;
        //     }
        //     $.ajax({
        //         url: 'pagination.php',
        //         type: 'GET',
        //         data: { perpage: perpage },
        //         error: function() {}
        //     });
        // });
    }); //end ready

}(jQuery));
