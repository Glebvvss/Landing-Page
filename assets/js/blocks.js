(function( $ ){

    const 
        $document  = $(document),
        $body      = $('body'),
        $header    = $('header'),
        transition = 500;

    //
    const defaultStylesServicesBlock = () => {
      $('.sentence').css({
          transform: 'scale(0)',
      });
    }

    const defaultStylesPrivilegesBlock = () => {
      $('#privileges').css({
          transform: 'translateX(-100%)',
      });
    }

    const defaultStylesFooterBlock = () => {
      $('.underline').css({
          width: '0%',
      });
    }

    (function defaultStylesOfBloacks() {
      defaultStylesServicesBlock();
      defaultStylesPrivilegesBlock();
      defaultStylesFooterBlock();
    })();
    //


    const showBlockById = id => {
      $('#' + id).animate({
        opacity: '1'
      }, 1000);
    }

    const blockAtFirstLocateOnScreen = id => {
      let 
          $positionTopBlock = $('#' + id).offset().top,
          $scrollTop        = $body.scrollTop(),
          screenHeight      = screen.height;

      let startPointForShowAnimate = $positionTopBlock - screenHeight + 200;
      if ( startPointForShowAnimate < $scrollTop )   {
        return true;
      }
      return false;
    }

    const showBlockByScroll = (id, callback = null) => {
      $document.scroll(() => {
        if ( blockAtFirstLocateOnScreen(id) === true ) {
          showBlockById(id);

          if (callback) {
            setTimeout(() => {
              callback();
            }, 500);   
          }        
        }
      });
    }


    //initial blocks
    showBlockByScroll('about');

    showBlockByScroll('service', () => {
      $('.sentence').css({
        transform: 'scale(1)',
        transition: '500ms'
      });
    });

    showBlockByScroll('privileges', () => {
      $('#privileges').css({
        transform: 'translateX(0%)',
        transition: '1s'
      });
    });

    showBlockByScroll('footer', () => {
      $('.underline').css({
        width: '100%',
        transition: '1s'
      });
    });

})( jQuery );