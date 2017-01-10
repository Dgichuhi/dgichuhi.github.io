sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	/*handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},*/

handleListItemPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var context = oEvent.getSource().getBindingContext();
			//var path = context.sPath; //"/collection/0"
 		//var start = path.lastIndexOf('/') + 1;
		
		//var detIndex = path.substring(start, path.length);
			oRouter.navTo('detail', context);
		},

		handleListItemPress1: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var context = oEvent.getSource().getBindingContext();
						oRouter.navTo('apps', context);
		},
		handleListItemPress2: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var context = oEvent.getSource().getBindingContext();
						oRouter.navTo('blogs', context);
		},




	handleSearch: function(evt){
		//creating a filter
		var filters=[];
		var query = evt.getParameter("query");
		if(query&&query.length>0){
			var filter = new sap.ui.model.Filter("Name",
			sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
	//update the master list with the new search
	
	var list = this.getView().byId("list");
	var binding = list.getBinding("items");
	binding.filter(filters);
	}
/*handleListSelect : function (evt) {
var context = evt.getParameter( "listItem").getBindingContext();
this.nav.to("Detail", context);
}*/
});