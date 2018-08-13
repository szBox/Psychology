<template>
	<div class="gamesList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>游戏擂台</h1>
		</header>
		<div class="b-content">
			<ul class="index3-list">
				<li v-for='(game,index) in gameList' @click="games(game.title,game.urls)">
					<img :src="game.img"  alt="" />
					<p>{{game.title}}</p>
					
				</li>
				
				
				
			</ul>
			<!--<ifname-game :gameTitle='gameTitle' :iframeState='iframeState'  :gameUrl='gameUrl' ></ifname-game>-->
		</div>
		
	</div>
</template>

<script>
	import ifnameGame from '@/components/common/ifnameGame'
	export default({
		data() {
			return {
				iframeState:false,
				gameUrl:'',
				gameTitle:'',
				gameList:[
				{
					title:'恐龙岛',img:require('../../../../assets/img/game2.png'),urls:'https://school.jingjing100.com/html5/heartApp/gameList/Dragons/index.htm'
				},
				{
					title:'打蜜蜂',img:require('../../../../assets/img/game1.png'),urls:'https://school.jingjing100.com/html5/heartApp/gameList/Galactians/index.htm'
				},
				{
					title:'跳一跳',img:require('../../../../assets/img/game7.png'),urls:'https://school.jingjing100.com/html5/heartApp/gameList/DangerRanger/index.htm'
				},
				{
					title:'打蜜蜂·加强',img:require('../../../../assets/img/game1.png'),urls:'https://school.jingjing100.com/html5/heartApp/gameList/Galactians2/index.htm'
				},
				]
			}
		},
		components:{
			ifnameGame
		},
		methods: {
			back() {
//				this.$router.push({path:'/home/index3'});
				this.$router.go(-1);
			},
			Air(){
//				this.$router.push({
//					path:'/gameAir'
//				});
				console.log('2222')
				this.iframeState=true
//				window.location.href='http://www.jq22.com/demo/canvasfjdz201801251142/'
			},
			games(t,urls){
//				this.gameTitle='蛇皮玩意'
//				this.iframeState=true;
//				this.gameUrl='http://120.24.178.171:8080/html5/gameList/DangerRanger/index.htm'
				this.$router.push({
					path:"/ifnameGame?title="+t+"&urls="+urls
				})
			}
		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
	}
	.index3-list{
		overflow: hidden;
	}
	
	.index3-list li {
	    float: left;
	    width: 24% !important;
	    text-align: center;
	    /*margin: 8% 5% 3%;*/
    }
	.index3-list li:nth-child(3n-1){
		margin-left: 8%;
	}
	.index3-list li:nth-child(3n-2){
		margin-left: 0;
	}
	.index3-list li:nth-child(3n){
		float: right;
		margin-right: 0;
	}
	.index3-list img{
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: paleturquoise;
	}
	.index3-list p{
		margin-top: 15px;
	}
</style>