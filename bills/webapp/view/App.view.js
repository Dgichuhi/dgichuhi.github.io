sap.ui.jsview("sap.ui.webapp.view.App", {

	getControllerName: function () {
		return "sap.ui.webapp.controller.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp("splitApp",{});
		
		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.webapp.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the detail page
		//var detail = sap.ui.xmlview("Detail", "sap.ui.webapp.view.Detail");
		//detail.getController().nav = this.getController();
		//this.app.addPage(detail, false);
		var empty = sap.ui.xmlview("Empty", "sap.ui.webapp.view.Empty");
		this.app.addPage(empty, false);
		
		// done
		return this.app;
	}
	
});
