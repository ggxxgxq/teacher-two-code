<?php
	header("content-type:text/html;charset=utf-8");
	//  $_POST[]   $_GET[]
	//服务器接收客户端请求的数据
	$username = $_POST["uname"];//接收用户名
	$userpwd = $_POST["upwd"];//接收密码  
	echo $username.",".$userpwd;//将接收的数据返回到客户端
?>