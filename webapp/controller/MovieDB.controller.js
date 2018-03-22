sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast"
	], function(Controller, JSONModel, MessageToast) {
		return Controller.extend("Frankenstein.controller.MovieDB",{
			onInit: function() {
				var self = this;
				$.ajax({
					url: "https://api.themoviedb.org/3/discover/movie?api_key=ed17cc3db4b89c8d4e968b98ff4f8266&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
					success: function(result) {
						var oModel = new JSONModel(result.results);
						self.getView().setModel(oModel);
						console.log(result.results);
					},
					error: function() {
						MessageToast.show("ERROR");
					}
				});
			}
		});
	});