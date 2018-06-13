<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约咨询(老-师)</h1>
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
							
								<img @click="goPath({path:'/chat'})" src="../../../assets/img/zixun.png"/>
								<span @click="goPath({path:'/chat'})">学生咨询</span>
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
				<h3>擅长</h3>
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
				<!--<div>
					<img src="../../../assets/img/s1.png" alt="" @click="goPath({path:'/index2/teacherInfo'})" />
				</div>
				<div>
					<img src="../../../assets/img/s2.png" alt="" />
					<p>200</p>
				</div>-->
				<div @click="goSet(1)" >
					<img src="../../../assets/img/zixun.png" alt="" />
					<p>设置</p>
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
		filters:{
			...filter,
			
		},
		created() {
			console.log('111',this.value)
		},
		data() {
			return {
				skillArr:[],
				teacherInfo:'',
				address:'',
				value:'',
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
				var params={
					teacherId:loginId,
					sid:sid,
//					startDate:self.starTime,
//					endDate:self.endTime,
				};
				ajax.post_data(url,params,function(d){
					console.log('week详情',d)
					if(d.code==0){
						self.weekInfo=d.data;
						if(d.data.length!=0){
							self.address=d.data[0].address
						}else{
							self.address='暂无'
						}
						
					}
				})
			},
			yuyue(i){
				alert(i.starttime+'-'+i.endtime)
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
			margin: 0.5rem 0;
			padding:0.3rem 0.5rem;
			
			>h3 {
				color: #000;
				font-weight: bold;
				margin: 0.5rem 0;
			}
			>.skill {
				    float: left;
				    margin-right: 0.5rem;
				    width: 4rem;
				    height: 1.5rem;
				    line-height: 1.5rem;
				    padding-left: 0.3rem;
				  
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