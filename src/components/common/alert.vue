<template>
		<div class="alert-position" v-if='alertProps' :type='type'>
			<div class="alert-box">
				<img @click="close" class="img-closeB" src="../../assets/img/closebig.png"/>
				<div class="alert-top">
					<h1 class="alert-title">1111</h1>
				</div>
			</div>
		</div>
</template>

<script>
	export default({
		props:['alertProps','type'],
		data(){
			return{
				
			}
		},
		components:{
		
		},
		created(){
			var self=this
			if(self.type=='1'){
			
			}else if(self.type=='2'){
				
			}
		},
		methods: {
			close(){
				var self=this;
				self.alertProps=false
			},
		}
	})
</script>

<style scoped lang="less">
	.alert-position{
		position: fixed;
		top: 0;
		bottom:0;
		left: 0;
		right: 0;
		background:rgba(0,0,0,0.6);
		z-index: 99999999;
	}
	.alert-box{
		border-radius: 0.4rem;
		text-align: center;
		height: 15rem;
		width: 80%;
		background: #fff;
		position: fixed;
		top: 50%;
		left: 50%;
		-webkit-transform:  translate(-50%,-50%);
		-moz-transform:  translate(-50%,-50%);
		-ms-transform:  translate(-50%,-50%);
		-o-transform:  translate(-50%,-50%);
		transform:  translate(-50%,-50%);
		>.img-closeB{
			width: 1.4rem;
			position: fixed;
			top: -0.7rem;
			right: -0.7rem;
		}
	}
	.alert-title{
		color: #fff;
		padding: 0.5rem;
	}
	.alert-top{
		
	}
</style>