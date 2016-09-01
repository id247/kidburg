/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/bazhenov/Work/kidburg/dev/assets/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*************************!*\
  !*** ./src/js/local.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _video = __webpack_require__(/*! ./video */ 1);
	
	var _video2 = _interopRequireDefault(_video);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//start the magic
	document.addEventListener("DOMContentLoaded", function () {
	
		_video2.default.init();
	});

/***/ },
/* 1 */
/*!*************************!*\
  !*** ./src/js/video.js ***!
  \*************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	exports.default = function (window, document, $) {
	
		var $select = $('#city-select');
	
		function actions() {
	
			$select.on('change', function (e) {
				e.preventDefault();
				var value = $(this).find('option:selected').val();
	
				if (!value) {
					return;
				}
	
				var href = document.location.href;
				var newLocation = void 0;
	
				if (href.indexOf('localhost') > -1) {
					newLocation = href.replace(/(9000\/)[-a-zA-Z0-9]+(\.html)/, '$1' + value + '$2');
				} else {
					newLocation = href.replace(/(promo\/)[-a-zA-Z0-9]+/, '$1' + value);
				}
	
				document.location.href = newLocation;
			});
		}
	
		function init() {
	
			actions();
		}
	
		return {
			init: init
		};
	}(window, document, jQuery, undefined);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E4MjJiYzgzYWI2OWIxZTBhMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xvY2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aWRlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7Ozs7O0FBR0E7QUFDQSxVQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNOztBQUVuRCxrQkFBTSxJQUFOO0FBRUEsRUFKRCxFOzs7Ozs7Ozs7QUNOQTs7Ozs7O21CQUVnQixVQUFVLE1BQVYsRUFBa0IsUUFBbEIsRUFBNEIsQ0FBNUIsRUFBOEI7O0FBRTdDLE1BQU0sVUFBVSxFQUFFLGNBQUYsQ0FBaEI7O0FBRUEsV0FBUyxPQUFULEdBQWtCOztBQUVqQixXQUFRLEVBQVIsQ0FBVyxRQUFYLEVBQXFCLFVBQVMsQ0FBVCxFQUFXO0FBQy9CLE1BQUUsY0FBRjtBQUNBLFFBQU0sUUFBUSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsRUFBZ0MsR0FBaEMsRUFBZDs7QUFFQSxRQUFJLENBQUMsS0FBTCxFQUFXO0FBQ1Y7QUFDQTs7QUFFRCxRQUFNLE9BQU8sU0FBUyxRQUFULENBQWtCLElBQS9CO0FBQ0EsUUFBSSxvQkFBSjs7QUFFQSxRQUFJLEtBQUssT0FBTCxDQUFhLFdBQWIsSUFBNEIsQ0FBQyxDQUFqQyxFQUFtQztBQUNsQyxtQkFBYyxLQUFLLE9BQUwsQ0FBYSwrQkFBYixFQUE4QyxPQUFPLEtBQVAsR0FBZSxJQUE3RCxDQUFkO0FBQ0EsS0FGRCxNQUVLO0FBQ0osbUJBQWMsS0FBSyxPQUFMLENBQWEsd0JBQWIsRUFBdUMsT0FBTyxLQUE5QyxDQUFkO0FBQ0E7O0FBRUQsYUFBUyxRQUFULENBQWtCLElBQWxCLEdBQXlCLFdBQXpCO0FBQ0EsSUFsQkQ7QUFtQkE7O0FBRUQsV0FBUyxJQUFULEdBQWU7O0FBRWQ7QUFDQTs7QUFFRCxTQUFPO0FBQ047QUFETSxHQUFQO0FBSUEsRUFwQ2MsQ0FvQ1osTUFwQ1ksRUFvQ0osUUFwQ0ksRUFvQ00sTUFwQ04sRUFvQ2MsU0FwQ2QsQyIsImZpbGUiOiJsb2NhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9Vc2Vycy9iYXpoZW5vdi9Xb3JrL2tpZGJ1cmcvZGV2L2Fzc2V0cy9qc1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgY2E4MjJiYzgzYWI2OWIxZTBhMDZcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHZpZGVvIGZyb20gJy4vdmlkZW8nO1xuXG5cbi8vc3RhcnQgdGhlIG1hZ2ljXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cblx0dmlkZW8uaW5pdCgpO1xuXG59KTsgICBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL2xvY2FsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsICQpe1xuXG5cdGNvbnN0ICRzZWxlY3QgPSAkKCcjY2l0eS1zZWxlY3QnKTtcblxuXHRmdW5jdGlvbiBhY3Rpb25zKCl7XG5cblx0XHQkc2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gJCh0aGlzKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcblxuXHRcdFx0aWYgKCF2YWx1ZSl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRsZXQgbmV3TG9jYXRpb247XG5cblx0XHRcdGlmIChocmVmLmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEpe1xuXHRcdFx0XHRuZXdMb2NhdGlvbiA9IGhyZWYucmVwbGFjZSgvKDkwMDBcXC8pWy1hLXpBLVowLTldKyhcXC5odG1sKS8sICckMScgKyB2YWx1ZSArICckMicpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdG5ld0xvY2F0aW9uID0gaHJlZi5yZXBsYWNlKC8ocHJvbW9cXC8pWy1hLXpBLVowLTldKy8sICckMScgKyB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBuZXdMb2NhdGlvbjtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQoKXtcblxuXHRcdGFjdGlvbnMoKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aW5pdCBcblx0fVxuXG59KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnksIHVuZGVmaW5lZCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy92aWRlby5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=