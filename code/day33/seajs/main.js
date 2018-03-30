define(function(require){
	//引入其他的模块文件  并重命名
	var $ = require("jquery-1.11.1.min");
	var sc = require("setColor");
	//$("body").css("background","pink");
	//alert( sc.fn() );
	$("li").each(function(){
		$(this).css("background",sc.color() );
	})
})

