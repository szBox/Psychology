<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约咨询</h1>
			<em>预约记录</em>
		</header>
		<div class="flexd-nav">
			<div>
				<img src="../../../assets/img/s1.png" alt="" />
			</div>
			<div>
				<img src="../../../assets/img/s2.png" alt="" />
				<p>200</p>
			</div>
			<div>
				<img src="../../../assets/img/s3.png" alt="" />
			</div>
		</div>
		<div id="teacher-swiper" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../../../assets/img/exchange_icon_a-market_s.png" />
				</div>
				<div class="swiper-slide">
					<img src="../../../assets/img/exchange_icon_game-interaction_n.png" />
				</div>
				<div class="swiper-slide">
					<img src="../../../assets/img/exchange_icon_my_n.png" />
				</div>
			</div>
			<div class="swiper-button-prev  swiper-button-black"></div>
			<div class="swiper-button-next  swiper-button-black"></div>
		</div>
		<div class="teacher-show">
			<h1>李多云老师</h1>
			<div class="show-div">
				<h3>擅长</h3>
				<p>心理治疗</p>
			</div>
			<div class="show-div">
				<h3>预约地点</h3>
				<p>阳光中学三栋三单元101</p>
			</div>
			<div class="show-tableBox">
				<h2>预约时间</h2>
				<div class="show-table">
					<ul class="table-init">
						<li>
							<div>
								
							</div>
							<p>上午</p>
							<p>下午</p>
						</li>
					</ul>
					<div class="table-action">
						<ul>
						<li>
							<div>
								<i>周一</i>
								<em>3-8</em>
							</div>
							<p>预约</p>
							<p>已预约</p>
						</li>
						<li>
							<div>
								<i>周二</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周三</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周四</i>
								<em>3-8</em>
							</div>
							<p>预约</p>
							<p>已预约</p>
						</li>	
						<li>
							<div>
								<i>周五</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周六</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
						<li>
							<div>
								<i>周日</i>
								<em>3-8</em>
							</div>
							<p></p>
							<p></p>
						</li>	
					</ul>
					</div>
					

				</div>
				<p class="table-tips">
					左右滑动可以查看其他预约时间
				</p>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		components: {

		},
		created(){
		
		},
		data() {
			return {
				items: [],
				/*最后的数组*/
				page: 1,
				/*当前页码*/
			}
		},
		mounted() {
			var mySwiper1 = new Swiper('#teacher-swiper', {
				prevButton: '.swiper-button-prev',
				nextButton: '.swiper-button-next',
			})
				var tabLen=$('.table-action ul li').length;
				var tabW=$('.table-action ul li').width()*(tabLen+2);
			$('.table-action ul').css({'minWidth':tabW})
			console.log(tabW)
		},
		methods: {

		}
	}
</script>
<style scoped lang="less">
	#teacher-swiper {
		height: 5rem;
		text-align: center;
		line-height: 5rem;
		margin: 1rem 0;
	}
	
	.swiper-button-next,
	.swiper-button-prev {
		height: 1.4rem;
		margin-top: 0;
		background-size: auto;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	
	.swiper-button-next {
		right: 1rem;
	}
	
	.swiper-button-prev {
		left: 1rem;
	}
	
	.swiper-slide>img {
		width: 4rem;
		height: 4rem;
		background: paleturquoise;
		border-radius: 50%;
	}
	
	.flexd-nav {
		position: fixed;
		top: 45%;
		-webkit-transform: translateY(-45%);
		-moz-transform: translateY(-45%);
		-ms-transform: translateY(-45%);
		-o-transform: translateY(-45%);
		transform: translateY(-45%);
		right: 0.75rem;
		div {
			text-align: center;
			height: 2.5rem;
		}
		div:nth-child(2) {
			margin: 0.2rem 0;
			>p {
				color: #999;
				font-size: 0.6rem;
			}
		}
		img {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
		}
	}
	
	.teacher-show {
		padding: 0 0.75rem;
		padding-right: 3rem;
		>h1 {
			font-size: 0.75rem;
			color: #000;
			font-weight: bold;
		}
		>div.show-div,
		.show-tableBox {
			background: #F2F2F2;
			border-radius: 0.3rem;
			margin: 0.5rem 0;
			padding: 0.5rem;
			>h3 {
				color: #000;
				font-weight: bold;
			}
			>p {
				color: #666;
				font-size: 0.65rem;
			}
		}
		.show-tableBox {
			padding: 0;
			background: none;
			>h2 {
				padding: 0.35rem 0.5rem;
				background: #f2f2f2;
				font-weight: bold;
				border-radius: 0.3rem 0.3rem 0 0;
			}
	
			.show-table{
				position: relative;
			}
			.table-tips{
				text-align: center;
				color: #666;
				font-size: 0.6rem;
				border-radius: 0 0 0.3rem 0.3rem;
				clear: both;
				line-height: 1.5rem;
				border: 1px solid #E4E4E4;

			}
			.table-init{
				position: absolute;
				top: 0;
				left:0;
				width: 2.5rem;
				>li{
					border-left: 1px solid #E4E4E4;
				}
			}
			.table-action{
				width: 12.5rem;
				overflow: hidden;
				overflow-x: scroll;
				float: left;
				margin-left: 2.5rem;
				border-right: 1px solid #E4E4E4;
				ul{
					overflow: hidden;
					
				}
			}
			.table-action li,.table-init li{
				
					float: left;
					text-align: center;
					>p{
						line-height: 1.8rem;
					}
					>p:last-child{
						border-bottom: none;
					}
					>p,div{
						width: 2.5rem;
						height: 1.8rem;
						font-size: 0.6rem;
						border-bottom: 1px solid #E4E4E4;
						border-right: 1px solid #e4e4e4;
					}
					>div>em{
						display: block;
					}
				
			}
		}
		
	}
</style>