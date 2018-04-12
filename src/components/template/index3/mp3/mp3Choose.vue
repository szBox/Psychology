<template>
	<div class="mp3Choose">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>我要点歌</h1>
		</header>
		
		<div class="mp3ChooseInp">
			<div class="mp3ChooseInp-div">
				<span>歌曲名称:</span>
				<input type="text" />
			</div>
			<div class="mp3ChooseInp-div">
				<span>赠送人名称:</span>
				<input type="text" />
			</div>
			<div class="mp3ChooseInp-div">
				<span>播放时间:</span>
				<input type="text" />
			</div>
			<div class="mp3ChooseInp-div">
				<span>我想说:</span>
				<input type="text" />
			</div>
			
		</div>
		<div class="btn-box">
			<div class="btn-init">点歌</div>
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
	.btn-box{
		padding:2rem 0.75rem;
	}
	input{
		border: none;
	}
	.mp3ChooseInp{
		padding-bottom: 1px;
		background: #F2F2F2;
		.mp3ChooseInp-div{
			background: #fff;
			overflow: hidden;
			padding:0.5rem 0.75rem;
			margin-bottom:0.5rem;
			span{
				float: left;
				line-height: 1.8rem;
				width: 4.2rem;
			}
			input{
				float: left;
				width: 75%;
				height: 1.8rem;
			}
		}
	}
	
</style>