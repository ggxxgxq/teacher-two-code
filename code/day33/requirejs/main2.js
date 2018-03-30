requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		vd : "validate",
		cookie : "cookie"
	}
})
requirejs(["jquery","vd","cookie"],function($,vd,ck){
	//$("body").css("background","pink")
	$("form").submit(function(){
		if( flagName && flagPwd && flagQpwd ){
			var ujson = {
				"uname" : $("#uname").val(),
				"upwd" : $("#upwd").val()
			}
			//存cookie
			setCookie("ulist", JSON.stringify( ujson ) );
			return true;
		}else{
			return false;
		}
	})
	//失去焦点做验证
	var flagName = null;
	$("#uname").blur(function(){
		if( vd.checkName( $("#uname").val() ) ){
			$("#s1").html("正确");
			flagName = true;
		}else{
			$("#s1").html("错误");
			flagName = false;
		}
	})
	
	var flagPwd = null;
	$("#upwd").blur(function(){
		if( vd.checkPwd( $("#upwd").val() ) ){
			$("#s2").html("正确");
			flagPwd = true;
		}else{
			$("#s2").html("错误");
			flagPwd = false;
		}
	})
	
	var flagQpwd = null;
	$("#qpwd").blur(function(){
		var pwd = $("#upwd").val();
		var qpwd = $("#qpwd").val();
		if( vd.isEqual( pwd,qpwd ) ){
			$("#s3").html("正确");
			flagQpwd = true;
		}else{
			$("#s3").html("错误");
			flagQpwd = false;
		}
	})
})
