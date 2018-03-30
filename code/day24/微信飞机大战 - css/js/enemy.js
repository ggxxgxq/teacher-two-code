function Enemy(type){
	this.type = type;
	this.body =createEle("div");
	this.init = function(){
		switch (this.type){
			case "small" :{
				this.body.className="enemy-small";
				new GameEngine().body.appendChild(this.body);
				this.speed =6;
				this.hp = 1;
				this.imgs =["plain1_die1.png","plain1_die2.png","plain1_die3.png"]
				this.left( rand(0,new GameEngine().width() - this.width() ));
				this.top(-this.height())
				break;
			}
			case "middle":{
				this.body.className="enemy-middle";
				new GameEngine().body.appendChild(this.body);
				this.speed =4;
				this.hp =3
				this.imgs = ["plain2_die1.png","plain2_die2.png","plain2_die3.png","plain2_die4.png"];
				this.left( rand(0,new GameEngine().width() - this.width() ));
				this.top(-this.height())
				break;
			}
			case "large" :{
				this.body.className="enemy-large";
				new GameEngine().body.appendChild(this.body);
				this.speed =1;
				this.hp =5;
				this.imgs = ["plain3_die1.png","plain3_die2.png","plain3_die3.png","plain3_die4.png","plain3_die5.png","plain3_die6.png"];
				this.left( rand(0,new GameEngine().width() - this.width() ));
				this.top(-this.height())
				break;
			}
		}
		return this;
	}
	this.move = function(){
		this.timer = setInterval(function(){
			this.top( this.top()+ this.speed)
			if(this.top() > new GameEngine().height()){
				clearInterval(this.timer)
				this.body.remove();
			}
			
		}.bind(this),30)
		return this;
	}
	this.left = function(val){
		if(val || val==0){
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
	this.width = function(){
		return this.body.offsetWidth;
	}
	this.hurt =function(){
		--this.hp ==0 ? this.explode(): "";
		
	}
	this.explode =function(){
		//this.body.remove();
		clearInterval(this.timer)
		new GameEngine().enemes.delete(this);
		var t =setInterval(function(){
			this.body.style.backgroundImage ="url(images/"+this.imgs.shift()+")";
			if(this.imgs.length==0){
				this.body.remove();
			}
		}.bind(this),300)
	}
}
