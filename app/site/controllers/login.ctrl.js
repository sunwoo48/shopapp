app.controller('AuthCtrl',AuthCtrl);

function AuthCtrl($state,api){
	var ctrl = this;
	ctrl.$state = $state;
	ctrl.api =api;

	ctrl.password = null;
	ctrl.email = null;

	ctrl.auth_btn = 'Continue';

	if(localStorage.authToken){
		ctrl.$state.go('admin');
	}

}

AuthCtrl.prototype.login = function(){
	//console.log("loggin in");

	var ctrl = this;

	var payload = {
		email:ctrl.email,
		password:ctrl.password
	}
	ctrl.auth_btn = "Authorizing";
	//make api call
	ctrl.api.request('/users/login',payload,'POST')
	.then(function(res){
		console.log(res);
		//successfull response
		if(res.status == 200){
			ctrl.auth_btn = "Success";
			//user exists
			if(res.data.user != null){
				ctrl.$state.go('admin.product_management');
			}
		}
		else{
			ctrl.auth_btn = 'Invalid Password';
		}
		
	},function(){
		//error
		console.log(res);
		ctrl.auth_btn = "Error: Check console";
	})
}
