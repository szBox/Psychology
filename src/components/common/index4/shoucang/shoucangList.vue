<template>
	<div class="shoucangList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>我的收藏</h1>
		</header>
		
		<ul class="activitys-ul">
				<li  @click="goPath()">
					<div class="lf zutuan-img">
						<img  class="imgz"src="../../../../assets/img/x7.png" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">不好玩回去睡觉了,附上我睡觉的照片,不好玩回去睡觉了</h2>
						<div>
							<p>2018-08-17 08:00</p>
							<h5>
								<img src="../../../../assets/img/pinglun.png"/>
								<span>20</span>
							</h5>
						</div>
						
						
					</div>
					
				</li>
				<li  @click="goPath()">
					<div class="lf zutuan-img">
						<img  class="imgz"src="../../../../assets/img/x7.png" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">不好玩回去睡觉了,附上我睡觉的照片,不好玩回去睡觉了</h2>
						<div>
							<p>2018-08-17 08:00</p>
							<h5>
								<img src="../../../../assets/img/pinglun.png"/>
								<span>20</span>
							</h5>
						</div>
						
						
					</div>
					
				</li>
			</ul>
		
		
	</div>
</template>

<script>

	export default({
		methods:{
			back() {
				this.$router.go(-1);
			},
			goPath(){
				this.$router.push({
					path:'/newsInfo/'+1
				})
			}
			
		}
	})
</script>

<style scoped lang="less">
	.shoucangList{
		background: #f4f4f4;
	}
	.activitys-ul li{
			padding: 0.5rem 0 0.5rem 0.5rem;
		}
		.zutuan-img{
			
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			height: 4.5rem;
		}
		.zutuan-info{
			width: 64%;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			>h2{
				-webkit-line-clamp: 2;
				font-size: 0.8rem;
				
			}
			
			>div{
				overflow: hidden;
				line-height: 1.5rem;
				>p{
					float: left;
					font-size: 0.65rem;
					color: #A1A1A1;
					margin: 0.5rem 0;
				}
				>h5{
					float: right;
					margin: 0.5rem 0;
					img{
						width: 0.7rem;
					}
					span{
						color: #999;
					}
				}
			}
		}
</style>