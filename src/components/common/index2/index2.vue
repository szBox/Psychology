<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约咨询</h1>
			<em @click="goPath({path:'/index2/yuyueNameT'})">预约名单</em>
		</header>
		<div class="b-content">
			<div id="teacher-swiper" class="swiper-container teacher-swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="swiper-flex">
						<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" src="../../../assets/img/nv.png" />
						</div>
						<h1>李多云老师111</h1>
						<div class='teacher-bb'>
							<p>倾心聆听 唯爱融化</p>
							<p>天下武功 唯快不破</p>
						</div>
					</div>
					
					<div class="see-box">
						<p>
							<img src="../../../assets/img/see.png"/>
							查看信息
						</p>
						<h4>
							<img src="../../../assets/img/zan_w.png"/>
							200
						</h4>
					</div>
					</div>
					
				</div>
				<div class="swiper-slide">
					<div class="swiper-flex">
						<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" src="../../../assets/img/nv.png" />
						</div>
						<h1>李多云老师222</h1>
						<div class='teacher-bb'>
							<p>倾心聆听 唯爱融化</p>
							<p>天下武功 唯快不破</p>
						</div>
					</div>
					
					<div class="see-box">
						<p>
							<img src="../../../assets/img/see.png"/>
							查看信息
						</p>
						<h4>
							<img src="../../../assets/img/zan_w.png"/>
							200
						</h4>
					</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="swiper-flex">
						<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" src="../../../assets/img/nv.png" />
						</div>
						<h1>李多云老师333</h1>
						<div class='teacher-bb'>
							<p>倾心聆听 唯爱融化</p>
							<p>天下武功 唯快不破</p>
						</div>
					</div>
					
					<div class="see-box">
						<p>
							<img src="../../../assets/img/see.png"/>
							查看信息
						</p>
						<h4>
							<img src="../../../assets/img/zan_w.png"/>
							200
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
				<h3>擅长111111111111</h3>
				<p>11111</p><p>11111111</p><p>1111111</p>
			</div>
			<div class="show-div">
				<h3>预约地点</h3>
				<h5>阳光中学三栋三单元101</h5>
			</div>
			<div class="show-tableBox" style="margin-bottom: 2rem;">
				<h2>预约时间</h2>
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
						

					</div>

				</div>
				<div class="table-tips">
					左右滑动可以查看其他预约时间
				</div>
			</div>

		</div>
		<div class="teacher-show">
			
			
			<div class="show-div">
				<h3>擅长22222222222</h3>
				<p>心理治疗</p><p>个人成长</p><p>心理治疗</p>
			</div>
			<div class="show-div">
				<h3>预约地点</h3>
				<h5>阳光中学三栋三单元101</h5>
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
		<div class="teacher-show">
			
			
			<div class="show-div">
				<h3>擅长33333333333</h3>
				<p>33333333</p><p>3333</p><p>心33333理治疗</p>
			</div>
			<div class="show-div">
				<h3>预约地点</h3>
				<h5>3333</h5>
			</div>
			<div class="show-tableBox" style="margin-bottom: 2rem;">
				<h2>预约时间</h2>
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
						<div>
							
						</div>

					</div>

				</div>
				<div class="table-tips">
					左右滑动可以查看其他预约时间
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
				<div  @click="goPath({path:'/chat'})">
					<img src="../../../assets/img/zixun.png" alt="" />
					<p>咨询</p>
				</div>
		</div>
		
	</div>

</template>

<script>
	import teacherInfo from '@/components/teacher/index2/teacherInfo' //咨询预约 > 教师信息
	import yuyueJilu from '@/components/teacher/index2/teacherInfo' //咨询预约 > 预约记录
	import chat from '@/components/common/chat' //聊天
	import Swiper from 'swiper'
	export default {
		components: {

		},
		created() {
			console.log('111',this.value)
		},
		data() {
			return {
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
			
			var teacherNav = new Swiper('.teacher-swiper', {
				slidesPerView: 2.5,
		      initialSlide: 1,
//		      spaceBetween: 20,
		      centeredSlides: true,
				on:{
				
				    slideChange: function(){
				    	console.log('下标',this.activeIndex);
//				    	$('.b-content').siblings('.teacher-show').hide();
				    	$('.b-content').find('.teacher-show').eq(this.activeIndex).show().siblings('.teacher-show').hide()
						
				    },
				  },		     
			})
			setTimeout(()=>{
				var table = new Swiper('.table-swiper',{
			  pagination :{
			    el: '.swiper-pagination',
			    clickable :true,
			  }
			})
			},2)
			
//			setTimeout(function() {
//				var tabLen = $('.table-action ul li').length;
//				var tabW = $('.table-action ul li').width() * tabLen;
//				$('.table-action ul').css({
//					'width': tabW
//				})
//				$('.table-action ul li').width();
//				console.log('li的宽度' + $('.table-action ul li').width())
//				console.log(tabLen)
//				console.log("ul的宽度---" + tabW)
//			}, 5)

		},
		methods: {
			goPath(path) {
				this.$router.push(path)
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
	#teacher-swiper .swiper-slide:nth-child(2){
		background: url(../../../assets/img/teacherbg2.png);
		background-size: 100% 100%;
	}
	#teacher-swiper .swiper-slide:nth-child(3){
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
		display: none;
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
			>p {
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
			>p:nth-child(2) {
				   	background:url(../../../assets/img/qian2.png);
				    background-size: 100% 100%;
			}
			>p:nth-child(3) {
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