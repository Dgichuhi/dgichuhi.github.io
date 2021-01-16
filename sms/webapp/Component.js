sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("sap.ui.webapp.Component", {


		metadata: {

		"rootView": "knc.ppe.com.view.App",		// initial view

		"routing": {
			 "config": {
			    "routerClass": "sap.m.routing.Router",	// router class
			    "viewType": "XML",						// types of views using in app
			    "viewPath": "sap.ui.webapp.view",			// folder of views
			    //"controlId": "app",						// container where pages are placed while navigating
			    "targetAggregation": "pages",			// contents which needs to be replced while navigating
					"transition": "float"					// navigation transition effect
			 },

			"routes": [
			
{
pattern: "sales",
name: "sales",
view: "SalesAnalysis",
targetAggregation: "detailPages"
}
	        ]
	        
			
		}
		
	}
		,
		
			createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.webapp.view.App",
			type : "XML",
			viewData : { component : this }
		});
		
						var oModel4 = new sap.ui.model.json.JSONModel("model/salesvolume.json");
oModel4.setSizeLimit(100000);
oView.setModel(oModel4, "salesvolume");
var oModel4 = new sap.ui.model.json.JSONModel("model/salesvolumeTotal.json");
oModel4.setSizeLimit(100000);
oView.setModel(oModel4, "salesvolumeTotal");
var oModel4 = new sap.ui.model.json.JSONModel("model/salesvolumedrill.json");
oModel4.setSizeLimit(100000);
oView.setModel(oModel4, "salesvolumedrill");
var oModel4 = new sap.ui.model.json.JSONModel("model/salesvolumecomparison.json");
oModel4.setSizeLimit(100000);
oView.setModel(oModel4, "salesvolumecomparison");
var oModel4 = new sap.ui.model.json.JSONModel("model/allsales.json");
oModel4.setSizeLimit(100000);
oView.setModel(oModel4, "allsales");
var oModel41 = new sap.ui.model.json.JSONModel("model/skus.json");
oModel41.setSizeLimit(100000);
oView.setModel(oModel41, "skus");
var oModel42 = new sap.ui.model.json.JSONModel("model/skuscomparison.json");
oModel42.setSizeLimit(100000);
oView.setModel(oModel42, "skuscomparison");
/*	var oModel4a = new sap.ui.model.json.JSONModel("model/customerItemsVolumes.json");
oModel4a.setSizeLimit(100000);
oView.setModel(oModel4a, "customerItemsVolumes");*/
var oModel4a = new sap.ui.model.json.JSONModel("model/regions.json");
oModel4a.setSizeLimit(100000);
oView.setModel(oModel4a, "region");
				
				
		
		var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleName: "sap.ui.webapp.i18n.i18n"
         });
		oView.setModel(i18nModel, "i18n");
		
			
		return oView;
			},
			init: function() {
		
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		this._router = this.getRouter();
		
		//initlialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
		
		
	}
		
 
	
	});
 
});
