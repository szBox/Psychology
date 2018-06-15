<template>
	<div class="shoucangList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>我的咨询</h1>
		</header>
		
		<ul>
			<li>
				<img src="../../../../assets/img/exchange_icon_recharge_n.png" alt="" />
				<div class="xiaoxi-div">
					<h4>王老师</h4>
					<p class="ellipsis">你小子要加油啊!</p>
				</div>
				<div>
					<em>08:21</em>
					<p>11</p>
				</div>
			</li>
			<li>
				<img src="../../../../assets/img/exchange_icon_recharge_n.png" alt="" />
				<div class="xiaoxi-div">
					<h4>王老师</h4>
					<p class="ellipsis">你小子要加油啊!</p>
				</div>
				<div>
					<em>08:21</em>
					
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
			goPath(path){
				this.$router.push(path)
			}
			
		}
	})
</script>

<style scoped lang="less">
	.shoucangList ul{
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
				>p{
					color: #666;
					font-size: 0.6rem;
					-webkit-line-clamp: 1;
				}
			}
			>div:last-child{
				float: right;
				margin-right: 0.75rem;
				color: #666;
				font-size: 0.6rem;
				text-align: right;
				>em{
					display: block;
				}
				>p{
					float: right;
					width: 1rem;
					height: 1rem;
					line-height: 1rem;
					text-align: center;
					border: 1px solid #555;
					color: #f00;
					border-radius: 50%;
					margin-top: 0.2rem;
				}
			}
		}
		
	}
</style>