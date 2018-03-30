define(function(){
	return {
		checkName : function(uname){
			var reg = /^\w{3,6}$/;
			if( reg.test(uname) ){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(upwd){
			var reg = /^.{6,}$/;
			if( reg.test(upwd) ){
				return true;
			}else{
				return false;
			}
		},
		isEqual : function(qpwd,pwd){
			if( qpwd == pwd ){
				return true;
			}else{
				return false;
			}
		}
	};
})
