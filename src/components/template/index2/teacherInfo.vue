<template>
	<div class="teacherInfo">
		<header class="header">
			<img src="../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()"/>
			<h1>教师信息</h1>
		</header>
		
		<div class="teacherInfo-box">
			<div>
				<img src="../../../assets/img/exchange_icon_a-market_n.png" alt="" />
				<div class="zan-box">
					<img src="../../../assets/img/s2.png"/>
					<p>200</p>
				</div>
			</div>
			
			
			<ul class="teacherInfo-ul">
				<li>
					<span>姓名：</span>
					<em>李多云</em>
				</li>
				<li>
					<span>性别：</span>
					<em>男</em>
				</li>
				<li>
					<span>联系方式：</span>
					<em>13874866066</em>
				</li>
				<li>
					<span>擅长：</span>
					<em>吹牛皮</em>
				</li>
				<li>
					<span>个性签名</span>
					<em>风一样的男子</em>
				</li>
			</ul>
		</div>
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
	.teacherInfo{
		.teacherInfo-box{
			padding:2rem 0.75rem;
			>div{
				overflow: hidden;
				>img{
					width: 4rem;
					height: 4rem;
					background: lightblue;
					float: left;
					border-radius: 50%;
				}
				>div{
				float: right;
					img{
						width: 1.5rem;
						height: 1.5rem;
						float: left;
					}
					p{
						float: left;
						line-height: 1.5rem;
					}
				}
			}
		
			.teacherInfo-ul{
				clear: both;
				margin-top: 2rem;
				li{
					color: #000;
					font-weight: bold;
					line-height: 1.8rem;
				}
			}
		}
	}
</style>