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
							<img  @click="seeTeacher(teacher.id)" :src="teacher.headPic" />
						</div>
						<h1>{{ teacher.name }}</h1>
						<div class='teacher-bb'>
							<p>{{teacher.presonSign | gexing}} </p>
							<p></p>
						</div>
					</div>
					
					<div class="see-box">
						<p @click="seeTeacher(teacher.id)">
							<img src="../../../assets/img/see.png"/>
							查看信息
						</p>
						<h4 v-if='teacher.selfPraise==0' @click="zan(teacher.praiseCount,teacher.id)">
							<img src="../../../assets/img/zan_w.png"/>
							{{teacher.praiseCount}}
						</h4>
						<h4 v-else @click='zanQx(teacher.praiseCount,teacher.id)'>
							<img src="../../../assets/img/zan2.png"/>
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
								<li v-for="(item,index) in dateAll"  v-if="index<5">
									<div>
										<p>周{{index+1 | weekNum}}</p>
										<span>{{item.day | ddDate}}</span>
									</div>
									<p >
										<state-table  :yuyue='item.day | ymdDate | weekAm(tableArr,1)'></state-table>
									
									</p>
									<p >
										<state-table   :yuyue='item.day | ymdDate | weekAm(tableArr,2)'></state-table>
										
									</p>
								</li>
							</ul>
						        </div>
						        <div class="swiper-slide">
						        	<ul>
								<li v-for="(item,index) in dateAll"  v-if="index>4">
									<div>
										<p>周{{index+1 | weekNum}}</p>
										<span>{{item.day | ddDate}}</span>
									</div>
									<p >
										<state-table   :yuyue='item.day | ymdDate | weekAm(tableArr,1)'></state-table>
									
									</p>
									<p >
										<state-table   :yuyue='item.day | ymdDate | weekAm(tableArr,2)'></state-table>
										
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
	import stateTable from '../../common/State_Table'
	import {Toast } from 'vux'
	export default {
		components: {
			stateTable,
			Toast
		},
		created() {

		},
		data() {
			return {
				theachPage:1,
				Tid:'',
				starDate:'',
				NumDay: 24 * 60 * 60 * 1000,
				endDate:'',
				teachNav:[],//  返回老师列表
				skillArr:[], //返回的技能
				address:'',
				value:'',
				tableArr:[],
				
				dateAll: [
				
				],
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
			},
			weekAm(val,date,am){
					let yue=0,yid;
					
					for(var d=0; d<date.length; d++){
						if(val==date[d].date && am==date[d].period && date[d].status==1){
							yue=1;
							yid=date[d].id;
							break
						}else if(val==date[d].date && am==date[d].period && date[d].status==2){
							yue=2;
							break
						}else if(val==date[d].date && am==date[d].period && date[d].status==3){
							yue=3;
							break;
						}else if(val==date[d].date && am==date[d].period && date[d].status==4){
							yue=4
							break
						}
					}
					if(yue==1){
						return '预约&'+yid
					
					}else if(yue==2){
						return '不可预约'
					}
					else if(yue==3){
						return '已预约'
					}else if(yue==4){
						return '已满'
					}
				
			},
			weekPm(val,date,pm){
					let yue=0,yid;
					for(var d=0; d<date.length; d++){
						if(val==date[d].date && pm==date[d].period && date[d].status==1){
							yue=1;
							yid=date[d].id;
							break
						}else if(val==date[d].date && pm==date[d].period && date[d].status==2){
							yue=2;
							break
						}else if(val==date[d].date && pm==date[d].period && date[d].status==3){
							yue=3;
							break;
						}else if(val==date[d].date && pm==date[d].period && date[d].status==4){
							yue=4
							break
						}
					}
					if(yue==1){
						return '预约&'+yid
					
					}else if(yue==2){
						return '不可预约'
					}
					else if(yue==3){
						return '已预约'
					}else if(yue==4){
						return '已满'
					}
				
				
			},
			weekNum(val){
				switch (val) {
                case 1: 
                case 6:
                    val = '一';
                    break;
                case 2: 
                case 7:
                    val = '二';
                    break;
                case 3: 
                case 8: 
                    val = '三';
                    break;
                case 4: 
                case 9: 
                    val = '四';
                    break;
                case 5:
                case 10: 
                    val = '五';
                    break;
            	}
				return val
			}
		},
		mounted() {
			var self=this;
			let Time,week,dateArray
			self.getTeachList();
			week=new Date().getDay();
			Time=new Date(new Date().toLocaleDateString()).getTime();
			
//			debugger;
			switch (week) {
                case 1: 
                    dateArray = [0,1,2,3,4,7,8,9,10,11];
                    break;
                case 2: 
                    dateArray = [-1,0,1,2,3,6,7,8,9,10];
                    break;
                case 3: 
                    dateArray = [-2,-1,0,1,2,5,6,7,8,9];
                    break;
                case 4: 
                    dateArray = [-3,-2,-1,0,1,4,5,6,7,8];
                    break;
                case 5: 
                    dateArray = [-4,-3,-2,-1,0,3,4,5,6,7];
                    break;
                case 6:
                    dateArray = [-5,-4,-3,-2,-1,2,3,4,5,6,];
                    break;
                case 0:
                    dateArray = [-6,-5,-4,-3,-2,1,2,3,4,5];
                    break;
            }
			for(var i=0; i<dateArray.length; i++){
				self.dateAll.push({
						day:Time + self.NumDay * dateArray[i]
					}
				)
				
			}
				
		},
		methods: {
			goPath(path) {
				this.$router.push(path)
			},
			zan(val,id){
				var self=this;
				var url=int.TeacherZan+id;
				var params={

				};
				ajax.post_data(url,params,function(d){
					console.log('点赞',d)
					val+=1
					self.getTeachZan()
				})
			},
			zanQx(val,id){
				var self=this;
				var url=int.TeacherZanQx+id;
				var params={

				};
				ajax.delete_data(url,params,function(d){
					console.log('取消点赞',d)
					val-=1
					self.getTeachZan()
				})
			},
			seeTeacher(i){
				this.$router.push({
					path:'/index2/teacherInfo/'+i
				})
			},
			getTeachZan(){
				var self=this;
				var url=int.navTeacher;
				var params={
					current: self.theachPage,
				    type: 2,
				    size:5,
				};
				ajax.post_data(url,params,function(d){
					if(d.code==0){
						self.teachNav=d.data.records;
					}
				})
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
						self.$nextTick(function(){
						 	var teacherNav = new Swiper('.teacher-swiper', {
								slidesPerView: 2.5,
						      initialSlide: 1,
						      centeredSlides: true,
								on:{
								    slideChange: function(){
								    	
								    	var index=this.activeIndex;
								    	self.skillArr=self.teachNav[index].skill.split(',')
								    	var Tid=$('.swiper-flex').eq(index).attr('teacher-id');
								    	console.log('老师ID',Tid)
										self.getTable(Tid)
										self.$root.eventHub.$off('zidingyi')
										self.$root.eventHub.$on('zidingyi',function(d){
											self.Tid=d;
											var loginId=localStorage.getItem('loginId')
											var url=int.yuyueClick;
											var params={
												stuId: loginId,
							  					subId: d
											};
											ajax.post_data(url,params,function(d){
												self.getTable(Tid);
												console.log('可预约',d)
												if(d.code==1013){
													self.$vux.toast.show({
														type: 'text',
														text: '报名人数已满',
														position: 'bottom'
													})
												}
											})
										})
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
				var loginId=localStorage.getItem('loginId')
				self.starDate=filter.ymdDate(filter.getWeek().star);
				self.endDate=filter.ymdDate(filter.getWeek().end);
//				console.log(self.starTime+'/'+self.endTime)
				var params={
					teacherId:tid,
					sid:sid,
					startDate:self.starDate,
					endDate:self.endDate,
					type:2,
					stuId:loginId
				};
				ajax.post_data(url,params,function(d){
					console.log('week详情',d)
					if(d.code==0){
						self.tableArr=d.data;
						
						console.log('xxxxx',self.tableArr)
						if(d.data.length!=0){
							self.address=d.data[0].address
													}else{
							self.address='暂无'
						}
						
					}
				})
			},
			
			
//			yuyueGo(){
//				
//			}
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
				   	
				    width: 4rem;
				    height: 1.5rem;
				    line-height: 1.5rem;
				    padding-left: 0.3rem;
				    color: #fff;
				}
			>div:nth-child(3n-2){
				background:url(../../../assets/img/qian1.png);
				    background-size: 100% 100%;
			}
			>div:nth-child(3n-1) {
				   	background:url(../../../assets/img/qian2.png);
				    background-size: 100% 100%;
			}
			>div:nth-child(3n) {
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
					>div{
						border: none;
					}
				}
				>p:last-child {
					border-bottom: none;
				}
				>p,
				div {
					
					width: 100%;
					/*line-height: 2.25rem;*/
					height: 2.25rem;
					font-size: 0.6rem;
					border-bottom: 1px solid #E8E8E8;
					border-right: 1px solid #E8E8E8;
					>p{
						color: #000;
					}
					>span{
						color: #666;
					}
				}
				>div>em {
					display: block;
				}
				>div{
					
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