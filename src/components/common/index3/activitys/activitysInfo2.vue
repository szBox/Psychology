<template>

	<div class="activitysInfo">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>亲子活动(参与的)</h1>
		</header>
		<div class="b-content">
			<div class="activi-li">
				<div class="faqi-img">
					<img src="../../../../assets/img/ren1.png" alt="" />
					<div>
						<p>王大力</p>
						<h6>30分钟前</h6>
					</div>
				</div>
				<p class="activi-type">
					已参与
				</p>
			</div>
			<div class="activi-li">
				<p style="border: none;font-size: 0.8rem;">
					<span style="font-size: 0.7rem;">活动详情：</span>
					我想组织一次植树活动,希望大家积极来参与
				</p>
			</div>
			<div class="activi-li">
				<p>
					<span>报名时间：</span>
					08-15 08：00 ~ 08-19 08：00
				</p>
				<p>
					<span>联系方式：</span>
					四年级三班
				</p>
				<p>
					<span>人均消费：</span>
					<em>20元</em>
				</p>
			</div>
			<div class="activi-li">
				<p>
					<span>集合时间：</span>
					08-15 08：00 
				</p>
				<p>
					<span>集合地点：</span>
					学校南门口
				</p>
			</div>
			<div class="baoming-ul">
				<h1>
					<span>已报名&nbsp;&nbsp;(10)</span>
					<em>
						<i>10人/</i>20人
					</em>
				</h1>
				<ul>
					<li>
						<p>
							<img src="../../../../assets/img/ren2.png" alt="" />
							<span>李玉</span>
						</p>
						<div>
							<p>150****4172</p>
							<h4>三年级二班</h4>
						</div>
					</li>
					<li>
						<p>
							<img src="../../../../assets/img/ren3.png" alt="" />
							<span>李玉</span>
						</p>
						<div>
							<p>150****4172</p>
							<h4>三年级二班</h4>
						</div>
					</li>
				</ul>
			</div>
			<div class="btn-box">
				<div class="btn-init">我要退出</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default({
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
	}
	.activitysInfo{
		background: #f4f4f4;
	}
	.activi-li{
		padding:0 0.75rem;
		margin-bottom: 0.3rem;
		background: #fff;
		overflow: hidden;
		>.faqi-img{
			float: left;
			overflow: hidden;
			padding: 0.5rem 0;
			>img{
				width: 2rem;
				border-radius: 50%;
				float: left;
				margin-right: 0.5rem;
			}
			>div{
				float: left;
				>p{
					color: #000;
					font-size: 0.75rem;
				}
				>h6{
					color: #B4B4B4;
					font-size: 0.6rem;
				}
			}
		}
		>p.activi-type{
			padding: 0.5rem 0;
			float: right;
			color: #E42D13;
			border: none;
		}
		>p{
			border-bottom: 1px solid #F2F2F2;
			padding: 0.5rem 0;
			>span{
				color: #999;
			}
			>em{
				color: #E06E0C;
			}
		}
		>p:last-child{
			border-bottom: none;
		}
	}
	.baoming-ul{
		padding:0 0.75rem;
		background: #fff;
		>h1{
			overflow: hidden;
			border-bottom: 1px solid #F2F2F2;
			padding: 0.5rem 0;
			span{
				float: left;
			}
			em{
				float: right;
				>i{
					color: #E42D13;
				}
			}
		}
		ul>li{
			overflow: hidden;
			position: relative;
			padding: 0.5rem;
			>p{
				float: left;
				text-align: center;
				width: 3rem;
				img{
					width: 2rem;
					border-radius: 50%;
				}
				>span{
					display: block;
					color: #999;
				}
			}
			>div{
				float: left;
				position: absolute;
				top: 50%;
				left: 50%;
				-webkit-transform: translate(-50%,-50%);
				-moz-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				-o-transform: translate(-50%,-50%);
				transform: translate(-50%,-50%);
				>h4{
					margin-top: 0.5rem;
				}
			}
		}
		
	}
	.baoming-box{

	}
	.btn-box{
		background: #fff;
		padding: 0.75rem 0 1.5rem;
		.btn-init{
			background: #FE6637;
			border-radius: 1rem;
			color: #fff;
			line-height: 2rem;
			width: 60%;
			margin: 0 auto;
		}
	}
	
</style>