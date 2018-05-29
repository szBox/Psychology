<template>
	<div class="index1">
		<header class="header">
			<h1>心灵阅读公共</h1>
		</header>
		<div id="top">

			<div class="swiper-container" id="nav">
				<div class="swiper-wrapper">
					<div class=" swiper-slide">
						<span  style="color:rgba(255,72,145,1);">热卖</span></div>
					<div class="swiper-slide">
						<span >水果</span></div>
					<div class="swiper-slide">
						<span >乳品</span></div>
					<div class="swiper-slide">
						<span >零食</span></div>
					<div class="swiper-slide">
						<span>肉蛋</span></div>
				
					<!--<div class="bar">
        <div class="color"></div>
      </div>-->
				</div>
			</div>
		</div>
		<div class="swiper-container" id="page">
			<div class="swiper-wrapper">
				<div class="swiper-slide slidepage">
					111
				</div>
				<div class="swiper-slide slidepage">
					222
				</div>
				<div class="swiper-slide slidepage">
					333
				</div>
				<div class="swiper-slide slidepage">
					444
				</div>
				<div class="swiper-slide slidepage">
					555
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
				reType: true,
				tabActive: 0,
				ztype: false,
				items: [],
				/*最后的数组*/
				page: 1,
				tSpeed:300, //切换速度300ms
				navSlideWidth:'',	//span的宽度
				navSum:'',
				clientWidth:'',  //nav的总宽度
				navWidth : 0,
				topBar:'',
				activeSlidePosition:'',
				pageIndex:'',
				navActiveSlideLeft:'',//page跟随
				data_swiper_slide:{
					'margin':'0 5px',
				    'text-align':'center',
				   'display':'block',
				    'line-height':'4rem',
				    'font-size':'14px',
				    'color':'#333333',
				    'height':'4rem',
					'width': '5rem  !important',
					'background': 'url(../../../assets/img/indexNav1.png)',
					'background-size': '100% 100%',
				}
			}
		},
		mounted() {
			var self=this;
			var navSwiper = new Swiper('#nav', {
				slidesPerView: 6,
				freeMode: true,
				on: {
					init: function() {
						console.log('pp',this.slides.eq(0))
						self.navSlideWidth = this.slides.eq(0).css('width'); //导航字数需要统一,每个导航宽度
						self.navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置

						self.clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
						
						for(var i = 0; i < this.slides.length; i++) {
							self.navWidth += parseInt(this.slides.eq(i).css('width'))
						}

						self.topBar = this.$el.parents('body').find('#top') //页头

					},

				},
			});
			var pageSwiper = new Swiper('#page', {
				watchSlidesProgress: true,
				resistanceRatio: 0,
				on: {
					transitionStart: function() {

						self.activeSlidePosition = navSwiper.slides[this.activeIndex].offsetLeft
						//释放时导航粉色条移动过渡
						navSwiper.slides.eq(this.activeIndex).find('span').transition(self.tSpeed)
  						navSwiper.slides.eq(this.activeIndex).find('span').css('color', 'rgba(255,72,145,1)')
						//释放时文字变色过渡
						
						if(this.activeIndex > 0) {
							navSwiper.slides.eq(this.activeIndex - 1).find('span').transition(self.tSpeed)
							navSwiper.slides.eq(this.activeIndex - 1).find('span').css('color', 'rgba(51,51,51,1)')
						}
						if(this.activeIndex < this.slides.length) {
							navSwiper.slides.eq(this.activeIndex + 1).find('span').transition(self.tSpeed)
							navSwiper.slides.eq(this.activeIndex + 1).find('span').css('color', 'rgba(51,51,51,1)')
						}
						//导航居中
						self.navActiveSlideLeft = navSwiper.slides[this.activeIndex].offsetLeft //activeSlide距左边的距离
						console.log('距离',self.navActiveSlideLeft)
						console.log('Nav总宽度',self.clientWidth)
						console.log('span宽度',self.navSlideWidth)
						navSwiper.setTransition(self.tSpeed)
						if(self.navActiveSlideLeft < (self.clientWidth - parseInt(self.navSlideWidth)) / 2) {
							navSwiper.setTranslate(0)
						} else if(self.navActiveSlideLeft > self.navWidth - (parseInt(self.navSlideWidth) + self.clientWidth) / 2) {
							navSwiper.setTranslate(self.clientWidth - self.navWidth)
						} else {
							navSwiper.setTranslate((self.clientWidth - parseInt(self.navSlideWidth)) / 2 - self.navActiveSlideLeft)
						}

					},
				}
			});

//			navSwiper.$el.on('touchstart', function(e) {
//				e.preventDefault() //去掉按压阴影
//			})
			navSwiper.on('tap', function(e) {
				var self=this;
				console.log(self.clickedIndex)
				var clickIndex = self.clickedIndex
				var clickSlide = self.slides.eq(clickIndex)
				pageSwiper.slideTo(clickIndex, 0);
				self.slides.find('span').css('color', 'rgba(51,51,51,1)');
				clickSlide.find('span').css('color', 'rgba(255,72,145,1)');
			})
	
		},
		created() {
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
			finishPullToRefresh(a) {
				console.log(a)
				console.log('禁止下拉刷新')
			},
			goPath(i) {
				this.$router.push({
					path: "/index1/yueduInfo/" + i
				})
			}
		}
	})
</script>

<style scoped>
	.header {
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
	
	.nav>div {
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
		/*width: inherit !important;*/
	}
	
	.zindex {
		z-index: -1000;
	}
	#top {
    position:absolute;
    top:0;
    z-index:5;
    width:100%;
    background:#fff;
     padding-top: 2.5rem;
}
#top .addr {
    height:36px;
    margin:0 auto;
    display:block;
}
#top .search {
    position:absolute;
    top:0;
    right:0;
    height:36px;
    display:block;
}
#nav {
    border-bottom:1px solid #ebebeb;
}
#nav .swiper-slide{
	 height:3.5rem;
	width: 6rem  !important;
	background: url(../../../assets/img/indexNav1.png);
	background-size: 100% 100%;
	margin: 0.75rem 0.75rem 0.75rem 0;
}
#nav .swiper-slide:first-child{
	margin-left: 0.75rem;
}
#nav .swiper-slide:nth-child(2){
	background: url(../../../assets/img/indexNav2.png);
	background-size: 100% 100%;
}
#nav .swiper-slide:nth-child(3){
	background: url(../../../assets/img/indexNav3.png);
	background-size: 100% 100%;
}
#nav .swiper-slide:nth-child(4){
	background: url(../../../assets/img/indexNav4.png);
	background-size: 100% 100%;
}
#nav .swiper-slide:nth-child(5){
	background: url(../../../assets/img/indexNav5.png);
	background-size: 100% 100%;
}
#nav .swiper-slide span {
    /*margin:0 5px;
    text-align:center;
    display:block;
    line-height:4rem;
    font-size:14px;
    color:#333333;
    height:4rem;
	width: 5rem  !important;
	background: url(../../../assets/img/indexNav1.png);
	background-size: 100% 100%;*/
}
#nav .bar {
    width:50px;
    height:3px;
    position:absolute;
    bottom:0px;
}
#nav .bar .color {
    width:36px;
    margin:0 auto;
    height:3px;
    background:#ff4891;
}
.banner img {
    width:100%;
    display:block;
}
.banner .swiper-pagination {
    left:auto;
    right:7px;
    bottom:7px;
    width:auto;
    padding:2px 7px;
    border-radius:10px;
    color:#fff;
    background:rgba(0,0,0,.3);
}
#page {
    margin-bottom:50px;
    height:100%;
   padding-top: 5.5rem;
}
#page .slidepage {
    height:100%;
}
.scroll {
    height:100%;
}
.slidescroll {
    height:auto;
}
</style>