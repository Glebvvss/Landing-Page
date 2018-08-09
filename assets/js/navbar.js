(function( $ ){

    const 
        $document = $(document),
        $body     = $('body'),
        $header   = $('header');

    const $orangeNavbar = () => {
      $header.css({
        'background-color': '#e8874a',
        'box-shadow': 'inherit'
      });
    };

    const $blackNavbar = () => {
      $header.css({
        'background-color': 'black',
        'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.5)',
        'transition': '0.5s',           
      });
    };

    (function changeNavbarColorByScroll() {
      $document.scroll(() => {
        let $scrollTop = $body.scrollTop();
        if ( $scrollTop === 0 ) {
          $orangeNavbar();
        } else {
          $blackNavbar();
        }
      });
    })();

})( jQuery );