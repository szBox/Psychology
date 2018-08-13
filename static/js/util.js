// JavaScript Document
var Util={
	windowWidth:350,
	windowHeight:480,
	selfPlaneElement:null,
	enemyPlaneElement:null,
	bulletElement:null,
	parentElement:null,
	scoreSpan:null,
	g:function(id){
		return document.getElementById(id);
	},
	
	init:function(){
		this.parentElement=this.g("parent");
		
		this.selfPlaneElement=this._loadImg("http://192.168.0.33:8123/src/components/games/air/images/self.gif");
		
		this.enemyPlaneElement=this._loadImg("http://192.168.0.33:8123/src/components/games/air/images/boss.gif");
		
		this.bulletElement=this._loadImg("http://192.168.0.33:8123/src/components/games/air/images/bullet.jpg");
		
		this.scoreSpan=this.g("score");
	},
	
	_loadImg:function(src){
		var e=document.createElement("img");
		e.style.position="absolute";
		e.src=src;
		return e;
	}
}