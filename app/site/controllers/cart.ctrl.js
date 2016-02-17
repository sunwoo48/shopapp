angular.module('shopApp').controller('cartCtrl', cartCtrl);

function cartCtrl(api, productSrv, $location, $state) {
	this.location = $location;
	var ctrl = this;
	this.prdtSrv = productSrv;
	this.$state = $state;
	this.cartStatus = this.prdtSrv.cartItems

	this.total = 0; 
	this.tax = 0;
	this.finalTotal = 0;
	this.totalSubtract = 0;


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

var handler = StripeCheckout.configure({
	key: 'pk_test_2Ve84uOMhFuARr2DfVADUPRk',
	image: 'assets/img/logo.png',
	locale: 'auto',
	token: function(token) {
	  console.log(token)
	}
});

cartCtrl.prototype.stripePaymentHandler = function() {
	console.log('start');
    handler.open({
      name: 'Vinyl Shop',
      description: 'Get Yo Wax',
      currency: "cad",
      amount: Math.ceil(this.finalTotal*100),
    });
}

cartCtrl.prototype.deleteitem = function(product) {

	var indexat = this.cartStatus.indexOf(product);
	this.cartStatus.splice(indexat, 1);

	this.totalSubtract = product.price * product.quantity;
	this.total = this.totalSubtract;
	this.tax = this.total * 0.13;
	this.finalTotal = this.tax + this.total;

	if(this.cartStatus.length === 0) {
		this.total = 0.0;
		this.tax = 0.0;
		this.finalTotal = 0.0;
	}
}

