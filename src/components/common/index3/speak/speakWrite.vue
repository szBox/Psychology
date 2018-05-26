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
					<img src="../../../../assets/img/add.png" alt="" />
				</div>
			</div>
		</div>
		
		<div class="write-bottom">
			<p>
				<img src="../../../../assets/img/icons_1.png"/>
				<span>发布之后需要进行审核</span>
			</p>
			<div class="btn-init">
				发布
			</div>
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
			addPic() {
				$(".imgshow").append("<p style='position: relative;float: left;' >" +
					"<span class='img-close'>" +
					"<img style=' position: absolute;top: -6px;right: 0;z-index: 999;width: 18px;height: 18px;line-height: 18px;border: 1px solid #666;border-radius: 50%;background: #fff;' src='src/assets/img/clear.png' />" +
					"</span>" +
					"<img style='width: 3rem;height: 3rem;margin-right: 0.75rem;' src=" + URL.createObjectURL($('#imgFile')[0].files[0]) + ">" +
					"</p>")
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