$(document).ready(function () {
    $('#menu-icon').on('click', function () {
        $('#menu').addClass('open');
        $('#menu-icon').css('display', 'none');
        $('.close').css('display', 'block');
    })

    $('.menu').each(function () {
        $(this).on('click', function () {
            $('#menu').removeClass('open');
            $('.close').css('display', 'none');
            $('#menu-icon').css('display', 'block');
        })
    })
    $('.close').on('click', function () {
        $('#menu').removeClass('open');
        $('.close').css('display', 'none');
        $('#menu-icon').css('display', 'block');
    })

    $('.btn-with-svg').on('click', function () {
        $('.language').toggle();
    })
})