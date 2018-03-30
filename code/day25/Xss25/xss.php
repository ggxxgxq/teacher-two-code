<?php
	header("content-type:text/html;charset=utf-8");
	//接收客户端提交的数据
	$uname = $_POST["uname"];
	//将 $uname 中的标签去掉
	$res = strip_tags($uname);
	echo $res;
?>