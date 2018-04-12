<template>
	<div class="activitysList">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>组团活动</h1>
		</header>
		
		<div class="activitysBar">
			<div class="activitysBar-div">
				<router-link to='/index3/activitysList/'replace>所有活动</router-link>
				<router-link to='/index3/activitysList/activitysNav2'replace>我的参与</router-link>
			</div>
		</div>
		
		<router-view></router-view>
		
		<div class="flexd-go" @click="goWrite()">
			<span>发起组团</span>
		</div>
	</div>
</template>

<script>
	import activitysNav1 from '@/components/template/index3/activitys/activitysNav1'		//互动 > 组团活动list 所有活动
	import activitysNav2 from '@/components/template/index3/activitys/activitysNav2'		//互动 > 组团活动list 我的参与
	import activitysInfo from '@/components/template/index3/activitys/activitysInfo'		//互动 > 组团活动list 活动详情
	import activitysWrite from '@/components/template/index3/activitys/activitysWrite'		//互动 > 组团活动list 发起组团
	export default({
		data() {
			return {
				
			}
		},
		components:{
			activitysNav1,
			activitysNav2
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			goWrite() {
				this.$router.push({
					path: "/activitysList/activitysWrite"
				})
			},
			
		}
	})
</script>

<style scoped lang="less">
	.router-link-exact-active.router-link-active{
		color: forestgreen;
		font-weight: bold;
	}
	.activitysBar{
		position: absolute;
		/*top: 2.8rem;*/
		left: 0;
		width: 100%;z-index: 8888;
		background: #fff;
	}

	.activitysBar-div{
		border-bottom: 1px solid #C9C9C9;
		overflow: hidden;
		padding: 0.5rem 0;
		>a{
			float: left;
			width: 50%;
			height: 1.5rem;
			line-height: 1.5rem;
			text-align: center;
		}
		>a:first-child{
			border-right: 1px solid #C9C9C9;
		}
	}
</style>