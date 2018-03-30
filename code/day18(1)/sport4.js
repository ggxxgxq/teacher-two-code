//obj要操作的对象
// json 代表 多个attr和target   { "width" : 300 ,"height":300 ,"opacity" :90 }
// callback 表示一个函数    一个函数作为参数，这样的函数 叫做   回调函数
function startMove(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		for( var attr in json ){
			var current = 0;
			if( attr == "opacity" ){ //透明度
				current = parseFloat( getStyle(obj,attr) ) * 100;
			}else{
				current = parseInt( getStyle(obj,attr) ) ; 
			}
			
			var speed = (json[attr]-current)/10;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
			if( current==json[attr] ){
				clearInterval( obj.timer );
				//上个动作结束后进入下一个动作   
				if( callback ){
					callback();
				}
			}else{
				if( attr == "opacity" ){ //透明度的操作
					obj.style[attr] = (current + speed) / 100;
				}else{
					obj.style[attr] = current + speed + "px";
				}
			}
		}
	},30)
}


//获取非行内元素样式    实际值  
function getStyle(obj,attr){ 
	if( getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
