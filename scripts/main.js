"use strict";

(function (window) {
	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	let myTruck = new Truck('ncc-1701', new DataStore());
	// экспортируем myTruck в глобальное пространство имен:
	window.myTruck = myTruck;
})(window);