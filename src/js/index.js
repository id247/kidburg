'use strict'

import video from './video';
import city from './city';
import geo from './geo';

const cityCookieName = 'city';

//start the magic
document.addEventListener('DOMContentLoaded', () => {

	video.init();
	city.init(cityCookieName);
	geo.init(cityCookieName);

});   
