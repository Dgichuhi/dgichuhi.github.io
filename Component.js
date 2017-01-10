jQuery.sap.declare("sap.ui.demo.myFiori.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.myFiori.Component", {

	
			metadata: {
		
		routing: {
			
			config: {
				viewType: "XML",
				viewPath: "sap.ui.demo.myFiori.view",
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
			    	   pattern: "detail/fiori",
			    		name: "detail",
			    			    	   view: "Detail",
			    			    	   targetAggregation: "detailPages",
			    			    	   transition:"flip",
			    	  		    	   
			       },
			       {
			    	   pattern: "detail/apps",
			    		name: "apps",
			    			    	   view: "Apps",
			    			    	   targetAggregation: "detailPages",
			    			    	   transition:"flip",
			    	  		    	   
			       },
			       {
			    	   pattern: "detail/blogs",
			    		name: "blogs",
			    			    	   view: "Blogs",
			    			    	   targetAggregation: "detailPages",
			    			    	   transition:"flip",
			    	  		    	   
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
			    			    	   view: "Dummy",
			    			    	   targetAggregation: "detailPages",
			    	               }
			    	              
			    	               
			    	   ]
			       } 
	        ]
	        
			
		}
		
	},

	init: function(){
		// create the views based on the url/hash
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		
		//call createContent
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		this._router = this.getRouter();
		
		//initlialize the router
		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
	},

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.myFiori.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		// set i18n model

		

//		// Using OData model to connect against a real service
//		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
//		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
//		oView.setModel(oModel);

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/master.json");
		oView.setModel(oModel);
		
		// set device model
var deviceModel = new sap.ui.model.json.JSONModel({
isPhone : jQuery.device.is.phone,
isNoPhone : ! jQuery.device.is.phone,
listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster" ,
listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
});
deviceModel.setDefaultBindingMode( "OneWay");
oView.setModel(deviceModel, "device");

		// done
		return oView;
	}
});
