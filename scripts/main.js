"use strict";

(function (window) {
	var FORM_SELECTOR = '[data-coffee-order="form"]';
	var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
	let App = window.App;
	let Truck = App.Truck;
	let DataStore = App.DataStore;
	var FormHandler = App.FormHandler;
	var Validation = App.Validation;
	var CheckList = App.CheckList;
	var webshim = window.webshim;
	let myTruck = new Truck('My Truck', new DataStore());
	// экспортируем myTruck в глобальное пространство имен:
	window.myTruck = myTruck;
	var checkList = new CheckList(CHECKLIST_SELECTOR);
	checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
	var formHandler = new FormHandler(FORM_SELECTOR);

	formHandler.addSubmitHandler(function (data) {
		myTruck.createOrder.call(myTruck, data);
		checkList.addRow.call(checkList, data);
	});

	formHandler.addInputHandler(Validation.isCompanyEmail);

	webshim.polyfill('forms forms-ext');
	webshim.setOptions('forms', { addValidators: true, lazyCustomMessages: true });
})(window);