sap.ui.controller("controller.Main", {

  onInit : function (evt) {
    // set mock model
    //var sPath = jQuery.sap.getModulePath("view.Main", "/data.json");
    //var oModel = new sap.ui.model.json.JSONModel(sPath);

    var oModel = new sap.ui.model.json.JSONModel("http://localhost/project1/jsondata.php");
    this.getView().setModel(oModel);
	var cont = this.byId("data");
  },

  handleEditPress : function (evt) {
    var oTileContainer = this.getView().byId("container");
    var newValue = ! oTileContainer.getEditable();
    oTileContainer.setEditable(newValue);
    evt.getSource().setText(newValue ? "Done" : "Edit");
  },

  handleBusyPress : function (evt) {
    var oTileContainer = this.getView().byId("container");
    var newValue = ! oTileContainer.getBusy();
    oTileContainer.setBusy(newValue);
    evt.getSource().setText(newValue ? "Done" : "Busy state");
  },

  handleTileDelete : function (evt) {
    var tile = evt.getParameter("tile");
    evt.getSource().removeTile(tile);
  },
 
		handleUserNamePress: function (event) {
			var popover = new sap.m.Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new sap.m.Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new sap.m.Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new sap.m.Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');
 
			popover.openBy(event.getSource());
		},
  
  handleClients: function(){
	  var page1 = sap.ui.view({viewName:"view.AddClient",
				enableScrolling: false, 
				type:sap.ui.core.mvc.ViewType.XML});
				 app = sap.ui.getCore().byId("App");
				 app.addPage(page1);
				 app.to(page1);
  },
    handleCase: function(){
	  var page3 = sap.ui.view({viewName:"view.Livecase",
				enableScrolling: false, 
				type:sap.ui.core.mvc.ViewType.XML});
				 app = sap.ui.getCore().byId("App");
				 app.addPage(page3);
				 app.to(page3);
  },
  handleBalances: function(){
	    var page2 = sap.ui.view({viewName:"view.Balance",
				enableScrolling: false, 
				type:sap.ui.core.mvc.ViewType.XML});
				 app1 = sap.ui.getCore().byId("App");
				 app1.addPage(page2);
				 app1.to(page2);
  }
});
