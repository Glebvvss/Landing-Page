(function( $ ){

  const 
      $document  = $(document),
      $body      = $('body'),
      $header    = $('header'),
      transition = 500;

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

  const showBlock = (id, callback = null) => {
    if ( blockAtFirstLocateOnScreen(id) === true ) {
      showBlockById(id);

      if ( callback ) {
        setTimeout(() => {
          callback();
        }, 500);   
      }        
    }
  };

  const initShowBlockEvent = ( funcShowBlock ) => {
    document.addEventListener('scroll', funcShowBlock );
    document.addEventListener('DOMContentLoaded', funcShowBlock );
  };

  //
  const defaultStateServicesBlock = () => {
    $('.sentence').css({
        transform: 'scale(0)',
    });
  }

  const defaultStatePrivilegesBlock = () => {
    $('#privileges').css({
        transform: 'translateX(-100%)',
    });
  }

  const defaultStateFooterBlock = () => {
    $('.underline').css({
        width: '0%',
    });
  }

  (function defaultStatesOfBlocks() {
    defaultStateServicesBlock();
    defaultStatePrivilegesBlock();
    defaultStateFooterBlock();
  })();
  //

  initShowBlockEvent(() => {

    showBlock('about');

    showBlock('service', () => {
      $('.sentence').css({
        transform: 'scale(1)',
        transition: '500ms'
      });
    });

    showBlock('privileges', () => {
      $('#privileges').css({
        transform: 'translateX(0%)',
        transition: '1s'
      });
    });

    showBlock('privileges', () => {
      $('#privileges').css({
        transform: 'translateX(0%)',
        transition: '1s'
      });
    });

    showBlock('footer', () => {
      $('.underline').css({
        width: '100%',
        transition: '1s'
      });
    });

  });

})( jQuery );