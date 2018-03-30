function Bullet(){
	this.init=function(){		
	    this.body = createEle("div");
		this.body.className ="bullet";
		new GameEngine().body.appendChild(this.body);
		var _left = new MyPlane().left() + new MyPlane().width()/2 -this.width()/2;
		this.left(_left);
		var _top = new MyPlane().top() - this.height();
		this.top(_top);
		return this;
	}
	this.move = function(){
		this.timer = setInterval(function(){
			this.top( this.top() -5);
			if(this.top()<-this.height()){
				clearInterval(this.timer)
				this.body.remove();
			}
			//在子弹移动时  检测每一个子弹和敌机的碰撞    遍历所有的敌机
				//找到所有的敌机对象
			var enemes = new GameEngine().enemes;
			for( var en of enemes){
				if(pz(en.body,this.body)){
					this.explode();
					en.hurt();
					clearInterval(this.timer);
				}
			}
		}.bind(this),30)
	}
	this.explode = function(){
		this.body.className ="bullet_die";
		setTimeout(function(){
			this.body.style.backgeoundImage ="url(images/die2.png)"
			setTimeout(function(){				
		    this.body.remove();			
			}.bind(this),100)
		}.bind(this),200)
	}
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.left = function(val){
		if(val ||val==0){
			this.body.style.left = val + "px";
		}else{
			return this.body.offsetLeft;
		}
	}
	this.top = function(val){
		if(val || val==0){
			this.body.style.top = val + "px";
		}else{
			return this.body.offsetTop;
		}
	}
	this.height = function(){
		return this.body.offsetHeight;
	}
}
