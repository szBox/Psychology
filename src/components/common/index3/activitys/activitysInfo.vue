<template>

	<div class="activitysInfo">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>植树活动(发起的)</h1>
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
					我发起
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
				<div>
					<h1 @click="typeToggle(1)" :class="{'baoming-active':types==1}" class="baoming-type">
						<span>已报名&nbsp;&nbsp;(10)</span>
						<em></em>
					</h1>
					<h1  @click="typeToggle(2)":class="{'baoming-active':types==2}" class="baoming-type">
						<span>待审核&nbsp;&nbsp;(5)</span>
						<em></em>
					</h1>
				</div>
				
				<ul v-if='types==1'>
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
				<ul v-if='types==2'>
					<li>
						<p>
							<img src="../../../../assets/img/ren3.png" alt="" />
							
							<span>李sss玉</span>
						</p>
						<div>
							<p>18874159636</p>
							<h4>三年级二班</h4>
							
						</div>
						<h6>
							<i>通过</i>
							<i @click="noGo()">不通过</i>
						</h6>
						
					</li>
					<li>
						<p>
							<img src="../../../../assets/img/ren2.png" alt="" />
							<span>李玉</span>
						</p>
						<div>
							<p>1888888888</p>
							<h4>三年级二班</h4>
						</div>
						<h6>
							<i>通过</i>
							<i>不通过</i>
						</h6>
					</li>
				</ul>
			</div>
			
			<myalert :alertProps='alertType' :type='type'></myalert>
			<!--<div class="btn-box">
				<div class="btn-init">我要退出</div>
			</div>-->
		</div>
		
	</div>
</template>

<script>
	import myalert from '../../alert'
	export default({
		data(){
			return{
				types:1,
				alertType:false,
				type:2
			}
		},
		components:{
			myalert
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			typeToggle(i){
				var self=this;
				self.types=i;
			},
			noGo(){
				var self=this;
				self.alertType=true
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
			color: #25BEFF;
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
		>div{
			border-bottom: 1px solid #F2F2F2;
			overflow: hidden;
			>h1{
			padding: 0.5rem 0 0;
			float: left;
			margin-right: 1.5rem;
			color: #999;
			span{
				
				
			}
			em{
			
				
			}
		}
		>h1.baoming-active{
			color: #3991F4;
			em{
			
				
				display: block;
				height: 0.15rem;
				border-radius: 1rem;
				width: 1.5rem;
				margin: 0.3rem auto 0;
				background: #3991F4;
			}
		}
		}
		
		>ul{
			clear: both;
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
				width: 60%;
				float: left;
				height: 3.1rem;
				margin-left: 10%;
				>p{
					line-height: 1.55rem;
				}
				>h4{
					line-height: 1.55rem;
				}
				
			}
			>h6{
					position: absolute;
					top: 50%;
					right: 0%;
					-webkit-transform: translateY(-50%);
					-moz-transform: translateY(-50%);
					-ms-transform: translateY(-50%);
					-o-transform: translateY(-50%);
					transform: translateY(-50%);
					i{
						display: inline-block;
						width: 3rem;
						height:1.4rem;
						line-height: 1.4rem;
						color: #fff;
						text-align: center;
						background: #32C4FF;
						margin-left: 0.5rem;
						border-radius: 1rem;
					}
					i:last-child{
						background: #FE6637;
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