<template>
	<div class="speakWrite">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>发表话题</h1>
		</header>
		
		<div class="write-title">
			<span>话题名称：</span>
			<input type="text" />
		</div>
		
		<div class="write-bbox">
			<div class="wtire-text">
				<span>话题简介：</span>
				<textarea  rows="4"></textarea>
			</div>
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
	.speakWrite{
		background: #F2F2F2;
	}
	input,textarea{border: none;}
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
		}
		input{
			float: left;
			width: 78%;
			height: 1.5rem;
		}
	}
	.write-bbox{
		margin-bottom: 0.45rem;
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