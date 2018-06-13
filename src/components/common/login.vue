<template>
  <!--<transition name="slideIn">-->
  <div class="login-box">
    
    <div class="login-img">
      <img src="../../assets/img/loginT.png"/>
    </div>

    <div class="form-login">
      <div class="form-div">
        <img src="../../assets/img/icon4_1.png"/>
        <div>
          <input type="text" @input="YZphone(phone)"  v-model="phone" placeholder="请输入您的账号" @keyup.enter="login()" maxlength="11"/>
          <p class="errtips">
            {{phone_tips}}
          </p>
        </div>


      </div>
      <div class="form-div">
        <img src="../../assets/img/icon_pwd.png"/>
        <div>
          <input type="password" @input="YZpassword(password)" v-model="password" @keyup.enter="login()"  placeholder="请输入您的密码" />
          <p class="errtips">
            {{password_tips}}
          </p>
        </div>
      </div>
      <div class="forget" @click="goForget">忘记密码?</div>
      <div class="btn-login" @click="btnType && login()">登录</div>
      <!--<div class="reg">直接注册</div>-->
      
      <!--<div class="three-box">
      	<h1>
      		<i></i>
      		<span>第三方直接登录</span>
      		<i></i>
      	</h1>
      	<div class="three-img">
      		<img src="../../assets/img/qq.png"/>
      		<img src="../../assets/img/wx.png" alt="" />
      		<img src="../../assets/img/wb.png" alt="" />
      	</div>
      </div>-->
    </div>
		
  </div>
  <!--</transition>-->
</template>

<script>



	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
  export default({
    name:'login',
    
    data(){
      return{
        phone:'',
        password:'',
        phone_tips:'',
        password_tips:'',
        btnType:true,
//      role:'学生',
//      role:'老师',
//      role:'管理员',

      }
    },
    components:{
//			 s_loading:loading
    },
    mounted(){
      
      
       var hei = $(window).height();


     
			 var _this=this;
     _this.phone=localStorage.getItem('phone');
     		 _this.password=localStorage.getItem('password');
      	
     
    },
    created(){
    	
    },
    methods:{
    	goForget(){
    		this.$router.push({
    			path:'forget'
    		})
    	},
      YZphone(phone){
        if(!phone){
          this.phone_tips='请输入账号';
        }else{
          this.phone_tips='';
        }
      },
      YZpassword(password){
        if(!password){
          this.password_tips='请输入密码';
        }else{
          this.password_tips='';
        }
      },
      login(){
      	var self=this;
      	
      	
        if(!self.phone){
          self.phone_tips='请输入账号'
        }
//        else if(!/^(13[0-9]\d{8}|17[0-9]\d{8}|15[0-35-9]\d{8}|18[0-9]\d{8}|14[0-9]\d{8})$/.test(this.phone)){
//          this.phone_tips='账号格式不对'
//        }
        else if(!self.password){
          self.password_tips='请输入密码'
        }

        else{
//					_this.$root.eventHub.$emit('Vloading',true)
//					let md5_password=$.md5(_this.password);
          var mainUrl = int.getlogin;
          console.log(self.phone+'----'+self.password)
          var params = {
            userName:self.phone,
            password:self.password
          };
          $.ajax({
			      type:'post',
			      data:params,
			      url:mainUrl,
			      dataType:"json",
			      async:true,
			      timeout:10000,
			      success: function (d) {
			       	console.log(d);
            if(d.code==1005){
            	self.phone_tips='该账号未注册';
            }else if(d.code==1006){
            	self.password_tips='密码错误'
            }else if(d.code==0){
//							console.log(self.$store)
//          	self.$store.state.user=d.data
            	
            	//跳页面
            	self.phone=localStorage.setItem('phone',self.phone);
              self.password=localStorage.setItem('password',self.password);
              localStorage.setItem('token',d.data.token);
              localStorage.setItem('role',d.data.roleType);
              localStorage.setItem('sid',d.data.sid);
              localStorage.setItem('loginName',d.data.loginName);
              localStorage.setItem('loginId',d.data.id);
              self.btnType=false;
              self.$router.push({ // 你需要接受路由的参数再跳转
								path:'/index1'
              });
			        }
			      },
			      error: function (err) {
			        console.log('错误信息：' + JSON.stringify(err));
			      }
		    })
      

       

        }

      }
    }
  })
</script>

<style scoped>
	input{
		padding-left: 0;
	}
  .login-box{
    width: 100%;
    height: 100%;
  }
  .login-img{
    height: 12rem;
    text-align: center;
  }
  .login-img>img{
    width: 100%;
    height: 100%;

  }
  .login-img>p{
    font-size: 0.9rem;
    color: #fff;
    margin-top: 0.75rem
  }
  .form-login{
    margin: 0 0.75rem;
  }

  .btn-login{
    background: linear-gradient(to right, #31c4ff, #3991f4);
    color: #fff;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 1.2rem;
    margin-top: 4.5rem;
  }
  .form-div{
   	margin: 1.8rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #F4F4F4;
  }

  .form-div img{
    width: 1.3rem;
    height: 1.2rem;
  }
  .form-div>div{
    float: right;
    width: 88%;
    padding-bottom: 0.4rem;

    position: relative;
  }
  .errtips{
    color: #fff;
    position: absolute;
    bottom:-1.6rem;
    left: 0;
    color: #F7C108;
  }
  .form-div input{
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    color: #333;
  }

  .forget{
  	float: right;
  	color: #999;
  }
  .reg{
  	float: right;
  	color: #31c4ff;
  	margin: 0.75rem 0;
  }
  .three-box{
  	margin-top: 3.5rem;
  	text-align: center;
  	color: #999;
  }
  .three-box h1{
  	position: relative;
  	height: 1.5rem;
  }
  .three-box	i {
  			float: left;
  			width: 28%;
  			border-bottom: 1px solid #D9D9D9;
  			position: absolute;
  			top: 50%;
  			-webkit-transform: translateY(-50%);
  			-moz-transform: translateY(-50%);
  			-ms-transform: translateY(-50%);
  			-o-transform: translateY(-50%);
  			transform: translateY(-50%);
  			
  	}
	.three-box h1 span{
			line-height: 1.5rem;
			left: 50%;
			-webkit-transform: translateX(-50%);
  			-moz-transform: translateX(-50%);
  			-ms-transform: translateX(-50%);
  			-o-transform: translateX(-50%);
  			transform: translateX(-50%);
	}
  .three-box	i:first-child{
  		left: 0.75rem;
  	}
  .three-box	i:last-child{
  		right: 0.75rem;
  	}
  .three-img {
  	margin-top: 1rem;
  }
  .three-img img{
  	width: 2.2rem;
  	margin: 0 1.2rem;
  }
  ::-webkit-input-placeholder{color: #959595;font-size: 0.7rem;}    /* 使用webkit内核的浏览器 */
  :-moz-placeholder{color: #959595;font-size: 0.7rem;}                  /* Firefox版本4-18 */
  ::-moz-placeholder{color: #959595;font-size: 0.7rem;}                  /* Firefox版本19+ */
  :-ms-input-placeholder{color: #959595;font-size: 0.7rem;}           /* IE浏览器 */

</style>
