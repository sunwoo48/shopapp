angular.module('shopApp').controller('AboutUsCtrl', AboutUsCtrl);

function AboutUsCtrl(productSrv, $location) {
	var ctrl = this;
	this.location = $location;
	this.prdtSrv = productSrv;
}

AboutUsCtrl.prototype.toAbout = function() {
	this.location.path("site/partials/aboutus.html")
}