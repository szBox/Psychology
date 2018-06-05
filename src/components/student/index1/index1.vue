<template>
	<div class="index1">
		<header class="header">
			<h1>心灵阅读公共</h1>
		</header>
		<div id="top">

			<div class="swiper-container" id="nav">
				<div class="swiper-wrapper">
					<div class=" swiper-slide slide-on">
						<span>心理科普</span></div>
					<div class="swiper-slide">
						<span >心理专题</span></div>
					<div class="swiper-slide">
						<span >333333</span></div>
					<div class="swiper-slide">
						<span >444444</span></div>
					<div class="swiper-slide">
						<span>555555</span></div>
				
					<!--<div class="bar">
        <div class="color"></div>
      </div>-->
				</div>
			</div>
			
			<h1 class="hao-title">
				<img src="../../../assets/img/hao.png" alt="" />最新好文
			</h1>
		</div>
			
			<scroller :class='{"zindex":ztype==true}' :on-refresh="reType && refresh" :on-infinite="reType && infinite" ref="my_scroller">
			<div class="swiper-container" id="page">
			<div class="swiper-wrapper">
				<div class="swiper-slide slidepage">
					
					<ul class="nav-list">
						<li v-for="(item, index) in items1" @click="goPath(index)">
							<div class="lf">
								<div class="ellipsis">
									{{item.bb}}
								</div>
								<p class="time-div">
									<span>{{item.times}}</span>
									<em>
										<img src="../../../assets/img/pinglun.png" alt="" />30评
									</em>
								</p>
								</div>
							<img class="rt" :src="item.img" alt="" />
						</li>
					</ul>
							
					
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
		</scroller>
		
		
		

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
				items1: [],
				slidePage1:[
					{
						bb:'人性方面的细节调和，是从心理的角度还是从理性的角度思考？',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/x7.png'
					},
					{
						bb:'我想发起一次秋游活动,希望大家积极报名',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/topw1.png'
					},
					{
						bb:'话题333333333',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/topw3.png'
					},
					{
						bb:'组团444444444444',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/ren6.png'
					},
					{
						bb:'组团444444444444',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/ren6.png'
					},
					{
						bb:'组团444444444444',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/ren6.png'
					},
					{
						bb:'组团444444444444',times:'2018-04-15 15:00',num:'20',
						img:'src/assets/img/ren6.png'
					},
				],
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
			
			}
		},
		mounted() {
			var self=this;
			var swiperH = $(window).height() -	$('#nav').height()  - $('.header').height() 
			console.log(swiperH);
			$('.slidepage').height(swiperH);
			
//			setTimeout(function(){
//				$('#page').height($('.nav-list').height())
//			},500)
			var navSwiper = new Swiper('#nav', {
				freeMode: true,
				slidesPerView:'auto',
				on: {
				    transitionEnd: function(){

				    },
				  },
				
			});
			var pageSwiper = new Swiper('#page', {
				watchSlidesProgress: true,
				resistanceRatio: 0,
				on: {
					transitionEnd: function(e) {
						var pageIndex=pageSwiper.activeIndex
						navSwiper.slideTo(pageIndex)
					},
				}
			});

//			navSwiper.$el.on('touchstart', function(e) {
//				e.preventDefault() //去掉按压阴影
//			})
			navSwiper.on('tap', function(e) {
				var clickIndex = this.clickedIndex
				if(clickIndex!=undefined){
					pageSwiper.slideTo(clickIndex, 0);
				}
				
			})
	
		},
		created() {
			for(let i = 0; i < this.slidePage1.length; i++) {
				this.items1.push(this.slidePage1[i]);
			}
		},

		components: {
			//			yueduInfo

		},

		methods: {
			refresh(done) {
				setTimeout(() => {

					done()
				}, 1500)
			},
			infinite(done) {
				this.page++;
				done(true);
				console.log('拉啦啦')
				if(this.page == this.pageAll) {
					return
				}
				
			},

			active(index) {
				this.tabActive = index;
				console.log(this.tabActive);

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
#nav .slide-on{
	border-radius: 0.2rem;
	border: 2px solid red;
}
#nav .swiper-slide{
	 height:3.5rem;
	width: 35% !important;
	background: url(../../../assets/img/indexNav1.png);
	background-size: 100% 100%;
	margin: 0.75rem 0.75rem 0.75rem 0;
	text-align: center;
	line-height: 3.5rem;
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
#nav .swiper-slide-active{
	/*color: red;
	font-weight: 600;*/
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

.nav-list{

}
.hao-title{
	padding-left: 0.75rem;
	
}
.hao-title img{
	width: 1rem;
	margin: 0.75rem 0.4rem 0.75rem 0;
}
#page {

}
#page .slidepage.swiper-slide-active{
	height: auto !important;
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
._v-container{
	padding: 10rem 0.75rem 0;
}
</style>