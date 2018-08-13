<template>
	<div>
		<div  v-show="state==1" class="state_shenhe1 state_shenhe">审核中</div>
		<div  v-show="state==3" class="state_shenhe2 state_shenhe">已驳回</div>
		<div  v-show="state==2" class="state_shenhe3 state_shenhe">已通过</div>
<!--		<div  v-show="state==4" class="state_shenhe4 state_shenhe">已过期</div>-->

	</div>
</template>

<script>
	export default({
		data() {
			return {
				
			}
		},

		props:{
			state:{
				default:'',
		
			},
		
		},
		mounted(){
		

		},
	
	})
</script>

<style scoped>
	.state_shenhe{
		 width: 3.8rem;
	    text-align: center;
	    height: 1.3rem;
	    line-height: 1.3rem;
	    border-radius: 1rem;
	    margin:  0 auto;
	}
	.state_shenhe1{
	    color: #fff;
	    background: #FFA200;
	} 
	.state_shenhe2{
	    color: #B1B1B1;
	    border: 1px solid #B1B1B1;
	} 
	.state_shenhe3{
	    color: #40A0F1;
	    border: 1px solid #40A0F1;
	} 
	.state_shenhe4{
	    color: #989898;
	    background: #E5E5E5;
	} 
</style>