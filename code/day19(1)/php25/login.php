<?php
	header("content-type:text/html;charset=utf-8");
	//接收客户端请求的数据
	$uname = $_GET["uname"];
	$upwd = $_GET["upwd"];
	if( $uname == "admin" && $upwd == "11111" ){
		echo "<script>alert('登录成功');location.href='http://www.baidu.com';</script>";
	}else{
		echo "登录失败";
	}
?>