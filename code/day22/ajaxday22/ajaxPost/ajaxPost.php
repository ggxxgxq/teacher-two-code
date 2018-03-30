<?php
	//接收客户端发送的用户名和密码
	$username = $_POST["uname"];
	$userpwd = $_POST["upwd"];
	if( $username == "admin" && $userpwd == "111" ){
		echo 1;
	}else{
		echo 0;
	}
?>