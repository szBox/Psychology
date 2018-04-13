<template>
	<div class="changeMima">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>修改密码</h1>
			<em>保存</em>
		</header>
		
		<div class="mima-box">
			<div class="mima-div">
				<span>绑定手机</span>
				<input type="text" maxlength="11" placeholder="请输入手机号码">
			</div>
			<div class="mima-div yzm-div">
				<span>验证码</span>
				<input type="text" maxlength="6" placeholder="请输入验证码">
				<em>获取验证码</em>
			</div>
			<div class="mima-div">
				<span>设置新密码</span>
				<input type="password" maxlength="16" placeholder="请输入新密码(6位数字组成)">
			</div>
			<div class="mima-div">
				<span>确定新密码</span>
				<input type="password" maxlength="16" placeholder="请再次确认新密码">
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
	
</style>