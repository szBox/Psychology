<template>
	<div class="ziliao">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>个人信息</h1>
			<!--<em @click="baocun()">保存</em>-->
		</header>
		<div class="ziliao-box">
			<div class="ziliao-div">
				<span>头像</span>
				<div class="file-div">
					<img class="file-img" :src="userImg" alt="" />
					<!--<input type="file" name="file1" id="imgFile" accept="image/*" @change="addPic">-->
				</div>
			</div>
			<div class="ziliao-div">
				<span>昵称</span>
				<input type="text" v-model="nickName" :placeholder="myInfo.nickName" readonly/>
			</div>
			<div class="ziliao-div">
				<span>性别</span>
				<input type="text" v-model="sexm" :placeholder="myInfo.sex | Sex" readonly/>
			</div>
			<div  class="ziliao-div">
				<span>电话号码</span>
				<input type="text" v-model="sphone" :placeholder="myInfo.userName" readonly/>
			</div>
			<div class="bgg"></div>
			<div class="ziliao-div sao-text">
				<span>个性签名</span>
				<textarea name="" rows="3" cols="" v-model="sbb" :placeholder="myInfo.personSign" readonly></textarea>
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
			
				userImg:'',
				sexm:'',sbb:'',sphone:'',nickName:''
			}
		},
		filters:{
			Sex(val){
				if(val==1){
					return '男'
				}else{
					return '女'
				}
			}
		},
		mounted() {
			this.getUser();
		},
		methods:{
			back() {
				this.$router.go(-1);
			},
//			addPic() {
//				var self=this;
//				self.userImg=$('#imgFile')[0].files[0];
//			    self.alyConfig.uploadToAliyun(self.userImg,function (url) {
//			    	console.log('阿里云 图片地址',url)
//	               self.userImg=url;
//	            })
//			},
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
						self.userImg=d.data.headPic
						
					}
				})
			},
//			baocun(){
//				var self=this;
//				var loginId=localStorage.getItem('loginId');
//				var role=localStorage.getItem('role');
//				var sid=localStorage.getItem('sid')
//				if(role=='T'){
//					var url=int.xiugaiTeacher;
//				}else if(role=='S'){
//					var url=int.xiugaiStuden;
//				}
//				var params={
//					headPic: "",
//					id: 0,
//					name: "",
//					personSign: "",
//					sex: 0,
//					sid: sid,
//				}
//				 ajax.get_data(url, params, function(d) {
//				 	console.log('身份信息',d)
//					if(d.code==0){
//						self.myInfo=d.data;
//						self.userImg=d.data.headPic
//						if(role=='M'||role=='T'){
//							self.phoneType=true
//						}
//					}
//				})
//			}
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