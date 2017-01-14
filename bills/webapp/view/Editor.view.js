sap.ui.localResources("openui5");
     jQuery.sap.registerModulePath('openui5','openui5'); // this only works with disabled web security
    jQuery.sap.require("openui5.ckeditor");
sap.ui.jsview("sap.ui.webapp.view.Editor", {

	getControllerName: function () {
		return "sap.ui.webapp.controller.Editor";
	},
	
	createContent: function (oController) {
		 var oEditor2 = new openui5.CKEditor({
        value: '{/txt}',
        width: "600px",
        height: "290px",
        //toolbar: 'Basic',
        inline: false,
        uiColor: '#0090ff'
    });
	
		return oEditor2;
	}
});