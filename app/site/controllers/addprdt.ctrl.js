angular.module('shopApp').controller('AddPrdt', AddPrdt);

function AddPrdt(productSrv) {
	var ctrl = this;
	this.prdtSrv = productSrv;


	// ctrl.album = {
	// 	name: ctrl.
	// }

}

AddPrdt.prototype.submitProduct = function() {
	var ctrl = this;
	
	var album = {
		name: ctrl.name, 
		image: ctrl.image, 
		price: ctrl.price,
		quantity: ctrl.quantity,
		description: ctrl.description
	};

	this.prdtSrv.addProduct(album);
	// this.album {
	// 	name: ctrl.name,
	// 	image: ctrl.image,
	// 	price: ctrl.price,
	// 	quantity: ctrl.quantity
	// };

	console.log(album);
	//console.log(this.prdtSrv);

	//call addProduct function in product.srv.js pass album object 
	//productSrv.addProduct(ctrl.album);
	
}