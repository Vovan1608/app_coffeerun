"use strict";

(function (window) {
	/* 
	Если у объекта window уже есть свойство App, мы присвоим его локальной переменной App. 
	Если нет, «ярлык» App будет ссылаться на новый пустой объект, представленный {}.
	*/
	let App = window.App || {};
	
	function DataStore() {
		this.data = {};
	}
	// Экземпляр DataStore будет сохранять информацию о заказе (val), используя адрес
	// электронной почты посетителя (key).
	DataStore.prototype.add = function (key, val) {
		this.data[key] = val;
	};
	DataStore.prototype.get = function (key) {
		return this.data[key];
	};
		DataStore.prototype.getAll = function () {
		return this.data;
	};
	// в объекте App создаем св-во DataStore, куда записываем функцию
	App.DataStore = DataStore;
	window.App = App;
})(window);