<template>
	<div class="booksWrite">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>发起漂流</h1>
		</header>
		
		<div class="write-title">
			<span>我的书：</span>
			<input type="text" />
		</div>
		<div class="write-title">
			<span>我想看的书：</span>
			<input type="text" />
		</div>
		<div class="write-title">
			<span>联系方式：</span>
			<input type="text" />
		</div>
		
		<div class="write-bbox">
			<h1>书籍封面：</h1>
			<div class="write-img">
				<div class="imgshow">
					<!--放图片-->
				</div>
				<div class="file-div">
					<input type="file" name="file1" id="imgFile" accept="image/*" @change="addPic">
				</div>
			</div>
		</div>
		
		<div class="write-bottom">
			<p>
				<img src="../../../../assets/img/init3.png"/>
				<span>发布之后需要进行审核</span>
			</p>
			<div class="btn-init">
				发布
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		data() {
			return {
				//				tab_index:2
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			addPic(){
    			$(".imgshow").append("<img style='width: 3rem;height: 3rem;margin-right: 0.75rem;' src="+URL.createObjectURL($('#imgFile')[0].files[0])+">")
			}
		}
	})
</script>

<style scoped lang="less">
	.booksWrite{
		background: #F2F2F2;
	}
	input{border: none;}
	header,.write-title,.write-bbox,.write-bottom{
		background: #fff;
	}
	.write-title{
		padding:0.5rem 0.75rem;
		margin-bottom: 0.45rem;
		overflow: hidden;
		span{
			float: left;
			line-height: 1.5rem;
			width:4.3rem;
		}
		input{
			float: left;
			width: 75%;
			height: 1.5rem;
			color: #A1A1A1;
		}
	}
	.write-bbox{
		margin-bottom: 0.45rem;
		>h1{
			padding:0.5rem 0.75rem 0;
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
				width: 3rem;
				height: 3rem;
				border: 1px dashed #c9c9c9;
				overflow: hidden;
				position: relative;
			}
			.file-div:after{
				content: '+';
				position: absolute;
				font-size: 1.5rem;
				color: #ccc;
				left: 50%;
				top: 50%;
				z-index: 11;
				-webkit-transform: translate(-50%,-50%);
				-moz-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				-o-transform: translate(-50%,-50%);
				transform: translate(-50%,-50%);
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
			width: 1rem;
			height: 1rem;
			
		}
		p>span{
			font-size: 0.6rem;
			color: #555;
			line-height: 1rem;
		}
		div{
			margin: 20px 0;
		}
	}
</style>