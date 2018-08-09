(function( $ ){

  $(document).ready(function() {

    const 
        $body      = $('body'),
        transition = 500;

    (function smoothlyShowThePageByOpen() {
      $body.animate({
        'opacity': '1'
      }, transition);
    })();

  });
  
})( jQuery );