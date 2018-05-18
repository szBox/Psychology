<template>
	<div class="yuyueJilu">
		<header class="header">
			<img src="../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()"/>
			<h1>预约记录</h1>
		</header>
		
		<ul>
			<li>
				<img src="../../../assets/img/exchange_icon_a-market_n.png" alt="" />
				<div class="xiaoxi-div">
					<h4>王老师</h4>
					<h5>2018/3/29 17:00</h5>
					<p class="">预约时间：<span>4月2号  星期三上午</span></p>
				</div>
				
			</li>
			<li>
				<img src="../../../assets/img/exchange_icon_game-interaction_n.png" alt="" />
				<div class="xiaoxi-div">
					<h4>王老师</h4>
					<h5>2018/3/29 17:00</h5>
					<p class="">预约时间：<span>4月2号  星期三上午</span></p>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default({
		methods:{
			back() {
				this.$router.go(-1);
			},
		}
	})
</script>

<style scoped lang="less">
	.yuyueJilu ul{
		li{
			border-bottom: 1px solid #E4E4E4;
			overflow: hidden;
			padding: 0.5rem 0;
			>img{
				float: left;
				width: 2.25rem;
				height: 2.25rem;
				border-radius: 50%;
				background: #333;
				margin-left: 0.75rem;
			}
			>.xiaoxi-div{
				float: left;
				width: 65%;
				margin-left: 0.5rem;
				>h5,>p{
					color: #666;
					font-size: 0.6rem;
					
				}

			}
		}
		
	}
</style>