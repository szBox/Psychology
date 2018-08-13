<template>
	<div class="ziliao">
		<header class="header">
			<div @click="back()"><img src="../../../../assets/img/goback.png" alt="" /></div>
			<h1>个人信息</h1>
			<em @click="dis && baocun()">保存</em>
		</header>
		<div class="ziliao-box">
			<div class="ziliao-div">
				<em>头像</em>
				<div class="file-div">
					<img class="file-img" :src="userImg" alt="" />
					<input type="file" name="file1" id="imgFile" accept="image/*" @change="addPic">
				</div>
			</div>
			<div class="ziliao-div">
				<em>昵称</em>
				<input type="text" v-model="nickName" />
			</div>
			<div class="ziliao-div">
				<em>性别</em>
				<p style="float: right;width: 78%;">
					<popup-picker :placeholder="sexInit | Sex" :data="list1" v-model="sexV" @on-change="onChange"></popup-picker>
				</p>
			</div>
			<div class="ziliao-div">
				<em>电话号码</em>
				<input type="text" maxlength="11" v-model="sphone" />
			</div>
			<div class="bgg"></div>
			<div class="ziliao-div sao-text">
				<em>个性签名</em>
				<textarea maxlength="30" name="" rows="3" cols="" v-model="sbb"></textarea>
			</div>
		</div>

	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import { Toast, PopupPicker } from 'vux'

	export default({
		data() {
			return {
				myInfo: '',
				list1: [
					['男', '女']
				],
				userImg: '',
				sexV: [],
				sexInit: '',
				sexData: '',
				sbb: '',
				sphone: '',
				nickName: '',
				userImgInit: '',
				sexResult: '',
				sbbInit: '',
				sphoneInit: '',
				nickNameInitt: '',
				dis:true,
			}
		},
		components: {
			PopupPicker,
			Toast
		},
		filters: {
			Sex(val) {
				if(val == 1) {
					return '男'
				} else {
					return '女'
				}
			}
		},
		mounted() {
			this.getUser();
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			addPic() {
				var self = this;
				console.log(document.getElementById('imgFile').files,'222')
				self.userImg = $('#imgFile')[0].files[0];
				self.alyConfig.uploadToAliyun(self.userImg, function(url) {
					console.log('阿里云 图片地址', url)
					self.userImg = url;
				})
			},
			getUser() {
				var self = this;
				var loginId = localStorage.getItem('loginId');
				var role = localStorage.getItem('role');
				var url = int.roleType;
				var params = {
					id: loginId,
					type: role,
				}
				ajax.get_data(url, params, function(d) {
					console.log('身份信息', d)
					if(d.code == 0) {
						self.sexInit = d.data.sex;
						self.myInfo = d.data;
						self.userImg = d.data.headPic;
						self.nickName = d.data.nickName;
						self.sbb = d.data.personSign;
						self.sphone = d.data.userName;
						//对比一下数据
						
						self.sexData=d.data.sex;
						self.userImgInit = d.data.headPic;
						self.nickNameInit = d.data.nickName;
						self.sbbInit = d.data.personSign;
						self.sphoneInit = d.data.userName;
					}
				})
			},
			baocun() {
				var self = this;
				var loginId = localStorage.getItem('loginId');
				var role = localStorage.getItem('role');
				var sid = localStorage.getItem('sid')
				var numY = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(self.userImgInit!=self.userImg || self.sexData!=self.sexInit || self.sbbInit!=self.sbb || self.nickNameInit!=self.nickName || self.sphoneInit!=self.sphone) {
					if(role == 'T') {
						var url = int.xiugaiTeacher;
					} else if(role == 'S') {
						var url = int.xiugaiStuden;
					}

					if(self.sexData) {
						self.sexResult = self.sexData
					} else {
						self.sexResult = self.sexInit
					}

					if(!self.sphone) {
						self.$vux.toast.show({
							type: 'text',
							text: '请输入手机号',
							position: 'bottom'
						})
					} 
					else if(!numY.test(self.sphone)) {
						self.$vux.toast.show({
							type: 'text',
							text: '手机号格式错误',
							position: 'bottom'
						})
					} 
					else {
						var params = {
							headPic: self.userImg,
							id: loginId,
							name: self.nickName,
							personSign: self.sbb,
							sex: self.sexResult,
							sid: sid,
							phone: self.sphone

						}
						ajax.put_data(url, params, function(d) {
							console.log('身份信息', d)
							if(d.code == 0) {
								self.dis=false;
								self.$vux.toast.show({
									type: 'text',
									text: '修改成功',
									position: 'bottom'
								})
								setTimeout(function(){
									self.back()
								},800)
							}
						})
					}
				}

			},
			onChange(val) {
				console.log('val change', val)
				var self = this;
				if(val[0] == '男') {
					self.sexData = '1'
				} else if(val[0] == '女') {
					self.sexData = '2'
				}
				console.log(self.sexData)
			},
		}

	})
</script>

<style scoped lang="less">
	.ziliao {
		background: #f4f4f4;
	}
	
	.vux-popup-picker-value .vux-cell-value {
		float: right !important;
		width: 78% !important;
	}
	
	.ziliao-box {}
	
	::-webkit-input-placeholder {
		color: #959595;
		font-size: 0.6rem;
	}
	/* 使用webkit内核的浏览器 */
	
	:-moz-placeholder {
		color: #959595;
		font-size: 0.6rem;
	}
	/* Firefox版本4-18 */
	
	::-moz-placeholder {
		color: #959595;
		font-size: 0.6rem;
	}
	/* Firefox版本19+ */
	
	:-ms-input-placeholder {
		color: #959595;
		font-size: 0.6rem;
	}
	/* IE浏览器 */
	
	.my-top {
		padding-bottom: 2.5rem;
	}
</style>