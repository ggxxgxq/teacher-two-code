<?php
	//接收客户端请求的数据
	$fn = $_GET["callback"];// $fn  代表了 客户端请求的数据  就是一个函数
	
	//模拟数据
	$arr = array( "name"=>"jack" );
	$data = json_encode($arr); 
 
	
	// 在服务器上实现函数调用  将服务器的数据返回到客户端
	echo $fn."(".$data.")";    //  函数名(实参)
?>