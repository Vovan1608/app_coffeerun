"use strict";

(function (window) {
	let App = window.App || {};
	
	// truckId(string) - имя заказа, чтоб отличать один заказ от другого
	// db(object) - новый экземпляр класса DataStore
	function Truck(truckId, db) {
		this.truckId = truckId;
		this.db = db;
	}

	// order(object) - 
	// вызывать метод add объекта DataStore, чтобы сохранить заказ кофе
	Truck.prototype.createOrder = function (order) {
		console.log('Adding order for ' + order.emailAddress);
		this.db.add(order.emailAddress, order);
	};

	// после выдачи заказа экземпляр Truck должен удалить его из базы данных.
	// customerId(string) должен быть соответствующий заказу адрес электронной почты
	Truck.prototype.deliverOrder = function (customerId) {
		console.log('Delivering order for ' + customerId);
		this.db.remove(customerId);
	};

	/* 
	получает массив всех адресов электронной почты пользователей,
	выполняет итерацию по массиву и выводит в консоль информацию о заказе.
	*/
	Truck.prototype.printOrders = function () {
		let customerIdArray = Object.keys(this.db.getAll());

		console.log('Truck #' + this.truckId + ' has pending orders:');
		customerIdArray.forEach(function (id) {
			console.log(this.db.get(id));
		}.bind(this));
	};

	App.Truck = Truck;
	window.App = App;
})(window);