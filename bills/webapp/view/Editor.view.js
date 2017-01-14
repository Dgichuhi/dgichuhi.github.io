sap.ui.localResources("editor");
     jQuery.sap.registerModulePath('editor','editor'); // this only works with disabled web security
    jQuery.sap.require("editor.ckeditor");
sap.ui.jsview("sap.ui.webapp.view.Editor", {

	getControllerName: function () {
		return "sap.ui.webapp.controller.Editor";
	},
	
	createContent: function (oController) {
		 var oEditor2 = new editor.CKEditor({
        value: '{/txt}',
        width: "100%",
        height: "290px",
	toolbarStartupExpanded: true,		
        toolbar: 'Basic',
        inline: false,
        uiColor: '#0090ff'
    });
	
		return oEditor2;
	}
});
