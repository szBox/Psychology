<template>
	<div class="index3">
		<header class="header">
			<h1>互动</h1>
		</header>
		
		<section class="index3-section">
			<ul class="index3-list">
				<li>
					<img @click="goPath({path:'/index3/speakList'})" src="../../../assets/img/exchange_icon_a-market_n.png"  alt="" />
					<p>留言板</p>
				</li>
				<li>
					<img @click="goPath({path:'/index3/mp3List'})" src="../../../assets/img/exchange_icon_recharge_n.png" alt="" />
					<p>点歌台</p>
				</li>
				<li>
					<img  @click="goPath({path:'/index3/booksList'})"  src="../../../../build/logo.png"/>
					<p>图书漂流</p>
				</li>
				<li>
					<img  @click="goPath({path:'/index3/activitysList'})"  src="../../../assets/img/exchange_icon_my_n.png" alt="" />
					<p>组团活动</p>
				</li>
				<li>
					<img  @click="goPath({path:'/index3/gamesList'})"  src="../../../assets/img/exchange_icon_game-interaction_n.png" alt="" />
					<p>游戏擂台</p>
				</li>
				
			</ul>
		</section>
	</div>
</template>

<script>
	import speakList from '@/components/template/index1/yueduInfo'		//互动 > 留言板list
	import mp3List from '@/components/template/index3/mp3/mp3List'		//互动 > 点歌台list
	import booksList from '@/components/template/index3/books/booksList'		//互动 > 图书漂流list
	import activitysList from '@/components/template/index3/activitys/activitysList'		//互动 > 组团活动list
	import gamesList from '@/components/template/index3/games/gamesList'		//互动 > 组团活动list
	export default({
		methods:{
			goPath(path){
				this.$router.push(path)
			}
		}
	})
</script>

<style scoped>
	
	.index3-list{
		padding:1.5rem 1rem;
		overflow: hidden;
	}
	.index3-list li{
		float: left;
		width: 31%;
		margin-bottom: 0.75rem;
		text-align: center;
	}
	.index3-list li:nth-child(3n-1){
		margin-left: 3.3%;
		margin-right: 3.3%;
		
	}
	.index3-list img{
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: palevioletred;
	}
	.index3-list p{
		margin-top: 15px;
	}
</style>