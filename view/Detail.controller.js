sap.ui.controller("sap.ui.demo.myFiori.view.Detail", {

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
	/*,
	onBeforeRendering: function(){
this.byId("SupplierForm").bindElement("/MypracticeNavigation");
}*/


			handleNavButtonPress : function () {
		
		
			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("master", true);
			}
		
	}
});