<template>
	<div class="changeMima">
		<header class="header">
			<div  @click="back()"><img src="../../assets/img/goback.png" alt=""/></div>
			<h1>忘记密码</h1>
			
		</header>
		
		<div class="mima-box">
			<div class="mima-div">
				<img src="../../assets/img/icon_tel.png"/>
				<input type="text" maxlength="11" placeholder="请输入手机号码">
			</div>
			<div class="mima-div yzm-div">
				<img src="../../assets/img/icon_yzm.png"/>
				<input type="text" maxlength="6" placeholder="请输入验证码">
				<em>获取验证码</em>
			</div>
			<div class="mima-div">
				<img src="../../assets/img/icon_pwd.png"/>
				<input type="password" maxlength="16" placeholder="请输入新密码(6位数以上)">
			</div>
			<div class="mima-div">
				<img src="../../assets/img/icon_pwd.png"/>
				<input type="password" maxlength="16" placeholder="请再次确认新密码">
			</div>
			<div class="err-tips">
				{{errTips}}
			</div>
			<div class="mima-btn">确定</div>
		</div>
	</div>
</template>

<script>
	
	export default({
		data(){
			return{
				errTips:''
			}
		},
		methods:{
			back() {
				this.$router.go(-1);
			},
		}
	})
</script>

<style scoped lang="less">
	.mima-btn{
		color: #fff;
	border-radius: 1rem;
    margin-top: 4.5rem;
    overflow: hidden;
    text-align: center;
    line-height: 2.5rem;
    background: -webkit-linear-gradient(left, #31c4ff , #3991f4); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #31c4ff, #3991f4); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #31c4ff, #3991f4); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #31c4ff , #3991f4); /* 标准的语法（必须放在最后） */
	}
	::-webkit-input-placeholder{color: #959595;font-size: 0.6rem;}    /* 使用webkit内核的浏览器 */
	:-moz-placeholder{color: #959595;font-size: 0.6rem;}                  /* Firefox版本4-18 */
	::-moz-placeholder{color: #959595;font-size: 0.6rem;}                  /* Firefox版本19+ */
	:-ms-input-placeholder{color: #959595;font-size: 0.6rem;}           /* IE浏览器 */
	
</style>