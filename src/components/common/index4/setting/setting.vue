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
		
		<div class="esc-btn">
			退出登录
		</div>
	</div>
</template>

<script>
	import ziliao from '@/components/student/index4/ziliao/ziliao'		//我的  >详细资料 
	import changeMima from '@/components/student/index4/setting/changeMima'		//我的  >设置 >修改密码
	export default({
		methods:{
			back() {
				this.$router.go(-1);
			},
			goPath(path){
				this.$router.push(path)
			}
			
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
		text-align: center;
		margin: 5rem 0;
	}
</style>