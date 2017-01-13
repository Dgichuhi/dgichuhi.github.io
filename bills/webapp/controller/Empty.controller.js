sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller,JSONModel) {
	"use strict";
 
	return Controller.extend("sap.ui.webapp.controller.Empty", {
 onButtonPress: function(evt){
  var x = new control.SpeechRecognitionInputControl();
  var oLayout = this.getView().byId("thisPage");
      oLayout.addContent(x);
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

 	var lst = this.byId("ShortProductList1"); 
			//lst.bindElement("/contacts");
			// create model
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2015", "11", "15", "8", "0"),
				people: [{
									pic: "sap-icon://employee",
									name: "Max Mustermann",
									role: "team member",
									appointments: [
									               {
									              	 start: new Date("2015", "11", "15", "10", "0"),
									              	 end: new Date("2015", "11", "15", "12", "0"),
									              	 title: "Team meeting",
									              	 info: "room 1",
									              	 type: "Type01",
									              	 pic: "sap-icon://sap-ui5",
									              	 tentative: false
									               },
									               {
									              	 start: new Date("2015", "11", "16", "0", "0"),
									              	 end: new Date("2015", "11", "16", "23", "59"),
									              	 title: "Vacation",
									              	 info: "out of office",
									              	 type: "Type04",
									              	 tentative: false
									               }
									               ],
									headers: [
									          {
									          	start: new Date("2015", "11", "16", "0", "0"),
									          	end: new Date("2015", "11", "16", "23", "59"),
									          	title: "Private",
									          	type: "Type05"
									          },
									          ]
								},
								{
									pic: "test-resources/sap/ui/demokit/explored/img/johnDoe.png",
									name: "John Doe",
									role: "team member",
									appointments: [
									               {
									              	 start: new Date("2015", "11", "15", "08", "30"),
									              	 end: new Date("2015", "11", "15", "09", "30"),
									              	 title: "Meeting",
									              	 type: "Type02",
									              	 tentative: false
									               },
									               {
									              	 start: new Date("2015", "11", "15", "10", "0"),
									              	 end: new Date("2015", "11", "15", "12", "0"),
									              	 title: "Team meeting",
									              	 info: "room 1",
									              	 type: "Type01",
									              	 pic: "sap-icon://sap-ui5",
									              	 tentative: false
									               },
									               {
									              	 start: new Date("2015", "11", "15", "11", "30"),
									              	 end: new Date("2015", "11", "15", "13", "30"),
									              	 title: "Lunch",
									              	 type: "Type03",
									              	 tentative: true
									               }
									               ],
									headers: [
									          {
									          	start: new Date("2015", "11", "15", "8", "0"),
									          	end: new Date("2015", "11", "15", "10", "0"),
									          	title: "Reminder",
									          	type: "Type06"
									          }
									          ]
								}
				]
			});
			this.getView().setModel(oModel);
 
		},
		dateFormatter: function(s){
    return new Date(s);
}
	
	});
 
});