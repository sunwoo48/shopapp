angular.module('shopApp').controller('prdtCtrl', prdtCtrl);

function prdtCtrl(api, productSrv, $location, $state) {
	this.location = $location;
	var ctrl = this;
	this.prdtSrv = productSrv;
	this.$state = $state;
	this.cartStatus = this.prdtSrv.cartItems
	
	ctrl.product = {
		
	}


	ctrl.cartItem = [];

	ctrl.categories = [
		{label:'Country',value:'country'},
		{label:'Pop',value:'pop'},
		{label:'Rap/Hip-Hop',value:'rap/hip-Hop'},
		{label:'Dance/EDM',value:'dance/edm'},
		{label:'Rock',value:'rock'},
	];
	ctrl.products = this.prdtSrv.products;

}

prdtCtrl.prototype.submitProduct = function() {
	
	var ctrl = this;
	var album = {
		name: ctrl.name, 
		image: ctrl.image,
		category: ctrl.category,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
	};
	this.prdtSrv.addProduct(album);

}

prdtCtrl.prototype.updateProduct = function() {
	this.prdtSrv.updateProduct(this.product,this.product.id);
}

prdtCtrl.prototype.editProduct = function(product){
	console.log(product);
	this.product = product;
	this.$state.go('admin.edit_product');
}

prdtCtrl.prototype.deleteProduct = function(id) {
	console.log("deleting...");
	console.log(id);
	this.prdtSrv.deleteProduct(id);
	location.reload(); 
}


prdtCtrl.prototype.navTo = function(url){
	this.location.url(url);
}

prdtCtrl.prototype.logout = function() {
	console.log("loggin out....");
	var ctrl = this;

	localStorage.removeItem('authToken');
	ctrl.$state.go('auth');
}

prdtCtrl.prototype.addItem = function(product){

	product.quantity = 1;
	this.prdtSrv.addToCart(product);
	console.log(this.cartItem);

}
