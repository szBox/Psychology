<template>
	<div class="index2" style="">

		<header class="header">
			<div @click="back()"><img src="../../../assets/img/goback.png" alt="" /></div>
			<h1>预约设置</h1>

		</header>
		<div class="b-content">
			<ul class="Yset-list">
				<li>
					<span>单次预约人数：</span>
					<input type="number" v-model="people" :placeholder="peopleErr"/>
				</li>
				<li>
					<span>预约地点：</span>
					<input type="text" v-model="address" :placeholder="addressErr"/>
				</li>
			</ul>

			<div class="show-div">
				<h3>预约时间</h3>
				<!--<span class="typeOn">预约同步</span>-->
			</div>
			<div id="yuyue-table">
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
										<set-table  :ap='1' :yuyueDay='item.day | ymdDate' :yuyue='item.day | ymdDate | weekAm(tableArr,1)'></set-table>
									
									</p>
									<p >
										<set-table  :ap='2' :yuyueDay='item.day | ymdDate'  :yuyue='item.day | ymdDate | weekAm(tableArr,2)'></set-table>
										
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
									<h1></h1>
									<p >
										<set-table  :ap='1' :yuyueDay='item.day | ymdDate'  :yuyue='item.day | ymdDate | weekAm(tableArr,1)'></set-table>
									
									</p>
									<p >
										<set-table  :ap='2' :yuyueDay='item.day | ymdDate' :yuyue='item.day | ymdDate | weekAm(tableArr,2)'></set-table>
										
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
			<div @click="dis && setFn()" class="fabu-fixed">
				发布
			</div>
		</div>
		
	</div>

</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	import setTable from '../../common/set_Table'
	import Swiper from 'swiper'
	import {Toast } from 'vux'
	
	export default {
		components: {
			setTable,
			Toast
		},
		created() {
		
		},
		data() {
			return {
				skillArr:[],
				address:'',
				people:'',
				peopleErr:'',
				addressErr:'',
				Tid:'',
				starDate:'',
				NumDay: 24 * 60 * 60 * 1000,
				endDate:'',
				dis:true,
				dateAll: [
				
				],
				tableArr:[],
				newArr:[], //传给后台的集合
				closeIndex:'',
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
						return '1&'+yid
					
					}else if(yue==2){
						return '2'
					}
					else if(yue==3){
						return '3'
					}else if(yue==4){
						return '4'
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
						return '1'+yid
					
					}else if(yue==2){
						return '2'
					}
					else if(yue==3){
						return '3'
					}else if(yue==4){
						return '4'
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

			setTimeout(() => {
				var table = new Swiper('.table-swiper', {
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}
				})
			}, 2)
			var self=this;
			if(localStorage.getItem('peopel')){
				self.people=localStorage.getItem('peopel')
				self.address=localStorage.getItem('address')
			}
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
			self.getTable()

		},
		methods: {
			
			back() {
				this.$router.go(-1);
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
						for(var i=0; i<d.data.length; i++){
							if(d.data[i].status==1){
								self.newArr.push({
									userId:self.$route.params.Tid,
									address:'',
									date: d.data[i].date,
									id: d.data[i].id,
									maxNum: '',
									period: d.data[i].period,
									sid: sid,
									teacherId: loginId,
								})
							}
							
						}
						console.log('新的数组',self.newArr)
					}
				})
				self.$nextTick(function(){
					self.$root.eventHub.$off('zidingyi')
					self.$root.eventHub.$on('zidingyi',function(type,day,ap,id){
						console.log('状态',type,day,ap,id)
						if(type==true){
							self.newArr.push({
								userId:self.$route.params.Tid,
								address:'',
								date: day,
								id: id,
								maxNum: '',
								period: ap,
								sid:sid,
								teacherId: loginId,
							})
							console.log('点击之后新的数组',self.newArr)
						}else if(type==false){
							for(var i=0; i<self.newArr.length; i++){
								if((self.newArr[i].date)+'&'+(self.newArr[i].period)==(day+'&'+ap)){
									self.closeIndex=i
								};
							}
							self.newArr.splice(self.closeIndex,1)
							console.log('删除之后新的数组',self.newArr)
						}
					})
				})
			},
			setFn(){
				var self=this;
				if(!self.people){
					self.peopleErr='请输入预约人数'
				}else if(!self.address){
					self.addressErr='请输入预约地点'
//				}else if(self.tableArr.length!=0){
					}else{
					
					var self=this;
					var loginId=localStorage.getItem('loginId')
					var url=int.yuyueSet+'?teacherId='+loginId+'&startDate='+self.starDate+'&endDate='+self.endDate;
					var sid=localStorage.getItem('sid')
					self.starDate=filter.ymdDate(filter.getWeek().star);
					self.endDate=filter.ymdDate(filter.getWeek().end);
					for(var i=0; i<self.newArr.length; i++){
						self.newArr[i].address=self.address;
						self.newArr[i].maxNum=self.people;
					}
					
					console.log('zuzzzzzzz',self.newArr)
					var params=self.newArr
					ajax.post_data(url,params,function(d){
						console.log('设置详情',d)
						if(d.code==0){
							localStorage.setItem('peopel',self.people)
							localStorage.setItem('address',self.address)
							self.dis=false;
							
							self.$vux.toast.show({
								type: 'text',
								text: '设置成功',
								position: 'bottom'
							})
							setTimeout(function(){
								
								self.back();
							},800)
						}
					})
				}
			}
		}
	}
</script>
<style scoped lang="less">
	.header {
		position: fixed;
	}
	
	.b-content {
		padding-bottom: 3rem;
	}
	
	ul.Yset-list {
		background: #F4F4F4;
		padding: 0.4rem 0.5rem;
		li {
			background: #fff;
			overflow: hidden;
			padding: 0.5rem;
			line-height: 1.5rem;
			span {
				float: left;
			}
			input {
				float: right;
				text-align: right;
				width: 70%;
				height: 1.5rem;
				border: none;
			}
		}
		li:nth-child(1) {
			border-bottom: 1px solid #EEEEEE
		}
	}
	
	#yuyue-table {
		padding: 0 1rem;
	}
	
	.teacher-Top:before {
		content: '';
		display: table;
	}
	
	.teacher-Top {
		text-align: center;
		font-size: 18px;
		width: 8rem;
		margin: 0.75rem auto;
		background: url(../../../assets/img/teacherbg1.png);
		background-size: 100% 100%;
		/*width: 45% !important;*/
		border-radius: 0.4rem;
		.teacher-bg {
			background: #fff;
			margin: 0.6rem;
			border-radius: 0.4rem;
			padding: 0.5rem 0;
		}
		.teacher-img {
			img {
				width: 3.5rem;
				height: 3.5rem;
				border-radius: 50%;
			}
		}
		h1 {
			margin: 0.3rem 0;
		}
		.teacher-bb {
			color: #666;
			font-size: 0.6rem;
		}
		.see-box {
			padding: 0.6rem;
			padding-top: 0;
			overflow: hidden;
			color: #fff;
			font-size: 0.6rem;
			p {
				float: left;
			}
			h4 {
				float: right;
				font-size: 0.6rem;
			}
			img {
				width: 0.8rem;
				margin-top: -2px;
			}
		}
	}
	
	.swiper-slide>img {
		width: 5rem;
		height: 5rem;
		background: paleturquoise;
		border-radius: 50%;
	}
	
	.flexd-nav {
		width: 2.5rem;
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
			-webkit-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-o-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			p {
				font-size: 0.6rem;
				width: 2.5rem;
			}
		}
		img {
			width: 0.8rem;
		}
	}
	
	div.show-div {
		overflow: hidden;
		padding: 0.5rem 1rem;
		h3 {
			float: left;
		}
		span {
			float: right;
		}
		span.typeOn {
			color: #3AC577;
		}
	}
	
	.show-tableBox {
		border-radius: 0.3rem;
		margin: 0.5rem 0;
		/*padding:0.3rem 0.5rem;*/
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
			border-radius: 0.3rem 0 0 0;
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
				li {
					width: 20%;
				}
			}
		}
		.table-action li,
		.table-init li {
			float: left;
			text-align: center;
			>p {
				line-height: 2.25rem;
				>div{
					border: none;
				}
				>span {
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
	
	.table-swiper {
		overflow: initial !important;
		.swiper-pagination-bullets {
			bottom: -1.6rem;
			left: -1rem;
		}
	}
	.fabu-fixed{
		background: #32C4FF;
		border-radius: 1rem;
		font-size: 0.75rem;
		text-align: center;
		height: 2.25rem;
		line-height: 2.25rem;
		color: #fff;
		margin: 0 auto;
		width: 60%;
		/*bottom: 5rem;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);*/
	}
</style>