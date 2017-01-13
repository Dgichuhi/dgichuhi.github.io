sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller) {
	"use strict";
 
	return Controller.extend("sap.ui.webapp.controller.Master", {
		
		handleSearch : function (evt) {
		
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("firstname", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
		
		// update list binding
		var list = this.getView().byId("ShortProductList");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
 	handleListItemPress : function (evt) {

 		var router = sap.ui.core.UIComponent.getRouterFor(this);
 		var context = evt.getSource().getBindingContext();
 		var path = context.sPath; //"/collection/0"
 		var start = path.lastIndexOf('/') + 1;
		
		var detIndex = path.substring(start, path.length);
		
		router.navTo('detail', {detIndex: detIndex});
		
				
		//this.nav.to("detail", context);
		//var input = evt.getSource().getParent().getItems()[0]; 
		//alert(input.getProperty('value'));
		
		//var oModel = new sap.ui.model.json.JSONModel("http://localhost/mycase/webapp/jsondata.php", false);
          //  sap.ui.getCore().setModel(oModel);
		
		//var obj = evt.getSource();
		//var oContext = obj.getBindingContext();
		//var clientnol = oContext.getProperty("clientno");
		
		
		

		
		//var oEntry={};
		//oEntry.clientno=clientnol;
		//console.log(clientnol);
		
		 // Post data to the server
                            //oModel.loadData("http://localhost/mycase/webapp/jsonlive.php", clientnol, true, 'POST');
		
		
		
	
		
		 //console.log(oEntry);
		
		//var oItem = evt.getSource();

		//var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.navTo("client", {
			//	clientno: oItem.getBindingContext().getPath().substr(1)
			//});
		
	}
	
	});
 
});
