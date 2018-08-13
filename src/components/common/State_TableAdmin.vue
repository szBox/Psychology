<template>
	<div>
		<div v-show='yuyue!="不可预约"&&yuyue!="已预约"&&yuyue!="已满"&&yuyue!=""'  class="yuyueY" :data-id=" yuyue.split('&')[1] ">
			<p>已设置</p>
			<p>预约</p>
		</div>
		<div v-show='yuyue=="不可预约"||yuyue==""' class="yuyueN">
			<p>设置</p>
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
			
		}
	})
</script>

<style scoped>
	
	.yuyueY{
		color: #fff;
	    background: #32C4FF;
	    width: 100%;
	    border: none;
	    font-size: 0.6rem;
	    display: inline-block;
	}
	.yuyueY>p,.yuyueN>p{
		
		line-height: 0;
		height: 1.125rem;
		line-height: 1.125;
	}
	.yuyueY>p:first-child,.yuyueN>p:first-child{
		padding-top: 0.4rem;
	}
	.yuyueN{
		color: #9B999A;
		background: #F3EFF0;
		width: 100%;
		font-size: 0.6rem;
		display: inline-block;
		
	}
	.yuyue3{
		font-size: 0.6rem;
		color: #fff;
		background: #9CC1D1;
		width: 100%;
		
		display: inline-block;
	}
	.yuyue4{
		font-size: 0.6rem;
		color: #9B999A;
		font-weight: bold;
		width: 100%;

		display: inline-block;
	}
</style>