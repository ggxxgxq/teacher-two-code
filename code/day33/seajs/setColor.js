define(function(require,exports,module){
	/*var obj = {
		fn : function(){
			return "hello";
		},
		say : function(){
			return "say";
		},
		rand : function(min,max){
			return  Math.round(Math.random()*(max-min) + min);
		},
		color: function(){
			var str = "0123456789abcdef";
			var c = "#";
			for( var i = 0 ; i < 6 ; i ++ ){
				c +=  str.charAt( this.rand( 0,15 ) )
			}
			return c;
		}
	}
	// exports,module   一起使用  负责模块的暴露   
	module.exports = obj;//模块暴露  相当于  return obj*/
	class Color{
		rand(min,max){
			return  Math.round(Math.random()*(max-min) + min);
		}
		color(){
			var str = "0123456789abcdef";
			var c = "#";
			for( var i = 0 ; i < 6 ; i ++ ){
				c +=  str.charAt( this.rand( 0,15 ) )
			}
			return c;
		}
	}
	module.exports = new Color();
})