'use strict';

import Cookie from 'js-cookie';

export default (function (window, document, $){

	let regionId;	
	
	let cookieName = 'city';
	const visibleClassName = 'modal-city--visible';

	const $cityName = $('.js-modal-city-city-name');
	const $modal = $('#modal-city');
	const $ok = $('.js-modal-city-ok');


	const $select = $('.js-city-select');


	function showModal(){

		if (!regionId){
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
			case 'RU-LEN':
			case 'RU-SPE':
			case 'LEN':
			case 'SPE':
				regionId = 'kidburg-spb';
				cityName = 'Санкт-Петербурге';				
				break;

			case 'RU-MOS':
			case 'RU-MOW':
			case 'MOS':
			case 'MOW':
				regionId = 'kidburg-msk';
				cityName = 'Москве';				
				break;

			case 'RU-NIZ':
			case 'NIZ':
				regionId = 'kidburg';
				cityName = 'Нижнем Новгороде';				
				break;

			default:
		}

		$cityName.html(cityName);
	}

	
	function getLocation(){
		
		if (Cookie.get(cookieName)){
			return false;
		}

		$.ajax({
			url: '//freegeoip.net/json', 
			method: 'POST',
			dataType: 'jsonp',
			success: function( response ) {				
				console.log(response);
				getRegionName(response.region_code);
				showModal();
			}
		});	

	}

	function actions(){
		$ok.on('click', function(e){
			e.preventDefault();
			Cookie.set(cookieName, regionId);
			redirect(regionId);
			hideModal();
		});


		$select.on('change', function(e){
			e.preventDefault();
			const regionId = $(this).find('option:selected').val();

			if (!regionId){
				return;
			}
			Cookie.set(cookieName, regionId);
			redirect(regionId);
		});

	}

	function redirect(regionId){
		const href = document.location.href;
		let newLocation;

		//regionId = 'kidburg-spb';
		
		const reg = new RegExp(regionId.replace('-', '\\-') + '(\\?.*|\\#.*|\\.html.*|)$');
		
		if ( href.match( reg ) ){
			//console.log('match');
			return false;
		}
		//console.log('not match');

		if (href.indexOf('localhost') > -1){
			newLocation = href.replace(/(9000\/)[-a-zA-Z0-9]+(\.html)/, '$1' + regionId + '$2');
		}else{
			newLocation = href.replace(/(promo\/)[-a-zA-Z0-9]+/, '$1' + regionId);
		}

		document.location.href = newLocation;
	}

	function init(){
		getLocation();
		actions();
	}

	return {
		init 
	}

})(window, document, jQuery, undefined);
