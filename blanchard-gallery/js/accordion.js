window.addEventListener('DOMContentLoaded', function() {
    jQuery(document).ready(function($){
      $('#accordion1').accordion({
          active: 0,
          animate: {
              duration: 500,
              easing: '',
          },
          heightStyle: 'content',
          collapsible: false,
          icons: false,
          active: false,
      });
  });
  })
  