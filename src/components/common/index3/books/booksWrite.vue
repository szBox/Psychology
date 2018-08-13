<template>
	<div class="booksWrite">
		<header class="header">
			<div @click="back()"><img src="../../../../assets/img/goback.png" alt="" /></div>
			<h1>发起漂流</h1>
		</header>
		<div class="b-content">
			<div class="img-top">
				<img class="" src="../../../../assets/img/topw1.png"/>
			</div>
			<div class="write-title">
				<p>
					<span>我的书：</span>
					<input v-model="book1" maxlength="20" type="text" :placeholder="errbook1"/>
				</p>
				
				<p>
					<span>我想看的书：</span>
					<input v-model="book2" maxlength="20" type="text" :placeholder="errbook2"/>
				</p>
				
			</div>
			
			<div class="write-title">
				<span>联系地址：</span>
				<input v-model="tel" maxlength="20" type="text"  :placeholder="errtel"/>
			</div>

			<div class="write-bbox">
				<h1>书籍封面： <span style="color: red;">{{errimg}}</span></h1>
				<div class="write-img">
					<div class="imgshow">
						<!--放图片-->
					</div>
					<div class="file-div">
						<input type="file" name="file1" id="imgFile" accept="image/*" @change="addPic">
						<img class="file-img" :src="bookImg" alt="" />
						<img :style="{'opacity':num}" src="../../../../assets/img/add.png" alt="" />
					</div>
				</div>
			</div>

		
			<div class="btn-box">
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
				dis:true,
				book1:'',book2:'',tel:'',bookImg:'',
				errbook1:'',errbook2:'',errtel:'',errimg:'',//错误提示
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
				
				self.bookImg=$('#imgFile')[0].files[0];
				self.errimg='';
			    self.alyConfig.uploadToAliyun(self.bookImg,function (url) {
			    	console.log('阿里云 图片地址',url)
	               self.bookImg=url;
	               self.num=0;
	            })
				
//				$(".file-img").attr('src', URL.createObjectURL($('#imgFile')[0].files[0]) )
			},
			faqi(){
				var self=this;
				if(!self.book1){
					self.errbook1='请输入书籍'
				}else if(!self.book2){
					self.errbook2='请输入书籍'
				}else if(!self.tel){
					self.errtel='请输入联系地址'
				}
				else if(!self.bookImg){
					self.errimg='请上传书籍封面'
				}
				else{
					var url=int.bookFaqi;
					var sid=localStorage.getItem('sid');
					var loginId=localStorage.getItem('loginId');
					var loginName=localStorage.getItem('loginName');
					
					var params={
						contactAddress: self.tel,
						hasName: self.book1,
						imageUrl: self.bookImg,
						nickName: self.loginName,
						sid: sid,
						stuId: loginId,
						wantName: self.book2
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
	.booksWrite {
		background: #F2F2F2;
	}
	.header{
		position: fixed;
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
	.write-title,
	.write-bbox,
	.write-bottom {
		background: #fff;
	}
	
	.write-title {
		padding: 0.5rem 0.75rem;
		margin-bottom: 0.45rem;
		overflow: hidden;
		>p{
			clear: both;
			overflow: hidden;
		}
		>p:last-child{
			border-top: 1px solid #F7F7F7;
			margin-top: 0.3rem;
			padding-top: 0.3rem;
		}
		span {
			float: left;
			line-height: 1.5rem;
			/*width: 4.3rem;*/
		}
		input {
			float: left;
			width: 75%;
			height: 1.5rem;
			color: #A1A1A1;
		}
	}
	
	.write-bbox {
		margin-bottom: 0.45rem;
		>h1 {
			padding: 0.5rem 0.75rem 0;
		}
		>div.wtire-text {
			overflow: hidden;
			padding: 0.75rem;
			span {
				float: left;
				line-height: 1.5rem;
			}
			textarea {
				float: left;
				width: 78%;
				padding-top: 0.3rem;
			}
		}
		.write-img {
			padding: 0.75rem;
			.file-div {
				width: 4rem;
				height:6rem;
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
			.imgshow {
				>p {
					margin-bottom: 0;
				}
				.img-close>img {
					position: absolute;
					top: -6px;
					right: 0;
					z-index: 999;
					width: 18px;
					height: 18px;
					line-height: 18px;
					border: 1px solid #666;
					border-radius: 50%;
					background: #fff;
				}
				float: left;
				img {}
			}
			#imgFile {
				position: absolute;
				float: left;
				opacity: 0;
				width: 100%;
				height: 100%;
				z-index: 12;
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