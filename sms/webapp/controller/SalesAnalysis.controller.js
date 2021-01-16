sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Popover",
	"sap/m/Button",
  'sap/viz/ui5/format/ChartFormatter',
			 'sap/viz/ui5/api/env/Format',
			 'sap/ui/core/util/Export',
			 'sap/ui/core/util/ExportTypeCSV'
], function (Controller, MessageToast,Popover,Button,ChartFormatter, Format,Export,ExportTypeCSV) {
	"use strict";

	return Controller.extend("knc.ppe.com.controller.SalesAnalysis", {
onInit: function(){





    Format.numericFormatter(ChartFormatter.getInstance());
		             var formatPattern = ChartFormatter.DefaultPattern;
			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame1");
		             oVizFrame.setVizProperties({
                   interaction: {
					zoom: {
						enablement: "enabled"
					},
					selectability: {
						mode: "EXCLUSIVE"
					}
				},
		                 plotArea: {
                         dataLabel: {
		                         formatString: formatPattern.SHORTFLOAT_MFD2,
                             showTotal: true,
		                         visible: true
		                     },
												 colorPalette :  d3.scale.category10().range(),
                         gridline: {
						visible: true
					}
		                 },
                     tooltip: {
					visible: true
				},
		                 valueAxis: {
		                     label: {
		                         formatString: formatPattern.SHORTFLOAT
		                     },
		                     title: {
		                         visible: true,
                             text: 'Quantities sold in cartons'
		                     }
		                 },
		                 categoryAxis: {
		                     title: {
		                         visible: true,
                             text: 'Item Groups'
		                     }
		                 },
		                 title: {
		                     visible: true,
		                     text: 'VOLUME IN CARTONS'
		                 }
		             });

								 var oPopOver = this.getView().byId("idPopOver1");
					 oPopOver.connect(oVizFrame.getVizUid());
					 oPopOver.setFormatString(formatPattern.STANDARDFLOAT);


					 var formatPattern1 = ChartFormatter.DefaultPattern;
var oVizFrame1 = this.oVizFrame1 = this.getView().byId("idVizFrame3");
					 oVizFrame1.setVizProperties({
						 interaction: {
		zoom: {
			enablement: "enabled"
		},
		selectability: {
			mode: "EXCLUSIVE"
		}
	},
							 plotArea: {
									 dataLabel: {
											 formatString: formatPattern1.SHORTFLOAT_MFD2,
											 showTotal: true,
											 visible: true
									 },
									 colorPalette :  d3.scale.category10().range(),
									 gridline: {
			visible: true
		}
							 },
							 tooltip: {
		visible: true
	},
							 valueAxis: {
									 label: {
											 formatString: formatPattern1.SHORTFLOAT
									 },
									 title: {
											 visible: true,
											 text: 'Quantities sold in cartons'
									 }
							 },
							 categoryAxis: {
									 title: {
											 visible: true,
											 text: 'Item Groups'
									 }
							 },
							 title: {
									 visible: true,
									 text: 'SALES VOLUME IN CARTONS COMPARISON CURRENT AND LAST YEAR UP TO DATE '
							 }
					 });

					 var oPopOver1 = this.getView().byId("idPopOver3");
		 oPopOver1.connect(oVizFrame1.getVizUid());
		 oPopOver1.setFormatString(formatPattern1.STANDARDFLOAT);

		 var formatPattern4 = ChartFormatter.DefaultPattern;
var oVizFrame4 = this.oVizFrame4 = this.getView().byId("idVizFrame4");
		 oVizFrame4.setVizProperties({
			 interaction: {
zoom: {
enablement: "enabled"
},
selectability: {
mode: "EXCLUSIVE"
}
},
				 plotArea: {
						 dataLabel: {
								 formatString: formatPattern4.SHORTFLOAT_MFD2,
								 showTotal: true,
								 visible: true
						 },
						 colorPalette :  d3.scale.category10().range(),
						 gridline: {
visible: true
}
				 },
				 tooltip: {
visible: true
},
				 valueAxis: {
						 label: {
								 formatString: formatPattern4.SHORTFLOAT
						 },
						 title: {
								 visible: true,
								 text: 'Quantities sold in cartons'
						 }
				 },
				 categoryAxis: {
						 title: {
								 visible: true,
								 text: 'Item Groups'
						 }
				 },
				 title: {
						 visible: true,
						 text: 'SALES VOLUME IN CARTONS BY YEAR'
				 }
		 });

		 var oPopOver4 = this.getView().byId("idPopOver4");
oPopOver4.connect(oVizFrame4.getVizUid());
oPopOver4.setFormatString(formatPattern4.STANDARDFLOAT);



var formatPattern5 = ChartFormatter.DefaultPattern;
var oVizFrame5 = this.oVizFrame5 = this.getView().byId("idVizFrame5");
oVizFrame5.setVizProperties({
 interaction: {
zoom: {
enablement: "enabled"
},
selectability: {
mode: "EXCLUSIVE"
}
},
	 plotArea: {
			 dataLabel: {
					 formatString: formatPattern5.SHORTFLOAT_MFD2,
					 showTotal: true,
					 visible: true
			 },
			 colorPalette :  d3.scale.category10().range(),
			 gridline: {
visible: true
}
	 },
	 tooltip: {
visible: true
},
	 valueAxis: {
			 label: {
					 formatString: formatPattern5.SHORTFLOAT
			 },
			 title: {
					 visible: true,
					 text: 'Quantities sold in cartons'
			 }
	 },
	 categoryAxis: {
			 title: {
					 visible: true,
					 text: 'SKUS'
			 }
	 },
	 title: {
			 visible: true,
			 text: 'VOLUME IN CARTONS'
	 }
});

var oPopOver5 = this.getView().byId("idPopOver5");
oPopOver5.connect(oVizFrame5.getVizUid());
oPopOver5.setFormatString(formatPattern5.STANDARDFLOAT);

var formatPattern6 = ChartFormatter.DefaultPattern;
var oVizFrame6 = this.oVizFrame6 = this.getView().byId("idVizFrame6");
oVizFrame6.setVizProperties({
 interaction: {
zoom: {
enablement: "enabled"
},
selectability: {
mode: "EXCLUSIVE"
}
},
	 plotArea: {
			 dataLabel: {
					 formatString: formatPattern6.SHORTFLOAT_MFD2,
					 showTotal: true,
					 visible: true
			 },
			 colorPalette :  d3.scale.category10().range(),
			 gridline: {
visible: true
}
	 },
	 tooltip: {
visible: true
},
	 valueAxis: {
			 label: {
					 formatString: formatPattern6.SHORTFLOAT
			 },
			 title: {
					 visible: true,
					 text: 'Quantities sold in cartons'
			 }
	 },
	 categoryAxis: {
			 title: {
					 visible: true,
					 text: 'SKUS'
			 }
	 },
	 title: {
			 visible: true,
			 text: 'VOLUME IN CARTONS'
	 }
});

var oPopOver6 = this.getView().byId("idPopOver6");
oPopOver6.connect(oVizFrame6.getVizUid());
oPopOver6.setFormatString(formatPattern6.STANDARDFLOAT);



		var formatPattern7 = ChartFormatter.DefaultPattern;
	 var oVizFrame7 = this.oVizFrame7 = this.getView().byId("idVizFrame7");
	  oVizFrame7.setVizProperties({
	 	 interaction: {
	 zoom: {
	 enablement: "enabled"
	 },
	 selectability: {
	 mode: "EXCLUSIVE"
	 }
	 },
	 		 plotArea: {
	 				 dataLabel: {
	 						 formatString: formatPattern7.SHORTFLOAT_MFD2,
	 						 showTotal: true,
	 						 visible: true
	 				 },
	 				 colorPalette :  d3.scale.category10().range(),
	 				 gridline: {
	 visible: true
	 }
	 		 },
	 		 tooltip: {
	 visible: true
	 },
	 		 valueAxis: {
	 				 label: {
	 						 formatString: formatPattern7.SHORTFLOAT
	 				 },
	 				 title: {
	 						 visible: true,
	 						 text: 'Quantities sold in cartons'
	 				 }
	 		 },
	 		 categoryAxis: {
	 				 title: {
	 						 visible: true,
	 						 text: 'REGIONS'
	 				 }
	 		 },
	 		 title: {
	 				 visible: true,
	 				 text: 'SALES VOLUME IN CARTONS BY REGION '
	 		 }
	  });

	  var oPopOver7 = this.getView().byId("idPopOver3");
	 oPopOver7.connect(oVizFrame7.getVizUid());
	 oPopOver7.setFormatString(formatPattern7.STANDARDFLOAT);






},


		salesdrill: function(evt){
			var oView = this.getView();
			var oDialog = oView.byId("salesdrillDialog");

			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "knc.ppe.com.view.Salesdrill", this);
				// connect dialog to view (models, lifecycle)
				oView.addDependent(oDialog);
			}

			Format.numericFormatter(ChartFormatter.getInstance());
									 var formatPattern = ChartFormatter.DefaultPattern;
				var oVizFrame2 = this.oVizFrame2 = this.getView().byId("idVizFrame2");
									 oVizFrame2.setVizProperties({
										 interaction: {
						zoom: {
							enablement: "enabled"
						},
						selectability: {
							mode: "EXCLUSIVE"
						}
					},
											 plotArea: {
													 dataLabel: {
															 formatString: formatPattern.SHORTFLOAT_MFD2,
															 showTotal: true,
															 visible: true
													 },
													 colorPalette :  d3.scale.category10().range(),
													 gridline: {
							visible: true
						}
											 },
											 tooltip: {
						visible: true
					},
											 valueAxis: {
													 label: {
															 formatString: formatPattern.SHORTFLOAT
													 },
													 title: {
															 visible: true,
															 text: 'Quantities sold in cartons'
													 }
											 },
											 categoryAxis: {
													 title: {
															 visible: true,
															 text: 'Item Name'
													 }
											 },
											 title: {
													 visible: true,
													 text: 'VOLUME IN CARTONS'
											 }
									 });

									 var oPopOver2 = this.getView().byId("idPopOver2");
						 oPopOver2.connect(oVizFrame2.getVizUid());
						 oPopOver2.setFormatString(formatPattern.STANDARDFLOAT);










			var path = evt.getSource().getBindingContext("salesvolumedrill").getPath();
			oDialog.bindElement("salesvolumedrill>"+path);

			oDialog.open();
		},
		salesdrillExit:function(){
			var oView = this.getView();
			var oDialog = oView.byId("salesdrillDialog");
				oDialog.close();
		},
		onSelectChanged: function(oEvent) {
            var key =oEvent.getParameters().key;
            if(key=='1') {
              MessageToast.show("Please wait...");
            }
            else if(key == '2')
            {
              MessageToast.show("Please wait...loading chart")
            }
						else if(key == '3')
            {
              MessageToast.show("Please wait...loading chart")
            };
        },
				onDataExport: sap.m.Table.prototype.exportData || function() {

			//var oModel = sap.ui.getCore().getModel("skuscomparison");
			//var oModel = new sap.ui.model.json.JSONModel("http://127.0.0.1/salesp/webapp/api/skuscomparison.php");
			//oModel.setSizeLimit(100000);
			//this.getView().setModel(oModel, "skuscomparison");
			var oModel1 = this.getView().getModel("skuscomparison");
			var oExport = new Export({

				exportType: new ExportTypeCSV({
					fileExtension: "csv",
					separatorChar: ";"
				}),

				models: oModel1,

				rows: {
					path: "/skuscomparison"
				},
				columns: [
					{
					name: "Item Group",
					template: {
						content: "{ItmsGrpNam}"
					}
				},
					{
					name: "Item Name",
					template: {
						content: "{ItemName}"
					}
				},
				{
					name: "Jan C.Y.",
					template: {
						content: "{JanC}"
					}
				}, {
					name: "Jan L.Y.",
					template: {
						content: "{JanL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentJan}"
					}
				}, {
					name: "Feb C.Y.",
					template: {
						content: "{FebC}"
					}
				}, {
					name: "Feb L.Y.",
					template: {
						content: "{FebL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentFeb}"
					}
				},{
					name: "Mar C.Y.",
					template: {
						content: "{MarC}"
					}
				}, {
					name: "Mar L.Y.",
					template: {
						content: "{MarL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentMar}"
					}
				},{
					name: "Apr C.Y.",
					template: {
						content: "{AprC}"
					}
				}, {
					name: "Apr L.Y.",
					template: {
						content: "{AprL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentApr}"
					}
				},{
					name: "May C.Y.",
					template: {
						content: "{MayC}"
					}
				}, {
					name: "May L.Y.",
					template: {
						content: "{MayL}"
					}
				},{
					name: "Percent up/down",
					template: {
						content: "{percentMay}"
					}
				}, {
					name: "June C.Y.",
					template: {
						content: "{JuneC}"
					}
				}, {
					name: "June L.Y.",
					template: {
						content: "{JuneL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentJune}"
					}
				},{
					name: "Jul C.Y.",
					template: {
						content: "{JulC}"
					}
				}, {
					name: "Jul L.Y.",
					template: {
						content: "{JulL}"
					}
				},{
					name: "Percent up/down",
					template: {
						content: "{percentJul}"
					}
				}, {
					name: "Aug C.Y.",
					template: {
						content: "{AugC}"
					}
				}, {
					name: "Aug L.Y.",
					template: {
						content: "{AugL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentAug}"
					}
				},{
					name: "Sep C.Y.",
					template: {
						content: "{SepC}"
					}
				}, {
					name: "Sep L.Y.",
					template: {
						content: "{SepL}"
					}
				},{
					name: "Percent up/down",
					template: {
						content: "{percentSep}"
					}
				}, {
					name: "Oct C.Y.",
					template: {
						content: "{OctC}"
					}
				}, {
					name: "Oct L.Y.",
					template: {
						content: "{OctL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentOct}"
					}
				},{
					name: "Nov C.Y.",
					template: {
						content: "{NovC}"
					}
				}, {
					name: "Nov L.Y.",
					template: {
						content: "{NovL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentNov}"
					}
				},{
					name: "Dec C.Y.",
					template: {
						content: "{DecC}"
					}
				}, {
					name: "Dec L.Y.",
					template: {
						content: "{DecL}"
					}
				}, {
					name: "Percent up/down",
					template: {
						content: "{percentDec}"
					}
				}
			]
			});
			console.log(oExport);
			oExport.saveFile().catch(function(oError) {

			}).then(function() {
				oExport.destroy();
			});
		},
		onSavePDF: function() {
			/*var ctrlString = "width=1000px, height=1500px"; // control page size
 	        var wind = window.open("","Print",ctrlString);
 		var sContent = this.getView().byId("idVizFrame6").exportToSVGString({ // read content and fit with page size
 			width: 1000,
 			height: 1500
 		});
 		wind.document.write(sContent);
 		wind.print();*/

		var chart = this.getView().byId('idVizFrame6'); // I get the chart
 var svg = chart.getDomRef().getElementsByTagName( "svg" )[0]; // I get the chart svg
 var canvas = document.createElement( "canvas" ); //I create a new canvas with svg height and width
			 var bBox = svg.getBBox();
			 canvas.width = 3000;
			 canvas.height = 3000;
			 var context = canvas.getContext( "2d" ); //setting the drawing context
			 var imageObj = new Image(); //Create a new image with svg metadata
			 imageObj.src = "data:image/svg+xml," + jQuery.sap.encodeURL(
				 svg.outerHTML.replace( /^<svg/, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1"' ) );
			 imageObj.onload = function() {
				 context.drawImage( imageObj, 0, 0,  canvas.width, canvas.height); //Draw the image to the canvas
	 var dataURL = canvas.toDataURL('base64');
				 const doc = new jsPDF('p', 'mm', 'a3'); // A4 landscape 297X210 //Create new jsPDF document
				 doc.context2d.pageWrapY = doc.internal.pageSize.height-20;
				 doc.addImage(dataURL, 'jpg', 10, 20);	//add the image
				 doc.save('chart_in_pdf'); //save the pdf
			 };
    },
		showSKUs: function(evt){
			var ItemName = evt.getSource().getBindingContext("skus");
			var name = ItemName.getProperty("ItemName");
			MessageToast.show(name);
		},
		onAfterRendering: function(){


		}


    });

});
