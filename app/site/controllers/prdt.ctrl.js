angular.module('shopApp').controller('prdtCtrl', prdtCtrl);

function prdtCtrl(api, productSrv, $location, $state) {
	this.location = $location;
	var ctrl = this;
	this.prdtSrv = productSrv;
	this.$state = $state;
	
	ctrl.product = {
		
	}


	ctrl.categories = [
		{label:'Country',value:'country'},
		{label:'Pop',value:'pop'},
		{label:'Rap/Hip-Hop',value:'rap/hip-Hop'},
		{label:'Dance/EDM',value:'dance/edm'},
		{label:'Rock',value:'rock'},
	];
	//ctrl.albums;
	//ctrl.name = this.prdtSrv.products;
	ctrl.products = this.prdtSrv.products;
	console.log(this.prdtSrv.product);
	//ctrl.albums = "ryan";
	//console.log(this.prdtSrv.products);
	//ctrl.albums = this.prdtSrv;

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

	console.log(album);	
}

// prdtCtrl.prototype.getProducts = function() {
// 	ctrl.category = this.prdtSrv.getProducts();
// }

prdtCtrl.prototype.callUpdate = function() {
	this.albums;
}

prdtCtrl.prototype.editProduct = function(product){
	console.log(product);
	this.product = product;
	this.$state.go('admin.edit_product');
}

prdtCtrl.prototype.deleteProduct = function(id) {
	console.log("deleting...");
	console.log(id);
	//this.location.path('/admin/dashboard');
	this.prdtSrv.deleteProduct(id);
	//console.log("ryan");
	//console.log(id);
	//this.prdtSrv.deleteProduct(id);
}