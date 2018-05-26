<template>
	<div class="teacherInfo">
		<header class="headerT">
			<div  @click="back()"><img src="../../../assets/img/goback2.png" alt=""/></div>
			<h1>教师信息</h1>
		</header>
		<div class="top-bg">
			<div class="teacher-box">
				<div  class="teacher-img">
					<img src="../../../assets/img/nv.png" alt="" />
				</div>
				<div class="teacher-info">
					<h1>李多云</h1>
					<div class="icon-position">
						<span>心理咨询师</span>
					
							<img src="../../../assets/img/zan0.png" alt="" />
							<em>200</em>
					
					</div>
					<h4>158700088000</h4>
				</div>
				<div class="teacher-like">
					<div>
						<h1>个性签名</h1>
						<p>风一样的男子，瘦的不要不要的</p>
					</div>
					<div>
						<h1>擅长领域</h1>
						<div>心理健康</div>
						<div>个人成长</div>
						<div>情绪疏导</div>
					</div>
				</div>
			</div>
		</div>
		
	
	</div>
	
</template>

<script>
	
	export default({
		methods:{
			back() {
				this.$router.go(-1);
			},
		}
	})
</script>

<style scoped lang="less">
	.headerT{
	    z-index: 999;
	    /*border-bottom: 1px solid #C9C9C9;*/
	    width: 100%;
	    position: relative;
		>div{
			padding-left: 0.5rem;
   			width: 1.8rem;
   			height: 100%;
		    position: absolute;
		    top: 0%;
		    line-height: 2.5rem;
   			>img{
   				width: 0.6rem;
   			}
		}
		>h1{
			height: 2.5rem;
		    line-height: 2.5rem;
		    text-align: center;
		    font-size: 0.8rem;
		    color: #333;
		}
	}
	.top-bg{
		height:10rem;
		width: 100%;
		background: url(../../../assets/img/bg1.png);
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
	}
	.teacher-box{
		height: 21rem;
		/*margin: 7rem 10%;*/
		margin: 6.5rem auto 2rem;
		width: 90%;
		background: url(../../../assets/img/bg2.png);
		background-size: cover;
		position: relative;
	}
	.teacher-img{
		>img{
			width: 4.5rem;
			height: 4.5rem;
		}
		position: absolute;
		top: -2.5rem;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		background: #fff;
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		line-height: 4.75rem;
		text-align: center;
	}
	.teacher-info{
		width: 9rem;
		margin: 0 auto;
		padding-top: 2.5rem;
		>h1{
			text-align: center;
			font-size: 0.9rem;
			color:#333;
			margin: 0.2rem 0;
		}
		>div{
			position: relative;
			text-align: center;
			/*width: 100px;*/
			>span{
			}
				
			>img{
				width: 1rem;
				margin-left: 0.5rem;
				vertical-align: unset;
			}
			>em{
				position: absolute;
				top: -0.5rem;
    			right: 0.75rem;
				color: #fff;
				font-size: 0.6rem;
				background: #F06262;
				padding: 0 0.1rem;
				border-radius: 0.3rem;
			}
		
		}
		>h4{
			text-align: center;
			font-size: 0.75rem;
			margin-top: 0.2rem;
		}
	}
	.teacher-like{
		margin-top: 3.5rem;
		padding: 0 1.5rem;
		>div{
			border-bottom: 1px solid #F8F8F8;
			padding-bottom: 0.75rem;
			overflow: hidden;
			>p{
				color: #6B6B6B;
			}
			>div{
				float: left;
				margin-right: 0.5rem;
				background: url(../../../assets/img/qian1.png);
				width:4rem;
				height: 1.5rem;
				line-height: 1.5rem;
				padding-left: 0.3rem;
				background-size: 100% 100%;
				color: #fff;
			}
		}
		>div:last-child{
			border: none;
		}
		h1{
			font-size: 0.8rem;
			margin: 0.5rem 0;
		}
	}
</style>