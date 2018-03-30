<?php
	//允许跨域请求数据
	header("Access-Control-Allow-Origin:*");//在任何域下都可以访问该服务器文件的数据
	$uname = $_GET["uname"];
	$upwd = $_GET["upwd"];
	if( $uname == "admin" && $upwd == "123" ){
		echo 1;
	}else{
		echo 0;
	}
?>