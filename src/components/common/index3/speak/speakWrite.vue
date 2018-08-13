<template>
	<div class="speakWrite">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>发表话题</h1>
		</header>
		
		<div class="b-content">
			<div class="img-top">
				<img class="" src="../../../../assets/img/topw2.png"/>
			</div>
			<div class="write-title">
			<span>话题名称：</span>
			<input v-model="title" maxlength="20" :placeholder="errtitle" type="text" />
			</div>
		
		
		<div class="write-bbox">
			<div class="wtire-text">
				<span>话题简介：</span>
				<textarea v-model="speak" maxlength="100" :placeholder="errspeak" rows="4"></textarea>
			</div>
			<div class="err-img">
				{{errimg}}
			</div>
			<div class="write-img">
				<div class="imgshow">
					<!--放图片-->
				</div>
				<div class="file-div">
					<input type="file" name="file1" id="imgFile" accept="image/*" @change="addPic">
					<img class="file-img" :src="speakImg" alt="" />
					<img :style="{'opacity':num}" src="../../../../assets/img/add.png" alt="" />
				</div>
			</div>
		</div>
		
		<div class="write-bottom">
			<p v-if='tips'>
				<img src="../../../../assets/img/icons_1.png"/>
				<span>发布之后需要进行审核</span>
			</p>
			<div class="btn-init" @click="dis && faqi()">
				发布
			</div>
		</div>
		</div>
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import { Toast } from 'vux'
	export default({
		data() {
			return {
				num:1,
				title:'',speak:'',speakImg:'',
				errtitle:'',errspeak:'',errimg:'',//错误提示
				tips:true,
				dis:true
			}
		},
		created(){
			var self=this;
			var role =localStorage.getItem('role')
			if(role=='M'){
				self.tips=false
			}
		},
		components:{
			Toast
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			addPic() {
				var self=this;
				self.num=0;
				self.speakImg=$('#imgFile')[0].files[0];
				self.errimg='';
			    self.alyConfig.uploadToAliyun(self.speakImg,function (url) {
			    	console.log('阿里云 图片地址',url)
	               self.speakImg=url;
	            })
				
//				$(".file-img").attr('src', URL.createObjectURL($('#imgFile')[0].files[0]) )
			},
			faqi(){
				var self=this;
				if(!self.title){
					self.errtitle='请输入话题名称'
				}else if(!self.speak){
					self.errspeak='请输入话题简介'
				}
				else if(!self.speakImg){
					self.errimg='请上传话题相关图片'
				}
				else{
					var url=int.speakAdd;
					var sid=localStorage.getItem('sid');
					var imageUrl=self.speakImg;
					var params={
						summary:self.speak,
						name:self.title,
//						sid: sid,
						imageUrl:self.speakImg
					}
					ajax.post_data(url, params, function(d) {
			//        	_this.$root.eventHub.$emit('Vloading',false)
			            console.log("发布漂流",d);
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
	.speakWrite{
		background: #F2F2F2;
	}
	.header{
		position: fixed;
	}
	input,textarea{border: none;}
	.write-title,.write-bbox{
		background: #fff;
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
	.write-title{
		padding:0.5rem 0.75rem;
		margin-bottom: 0.45rem;
		overflow: hidden;
		span{
			float: left;
			line-height: 1.5rem;
		}
		input{
			float: left;
			width: 78%;
			height: 1.5rem;
		}
	}
	.write-bbox{
		margin-bottom: 0.45rem;
		position: relative;
		.err-img{
			position: absolute;
			top: 4.6rem;
			left: 0.75rem;
			color: red;
		}
		>div.wtire-text{
			overflow: hidden;
			padding: 0.75rem;
			span{
				float: left;
				line-height: 1.5rem;
			}
			textarea{
				float: left;
				width: 78%;
				padding-top: 0.3rem;
			}
		}
		.write-img{
			padding: 0.75rem;
			.file-div{
				width: 4rem;
				height: 5rem;
				overflow: hidden;
				position: relative;
			}
			.file-div img {
				position: absolute;
				left: 50%;
				top: 50%;
				z-index: 11;
				width: 100%;
				-webkit-transform: translate(-50%, -50%);
				-moz-transform: translate(-50%, -50%);
				-ms-transform: translate(-50%, -50%);
				-o-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
			}
			.imgshow{
				float: left;
				img{
					
				}
			}
			#imgFile{
				position: absolute;
				float: left;
				 opacity: 0;
				 width: 100%;
				 height: 100%;
				 z-index: 12;
			}
		}
	}
	.write-bottom{
		padding: 0.75rem;
		
		p>img{
			width: 1.2rem;
		}
		p>span{
			font-size: 0.6rem;
			color: #555;
			line-height: 1rem;
		}
		div{
			width: 10rem;
		margin: 2rem auto 1rem;
			background: #31C4FF;
			border-radius: 1.5rem;
			color: #fff;
			height: 2.2rem;
			line-height: 2.2rem;
		}
	}
</style>