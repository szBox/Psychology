<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约咨询</h1>
			<em @click="goPath({path:'/index2/yuyueJilu'})">预约记录</em>
		</header>
		<div class="b-content">
			<div id="teacher-swiper" class="swiper-container teacher-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(teacher,index) in teachNav">
					<div class="swiper-flex" :teacher-id="teacher.id">
						<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" :src="teacher.headPic" />
						</div>
						<h1>{{ teacher.name }}</h1>
						<div class='teacher-bb'>
							<p>{{teacher.presonSign | gexing}} </p>
							<p></p>
						</div>
					</div>
					
					<div class="see-box">
						<p>
							<img src="../../../assets/img/see.png"/>
							查看信息
						</p>
						<h4>
							<img src="../../../assets/img/zan_w.png"/>
							{{teacher.praiseCount}}
						</h4>
					</div>
					</div>
					
				</div>
				
				<!--<div class="swiper-slide">
					
				</div>-->
			</div>
			
		</div>
		<div class="teacher-show">
			
			
			<div class="show-div">
				<h3>擅长</h3>
				<div v-for='(skill,index) in skillArr' >
					<p>{{skill}}</p>
				</div>
			</div>
			<div class="show-div">
				<h3>预约地点</h3>
				<h5>{{address}}</h5>
			</div>
			<div class="show-div">
				<h3>预约时间</h3>
			</div>
			<div class="show-tableBox" style="margin-bottom: 2rem;">
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
						<div class="swiper-container table-swiper">
						    <div class="swiper-wrapper">
						        <div class="swiper-slide" >
						        	<ul>
								<li v-for="(item,index) in items"  v-if="index<5">
									<div>
										<!--<i>周一</i>
										<em>3-8</em>-->
										{{item.day}}
									</div>
									<!--<p v-if='item.data.length==1'>
										
									</p>-->
									<p v-for="itemAm in item.data">
										
										<span @click="yuyue(itemAm)" v-if='(parseInt(itemAm.endtime.split(":")[0]) != 0) && (parseInt(itemAm.endtime.split(":")[0]) <= 12) && (itemAm.reg == "true")'>
											预约
										</span>
										
										<span @click="yuyue(itemAm)" v-else-if='(parseInt(itemAm.endtime.split(":")[0]) != 0) && (parseInt(itemAm.endtime.split(":")[0]) > 12) && (itemAm.reg == "true")'>
											预约
										</span>
										
										
									</p>
									
								</li>
							</ul>
						        </div>
						        <div class="swiper-slide">
						        	<ul>
								<li v-for="(item,index) in items"  v-if="index>5">
									<div>
										<!--<i>周一</i>
										<em>3-8</em>-->
										{{item.day}}
									</div>
									<!--<p v-if='item.data.length==1'>
										
									</p>-->
									<p v-for="itemAm in item.data">
										
										<span @click="yuyue(itemAm)" v-if='(parseInt(itemAm.endtime.split(":")[0]) != 0) && (parseInt(itemAm.endtime.split(":")[0]) <= 12) && (itemAm.reg == "true")'>
											预约
										</span>
										
										<span @click="yuyue(itemAm)" v-else-if='(parseInt(itemAm.endtime.split(":")[0]) != 0) && (parseInt(itemAm.endtime.split(":")[0]) > 12) && (itemAm.reg == "true")'>
											预约
										</span>
										
										
									</p>
									
								</li>
							</ul>
						        </div>
						        
						    </div>
						    <div class="swiper-pagination"></div>
						</div>    
						

					</div>

				</div>
				<div class="table-tips">
					
				</div>
				
			</div>

		</div>
		
		
		</div>
		<div class="flexd-nav">
				<div  @click="goPath({path:'/chat'})">
					<img src="../../../assets/img/zixun.png" alt="" />
					<p>咨询</p>
				</div>
		</div>
		
	</div>

</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	import Swiper from 'swiper'
	export default {
		components: {

		},
		created() {
			console.log('111',this.value)
		},
		data() {
			return {
				theachPage:1,
				starTime:'',
				endTime:'',
				teachNav:[],//  返回老师列表
				skillArr:[], //返回的技能
				address:'',
				value:'',
				weekInfo:[],
				xxlist:[
					{name:'123'},
					{name:'123'},
					{name:'123'},
					{name:'123'}
				],
				items: [{
					"day": "2018-05-15",
					"data": [{
						"timeid": "111",
						"maxnum": "1",
						"count": "0",
						"reg": "true",
						"starttime": "14:00",
						"endtime": "21:00"
					}]
				}, {
					"day": "2018-05-16",
					"data": [{
						"timeid": "118",
						"maxnum": "2",
						"count": "0",
						"reg": "false",
						"starttime": "08:00",
						"endtime": "11:00"
					}]
				}, {
					"day": "2018-05-18",
					"data": [{
						"timeid": "172",
						"maxnum": "2",
						"count": "0",
						"reg": "true",
						"starttime": "08:00",
						"endtime": "11:00"
					}, {
						"timeid": "173",
						"maxnum": "2",
						"count": "0",
						"reg": "true",
						"starttime": "15:00",
						"endtime": "17:00"
					}]
				}, {
					"day": "2018-05-19",
					"data": [{
						"timeid": "174",
						"maxnum": "2",
						"count": "0",
						"reg": "true",
						"starttime": "08:00",
						"endtime": "11:00"
					}, {
						"timeid": "175",
						"maxnum": "2",
						"count": "0",
						"reg": "true",
						"starttime": "15:00",
						"endtime": "17:00"
					}]
				}, {
					"day": "2018-05-20",
					"data": [{
						"timeid": "176",
						"maxnum": "1",
						"count": "0",
						"reg": "true",
						"starttime": "08:00",
						"endtime": "11:00"
					}, {
						"timeid": "177",
						"maxnum": "1",
						"count": "0",
						"reg": "true",
						"starttime": "15:00",
						"endtime": "17:00"
					}]
				}, {
					"day": "2018-05-21",
					"data": [{
						"timeid": "178",
						"maxnum": "1",
						"count": "0",
						"reg": "true",
						"starttime": "08:00",
						"endtime": "11:00"
					}, {
						"timeid": "179",
						"maxnum": "1",
						"count": "0",
						"reg": "true",
						"starttime": "15:00",
						"endtime": "17:00"
					}]
				}, {
					"day": "2018-05-22",
					"data": [{
						"timeid": "181",
						"maxnum": "20",
						"count": "0",
						"reg": "true",
						"starttime": "08:00",
						"endtime": "12:00"
					}]
				}],
				/*最后的数组*/
				page: 1,
				/*当前页码*/
			}
		},
		filters:{
			...filter,
			gexing(val){
				if(!val){
					return '什么也没留下'
				}
			}
		},
		mounted() {
			var self=this;
			self.getTeachList();
			self.getWeek();
			
			

		},
		methods: {
			goPath(path) {
				this.$router.push(path)
			},
			getTeachList(){
				var self=this;
				var url=int.navTeacher;
				var params={
					current: self.theachPage,
				    type: 2,
				    size:5,
				};
				ajax.post_data(url,params,function(d){
					console.log('老师列表',d)
					if(d.code==0){
						self.teachNav=d.data.records;
//						for(var i=0; i<d.data.records.length; i++){
//							self.skillArr=d.data.records[i].skill.split(',');
//							console.log(self.skillArr)
//						}
						self.$nextTick(function(){
						 	var teacherNav = new Swiper('.teacher-swiper', {
								slidesPerView: 2.5,
						      initialSlide: 1,
						      centeredSlides: true,
								on:{
								    slideChange: function(){
								    	
								    	var index=this.activeIndex;
								    	self.skillArr=self.teachNav[index].skill.split(',')
								    	console.log(self.skillArr)
								    	var Tid=$('.swiper-flex').eq(index).attr('teacher-id');
								    	console.log('老师ID',Tid)
										self.getTable(Tid)
								    },
								  },		     
							})
						 	var table = new Swiper('.table-swiper',{
							  pagination :{
							    el: '.swiper-pagination',
							    clickable :true,
							  }
							})
						})
					}
				})
			},
			getTable(tid){
				var self=this;
				var url=int.tableWeek;
				var sid=localStorage.getItem('sid')
				console.log(self.starTime+'/'+self.endTime)
				var params={
					teacherId:tid,
					sid:sid,
					startDate:self.starTime,
					endDate:self.endTime,
				};
				ajax.post_data(url,params,function(d){
					console.log('week详情',d)
					if(d.code==0){
						self.weekInfo=d.data;
						self.address=d.data[0].address
					}
				})
			},
			getWeek(star,end){
				var self=this;
				var week = new Date().getDay(); 
				if(week==1){
					star=(new Date()).getTime();
					end=new Date().getTime() + 24*11*60*60*1000
				}
				else if(week==2){
					star=new Date().getTime() - 24*60*60*1000
					end=new Date().getTime() + 24*10*60*60*1000
				}
				else if(week==3){
					star=new Date().getTime() - 24*2*60*60*1000
					end=new Date().getTime() + 24*9*60*60*1000
				}
				else if(week==4){
					star=new Date().getTime() - 24*3*60*60*1000
					end=new Date().getTime() + 24*8*60*60*1000
				}
				else if(week==5){
					star=new Date().getTime() - 24*4*60*60*1000
					end=new Date().getTime() + 24*7*60*60*1000
				}
				self.starTime="2018-06-11";
		       	self.endTime='2018-06-22'
			},
			yuyue(i){
				alert(i.starttime+'-'+i.endtime)
			}
		}
	}
</script>
<style scoped lang="less">
.header{
	position: fixed;
}
.b-content{
	padding-bottom: 3rem;
}
	#teacher-swiper {
		text-align: center;
		padding: 1.5rem 0;
		
		/*background: linear-gradient(to right, #31c4ff, #3991f4);*/
	}
	#teacher-swiper.swiper-container {
		overflow: initial;
	}
	#teacher-swiper .swiper-slide{
		
      text-align: center;
      font-size: 18px;
      transition: all .4s;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      z-index: 199;
      box-shadow: none;
    
		background: url(../../../assets/img/teacherbg1.png);
		background-size: 100% 100%;
		/*width: 45% !important;*/
		border-radius: 0.4rem;
		.teacher-bg{
			background: #fff;
			margin: 0.6rem;
			border-radius: 0.4rem;
			padding: 0.5rem 0;
		}
		.teacher-img{
			img{
				width: 3.5rem;
				height: 3.5rem;
				border-radius: 50%;
			}
		}
		h1{
				margin: 0.3rem 0;
		}
		.teacher-bb{
			color: #666;
			font-size: 0.6rem;
		}
		.see-box{
			padding: 0.6rem;
			padding-top: 0;
			overflow: hidden;
			color: #fff;
			font-size: 0.6rem;
			p{
				float: left;
			}
			h4{
				float: right;
				font-size: 0.6rem;
			}
			img{
				width: 0.8rem;
				margin-top: -2px;
			}
		}
	}
	#teacher-swiper .swiper-slide.swiper-slide-active{
		 transform: scale(1.2);
	      z-index: 200;
	      box-shadow: 3px 3px 20px 4px rgba(0, 0, 0, .3);
	}
	
	#teacher-swiper .swiper-slide.swiper-slide-active .swiper-flex{
		width: 120%;
	}
	#teacher-swiper .swiper-slide:nth-child(3n-2){
		background: url(../../../assets/img/teacherbg1.png);
		background-size: 100% 100%;
	}
	#teacher-swiper .swiper-slide:nth-child(3n-1){
		background: url(../../../assets/img/teacherbg2.png);
		background-size: 100% 100%;
	}
	#teacher-swiper .swiper-slide:nth-child(3n-3){
		background: url(../../../assets/img/teacherbg3.png);
		background-size: 100% 100%;
	}
	.swiper-slide>img {
		width: 5rem;
		height: 5rem;
		background: paleturquoise;
		border-radius: 50%;
	}
	
	.flexd-nav {
		width:2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		/*line-height: 3rem;*/
		color: #fff;
		z-index: 99;
		background: #31C4FF;
		position: fixed;
		/*background: url(../../../assets/img/zixun.png);*/
		top: 50%;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);

		right: 0.75rem;
		div {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%,-50%);
			-moz-transform: translate(-50%,-50%);
			-ms-transform: translate(-50%,-50%);
			-o-transform: translate(-50%,-50%);
			transform: translate(-50%,-50%);
			p{
				font-size: 0.6rem;
				width: 2.5rem;
			}
		}
		
		img {
			width: 0.8rem;
		}
	}
	
	.teacher-show {
		position: relative;
		padding: 0 0.75rem;

	
		>div.show-div,
		.show-tableBox {
			/*background: #F2F2F2;*/
			border-radius: 0.3rem;
			margin: 0.5rem 0;
			padding:0.3rem 0.5rem;
			
			>h3 {
				color: #000;
				font-weight: bold;
				margin: 0.5rem 0;
			}
			
		}
		div.show-div{
			overflow: hidden;
			>div {
				    float: left;
				    margin-right: 0.5rem;
				   	background:url(../../../assets/img/qian1.png);
				    width: 4rem;
				    height: 1.5rem;
				    line-height: 1.5rem;
				    padding-left: 0.3rem;
				    background-size: 100% 100%;
				    color: #fff;
				}
			>div:nth-child(2) {
				   	background:url(../../../assets/img/qian2.png);
				    background-size: 100% 100%;
			}
			>div:nth-child(3) {
				   	background:url(../../../assets/img/qian3.png);
				    background-size: 100% 100%;
			}
		}
		.show-tableBox {
			padding: 0;
			background: none;
			border: 1px solid #199ED8;
			overflow: hidden;
			>h2 {
				padding: 0.35rem 0.5rem;
				background: #f2f2f2;
				font-weight: bold;
				border-radius: 0.3rem 0.3rem 0 0;
			}
			.show-table {
				position: relative;
			}
			.table-tips {
				text-align: center;
				color: #666;
				font-size: 0.6rem;
				border-radius: 0 0 0.3rem 0.3rem;
				clear: both;
				height: 2.25rem;
				line-height: 2.25rem;
				border: 1px solid #E8E8E8;
			}
			.table-init {
				position: absolute;
				top: 0;
				left: 0;
				width: 16.6%;
				z-index: 222;
    			background: #fff;
				>li {
					width: 100%;
					
				}
			}
			.table-action {
				width: 83.3%;
				float: left;
				margin-left: 16.6%;
				
				ul {
					width: 100%;
					overflow: hidden;
					height: 100%;
					li{
						width:20%;
					}
				}
			}
			.table-action li,
			.table-init li {
				float: left;
				text-align: center;
				>p {
					line-height: 2.25rem;
					>span{
						display: block;
						height: 100%;
					}
				}
				>p:last-child {
					border-bottom: none;
				}
				>p,
				div {
					width: 100%;
					/*width: 20%;*/
					height: 2.25rem;
					font-size: 0.6rem;
					border-bottom: 1px solid #E8E8E8;
					border-right: 1px solid #E8E8E8;
				}
				>div>em {
					display: block;
				}
			}
			.table-action li:last-child {
				>p,
				div {
					border-right: none;
				}
			}
		}
	}
	
	
	
	.table-swiper{
		overflow: initial !important;
		
		.swiper-pagination-bullets{
			bottom: -1.6rem;
			left:-1rem;
		}
	}
	
</style>