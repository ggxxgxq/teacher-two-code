//引入其他的外部js文件   并对引入的文件进行重命名操作
requirejs.config({
	paths : {
		jquery : "jquery-1.11.1.min",
		index : "index"
	}
})
//  []  要依赖的其他模块名称
requirejs(["jquery","index"],function($,obj){
	//$("body").css("background","red")
	$("#box").css("border","2px solid blue");
	alert(  obj.maxNum()  );
	alert( obj.sum() );
	obj.fn();
})

