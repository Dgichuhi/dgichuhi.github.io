sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	'sap/m/Dialog', 'sap/m/Button','sap/m/Text'
], function (Controller, MessageToast, History, Dialog, Button, Text) {
	"use strict";
 
	return Controller.extend("sap.ui.webapp.controller.Detail", {
		onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
		
	},

_handleRouteMatched: function(evt) {
			
		this.detIndex = evt.getParameter("arguments").detIndex;

		
		var context = sap.ui.getCore().byId("app").getModel().getContext('/contacts/' + this.detIndex + '/');
		
		this.getView().setBindingContext(context);	
		
				
		
	},


onButtonPress: function(evt){
  //var x = new control.SpeechRecognitionInputControl();
 // var oLayout = this.getView().byId("thisPage");
   //   oLayout.addContent(x);
  },


			handleNavButtonPress : function () {
		
		
			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Empty", true);
			}
		
	},

	changeTohandleLineItemPress: function(evt){
		var msg = 'Sorry. This is a trial version';
            MessageToast.show(msg);

	}
	,
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
        },

	onMessageErrorDialogPress: function (oEvent) {
			var dialog = new Dialog({
				title: '0_0',
				type: 'Message',
				state: 'Error',
				content: new Text({
					text: 'Sorry. This is a trial version'
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
		},




		handleLineItemPress : function (evt) {

			var table = this.byId("feeds1"); 
			table.bindElement("/contacts/0");

			//http://stackoverflow.com/questions/40583491/how-can-i-display-json-data-as-a-feed-on-a-table-in-sapui5-xml-view

		var context = evt.getSource();



//var table = sap.ui.getCore().byId('feeds');
		
		//var item = table.getSource();
		
		var oBindingContext = context.getBindingContext();
		
		var sPath = oBindingContext.sPath;
		
		var start = sPath.lastIndexOf("/") + 1;
		
		var sub_detIndex = sPath.substring(start, sPath.length);
		
		this.router.navTo("live", {detIndex: this.detIndex, sub_detIndex: sub_detIndex});

		//this.nav.to("Livecase", context);
		
		//var oModel = new sap.ui.model.json.JSONModel("http://localhost/mycase/webapp/jsondata.php", false);
          //  sap.ui.getCore().setModel(oModel);
		
		//var obj = evt.getSource();
		//var oContext = obj.getBindingContext();
		//var clientnol = oContext.getProperty("clientno");
		
		
		

		
		//var oEntry={};
		//oEntry.clientno=clientnol;
		//	console.log(clientnol);
		 // Post data to the server
                            //oModel.loadData("http://localhost/mycase/webapp/jsondatalive.php", oEntry, true, 'POST');
	}	
	});
 
});
