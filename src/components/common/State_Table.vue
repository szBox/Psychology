<template>
	<div>
		<span v-show='yuyue!="不可预约"&&yuyue!="已预约"&&yuyue!="已满"&&yuyue!=""' @click="yuyueClick( yuyue.split('&')[1])"  class="yueyuY" :data-id=" yuyue.split('&')[1] ">预约</span>
		<span v-show='yuyue=="不可预约"||yuyue==""' class="yuyueN">不可预约</span>
		<span v-show='yuyue=="已预约"' class="yuyue3">已预约</span>
		<span v-show='yuyue=="已满"' class="yuyue4">已满</span>
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
				this.$root.eventHub.$emit('zidingyi',yid)
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
		background: #9CC1D1;
		width: 100%;
		
		display: inline-block;
	}
	.yuyue4{
		color: red;
		font-weight: bold;
		width: 100%;

		display: inline-block;
	}
</style>