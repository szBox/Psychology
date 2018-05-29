<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约咨询</h1>
			<em @click="goPath({path:'/index2/yuyueName'})">预约名单</em>
		</header>
		<div class="b-content">
			<div id="teacher-swiper" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" src="../../../assets/img/nv.png" />
						</div>
						<h1>李多云老师</h1>
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
							<img src="../../../assets/img/zan0.png"/>
							200
						</h4>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" src="../../../assets/img/nv.png" />
						</div>
						<h1>李多云老师</h1>
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
							<img src="../../../assets/img/zan0.png"/>
							200
						</h4>
					</div>
				</div>
				<div class="swiper-slide swiper-slide-active">
					<div class="teacher-bg">
						<div class="teacher-img">
							<img  @click="goPath({path:'/index2/teacherInfo'})" src="../../../assets/img/nv.png" />
						</div>
						<h1>李多云老师</h1>
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
							<img src="../../../assets/img/zan0.png"/>
							200
						</h4>
					</div>
				</div>
				<div class="swiper-slide">
					
				</div>
			</div>
			
		</div>
		<div class="teacher-show">
			<div class="flexd-nav">
				<div>
					<img src="../../../assets/img/s1.png" alt="" @click="goPath({path:'/index2/teacherInfo'})" />
				</div>
				<div>
					<img src="../../../assets/img/s2.png" alt="" />
					<p>200</p>
				</div>
				<div>
					<img src="../../../assets/img/s3.png" alt=""  @click="goPath({path:'/chat'})"/>
				</div>
			</div>
			
			<div class="show-div">
				<h3>擅长</h3>
				<p>心理治疗</p><p>个人成长</p><p>心理治疗</p>
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
						<div>
							<ul>
								<li v-for="(item,index) in items">
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
									<!--<p v-if='item.data.length==1'>
										
									</p>-->
									<!--<p v-for="itemAm in item.data"  v-if='(parseInt(itemAm.endtime.split(":")[0]) != 0) && (parseInt(itemAm.endtime.split(":")[0]) <= 12) && (itemAm.reg == "true")' >
										<span @click="yuyue(itemAm)" >
											预约
										</span>
									</p>
									
									<p v-for="itemAm in item.data"   v-if='(parseInt(itemAm.endtime.split(":")[0]) != 0) && (parseInt(itemAm.endtime.split(":")[0]) >12) && (itemAm.reg == "true")'>
										<span @click="yuyue(itemAm)">
											预约
										</span>
										
									</p>-->
									
								</li>
							</ul>
						</div>

					</div>

				</div>
				<div class="table-tips">
					左右滑动可以查看其他预约时间
				</div>
			</div>

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
			var mySwiper1 = new Swiper('.swiper-container', {
				effect : 'coverflow',
				  slidesPerView: 3,
				  centeredSlides: true,
				  coverflowEffect: {
				  	loop:true,
				    rotate: 0,
				    stretch: 10,
				    depth: 260,
				    modifier: 1,
				    slideShadows : false
				  },
			})
			var mySwiper = new Swiper('#teacher-container',{
				 onSliderMove: function(swiper, event){
				 		alert('111')
				   }
				})
			setTimeout(function() {
				var tabLen = $('.table-action ul li').length;
				var tabW = $('.table-action ul li').width() * tabLen;
				$('.table-action ul').css({
					'width': tabW
				})
				$('.table-action ul li').width();
				console.log('li的宽度' + $('.table-action ul li').width())
				console.log(tabLen)
				console.log("ul的宽度---" + tabW)
			}, 5)

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
	#teacher-swiper {
		text-align: center;
		margin: 1rem 0;
	}
	
	#teacher-swiper .swiper-slide{
		
		background: url(../../../assets/img/teacherbg1.png);
		background-size: cover;
		width: 45% !important;
		border-radius: 0.4rem;
		.teacher-bg{
			background: #fff;
			margin: 0.6rem;
			border-radius: 0.4rem;
			padding: 0.75rem 0;
		}
		.teacher-img{
			img{
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
			}
		}
		h1{
				margin: 0.5rem 0;
		}
		.teacher-bb{
			color: #666;
			font-size: 0.65rem;
		}
		.see-box{
			padding: 0.6rem;
			padding-top: 0;
			overflow: hidden;
			color: #fff;
			p{
				float: left;
			}
			h4{
				float: right;
			}
			img{
				width: 0.8rem;
				margin-top: -2px;
			}
		}
	}
	/*#teacher-swiper .swiper-slide:nth-child(2){
		background: url(../../../assets/img/teacherbg2.png);
		background-size: cover;
	}
	#teacher-swiper .swiper-slide:nth-child(3){
		background: url(../../../assets/img/teacherbg3.png);
		background-size: cover;
	}*/
	.swiper-slide>img {
		width: 5rem;
		height: 5rem;
		background: paleturquoise;
		border-radius: 50%;
	}
	
	.flexd-nav {
		position: absolute;
		top: 2rem;
		/*-webkit-transform: translateY(-45%);
		-moz-transform: translateY(-45%);
		-ms-transform: translateY(-45%);
		-o-transform: translateY(-45%);
		transform: translateY(-45%);*/
		right: 0.75rem;
		div {
			text-align: center;
			height: 2.5rem;
		}
		div:nth-child(2) {
			margin: 0.2rem 0;
			>p {
				color: #999;
				font-size: 0.6rem;
			}
		}
		img {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
		}
	}
	
	.teacher-show {
		position: relative;
		padding: 0 0.75rem;
		padding-right: 3rem;
	
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
		}
		div.show-div{
			overflow: hidden;
		}
		.show-tableBox {
			padding: 0;
			background: none;
			border: 1px solid #199ED8;
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
				line-height: 1.5rem;
				border: 1px solid #E4E4E4;
			}
			.table-init {
				position: absolute;
				top: 0;
				left: 0;
				width: 2.5rem;
				>li {
					border-left: 1px solid #E4E4E4;
				}
			}
			.table-action {
				width: 12.5rem;
				height: 5.4rem;
				/*overflow-y: hidden;
				overflow-x: scroll;*/
				overflow: hidden;
				float: left;
				margin-left: 2.5rem;
				border-right: 1px solid #E4E4E4;
				>div {
					height: 6.2rem;
					/* 比里层元素高16px 为了隐藏滚动条*/
					overflow-x: scroll;
					/* 定义超出此盒子滚动 */
					overflow-y: hidden;
				}
				ul {
					width: 12.5rem;
					overflow: hidden;
					height: 100%;
				}
			}
			.table-action li,
			.table-init li {
				width: 2.5rem;
				float: left;
				text-align: center;
				>p {
					line-height: 1.8rem;
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
					width: 2.5rem;
					height: 1.8rem;
					font-size: 0.6rem;
					border-bottom: 1px solid #E4E4E4;
					border-right: 1px solid #e4e4e4;
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
</style>