sap.ui.controller("sap.ui.demo.myFiori.view.Apps", {

		onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);


//var oModel = new sap.ui.model.json.JSONModel("model/data.json");
   //this.getView().setModel(oModel);

    var oVizFrame = this.getView().byId("lineChartCard");

  var oData = {
				  "SalesShare": [{
					"Date": "2nd Jan",
					"Price": "250",
					"Profit":"30"
				}, {
					"Date": "2nd Feb",
					"Price": "275",
					"Profit":"100"
				}, {
					"Date": "4th May",
					"Price": "356",
					"Profit":"80"
				}, {
					"Date": "6th June",
					"Price": "310",
					"Profit":"200"
				}]};
				var oModel = new sap.ui.model.json.JSONModel(oData);
				this.getView().setModel(oModel);

                oVizFrame.setVizProperties({
      legend : {
        title: {visible : true}
      },
      
          title: {
              visible: true,
              text: 'Price of Beer'
          },
      });
          




		
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