'use strict';

export default (function (window, document, $){

	const $select = $('#city-select');

	function actions(){

		$select.on('change', function(e){
			e.preventDefault();
			const value = $(this).find('option:selected').val();

			if (!value){
				return;
			}

			const href = document.location.href;
			let newLocation;

			if (href.indexOf('localhost') > -1){
				newLocation = href.replace(/(9000\/)[-a-zA-Z0-9]+(\.html)/, '$1' + value + '$2');
			}else{
				newLocation = href.replace(/(promo\/)[-a-zA-Z0-9]+/, '$1' + value);
			}

			document.location.href = newLocation;
		});
	}

	function init(){

		actions();
	}

	return {
		init 
	}

})(window, document, jQuery, undefined);
