<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约咨询</h1>
			<em @click="goPath({path:'/index2/yuyueNameT'})">预约名单</em>
		</header>
		<div class="b-content">
			<div class="teacher-Top">
				
						
						<div class="teacher-img">
							<img  :src="teacherInfo.headPic" />
						</div>
						<h1> {{teacherInfo.name}}</h1>
						<div class='teacher-bb'>
							<p>{{teacherInfo.personSign}}</p>
							
						</div>
						<div class="see-box">
							
								<!--<img @click="goPath({path:'/chat'})" src="../../../assets/img/zixun.png"/>-->
								<!--<span @click="goPath({path:'/chat'})">学生咨询</span>-->
								<img src="../../../assets/img/zan_w.png"/>
								{{teacherInfo.praiseCount}}
							
						</div>
						<div class="paihan-go" @click="goPhb()">
							<img src="../../../assets/img/pxp.png"/>
							<span>排行榜</span>
						</div>
					
					
					
			</div>
		
		
		<div class="teacher-show">
			
			
			<div class="show-div">
				<h3 style="margin-bottom: 0;">擅长</h3>
				<div class="skill" v-for="(skill,index) in skillArr">
					{{skill}}
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
										<state-table-tea  :yuyue='item.day | ymdDate | weekAm(tableArr,1)'></state-table-tea>
									
									</p>
									<p >
										<state-table-tea  :yuyue='item.day | ymdDate | weekAm(tableArr,2)'></state-table-tea>
										
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
										<state-table-tea   :yuyue='item.day | ymdDate | weekAm(tableArr,1)'></state-table-tea>
									
									</p>
									<p >
										<state-table-tea   :yuyue='item.day | ymdDate | weekAm(tableArr,2)'></state-table-tea>
										
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
				
				<div @click="goSet(teacherInfo.userId)" >
					<img src="../../../assets/img/set.png" alt="" />
					<p>设置</p>
				</div>
		</div>
		
	</div>

</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	import stateTableTea from '../../common/State_TableTea'
	import Swiper from 'swiper'
	export default {
		data() {
			return {
				skillArr:[],
				teacherInfo:'',
				address:'',

				Tid:'',
				starDate:'',
				NumDay: 24 * 60 * 60 * 1000,
				endDate:'',
				dateAll: [
				
				],
				tableArr:[],
			}
		},
		components: {
			stateTableTea
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
		created() {
			
		},
		
		mounted() {
			this.getInfo();
			this.getTable();
			setTimeout(()=>{
				var table = new Swiper('.table-swiper',{
			  pagination :{
			    el: '.swiper-pagination',
			    clickable :true,
			  }
			})
			},2)
			var self=this;
			let Time,week,dateArray
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
			getInfo(){
				var self=this;
				var loginId=localStorage.getItem('loginId')
				var url=int.navTeacherInfo+loginId;
				var params={
				};
				ajax.get_data(url,params,function(d){
					console.log('老师信息',d)
					if(d.code==0){
						self.teacherInfo=d.data;
						self.skillArr=d.data.skill.split(',');
					}
				})
			},
			getTable(){
				var self=this;
				var loginId=localStorage.getItem('loginId')
				var url=int.tableWeek;
				var sid=localStorage.getItem('sid')
				self.starDate=filter.ymdDate(filter.getWeek().star);
				self.endDate=filter.ymdDate(filter.getWeek().end);
				var params={
					teacherId:loginId,
					sid:sid,
					startDate:self.starDate,
					endDate:self.endDate,
				};
				ajax.post_data(url,params,function(d){
					console.log('week详情',d)
					if(d.code==0){
						self.tableArr=d.data;
						if(d.data.length!=0){
							self.address=d.data[0].address
						}else{
							self.address='暂无'
						}
						
					}
				})
			},
			
			goPhb(){
				this.$router.push({
					path:"/index2BPhP"
				})
			},
			goSet(i){
				this.$router.push({
					path:"/index2Set/"+i
				})
			},
		}
	}
</script>
<style scoped lang="less">
.header{
	position: fixed;
	border: none;
}
.b-content{
	padding-bottom: 3rem;
}
	
.teacher-Top:before{
		content: "";
		display: table;
	}
	.teacher-Top{
	    text-align: center;
	    font-size: 18px;
    	width: 100%;
		background: linear-gradient(to right, #31c4ff, #3991f4);
		padding: 1rem 0;
		position: relative;
		.teacher-img{
			img{
				width: 4.5rem;
				height: 4.5rem;
				border-radius: 50%;
			}
		}
		h1{
				margin: 0.3rem 0;
				font-size: 0.8rem;
				color: #fff;
				span{
					margin-left: 0.5rem;
					font-size: 0.6rem;
				}
				 img{
					width: 1rem;
					margin-top: -0.25rem;
					margin-right: 0.25rem;
				}
		}
		.teacher-bb{
			color: #F5FAFB;
			font-size: 0.6rem;
		}
		.see-box{
			text-align: center;
			color: #fff;
			font-size: 0.65rem;
			margin-top: 0.75rem;
			img{
				width: 1rem;
				margin-right: 0.2rem;
				margin-top: -0.25rem;
			}
			span{
				margin-right: 2rem;
			}
		}
		.paihan-go{
			position: absolute;
			top:1.6rem;
			right: 0;
			background: #32C4FF;
			color: #fff;
			padding: 0.1rem 0.4rem 0.1rem 0.6rem;
			border-radius: 1rem 0 0 1rem;
			img{
				width: 0.9rem;
				margin-right: 0.1rem;
			}
		}
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
			/*margin: 0.5rem 0;*/
			padding:0.3rem 0.5rem;
			
			>h3 {
				color: #000;
				font-weight: bold;
				margin: 0.5rem 0;
			}
				>h5{
				color: #666;
			}
			>.skill {
				    float: left;
				    margin: 0.5rem 0.5rem 0 0;
				    padding: 0 0.75rem 0 0.3rem;
				    height: 1.4rem;
				    line-height: 1.4rem;
				    color: #fff;
				}
			>.skill:nth-child(3n-2) {
				   	background:url(../../../assets/img/qian1.png);
				    background-size: 100% 100%;
			}
			>.skill:nth-child(3n-1) {
				   	background:url(../../../assets/img/qian2.png);
				    background-size: 100% 100%;
			}
			>.skill:nth-child(3n) {
				   	background:url(../../../assets/img/qian3.png);
				    background-size: 100% 100%;
			}
		}
		div.show-div{
			overflow: hidden;
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