<?php
	//模拟数据   通过数组模拟数据   [{},{},{},{},....]
	$arr = array( 
				array("title"=>"习近平出席国家科学技术奖励大会并为最高奖获得者等颁奖","timer"=>"2018-1-8"),
				array("title"=>"大国重器 绘出新实力","timer"=>"2018-1-7"),
				array("title"=>"聆听习近平主席训令 全军闻令动 练兵热潮涌 ","timer"=>"2018-1-8"),
				array("title"=>"聆听习近平主席训令 全军闻令动 练兵热潮涌 ","timer"=>"2018-1-8"),
				array("title"=>"聆听习近平主席训令 全军闻令动 练兵热潮涌 ","timer"=>"2018-1-8"),
				array("title"=>"聆听习近平主席训令 全军闻令动 练兵热潮涌 ","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在6个省","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在7个省","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在7个省","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在7个省","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在7个省","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在7个省","timer"=>"2018-1-8"),
				array("title"=>"全国耕地质量总体稳定 优等地主要分布在7个省","timer"=>"2018-1-8")
		   );
	//返回列表的数据
	echo json_encode( $arr );
	/*$arr  = array( "title" => "今天星期一","timer"=>"2018-1-8" );
	echo json_encode( $arr );//将关联数组转成 json对象*/
?>
