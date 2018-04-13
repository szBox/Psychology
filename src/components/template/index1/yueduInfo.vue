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
	

</style>