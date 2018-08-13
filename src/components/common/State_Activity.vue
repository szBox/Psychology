<template>
	<div>
		<div  v-show="state==1" class="state_shenhe1 state_shenhe">我发起</div>
		<div  v-show="state==2" class="state_shenhe2 state_shenhe">审核中</div>
		<div  v-show="state==3" class="state_shenhe3 state_shenhe">已参与</div>
		<div  v-show="state==4" class="state_shenhe4 state_shenhe">已驳回</div>
		<div  v-show="state==5" class="state_shenhe5 state_shenhe">人员已满</div>
		<div  v-show="state==6" class="state_shenhe6 state_shenhe">未开始</div>
		<div  v-show="state==7" class="state_shenhe7 state_shenhe">未参与</div>
		<div  v-show="state==8" class="state_shenhe8 state_shenhe">已过期</div>
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
	    margin:  0.5rem auto 0;
	}
	.state_shenhe1,.state_shenhe2{
	    color: #fff;
	    background: #FFA200;
	} 
	
	.state_shenhe3{
	    color: #fff;
	    border: 1px solid #fff;
	} 
	.state_shenhe4,.state_shenhe5{
	    color: #fff;
	    background: #F56C6C;
	} 
	.state_shenhe6,.state_shenhe8{
	    color: #A0A0A0;
	    background: #e5e5e5;
	}
	.state_shenhe7{
	    color: #fff;
	    background: #e5e5e5;
	} 
</style>