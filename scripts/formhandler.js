'use strict';

(function (window) {
	var App = window.App || {};
	var $ = window.jQuery;
	
	function FormHandler(selector) {
		if (!selector) {
			throw new Error('No selector provided');
		}

		this.$formElement = $(selector);
		if (this.$formElement.length === 0) {
			throw new Error('Could not find element with selector: ' + selector);
		}
	}

	FormHandler.prototype.addSubmitHandler = function () {
		console.log('Setting submit handler for form');
		// Метод on принимает на входе имя события и обратный вызов, который не-
		// обходимо будет запустить при срабатывании события. Мы вызвали функцию
		// event.pre­ventDefault — это гарантирует, что подтверждение отправки формы
		// не уведет пользователя со страницы
		this.$formElement.on('submit', function (event) {
			event.preventDefault();
			// Метод serializeArray возвращает данные формы в виде массива объектов.
			var data = {};
			$(this).serializeArray().forEach(function (item) {
				data[item.name] = item.value;
				console.log(item.name + ' is ' + item.value);
			});

			console.log(data);
		});
	};
	
	App.FormHandler = FormHandler;
	window.App = App;
})(window);