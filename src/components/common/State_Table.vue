<template>
	<div>
		<span v-show='yuyue!="不可预约"&&yuyue!="已预约"&&yuyue!="已满"&&yuyue!=""' @click="yuyueClick( yuyue.split('&')[1])"  class="yueyuY" :data-id=" yuyue.split('&')[1] ">预约</span>
		<div v-show='yuyue=="不可预约"||yuyue==""' class="yuyueN">
			<p>不可</p>
			<p>预约</p>
		</div>
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
		font-size: 0.6rem;
		color: #55CFFD;
		display: inline-block;
	}
	
	.yuyueN{
		font-size: 0.6rem;
		color: #9B999A;
		background: #F3EFF0;
		width: 100%;

		display: inline-block;
		
	}
	.yuyueN>p{
		font-size: 0.6rem;
		line-height: 0;
		height: 1.125rem;
		line-height: 1.125;
	}
	.yuyueN>p:first-child{
		padding-top: 0.4rem;
	}
	.yuyue3{
		color: #fff;
		background: #9CC1D1;
		width: 100%;
		font-size: 0.6rem;
		display: inline-block;
	}
	.yuyue4{
		color: #9B999A;
		font-weight: bold;
		width: 100%;
		font-size: 0.6rem;
		display: inline-block;
	}
</style>