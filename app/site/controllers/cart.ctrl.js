angular.module('shopApp').controller('cartCtrl', cartCtrl);

function cartCtrl(api, productSrv, $location, $state) {
	this.location = $location;
	var ctrl = this;
	this.prdtSrv = productSrv;
	this.$state = $state;
	this.cartStatus = this.prdtSrv.cartItems
	this.total = 0; 
	this.tax = this.total * 0.13;


	ctrl.product = {}

	for(var i = 0; i < ctrl.cartStatus.length; i++) {
		this.total = (ctrl.cartStatus[i].price + this.total);
	}

	//console.log(this.);

	this.tax = this.total * 0.13;
	this.finalTotal = this.tax + this.total;

	this.price = this.qty * this.price; 

}

cartCtrl.prototype.albumTotal = function(qty, price){
	return qty * price;
	//this.total = (price * qty);
}

cartCtrl.prototype.try = function(name) {
	this.total += name.quantity * name.price;
	this.tax = this.total * 0.13;
	this.finalTotal = this.tax + this.total;
}
