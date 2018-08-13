<template>
	<div class="setting">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>设置</h1>
		</header>
		
		<ul>
			<li @click="goPath({path:'/index4/ziliao'})">
				<span>个人资料</span>
				<img src="../../../../assets/img/icon_next.png"/>
			</li>
			<li @click="goPath({path:'/index4/changeMima'})">
				<span>修改密码</span>
				<img src="../../../../assets/img/icon_next.png"/>
			</li>
			
		</ul>
		<div class="bgg"></div>
		<!--<ul>
			<li>
				<span>清除缓存</span>
				<em>9.97M</em>
			</li>
		</ul>-->
		
		<div class="esc-btn" @click="conshowFn()">
			退出登录
		</div>
		 <confirm v-model="conShow"
			title='操作提示'
	      @on-cancel="onCancel"
	      @on-confirm="onConfirm">
	        <p style="text-align:center;">是否确认退出?</p>
	      </confirm>
	</div>
</template>

<script>
	import { Confirm } from 'vux'
	export default({
		data() {
			return {
				conShow:false,   //二次提示 
			}
		},
		components:{
			Confirm
		},
		methods:{
			back() {
				this.$router.go(-1);
			},
			goPath(path){
				this.$router.push(path)
			},
			conshowFn(){
//				再次确认提示框
				this.conShow=true

			},
		 	onCancel () {
		      
		    },
		    onConfirm () {
		    var self=this;
//		    localStorage.removeItem('speakQx')
//		    localStorage.removeItem('activQx')
		     this.$router.push({
		     	path:'/'
		     })
		    },
		}
	})
</script>

<style scoped lang="less">
	.setting{
		background: #f4f4f4;
	}
	.setting ul{
		background: #fff;
		padding:0 0.75rem;
		li{
			border-bottom: 1px solid #F6F6F6;
			overflow: hidden;
			padding: 0.75rem 0;
			span{
				float:left;
				
			}
			img{
				float: right;
				width: 0.4rem;
			}
			em{
				float: right;
				color: #999;
				
			}
		}
		li:last-child{
			border: none;
		}
	}
	.esc-btn{
		height: 2.5rem;
		line-height: 2.5rem;
		text-align: center;
		background: #fff;
		margin: 3rem 0;
	}
</style>