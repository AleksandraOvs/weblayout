jQuery(document).ready(function($){
    $('.programm__list').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        animate: {
            duration: 700,
            easing: 'swing',
        },
    });

    $('.faq__accordion').accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        animate: {
            duration: 700,
            easing: 'swing',
        },
    });
});

