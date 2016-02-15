angular.module('shopApp').controller('CartCtrl', CartCtrl);

function CartCtrl(api, productSrv, $state) {
	var ctrl = this;
	this.prdtSrv = productSrv;
	this.$state = $state;
	
	ctrl.cartItem = {
		
	}
}


CartCtrl.prototype.addItem = function(cartItem){
	console.log(product);
	this.cartItem = cartItem;
	this.$state.go('cart');
};