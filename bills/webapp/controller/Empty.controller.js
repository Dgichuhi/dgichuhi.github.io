sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller,JSONModel) {
	"use strict";
 
	return Controller.extend("sap.ui.webapp.controller.Empty", {
 onButtonPress: function(evt){
  //var x = new control.SpeechRecognitionInputControl();
 // var oLayout = this.getView().byId("thisPage");
    //  oLayout.addContent(x);
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
        },

 onInit: function () {

 	
}
	
	});
 
});
