sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller) {
	"use strict";

	return Controller.extend("Frankenstein.controller.Main", {
		onInit: function() {
			
		},
		
		onNavPress: function(oEvent) {
			var path = this.getNavPath(oEvent);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(path);
		},
		
		getNavPath: function(oEvent) {
			var oItemId = oEvent.getParameter("id");
			return oItemId.split("--")[1];
		}
	});
});