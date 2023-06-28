$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.left_sidebar').css({
            'transform': 'translateX(0)'
        });
    });
    $('.student').click(function() {
        $('.right_sidebar').css({
            'transform': 'translateX(0)'
        });
    });

    $('.close_btn').click(function() {
        $('.right_sidebar').css({
            'transform': 'translateX(150%)'
        })
    })

    $('.close_hamburger_btn').click(function() {
        $('.left_sidebar').css({
            'transform': 'translateX(-150%)'
        })
    })

});