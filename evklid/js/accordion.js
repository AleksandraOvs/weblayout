window.addEventListener('DOMContentLoaded', function() {
  jQuery(document).ready(function($){
    $('#accordion').accordion({
        active: 0,
        animate: {
            duration: 500,
            easing: '',
        },
        heightStyle: 'content',
        collapsible: true,
        icons: false,
        active: false,
    });
});

})
