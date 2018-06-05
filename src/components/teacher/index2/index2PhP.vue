<template>
	<div class="index2" style="">

		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>排行榜</h1>

		</header>
		<div class="b-content">

			<div class="nav-paiming">
				<h1 @click="typeToggle(1)" :class="{'paiming-active':types==1}">
					<span>咨询排行</span> 
					<em ></em>
				</h1>
				<h1 @click="typeToggle(2)" :class="{'paiming-active':types==2}">
					<span>预约排行</span> 
					<em ></em>
				</h1>
				<h1 @click="typeToggle(3)" :class="{'paiming-active':types==3}">
					<span>点赞排行</span> 
					<em ></em>
				</h1>
			</div>

			<div class="paiming-div" v-if='types==1'>
				<div class="nav-flex">
					<div v-for='(item,index) in TeacherList' v-if='index==1' >
						<div class="nav-flex-img">
							<div>
								<img :src="item.img" />
							</div>
							
							<p>
								<span>NO.{{index+1}}</span>
							</p>
						</div>
						<h2>{{item.name}}</h2>
						<p>预约数<span>{{item.num}}</span>例</p>
					</div>
					<div v-for='(item,index) in TeacherList' v-if='index==0'>
						<div class="nav-flex-img">
							<div>
								<img :src="item.img" />
							</div>
							<p>
								<span>NO.{{index+1}}</span>
							</p>
						</div>
						<h2>{{item.name}}</h2>
						<p>预约数<span>{{item.num}}</span>例</p>
					</div>
					<div v-for='(item,index) in TeacherList' v-if='index==2'>
						<div class="nav-flex-img">
							<div>
								<img :src="item.img" />
							</div>
							<p>
								<span>NO.{{index+1}}</span>
							</p>
						</div>
						<h2>{{item.name}}</h2>
						<p>预约数<span>{{item.num}}</span>例</p>
					</div>
				</div>

				<ul class="paiming-list">
					<li :class="{'my-li':item.name=='我'}" v-for="(item,index) in TeacherList" v-if='index>2'>
						<h1>{{index+1}}</h1>
						<img :src="item.img" alt="" />
						<div class="teacher-name">
							<h2>{{item.name}}</h2>
							<p>预约数<span>{{item.num}}</span>例</p>
						</div>
						<div v-if="item.name=='我'" class="teacher-icon">
							<p><img src="../../../assets/img/zan_w.png" />200</p>
							<p><img src="../../../assets/img/chat_w.png" />100</p>
						</div>
						<div v-else class="teacher-icon">
							<p><img src="../../../assets/img/zan0.png" />200</p>
							<p><img src="../../../assets/img/pinglun.png" />100</p>
						</div>
					</li>

				</ul>
			</div>

			<div class="paiming-div" v-if='types==2'>
				222222222
			</div>

			<div class="paiming-div" v-if='types==3'>
				3333333333333
			</div>

		</div>

	</div>

</template>

<script>
	export default {
		components: {

		},
		created() {

		},
		data() {
			return {
				value: '',
				types: '1',
				TeacherList: [{
						name: '李老师',
						img: 'src/assets/img/nv.png',
						num: '200',
						Tid:1,
					},
					{
						name: '凉老师',
						img: 'src/assets/img/teacher2.png',
						num: '160',
						Tid:2,
					},
					{
						name: '张教授',
						img: 'src/assets/img/teacher3.png',
						num: '120',
						Tid:3,
					},
					{
						name: '梁导师',
						img: 'src/assets/img/teacher3.png',
						num: '110',
						Tid:4,
					},
					{
						name: '李老师',
						img: 'src/assets/img/teacher2.png',
						num: '109',
						Tid:5,
					},
					{
						name: '我',
						img: 'src/assets/img/teacher2.png',
						num: '109',
						Tid:5,
					},
					{
						name: '王尼玛',
						img: 'src/assets/img/teacher2.png',
						num: '109',
						Tid:5,
					},
				],
			
			}
		},
		mounted() {
//			for(var i=0; i<this.TeacherList.length; i++){
//				if(i<3){
//					
//				}
//				
//			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
		
			
			typeToggle(i) {
				var self = this;
				self.types = i;
			},
			
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
	
	.nav-paiming {
		/*border-bottom: 1px solid #F2F2F2;*/
		overflow: hidden;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		>h1 {
			padding: 0.75rem 0 0;
			/*margin-right: 1.5rem;*/
			color: #999;
			span {
				font-size: 0.8rem;
			}
		}
		>h1.paiming-active {
			color: #3991F4;
			em {
				display: block;
				height: 0.15rem;
				border-radius: 1rem;
				width: 1.5rem;
				margin: 0.3rem auto 0;
				background: #3991F4;
			}
		}
	}
	
	.nav-flex {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin: 1.25rem auto 1.25rem;
		>div {
			text-align: center;
			.nav-flex-img {
				position: relative;
				>div{
					background: #FE6941;
					width: 3.1rem;
					height: 3.1rem;
					border-radius: 50%;
					text-align: center;
					line-height: 3.1rem;
					margin: 0 auto;
					>img {
					width: 3rem;
					height: 3rem;
					border-radius: 50%;
					}
				}
				
				>p {
					position: absolute;
					bottom: -6px;
					left: 50%;
					-webkit-transform: translateX(-50%);
					-moz-transform: translateX(-50%);
					-ms-transform: translateX(-50%);
					-o-transform: translateX(-50%);
					transform: translateX(-50%);
					background: url(../../../assets/img/paim2.png);
					background-size: 100% 100%;
					width: 100%;
					height: 1rem;
					span {
						display: block;
						position: absolute;
						bottom: -2px;
						left: 50%;
						-webkit-transform: translateX(-50%);
						-moz-transform: translateX(-50%);
						-ms-transform: translateX(-50%);
						-o-transform: translateX(-50%);
						transform: translateX(-50%);
						font-size: 0.6rem;
					}
				}
			}
			h2 {
				margin: 0.5rem 0 0.2rem;
				color: #333;
				font-size: 0.8rem;
			}
			>p {
				color: #666;
				span {
					color: #e96262;
				}
			}
		}
		>div:nth-child(2){
			transform: scale(1.2);
			.nav-flex-img >p{
				background: url(../../../assets/img/paim1.png);
				background-size: 100% 100%;
			}
			>div>div{
				background: #FEAC02;
			}	
		}
		>div:nth-child(3){
			.nav-flex-img >p{
				background: url(../../../assets/img/paim3.png);
				background-size: 100% 100%;
			}
			>div>div{
				background: #2AA9EC;
			}
		}
		
	}
	
	.paiming-list {
		padding: 0.5rem 0;
		li {
			overflow: hidden;
			line-height: 3rem;
			padding: 0.5rem 1rem;
			border-bottom: 1px solid #E5E5E5;
			>h1 {
				float: left;
			}
			>img {
				float: left;
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
				margin: 0 0.75rem 0 1rem;
			}
			>div.teacher-name {
				float: left;
				>h2 {
					line-height: 1.5rem;
				}
				>p {
					line-height: 1.5rem;
					span {
						color: #e96262;
					}
				}
			}
			>div.teacher-icon {
				float: right;
				line-height:initial;
				margin-top: 1.7rem;
				p {
					float: left;
					font-size: 0.65rem;
					img {
						width: 0.9rem;
						margin: 0 0.25rem;
					}
				}
			}
		}
	}
	.my-li{
		background: #32C4FF;
		color: #fff;
	}
</style>