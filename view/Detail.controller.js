sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	'sap/m/Dialog', 'sap/m/Button','sap/m/Text'
], function (Controller, MessageToast, History, Dialog, Button, Text) {
	"use strict";
 
	return Controller.extend("sap.ui.demo.myFiori.view.Detail", {
		onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},
_handleRouteMatched: function(evt) {
			
		this.detIndex = evt.getParameter("arguments").detIndex;

		
		var context = sap.ui.getCore().byId("app").getModel().getContext('/contacts/' + this.detIndex + '/');
		
		this.getView().setBindingContext(context);	
		
				
		
	},

	h123andleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	


			handleNavButtonPress : function () {
		
		
			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("master", true);
			}
		
	},
	onMessageDialogPress: function (oEvent) {
			 var dialog = new Dialog({
                title: 'A business application from us?',
                type: 'Message',
                    content: new Text({
                        text: 'Call/Whatsapp +254 702 495 991'
                    }),
                beginButton: new Button({
                    text: 'OK',
                    press: function () {
                        dialog.close();
                    }
                }),
                afterClose: function() {
                    dialog.destroy();
                }
            });
 
			dialog.open();
		}
});
	});
