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

	// метод get, который принимает на входе ключ, выполняет поиск значения
	// для него в свойстве data экземпляра и возвращает это значение
	DataStore.prototype.get = function (key) {
		return this.data[key];
	};

	// возвращает ссылку на свойство data
	DataStore.prototype.getAll = function () {
		return this.data;
	};

	// метод для удаления информации
	DataStore.prototype.remove = function (key) {
		delete this.data[key];
	};
	// в объекте App создаем св-во DataStore, куда записываем конструктор
	App.DataStore = DataStore;
	window.App = App;
})(window);