<template>
	<div class="ifnameGame" >
		<header class="header">
			<div  @click="back()"><img src="../../assets/img/goback.png" alt=""/></div>
			<h1>{{gameTitle}}</h1>
		</header>
		<iframe class="ifposi"  :src='gameUrl' style="width: 100%;"></iframe>
	</div>
</template>

<script>
	export default({
		data() {
			return {
				gameTitle:'',
				gameUrl:''
			}
		},
		mounted(){
			var h=$('body').height();
			$('.ifnameGame iframe').height(h)
			this.gameTitle=this.$route.query.title
			this.gameUrl=this.$route.query.urls
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

<style scoped>
	.header{
		position: fixed;
		
	}
	.ifposi{
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 2.4rem;
		border: none !important;
	}
</style>