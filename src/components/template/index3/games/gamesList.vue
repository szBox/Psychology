<template>
	<div class="gamesList">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>游戏擂台</h1>
		</header>
		<ul class="index3-list">
				<li>
					<img src="../../../../assets/img/exchange_icon_my_n.png"  alt="" />
					<p>蛇皮怪</p>
				</li>
				<li>
					<img src="../../../../assets/img/exchange_icon_a-market_n.png" alt="" />
					<p>玛丽医生</p>
				</li>
				<li>
					<img src="../../../../assets/img/exchange_icon_game-interaction_n.png"/>
					<p>合金弹头</p>
				</li>
				
				
			</ul>
	</div>
</template>

<script>
	export default({
		data() {
			return {
				
			}
		},
		
		methods: {
			back() {
				this.$router.go(-1);
			},
			
		}
	})
</script>

<style scoped lang="less">
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
		background: paleturquoise;
	}
	.index3-list p{
		margin-top: 15px;
	}
</style>