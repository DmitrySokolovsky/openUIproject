sap.ui.define("ProductEntity", [
		"sap/ui/base/Object"
	], 
	function(Object) {
		
		return new Object.extend("Frankenstein.serv.Entity", {
			ProductEntity: function(name, price) {
				this.name = name;
				this.price = price;
				
				return {
					name: this.name,
					price: this.price
				};	
			
			}
		});
});