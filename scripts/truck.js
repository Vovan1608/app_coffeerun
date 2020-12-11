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
		return this.db.add(order.emailAddress, order);
	};

	// после выдачи заказа экземпляр Truck должен удалить его из базы данных.
	// customerId(string) должен быть соответствующий заказу адрес электронной почты
	Truck.prototype.deliverOrder = function (customerId) {
		console.log('Delivering order for ' + customerId);
		return this.db.remove(customerId);
	};

	/* 
	получает массив всех адресов электронной почты пользователей,
	выполняет итерацию по массиву и выводит в консоль информацию о заказе.
	*/
	Truck.prototype.printOrders = function (printFn) {
		return this.db.getAll()
		.then(function (orders) {
			var customerIdArray = Object.keys(orders);
			console.log('Truck #' + this.truckId + ' has pending orders:');
			customerIdArray.forEach(function (id) {
				console.log(orders[id]);
				if (printFn) {
					printFn(orders[id]);
				}
			}.bind(this));
		}.bind(this));
	};

	App.Truck = Truck;
	window.App = App;
})(window);