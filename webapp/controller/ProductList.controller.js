sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
	], 
	function(Controller, JSONModel, MessageToast) {
		return Controller.extend("Frankenstein.controller.ProductList", {
			onInit: function() {
				var oEventBus = sap.ui.getCore().getEventBus();
				oEventBus.subscribe("Form", "ProductAdded", this.getData, this);
				
				var oViewModel = new JSONModel({
					currency: "BYN"
				});
				this.getView().setModel(oViewModel, "productTable");
				
				this.getData();
			},
			
			clearStore: function() {
				var oStore = jQuery.sap.storage(jQuery.sap.storage.Type.local);
				oStore.clear();
				var storeData = oStore.get("productList");
				if(!storeData) {
					MessageToast.show("Storage is clear");
				}
				
				this.getData();
			},

			getData: function() {
				jQuery.sap.require("jquery.sap.storage");
				var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
				var localData = oStorage.get("productList");
				
				var oProductModel = new JSONModel(localData);
				this.getView().setModel(oProductModel, "products");
			}
		});
	});