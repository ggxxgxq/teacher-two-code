<?php
	//接收客户端请求的数据
	$uname = $_GET["username"];
	//模拟数据   数组
	$arr = array("admin","xiaoming","xiaozhang");
	
	$flag = true;//flag值为真表示不存在
	//判断 $uname 在$arr数组中是否存在
	for( $i = 0 ; $i < count($arr) ; $i ++ ){
		if( $arr[$i] == $uname ){//存在
			$flag = false;
			break;
		}
	}
	
	//根据$flag 值  向客户端返回结果
	if( $flag ){ //不存在
		echo 0;
	}else{
		echo 1;
	}
?>