sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.myFiori.view.Dummy", {
 	handleNavBack : function (evt) {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Master");
	}
		});
 
});
