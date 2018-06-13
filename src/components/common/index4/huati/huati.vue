<template>
	<div class="activitysList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>我的话题</h1>
		
		</header>
		<div class="b-content">
			<div class="activitysBar">
				<div class="activitysBar-div">
					<router-link to='/index4/huati/'replace>
						<em>我的发布</em>
						<span></span>
					</router-link>
					<router-link to='/index4/huati/huatiNav2'replace>
						<em>我的参与</em>
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
				
			}
		},
		components:{

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