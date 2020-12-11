'use strict';

(function (window) {
	var App = window.App || {};
	var Validation = {
		// проверять адрес электронной почты на соответствие регулярному 
		// выражению и возвращать true или false
		isCompanyEmail: function (email) {
			return /.+@bignerdranch\.com$/.test(email);
		}
	};
	
	App.Validation = Validation;
	window.App = App;
})(window);