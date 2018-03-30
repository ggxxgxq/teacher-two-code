//obj要操作的对象
//target  目标值
// attr  操作的样式属性
// callback 表示一个函数    一个函数作为参数，这样的函数 叫做   回调函数
function startMove(obj,target,attr,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var current = 0;
		if( attr == "opacity" ){ //透明度
			current = parseFloat( getStyle(obj,attr) ) * 100;
		}else{
			current = parseInt( getStyle(obj,attr) ) ; 
		}
		
		var speed = (target-current)/10;
		speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
		if( current==target ){
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
