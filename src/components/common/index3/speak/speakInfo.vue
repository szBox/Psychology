<template>
	<div class="speakInfo">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>详情</h1>
			
		</header>

		<div class="b-content">
			<div class="zuozhe-top">
				<h1>
					<img src="../../../../assets/img/ren2.png"/>
					<span>卡哇伊</span>
				</h1>
				<p class="ellipsis">
					你不必讨所有人喜欢,但是你要喜欢你自己。
				</p>
				<img src="../../../../assets/img/ren6.png" alt="" />
				<h6>2017-08-22 12:00</h6>
			</div>
			<div class="bgg"></div>
			
			<div class="dan-box">
				<span>留言<em>(20)</em></span>
				<img src="../../../../assets/img/dan_n.png"/>
			</div>
		</div>

		
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.header{
		position: fixed;
	}
	
	.zuozhe-top{
		padding: 0.75rem 0.75rem 0.25rem 0.75rem;
		>h1{
			img{
				width: 2rem;
				border-radius: 50%;
				line-height: 2rem;
				margin-right: 0.3rem;
			}
		}
		>p{
			-webkit-line-clamp: 2;
			font-size: 0.8rem;
			margin: 0.5rem 0;
		}
		>img{
			width: 100%;
			height: 10rem;
		}
		>h6{
			margin: 0.5rem 0;
			color: #999;
			font-size: 0.65rem;
		}
	}
	.dan-box{
		padding: 0.75rem;
		overflow: hidden;
		>span{
			color: #666;
			float: left;
			em{
				margin-left: 0.4rem;
			}
		}
		>img{
			width: 1.2rem;
			float: right;
		}
	}
</style>