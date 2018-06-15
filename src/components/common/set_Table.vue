<template>
	<div>
		<span v-show='yuyue!="4"&&yuyue!="3"&&yuyue!="2"&&yuyue!=""' @click="yuyueClick( yuyue.split('&')[1])"  class="yueyuY" :data-id=" yuyue.split('&')[1] ">设置预约</span>
		<span v-show='yuyue=="2"||yuyue==""||yuyue=="4"' class="yuyueN">设置预约</span>
		<span v-show='yuyue=="已预约"' class="yuyue3">已设置</span>
		
	</div>
</template>

<script>
	export default({
		data() {
			return {
				
			}
		},

		props:{
		
			yuyue:{
				type:String,
				default:''
			}
		},
		mounted(){
		
			
		},
	
		
		methods: {
			yuyueClick(yid){
			var self=this;
			var role=localStorage.getItem('role')
			if(role=='S'){
				this.$root.eventHub.$emit('zidingyi',yid)
			}
		}
			
		}
	})
</script>

<style scoped>
	
	.yueyuY{
		color: #55CFFD;
		width: 100%;
		display: inline-block;
	}
	.yuyueN{
		color: #9B999A;
		background: #F3EFF0;
		width: 100%;

		display: inline-block;
		
	}
	.yuyue3{
		color: #fff;
		background: #3991F5;
		width: 100%;
		
		display: inline-block;
	}

</style>