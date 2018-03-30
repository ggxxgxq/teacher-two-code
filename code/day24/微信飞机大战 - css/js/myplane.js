function MyPlane(){
		if(!MyPlane.instance){
			MyPlane.instance = {
				show : function(){
					this.init();
					this.addListener({type :"mouse"});
					this.fire();
				},
				init : function(){		
					this.body = createEle("div");
					this.body.className = "my-warplain";
					new GameEngine().body.appendChild(this.body);
					var _left = (new GameEngine().width() -this.width())/2 ;
					this.left(_left);
					this.body.style.bottom="0px";
				},
				addListener : function(obj){
					switch(obj.type){
						case "mouse" :{
							new GameEngine().body.addEventListener("mousemove",function(e){
								var e = e || event;
					            var _left = e.pageX - new GameEngine().left() - this.width()/2;
					            //var Math.max = (0,_left)
					            //var Math.min =()
					            _left = Math.min((new GameEngine().width()-this.width()),Math.max(0,_left))
					            this.left(_left);
							}.bind(this))
							break;
						}
						case "key" :{
							document.addEventListener("keydown",function(e){
								var e = e || event;
								var code= e.keycode || e.which;
								switch(code){
									case 37 :{
										var _left = this.left()-5;
										_left = Math.max(0,_left);
										this.left(_left);
										break;
									}
									case 39 :{
										this.left( Math.min(new GameEngine().width() - this.width(),this.left()+7) );
										break;
									}
								}
							}.bind(this))
						}
					}
				},
				fire : function(){
					setInterval(function(){
						new Bullet().init().move();
					},100*new GameEngine().level)
				},
				left : function(val){ //设置飞机左侧初始位置
					if(val || val==0){ //如果存在则获取  考虑到如果为0的情况进不来
						this.body.style.left = val + "px";
					}else{
						return this.body.offsetLeft;
					}
				},
				width : function(){
					return this.body.offsetWidth;
				},
				top : function(val){
					if(val || val==0){
						this.body.style.top = val +"px";
					}else{
						return this.body.offsetTop;
					}
				}
			}
		}
		return MyPlane.instance;
	}