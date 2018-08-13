<template>
	<div class="mp3Choose">
		<header class="header">
			<div @click="back()"><img src="../../../../assets/img/goback.png" alt="" /></div>
			<h1>我要点歌</h1>
		</header>
		<div class="b-content">
			<div class="img-top">
				<img class="" src="../../../../assets/img/topm1.png"/>
			</div>
			<div class="mp3ChooseInp">
				<div class="mp3ChooseInp-div">
					<span>歌曲名称:</span>
					<input v-model="mp3" maxlength="20" :placeholder="errmp3" type="text" />
				</div>
				<div class="mp3ChooseInp-div">
					<span>赠送给:</span>
					<input v-model="to" maxlength="20" :placeholder="errto" type="text" />
				</div>
				
				<div class="mp3ChooseInp-div">
					<span>我想说:</span>
					<textarea v-model="speak" maxlength="50" :placeholder="errSpeak" name="" rows="3" cols=""></textarea>
				</div>
				<div class="mp3ChooseInp-div">
					<span>播放时间:</span>
					<em class="em-data">
						<datetime format='YYYY-MM-DD HH:mm' clear-text='确认' :placeholder='errTime' v-model="mp3Time"  start-date='2018-01-01' @on-clear='change1'></datetime>
					</em>
					
				</div>
			</div>
			<div class="btn-box">
				<div class="btn-init" @click="dis && mp3D()">
					点歌
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { Datetime, Toast } from 'vux'
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	export default({

	
			data() {
				return {
					dis:true,
					mp3:'',to:'',speak:'',mp3Time:'',mp3Timenum:'',
					errmp3:'',errto:'',errSpeak:'',errTime:'',//错误提示
				}
		},
		
		components: {
			Toast,
			Datetime,
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			change1(value) {
				console.log('change', value)
				var self = this;
				self.mp3Timenum = new Date(value).getTime()
				self.mp3Time = value
			
			},
			mp3D(){
				var self=this;
				if(!self.mp3){
					self.errmp3='请输入歌曲名称'
				}else if(!self.to){
					self.errto='请输入赠送人'
				}else if(!self.speak){
					self.errSpeak='请输入你想说的内容'
				}
				else if(!self.mp3Timenum){
					self.errTime='请选择播放时间'
				}
				else if(self.mp3Timenum<new Date().getTime()){
					self.$vux.toast.show({
						type: 'text',
						text: '播放时间已过',
						position: 'bottom'
					})
				}
				else{
					var url=int.mp3Add;
					var sid=localStorage.getItem('sid');
//					var loginId=localStorage.getItem('loginId');
//					var loginName=localStorage.getItem('loginName');
					var params={
						content: self.speak,
						name: self.mp3,
						playTime: self.mp3Timenum,
						sid: sid,
						toNickName: self.to
					}
					ajax.post_data(url, params, function(d) {
			//        	_this.$root.eventHub.$emit('Vloading',false)
			            console.log("发布点歌",d);
						if(d.code==0){
							self.dis=false;
							self.$vux.toast.show({
								type: 'text',
								text: '发布成功',
								position: 'bottom'
							})
							setTimeout(function(){
								self.back()
							},800)
						}
						
		       		});
				}
			}
		}
	})
</script>

<style scoped lang="less">

	
	.header {
		position: fixed;
	}
	.mp3Choose{
		background: #F4F4F4;
	}
	
	input {
		border: none;
	}
	.img-top{
		text-align: center;
		padding: 1rem 0;
		background: #fff;
		margin-bottom: 0.4rem;
		img{
			width: 8.5rem;
			
		}
	}
	.mp3ChooseInp {
		padding-bottom: 1px;
		background: #F2F2F2;
		.mp3ChooseInp-div {
			background: #fff;
			overflow: hidden;
			padding: 0.5rem 0.75rem;
			margin-bottom: 0.5rem;
			.em-data{
				float: left;
				width: 100%;
				height: 1.8rem;
				line-height: 1.8rem;
				margin-left: -4.75rem;
				>a{
					padding-left: 1rem;
					display: block;
					width: 100%;
					height: 1.8rem;
					line-height: 1.8rem;
				}
			}
			span {
				float: left;
				line-height: 1.8rem;
				/*width: 4.2rem;*/
				margin-right: 0.3rem;
			}
			input,textarea {
				float: left;
				width: 75%;
				height: 1.8rem;
			}
			>textarea{
				width: 85%;
				height: auto;
				padding-top: 0.45rem;
				border: none;
			}
		}
	}
	.btn-box {
		width: 10rem;
		margin: 2rem auto 1rem;
		
		>.btn-init{
			background: #31C4FF;
			border-radius: 1.5rem;
			color: #fff;
			height: 2.2rem;
			line-height: 2.2rem;
		}
	}
</style>