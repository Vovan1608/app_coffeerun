"use strict";

(function (window) {
	var FORM_SELECTOR = '[data-coffee-order="form"]';
	var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
	var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	var FormHandler = App.FormHandler;
	var Validation = App.Validation;
	var CheckList = App.CheckList;
	var remoteDS = new RemoteDataStore(SERVER_URL);
	var webshim = window.webshim;
	var RemoteDataStore = App.RemoteDataStore;
	let myTruck = new Truck('My Truck', remoteDS);
	// экспортируем myTruck в глобальное пространство имен:
	window.myTruck = myTruck;
	var checkList = new CheckList(CHECKLIST_SELECTOR);
	checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
	var formHandler = new FormHandler(FORM_SELECTOR);

	formHandler.addSubmitHandler(function (data) {
		return myTruck.createOrder.call(myTruck, data)
		.then(function () {
			checkList.addRow.call(checkList, data);
		});
	});

	formHandler.addInputHandler(Validation.isCompanyEmail);

	myTruck.printOrders(checkList.addRow.bind(checkList));

	webshim.polyfill('forms forms-ext');
	webshim.setOptions('forms', { addValidators: true, lazyCustomMessages: true });
})(window);