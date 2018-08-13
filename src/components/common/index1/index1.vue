<template>
	<div class="index1">
		<header class="header">
			<h1>{{indexTitle}}</h1>
		</header>
		<div class="b-content">
			<div id="top">

			<div class="swiper-container" id="nav">
				<div class="swiper-wrapper" >
					<div :data-index='0' class=" swiper-slide" @click="navOn('','全部')">
						全部
					</div>
					<div :data-index='index+1' class=" swiper-slide" v-for="(nav,index) in navList" @click.stop=" navOn(nav.id,nav.name)">
						{{nav.name}}
					</div>
				</div>
			</div>
			
			<h1 class="hao-title">
				<img src="../../../assets/img/hao.png" alt="" />最新好文
			</h1>
		</div>
			
			<scroller  v-if='showInit' :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			
					
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
							<img style="border-radius: 0.3rem;" class="rt" :src="item.covers" alt="" />
						</li>
					</ul>

		</scroller>
		</div>
		
		
		
		

	</div>
</template>
<script language="javascript">
</script>
<script>
	import VueScroller from 'vue-scroller'
	import Swiper from 'swiper'
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	export default({
		data() {
			return {
				indexTitle:'心灵阅读',
				tabActive: 0,
				page:1,
				pages:'',
				newList:[],
				navList:[], //nav头部列表
				navName:'',
				navId:'',
				navOndis:true,
				navIndex:'',
				dataObj:[],
				showInit:false,
			}
		},
		 meta: {
            keepAlive: true // 需要被缓存
        },
		filters:{
			...filter,
			
		},
		mounted() {
			var self=this;
			self.$root.eventHub.$emit('Vloading',true)
			self.getNav();
			self.getList();  //什么都不传  全部显示
			
			
		},
		created() {
//			alert(this.page)
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
					size:9999,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("nav列表",d);
					if(d.code==0){
						self.navList=d.data.records;
						
						 self.$nextTick(function(){
						 	var navSwiper = new Swiper('#nav', {
							freeMode: true,
							slidesPerView:'auto',
						});
						 })
						
					}
		       });
			},
			navOn(id,name){
				var self=this;
				self.page=1;
//				if(event.target.className.indexOf('swiper-slide') > -1){
					console.log('点击的index',event.target.dataset.index)
					if(self.navIndex!=event.target.dataset.index){
						if(self.dataObj){
							self.navName=name; //传给 刷新函数 navOnPage
							self.navId=id;
							self.indexTitle=name;
							if(name=='全部'){
								self.indexTitle='心灵阅读'
							}
							var url=int.index1List;
							var sid=localStorage.getItem('sid');
							var params={
								  columnId:id,
								  current: 1,
								  size: 10,
			//					  state: 0,
							}
							 ajax.post_data(url, params, function(d) {
					//        	_this.$root.eventHub.$emit('Vloading',false)
					            console.log("专题i列表",d);
								if(d.code==0){
								 	self.navOndis=false;
									self.pages=d.data.pages;
									self.newList=d.data.records;
									self.$refs.my_scroller.scrollBy(0,0,true);
								}
					       });
						}
						
					}
					self.navIndex=event.target.dataset.index
//				}

			},
			navOnList(id,name){
				var self=this;
				var url=int.index1List;
				var sid=localStorage.getItem('sid');
				var params={
					  columnId:id,
					  current: 1,
					  size: 10,
//					  state: 0,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("专题i列表",d);
					if(d.code==0){
						 self.pages=d.data.pages;
						if(d.data.records.length==0){
							self.newList='';
						}
						else{
							self.newList=d.data.records;
						}
					}
		       });			
			},
			navOnPage(id,name){
				var self=this;
				var url=int.index1List;
				var sid=localStorage.getItem('sid');
				var params={
					  columnId:id,
					  current: self.page,
					  size: 10,
//					  state: 0,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("专题i列表",d);
					if(d.code==0){
						self.pages=d.data.pages;
						if(d.data.records.length==0){
							self.newList='';
						}
						for(let i = 0; i < d.data.records.length; i++) {
							self.newList.push(d.data.records[i]);
						}
					}
		       });			
			},
			getList(){
				var self=this;
				var url=int.index1List;
				var sid=localStorage.getItem('sid');
				var params={
					  current: self.page,
					  size: 10,
//					  state: 0,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("最新列表",d);
					if(d.code==0){
						self.showInit=true;
						if(self.showInit==true){
							self.$nextTick(function(){
								$('._v-content').css({
									paddingTop:10+'rem',
									paddingLeft:'0.75rem',
									paddingRight:'0.75rem'
								});

							})
							
						}
						
						self.$root.eventHub.$emit('Vloading',false)
							self.newList=d.data.records
							self.pages=d.data.pages;
					}
		       });
			},
			
			refresh(done) {
				var self=this;
				self.page=1;
				setTimeout(function(){
					self.navOnList(self.navId,self.navName)
						done()
				},1500)
			},
			infinite(done) {
				var self=this;
				console.log('112',self.page+'---'+self.pages)
				if(self.page>=self.pages){
					done(true)
				}
				else{
		
					console.log('拉啦啦')
					self.page++
					setTimeout(function(){
						self.navOnPage(self.navId,self.navName)
						done()
					},1500)
				}
				
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