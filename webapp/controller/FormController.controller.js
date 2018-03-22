sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"Frankenstein/serv/Entity",
	"sap/ui/model/json/JSONModel"
	], function(Controller, MessageToast, Entity, JSONModel) {
		
		return Controller.extend("Frankenstein.controller.FormController", {
			
			dataTemplate: {
				products: []
			},
			
			onInit: function() {
				var oView = this.getView();
				sap.ui.getCore().getMessageManager().registerObject(oView, true);
				
				jQuery.sap.require("jquery.sap.storage");
				this.nameInput = this.getView().byId("nameInput");
				this.priceInput = this.getView().byId("priceInput");
				
				var oData = {
					price: 0,
					currenctCode: "BYN"
				};
				
				var oModel = new JSONModel(oData);
				this.getView().setModel(oModel);
			},
			
			formPress: function() {
				var name = this.nameInput.getValue();
				var price = this.priceInput.getValue();
				var product = this.buildProduct(name, price);
				var oEventBus = sap.ui.getCore().getEventBus();

				MessageToast.show("Product added");

				var oStore = jQuery.sap.storage(jQuery.sap.storage.Type.local);
				var localData = oStore.get("productList");
				if(!localData) {
					localData = this.dataTemplate;
				}

				localData.products.push(product);
				oStore.clear();
				oStore.put("productList", localData);
				
				this.nameInput.setValue("");
				this.priceInput.setValue(0);
				
				oEventBus.publish("Form", "ProductAdded", {});
			},
			
			buildProduct: function(name, price) {
				return new Entity().ProductEntity(name, price);
			}
		});
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	