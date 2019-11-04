/*global QUnit*/

sap.ui.define([
	"fragment/assignment1/controller/View1A1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1A1 Controller");

	QUnit.test("I should test the View1A1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});