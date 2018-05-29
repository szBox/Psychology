<template>
	<div class="index1">
		<header class="header">
			<h1>心灵阅读公共</h1>
		</header>

		<nav class="nav">
			<div class="swiper-container swiper-container2">
				<div class="swiper-wrapper">
					<div class="swiper-slide nav-btn  nav-active">最新</div>
					<div class="swiper-slide nav-btn">心理科普</div>
					<div class="swiper-slide nav-btn">心理专题</div>
					<div class="swiper-slide nav-btn">心理频道</div>
					<div class="swiper-slide nav-btn">案例分析</div>
					<div class="swiper-slide nav-btn">案例音乐</div>
				</div>
			</div>
		</nav>
		<div class="swiper-box">
			<div class="swiper-container swiper-container1">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="isscroll">
							<scroller :class='{"zindex":ztype==true}' :on-refresh="reType && refresh" :on-infinite="reType && infinite" ref="my_scroller">

								<ul class="nav-list">
									<li v-for="(item, index) in items" @click="goPath(index)">
										<div class="lf">
											<div class="ellipsis">
												人性方面的细节调和，是从心理的角度还是从理性的角度思考？
											</div>
											<p class="time-div">
												<span>2018-04-15 12:10</span>
												<em>
													<img src="../../../assets/img/pinglun.png" alt="" />30评
												</em>
											</p>
											</div>
										<img class="rt" src="../../../assets/img/x7.png" alt="" />
									</li>
								</ul>
							</scroller>
						</div>
						<!--最新-->
						
					</div>
					<div class="swiper-slide">slider2</div>
					<div class="swiper-slide">slider3</div>
					<div class="swiper-slide">slider4</div>
					<div class="swiper-slide">slider5</div>
					<div class="swiper-slide">slider6</div>
					
				</div>
			</div>
		</div>

	</div>
</template>
<script language="javascript">
</script>
<script>
	import Swiper from 'swiper'
	export default({
		data() {
			return {
				reType:true,
				tabActive: 0,
				ztype:false,
				items: [],
				/*最后的数组*/
				page: 1,
				/*当前页码*/
			}
		},
		mounted() {
//			console.log('111',this.store.types)
			var vm=this;
			var swiperH = $(window).height() - $('.nav').height() - $('.header').height() - $('.weui-tabbar').height()
			console.log(swiperH);
			$('.swiper-wrapper').height(swiperH);
			var mySwiper = new Swiper('.swiper-container1', {
//				touchMoveStopPropagation: true,
				onSliderMove: function(even){
					vm.finishPullToRefresh();
					vm.ztype=true;
//					$('.isscroll').css("zIndex",'-100')

//					$('.pull-to-refresh-layer').removeClass('acitve')
			   },
				onTransitionEnd: function(event) {
					var j = event.activeIndex;
//					$('._v-content').removeAttr("style")
					$('.nav-btn').removeClass('nav-active').eq(j).addClass('nav-active');
				}
			})
			var mySwiperNav = new Swiper('.swiper-container2',{
				freeMode : true,
				freeModeMomentumBounce : false,
				onSliderMove: function(even){
			
			   },
			})
			$('.nav-btn').click(function() {
				let index = $(this).index();
				$(this).addClass('nav-active').siblings().removeClass('nav-active')
				console.log(index)
				mySwiper.slideTo(index, 600, false); //切换到第一个slide，速度为1秒
			})
		},
		created(){
			this.bottom = 10; //一页展示10个
			this.result = '';
			for(let i = 1; i <= this.bottom; i++) {
				this.items.push(this.result);
			}
			
			console.log(this.items);
		},
		
		components: {
//			yueduInfo

		},
		
		methods: {
			refresh(done) {
				setTimeout(() => {
				console.log('刷新了')
					done()
				}, 1500)
			},
			infinite(done) {
				if(this.page == 1) {
					done(true)
				}
				console.log('拉啦啦')
			},
			
			active(index) {
				this.tabActive = index;
				console.log(this.tabActive);

			},
			finishPullToRefresh(a){
				console.log(a)
				console.log('禁止下拉刷新')
			},
			goPath(i) {
				this.$router.push({ path: "/index1/yueduInfo/" + i })
			}
		}
	})
</script>

<style scoped>
	.header{
		border: none;
	}
	nav.nav {
		padding: 0 0.75rem;
		height: 2.5rem;
		line-height: 2.5rem;
		border-bottom: 1px solid #c9c9c9;
		width: 100%;
		overflow: hidden;
		/*display: flex;*/
		/*flex-wrap: wrap;*/
		/*justify-content: space-between;*/
	}
	.nav>div{
		overflow-y: hidden;
		overflow-x: scroll;
		height: 3.1rem;
	}

	
	nav .nav-btn {
		font-size: 0.65rem;
		width: 30% !important;
	}
	
	.nav-active {
		color: darkorange;
		font-weight: bold;
	}
	
	.swiper-slide-active {
		width: inherit !important;
	}

	.zindex{
		z-index: -1000;
	}
</style>