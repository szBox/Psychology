<template>
	<div class="activitysList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>我的审核</h1>
			<em v-if='roleType' @click="goshenhe()">审核记录</em>
		</header>
		<div class="b-content">
			<div class="activitysBar">
				<div class="activitysBar-div">
					<router-link to='/index4/shenhe/'replace>
						<em>话题审核</em>
						<span></span>
					</router-link>
					<router-link :to='linkto' replace>
						<em>组团审核</em>
						<span></span>
					</router-link>
				</div>
			</div>
			
			<router-view></router-view>
		</div>
		
		
		
		
		
	</div>
</template>

<script>

	export default({
		data() {
			return {
				linkto:'',
				roleType:false,
			}
		},
		components:{

		},
		mounted(){
			var self=this;
			var role=localStorage.getItem('role');
			if(role=='S'){
				self.linkto='/index4/shenhe/shenheNav2'
			}else{
				self.linkto='/index4/shenhe/shenheNav3'
			}
			if(role=='M'){
				self.roleType=true
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			goshenhe(){
				this.$router.push({
					path: "/index4/shenheJilu"
				})
			}
			
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