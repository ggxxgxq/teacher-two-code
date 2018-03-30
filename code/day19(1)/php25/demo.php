<?php
	//防止输出中文乱码
	header("content-type:text/html;charset=utf-8");
	//输出  
	//echo "hello 小明<br>";
	
	//php变量    ：    $变量名  
	$age = 18;
	$name = "jack";
	//echo "大家好，我叫".$name."<br>";
	/*if( $age > 20 ){
		echo "可以当兵啦";
	}else{
		echo "来千锋学前端";
	}*/
	
	//循环
	/*for( $i = 0 ; $i < 100 ; $i ++ ){
		if( $i%2 ){
			echo $i . " ";
		}
	}*/
	
	
	//函数 
	/*function fn($a,$b){
		return $a > $b ? $a : $b;
	}
	echo fn( 34,56 );*/
	
	
	//数组
	//索引数组
	$arr3 = array( array(1,2,3),arr(4,5,6) );// 两行三列
	$arr = array(12,34,23,56,78);
	for( $i = 0 ; $i < count( $arr ) ; $i ++ ){
		echo $arr[$i]." ";
	}
	//关联数组
	/*$arr2 = array( "name"=>"jack" , "age"=>18 , "addr"=>"北京" );
	$json = json_encode( $arr2 ); //将一个关联数组转成json对象
	echo  $json ;*/
?>