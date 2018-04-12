<template>
	<div class="yueduInfo">
		<header class="header">
			<img src="../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()"/>
			<h1>详情</h1>
		</header>
		
		<div class="yuedu-content">
			<h1>人性方面的细节调和，是从心理的角度还是从理性的角度思考？</h1>
			<em>2018-03-02 12:00</em>
			<div>
				<img src="" alt="" />
			</div>
			<p>
				<span></span>
				 学校心理辅导和学校思想品德教育在具体目标上不一致：心理辅导是为了解决心理问题、恢复心理平衡，提高理成熟水平、
				 心理功能正常化等；德育工作是使个体有正确的社会态度，提高社会化水平、行为符合社会规范。
			</p>
		</div>
		
		<div class="yuedu-bbox">
			<h1>评论列表(<span>10</span>)</h1>
			<ul>
				<li>
					<div class="pinglun-user">
						<img src="../../../assets/img/exchange_icon_a-market_n.png"/>
						<div>
							<h2>王大明</h2>
							<p>2018-03-16 12:00:00</p>
						</div>
						<p>
							<em>1</em>楼
						</p>
					</div>
					<div class="pinglun">
						老师说的很有道理，我发现我变了;
					</div>
				</li>
				<li>
					<div class="pinglun-user">
						<img src="../../../assets/img/exchange_icon_a-market_n.png"/>
						<div>
							<h2>王大明</h2>
							<p>2018-03-16 12:00:00</p>
						</div>
						<p>
							<em>1</em>楼
						</p>
					</div>
					<div class="pinglun">
						老师说的很有道理，我发现我变了;
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default({
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	})
</script>

<style scoped lang="less">
	.yueduInfo{
		background: #F2F2F2;
	}
	.yuedu-content,header,.yuedu-bbox{
		background: #fff;
	}
	.yuedu-content{
		padding: 0.75rem;
		h1{
			font-weight: bold;
			font-size: 0.85rem;
		}
		em{
			display: block;
			text-align: right;
			font-size: 0.6rem;
			color: #666;
		}
		div{
			width: 100%;
			height: 6rem;
			border: 1px solid red;
			margin: 0.5rem 0 ;
		}
		p{
			font-size: 0.65rem;
			color: #000;
			line-height: 1.2rem;
			>span{
				margin-left: 1.3rem;
			}
		}
		
	}
	
	.yuedu-bbox{
		margin: 0.5rem 0 2rem;
		ul>li{
			padding: 0.75rem;
		}
		div.pinglun{
			border-bottom: 1px solid #e4e4e4;
			padding: 0.2rem 0.75rem 0.75rem;
			padding-left: 3.25rem;
		}
		h1{
			padding: 0.5rem 0.75rem;
			border-bottom: 1px solid #E4E4E4;
		}
	}
	
	
	.pinglun-user{
		overflow: hidden;
		>img{
			float: left;
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			background: hotpink;
		}
		>div{
			float: left;
			margin-left: 0.75rem;
			height: 2.5rem;
			line-height: 1.25rem;
			p{
				font-size: 0.6rem;
				color: #555;
			}
		}
		>p{
			float: right;
			color: #555;
			margin-right: 0.75rem;
			font-size: 0.6rem;
		}
		
	}

</style>