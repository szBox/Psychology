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
					<input type="text" />
				</div>
				<div class="mp3ChooseInp-div">
					<span>赠送给:</span>
					<input type="text" />
				</div>
				
				<div class="mp3ChooseInp-div">
					<span>我想说:</span>
					<textarea name="" rows="3" cols=""></textarea>
				</div>
				<div class="mp3ChooseInp-div">
					<span>播放时间:</span>
					<input type="text" />
				</div>
			</div>
			<div class="btn-box">
				<div class="btn-init">
					点歌
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default({

		methods: {
			back() {
				this.$router.go(-1);
			},

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