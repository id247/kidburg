'use strict';

export default (function App(window, document, $){
	console.log('run');

	function video(){
		const $play = $('#play');
		const $video = $('.home__video');
		const $videoFrame = $('#video-frame');

		$play.on('click', function(e){
			e.preventDefault();
			const src = $(this).data('video');

			$videoFrame.attr('src', src);
			$video.addClass('home__video--visible');
		});
	}

	function init(){

		video();
	}

	return {
		init 
	}

})(window, document, jQuery, undefined);
