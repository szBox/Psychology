<template>
	<div class="ziliao">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>个人信息</h1>
			<em>保存</em>
		</header>
		<div class="ziliao-box">
			<div class="ziliao-div">
				<span>头像</span>
				<div class="file-div">
					<img class="file-img" :src="myInfo.headPic" alt="" />
					<input type="file" name="file1" id="imgFile" accept="image/*" @change="addPic">
				</div>
			</div>
			<div class="ziliao-div">
				<span>昵称</span>
				<input type="text" :placeholder="myInfo.nickName"/>
			</div>
			<div class="ziliao-div">
				<span>性别</span>
				<input type="text" placeholder="男"/>
			</div>
			<div class="ziliao-div">
				<span>电话号码</span>
				<input type="text" placeholder="18874836888"/>
			</div>
			<div class="bgg"></div>
			<div class="ziliao-div">
				<span>个性签名</span>
				<input type="text" :placeholder="myInfo.personSign"/>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	export default({
		data() {
			return {
				myInfo:'',
			}
		},
		mounted() {
			this.getUser();
		},
		methods:{
			back() {
				this.$router.go(-1);
			},
			
			addPic() {
				$(".file-img").attr('src', URL.createObjectURL($('#imgFile')[0].files[0]) )
			},
			goPath(path){
				this.$router.push(path)
			},
			getUser(){
				var self=this;
				var loginId=localStorage.getItem('loginId');
				var role=localStorage.getItem('role');
				var url=int.roleType;
				var params={
					id:loginId,
					type:role,
				}
				 ajax.get_data(url, params, function(d) {
				 	console.log('身份信息',d)
					if(d.code==0){
						self.myInfo=d.data;
					}
				})
			},
		}
		
	})
</script>

<style scoped lang="less">
.ziliao{
	background: #f4f4f4;
}
.ziliao-box{
	
	
}
	::-webkit-input-placeholder{color: #959595;font-size: 0.6rem;}    /* 使用webkit内核的浏览器 */
	:-moz-placeholder{color: #959595;font-size: 0.6rem;}                  /* Firefox版本4-18 */
	::-moz-placeholder{color: #959595;font-size: 0.6rem;}                  /* Firefox版本19+ */
	:-ms-input-placeholder{color: #959595;font-size: 0.6rem;}           /* IE浏览器 */
	.my-top{
		padding-bottom: 2.5rem;
	}
	
</style>