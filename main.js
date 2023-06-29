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

function darkMode() {
    $('body').toggleClass('dark-mode');
    $('.left_sidebar').toggleClass('dark-mode');
    $('.table tr:nth-child(even)').css({
        'background-color': '#fff',
        'color': '#000',
    })
    $('.table tr:nth-child(4)').css({
        'background-color': '#5bb9c0',
        'color': '#fff',
    })

    $('.main_content .main_navbar .dark_mode_icon .bx-sun').click(function() {
        $(this).css('display', 'none');
        $('.main_content .main_navbar .dark_mode_icon .bx-moon').css('display', 'block');
    });

    $('.main_content .main_navbar .dark_mode_icon .bx-moon').click(function() {
        $(this).css('display', 'none');
        $('.main_content .main_navbar .dark_mode_icon .bx-sun').css('display', 'block');
    });
}