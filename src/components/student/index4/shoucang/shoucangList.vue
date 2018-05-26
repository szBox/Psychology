<template>
	<div class="shoucangList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>我的收藏</h1>
		</header>
		
		<ul>
			<li>
				<h1>谈谈关于心理方面的细节信息？</h1>
				<div class="shoucang-img">
					<img src="../../../../assets/img/init22.png"/>
					<img src="../../../../assets/img/init22.png"/>
				</div>
				<p>
					收藏于<span>2018-02-03 17:00</span>
				</p>
			</li>
			
		</ul>
		
		
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
	.shoucangList ul{
		padding: 0.75rem;
		li{
			border-bottom:1px solid #E4E4E4;
			padding: 0.5rem 0;
			h1{
				font-weight: bold;
				color: #000;
			}
			div{
				margin: 0.4rem 0;
			}
			p{
				color: #666;
				font-size: 0.6rem;
			}
		}
			
	}
</style>