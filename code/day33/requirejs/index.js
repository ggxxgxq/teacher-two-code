//实现具体的功能
define(function(){
	//为什么要用return呢？
	//为什么要返回一个对象？
	return {
		fn : function(){
			alert("hello");
		},
		sum : function(){
			var arr = [1,2,3,4,5];
			var s = 0;
			for( var i = 0 ; i < arr.length ; i++ ){
				s += arr[i];
			}
			return s;
		},
		maxNum : function(){
			var arr = [1,2,3,4,5];
			return Math.max(...arr);
			//Math.max.apply(null,arr)
		}
	}
})
