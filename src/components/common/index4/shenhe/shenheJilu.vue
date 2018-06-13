<template>
	<div class="activitysList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>审核记录</h1>
			
		</header>
		<div class="b-content">
			<div class="activitysBar">
				<div class="activitysBar-div">
					<router-link to='/index4/shenheJilu/'replace>
						<em>话题审核</em>
						<span></span>
					</router-link>
					<router-link to='/index4/shenheJilu/shenheJilu2' replace>
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
		},
		methods: {
			back() {
				this.$router.go(-1);
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