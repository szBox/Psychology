<template>
	<div class="chat">
		<header class="header" style="position: fixed;">
			<div  @click="back()"><img src="../../assets/img/goback.png" alt=""/></div>
			<h1>李老师</h1>
		</header>
		<div class="b-content">
			<div class="chat-box">
				<div id='sc' class='chat-over'>
					<div class="my"  v-for="chat in chatList">
					<img :src="chat.img">
					<p>
						{{chat.text}}
						<img src="../../assets/img/sP.png" alt="" />
					</p>
					
					</div>
				</div>
				
			</div>
		</div>
		
		<div class="chat-fixed">
			<input  @keyup.enter="fasong()" v-model="chatVal" type="text" placeholder="写点什么..."/>
			<span @click="fasong()">发送</span>
		</div>
	</div>
</template>

<script>
	export default({
		data(){
			return{
				chatVal:'',
					uimg:'src/assets/img/student.png',
				chatList:[],
			}
		},
		mounted(){
			var bH=$(window).height()-$('.header').height()-$('.chat-fixed').height();
			console.log(bH)
			$('.chat-box').css({'min-height':bH})
		},
		methods:{
			
			back() {
				this.$router.go(-1);
			},
			fasong(){
				var self=this;
				$("#sc").scrollTop(999999999);
				 console.log($("#sc").scrollTop()+" px");
				if(self.chatVal!=''){
					self.chatList.push({
						text:self.chatVal,
						img:self.uimg
					})
					self.chatVal=''

					
				}
				
			},

		}
	})
</script>

<style scoped lang="less">
	.b-content{
		padding-top: 2.5rem;
	}
	.chat-over{
		overflow: hidden;
	}
	.chat-fixed{
		position: fixed;
		bottom: 0;
		left: 0;
	
		background: #fff;
		width: 100%;
		padding: 0.5rem 0.75rem;
		input{
			width: 85%;
			float: left;
			height: 1.8rem;
			line-height: 1.8rem;
			background: #EEEFF3;
			border-radius: 1.5rem;
			border: none;
			padding-left: 0.75rem;
		}
		span{
			float: right;
			height: 1.8rem;
			line-height: 1.8rem;
			font-size: 0.8rem;
		}
	}
	.chat-box{
		background: #F4F4F4;
		height: auto;
		padding-bottom: 3.5rem;
	}
	.my{
		float: right;
		padding-right: 0.75rem;
		overflow: hidden;
		width: 80%;
		margin: 0.3rem 0;
		>img{
			width: 2.5rem;
			height: 2.5rem;
			border-radius: 50%;
			float: right;
		}
		>p{
			float: right;
			background: #28B6FF;
			
			color: #fff;
			font-size: 0.7rem;
			/*line-height: 2rem;*/
			border-radius: 1rem 0 0.9rem 1rem;
			padding: 0.5rem 0.5rem;
			margin-right: 0.75rem;
			max-width: 75%;
			height: auto;
			position: relative;
			margin-top: 0.4rem;
			word-wrap: break-word; 
			word-break: normal; 
			>img{
				position: absolute;
				right: -6px;
				top: 0;
				
			}
		}
	}
	::-webkit-scrollbar{
	  display:none;
	}
</style>