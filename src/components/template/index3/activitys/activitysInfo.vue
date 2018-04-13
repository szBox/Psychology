<template>

	<div class="activitysInfo">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>植树活动</h1>
		</header>
		
		<ul class="activitys-ul">
			<li>
				<p>已参与</p>
				<div class="activitys-info">
					<p class="activitys-block">
						发起人：<span>王大大</span>
					</p>
					<p>
						发起时间：<span>2017/8/20</span>
					</p>
					<p>
						活动详情：<span>我想组织一次春游，希望大家积极来参与</span>
					</p>
					<p>
						报名时间：<span>2017-08-12 :08:00~2017-09-12 08:00</span>
					</p>
					<p class="activitys-block">
						消费情况：人均<span>200</span>元
					</p>
					<p class="activitys-block">
						联系方式：人均<span>教师605</span>
					</p>
				</div>
			</li>
		</ul>
		<div class="bgg"></div>
		<div class="baoming-box">
			<h1>
				<span>已报名</span>
				<em>
					<span>
						<i>10</i>人
					</span>
					/<i>20</i>人
				</em>
			</h1>
			<ul>
				<li>
					<em>王大力</em><span>150****1111</span><span>三年级二班</span>
				</li>
				<li>
					<em>王大力</em><span>150****1111</span><span>三年级二班</span>
				</li>
				<li>
					<em>王大力</em><span>150****1111</span><span>三年级二班</span>
				</li>
			</ul>
		</div>
		<div class="bgg"></div>
		<div class="btn-box">
			<div class="btn-init">我要退出</div>
		</div>
	</div>
</template>

<script>
	export default({
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	})
</script>

<style scoped lang="less">
	
	.baoming-box{

	}
	.btn-box{
		padding: 6rem 0.75rem 1.5rem;
	}
	
</style>