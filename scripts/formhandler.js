'use strict';

(function (window) {
	var App = window.App || {};
	var $ = window.jQuery;
	function FormHandler() {
		if (!selector) {
			throw new Error('No selector provided');
		}
	}
	App.FormHandler = FormHandler;
	window.App = App;
})(window);