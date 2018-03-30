function GameEngine(){
		if(!GameEngine.instance){
			GameEngine.instance={
			body :$id("main"),
			oUl  : $id("options"),
			level : 0,//记录游戏等级
			enemes : new Set(),
			initMenu : function(){
				this.oUl.onclick=function(e){ 
					var e = e || event;
					var target = e.target || e.srcElement; 
					if(target.nodeName=="LI"){
					    this.level = target.getAttribute("level");
					    this.oUl.remove();
					    this.startGame();
					}
				}.bind(this)
			},
			startGame : function(){
				this.logo = createEle("div");
				this.loading = createEle("div");
				this.logo.className = "logo";
				this.loading.className = "loading"
				this.body.appendChild(this.logo);
				this.body.appendChild(this.loading);
				var index=1;
				this.loadingTimer = setInterval(function(){
					this.loading.style.background="url(images/loading"+ ++index +".png) no-repeat"
					if(index==3){
						index=0;
					}
				}.bind(this),500)
				var count=0;
				this.positionTimer = setInterval(function(){
					this.body.style.backgroundPositionY = ++count + "px";
				}.bind(this),30)
				//3s后logo和动画消失   plane 出现
			    setTimeout(function(){
			    	this.logo.remove()
			    	this.loading.remove()
			    	clearInterval(this.loadingTimer);
			    	this.play();
			    }.bind(this),3000)
		       },
			play: function(){
				new MyPlane().show();
				this.autocreateEnempy();
			},
			left: function(val){
				if(val || val==0){
					this.body.style.left = val + "px";
				}else{
					return this.body.offsetLeft;
				}
			},
			height :function(){
				return this.body.offsetHeight;
			},
			width: function(){
				return this.body.offsetWidth;
			},
			autocreateEnempy : function(){
				setInterval(function(){
					if(Math.random() > 0.2){
						this.enemes.add(new Enemy("small").init().move())
					}
				}.bind(this),1000)
				
				setInterval(function(){
					if(Math.random() > 0.35){
						this.enemes.add(new Enemy("middle").init().move())
					}
				}.bind(this),2000)
				
				setInterval (function(){
					if(Math.random() > 0.65){
						this.enemes.add(new Enemy("large").init().move())
					}
				}.bind(this),3000)
			}
		  }
		}
		
		return GameEngine.instance;
	}
	