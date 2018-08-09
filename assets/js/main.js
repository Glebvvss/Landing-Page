(function( $ ){
	$(document).ready(function() {
		
		const 
				$document  = $(document);
				$body 		 = $('body');
				$header		 = $('header');

		(function smoothlyShowThePage() {
			$body.animate({
				'opacity': '1'
			}, 500);
		})();

		(function changeNavbarColorByScroll() {
			$document.scroll(function() {
				let $scrollTop = $body.scrollTop();
				console.log($scrollTop);
				if ( $scrollTop > 0 ) {
					$('header').css({
						'background-color': 'black',
						'transition': '0.5s'
					});
				} else {
					$('header').css({
						'background-color': '#e8874a',
					});
				}
			});
		})();

	});
})( jQuery );