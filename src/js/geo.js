'use strict';

import Cookie from 'js-cookie';

export default (function (window, document, $){

	let regionId;	
	
	const cookieName = 'city';
	const visibleClassName = 'modal-city--visible';

	const $cityName = $('.js-modal-city-city-name');
	const $modal = $('#modal-city');
	const $ok = $('.js-modal-city-ok');

	function showModal(){

		if (!regionId){
			return false;
		}
		
		if (Cookie.get(cookieName)){
			return false;
		}

		$modal.addClass(visibleClassName);
	}

	function hideModal(){
		$modal.removeClass(visibleClassName);
	}
	

	function getRegionName(regionName){

		let cityName;

		switch(regionName){
			case 'LEN':
				regionId = 'kidburg-spb';
				cityName = 'Санкт-Петербурге';				
				break;

			case 'MOS':
				regionId = 'kidburg-msk';
				cityName = 'Москве';				
				break;

			case 'NIZ':
				regionId = 'kidburg';
				cityName = 'Нижнем Новгороде';				
				break;

			default:
		}

		$cityName.html(cityName);
	}

	
	function getLocation(){

        $.getJSON('http://ip-api.com/json/', function(data){
			//console.log(data);
			getRegionName(data.region);
			showModal();
		});

	}

	function actions(){
		$ok.on('click', function(e){
			e.preventDefault();
			Cookie.set(cookieName, 'true');
			hideModal();
		});
	}

	function init(){

		getLocation();
		actions();
	}

	return {
		init 
	}

})(window, document, jQuery, undefined);
