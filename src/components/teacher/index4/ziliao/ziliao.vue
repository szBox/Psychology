<template>
	<div class="ziliao">
		<img id="backImg" src="../../../../assets/img/goback.png"alt="" @click="back()" />
		<div class="my-top">
			<div class="img-div">
				<img class="" src="../../../../assets/img/exchange_icon_my_n.png" alt="" />
			</div>
		</div>
		
		
		<div class="ziliao-box">
			<div class="ziliao-div">
				<span>昵称</span>
				<input type="text" placeholder="安小静"/>
			</div>
			<div class="ziliao-div">
				<span>性别</span>
				<input type="text" placeholder="男"/>
			</div>
			<div class="ziliao-div">
				<span>电话号码</span>
				<input type="text" placeholder="18874836888"/>
			</div>
			<div class="ziliao-div">
				<span>个性签名</span>
				<input type="text" placeholder="一圈一点，胜似千言万语"/>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	
	export default({
		methods:{
			back() {
				this.$router.go(-1);
			},
		}
	})
</script>

<style scoped lang="less">
	::-webkit-input-placeholder{color: #959595;font-size: 0.6rem;}    /* 使用webkit内核的浏览器 */
	:-moz-placeholder{color: #959595;font-size: 0.6rem;}                  /* Firefox版本4-18 */
	::-moz-placeholder{color: #959595;font-size: 0.6rem;}                  /* Firefox版本19+ */
	:-ms-input-placeholder{color: #959595;font-size: 0.6rem;}           /* IE浏览器 */
	.my-top{
		padding-bottom: 2.5rem;
	}
	
</style>