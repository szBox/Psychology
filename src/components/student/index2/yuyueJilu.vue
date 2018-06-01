<template>
	<div class="yuyueJilu">
		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>预约记录</h1>
		</header>
		
		<ul>
			<li>
				<img src="../../../assets/img/teacher2.png" alt="" />
				<div class="xiaoxi-div">
					<h4>王老师</h4>
					<h5>2018/3/29 17:00</h5>
					<p class="">预约时间：<span>4月2号  星期三上午</span></p>
				</div>
				
			</li>
			<li>
				<img src="../../../assets/img/teacher3.png" alt="" />
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
			border-bottom: 1px solid #F7F7F7;
			overflow: hidden;
			padding: 0.5rem 0;
			>img{
				float: left;
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
				margin-left: 0.75rem;
			}
			>.xiaoxi-div{
				float: left;
				width: 65%;
				margin-left: 0.5rem;
				>h4{
					font-size: 0.75rem;
				}
				>h5{
					color: #999;
					font-size: 0.65rem;
					margin: 0.3rem 0;
				}

			}
		}
		
	}
</style>