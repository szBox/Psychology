<template>
	<div class="index3">
		<header class="header">
			<h1>互动</h1>
		</header>
		
		<section class="index3-section">
			<ul class="index3-list">
				<li>
					<img @click="speak()" src="../../../assets/img/index3_1.png"  alt="" />
					<p>留言板</p>
				</li>
				<li>
					<img @click="goPath({path:'/index3/mp3List'})" src="../../../assets/img/index3_2.png" alt="" />
					<p>点歌台</p>
				</li>
				<li>
					<img  @click="goPath({path:'/index3/booksList'})"  src="../../../assets/img/index3_3.png"/>
					<p>图书漂流</p>
				</li>
				<li>
					<img  @click="goPath({path:'/index3/activitysList'})"  src="../../../assets/img/index3_4.png" alt="" />
					<p>组团活动</p>
				</li>
				<li>
					<img  @click="goPath({path:'/index3/gamesList'})"  src="../../../assets/img/index3_5.png" alt="" />
					<p>游戏擂台</p>
				</li>
				
			</ul>
		</section>
	</div>
</template>

<script>
	
	export default({
		methods:{
			speak(){
				//判断角色,进入不同的路由  老师,管理员一样, 学生A
				var role=localStorage.getItem('role');
				console.log(role)
				if(role=='S'){
					this.$router.push({
						path:'/index3/speakListA'  //进入学生的
					})
				}else{
					this.$router.push({
						path:'/index3/speakList'
					})
				}
				
			},
			goPath(path){
				this.$router.push(path)
			}
		}
	})
</script>

<style scoped>
	.header{
		border: none;
	}
	.index3-list{
		/*display: none;*/
		
	}
	.index3{
		
		
		height: 100%;
	    overflow-x: hidden;
	    position: absolute;
	    width: 100%;
	   
	}
	.index3-section{
		 background: url(../../../assets/img/index3_bg.png);
		background-size: 100% 100%;
		position: absolute;
		top: 2.4rem;
		left: 0;
		right: 0;
		bottom: 3rem;
	}
	.index3-list{
		
	}
</style>