<template>
	<div class="activitysList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>组团活动</h1>
			<em @click="goWrite()">{{role}}</em>
		</header>
		<div class="b-content">
			<div class="activitysBar">
				<div class="activitysBar-div">
					<router-link to='/index3/activitysList/'replace>
						<em>所有活动</em>
						<span></span>
					</router-link>
					<router-link to='/index3/activitysList/activitysNav2'replace>
						<em>我的活动</em>
						<span></span>
					</router-link>
				</div>
			</div>
			
			<router-view></router-view>
		</div>
		
		
		
		
		
	</div>
</template>

<script>
	import activitysNav1 from '@/components/common/index3/activitys/activitysNav1'		//互动 > 组团活动list 所有活动
	import activitysNav2 from '@/components/common/index3/activitys/activitysNav2'		//互动 > 组团活动list 我的参与
	import activitysInfo from '@/components/common/index3/activitys/activitysInfo'		//互动 > 组团活动list 活动详情
	import activitysWrite from '@/components/common/index3/activitys/activitysWrite'		//互动 > 组团活动list 发起组团
	export default({
		data() {
			return {
				role:'',
			}
		},
		components:{
			activitysNav1,
			activitysNav2
		},
		created(){
			var self=this;
			self.role=localStorage.getItem('role');
			if(self.role!='S'){
				self.role='发起组团'
			}else{
				self.role=''
			}
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
		color: #3991f4;
		font-weight: bold;
	}
	.activitysList{
		background: #f4f4f4;
	}
	.header{
		position: fixed;
	}
</style>