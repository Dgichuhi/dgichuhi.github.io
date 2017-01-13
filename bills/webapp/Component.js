sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
   
], function (UIComponent) {
	"use strict";
 
	return UIComponent.extend("sap.ui.webapp.Component", {
 
		
			metadata: {
		
		routing: {
			
			config: {
				viewType: "XML",
				viewPath: "sap.ui.webapp.view",
				targetControl: "splitApp",
				clearTarget: false,
				transition: "flip",
				bypassed: {
               pattern: "notFound",
               name:"notfound",
               view:"NotFound",
               targetAggregation:"detailPages",
               transition:"flip"

            }
			},
			routes: [
			       {
			    	   pattern: "detail/{detIndex}",
			    		name: "detail",
			    			    	   view: "Detail",
			    			    	   targetAggregation: "detailPages",
			    			    	   transition:"flip",
			    	   subroutes: [
			    	   {
			    	   pattern: "detail/{detIndex}/sub-detail/{sub_detIndex}",
			    			    	   name: "live",
			    			    	   view: "Livecase",
			    			    	   targetAggregation: "detailPages",
			    			    	   transition:"flip",
			    	       	              
    	             }  ]


			    	   
			       },
			       {
			    	   pattern: "",
			    	   name: "default",
			    	   view: "Master",
			    	   targetAggregation: "masterPages",
			    	   subroutes: [
			    	               {
			    	            	   pattern: "",
			    			    	   name: "Welcome",
			    			    	   view: "Empty",
			    			    	   targetAggregation: "detailPages",
			    	               }
			    	              
			    	               
			    	   ]
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
			type : "JS",
			viewData : { component : this }
		});
		
		var oModel = new sap.ui.model.json.JSONModel("model/data1.json");
		oView.setModel(oModel);
		
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
