angular.module('shopApp').controller('CartCtrl', CartCtrl);

function CartCtrl(api, productSrv) {
	var ctrl = this;

	ctrl.productSrv = productSrv;
}