<template>
	<div class="index1">
		<header class="header">
			<h1>{{indexTitle}}</h1>
		</header>
		<div id="top">

			<div class="swiper-container" id="nav">
				<div class="swiper-wrapper" >
					<div class=" swiper-slide" v-for="(nav,index) in navList" @click="navOn(nav.id,nav.name)">
						<span>{{nav.name}}</span>
					</div>
				</div>
			</div>
			
			<h1 class="hao-title">
				<img src="../../../assets/img/hao.png" alt="" />最新好文
			</h1>
		</div>
			
			<scroller :class='{"zindex":ztype==true}' :on-refresh="reType && refresh" :on-infinite="reType && infinite" ref="my_scroller">
			
					
					<ul class="nav-list">
						<li v-for="(item, index) in newList" @click="goPath(item.id)">
							<div class="lf">
								<div class="ellipsis">
									{{item.title}}
								</div>
								<p class="time-div">
									<span>{{item.insertTime |niceDate}}</span>
									<em>
										<img src="../../../assets/img/pinglun.png" alt="" />{{item.comments}}评
									</em>
								</p>
								</div>
							<img class="rt" :src="item.cover" alt="" />
						</li>
					</ul>

		</scroller>
		
		
		

	</div>
</template>
<script language="javascript">
</script>
<script>
	import Swiper from 'swiper'
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	export default({
		data() {
			return {
				reType: true,
				indexTitle:'心灵阅读',
				tabActive: 0,
				newPage:1,
				nav1Page:1,
				newList:'',
				ztype: false,
				items1: [],
				navList:[], //nav头部列表
			
			}
		},
		filters:{
			...filter,
			
		},
		mounted() {
			var self=this;
			self.getNav();
			self.getNew();

			$('._v-content').css({
				paddingTop:10+'rem',
				paddingLeft:'0.75rem',
				paddingRight:'0.75rem'
			});
			
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

	
		},
		created() {
			
		},

		components: {
			//			yueduInfo

		},

		methods: {
			getNav(){
				var self=this;
				var url=int.index1Nav;
				var sid=localStorage.getItem('sid');
				var params={
					current:1,
					size:10,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("nav列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.navList=d.data.records;
						}
					}
		       });
			},
			navOn(i,name){
				var self=this;
				self.indexTitle=name;
				var url=int.index1List;
				var sid=localStorage.getItem('sid');
				var params={
					  columnId:i,
					  current: self.nav1Page,
					  size: 10,
//					  state: 0,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("专题i列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.newList=d.data.records;
						}
					}
		       });
			},
			getNew(){
				var self=this;
				var url=int.index1List;
				var sid=localStorage.getItem('sid');
				var params={
//					  columnId:15,
					  current: self.newPage,
					  size: 10,
//					  state: 0,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("最新列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.newList=d.data.records
						}
					}
		       });
			},
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
._v-content{
	padding: 10rem 0.75rem 0 !important;
}
</style>