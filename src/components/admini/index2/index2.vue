<template>
	<div class="index2" style="">

		<header class="header">
			<h1>预约排行</h1>

		</header>
		<div class="b-content">

			<!--<div class="nav-paiming">
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
			</div>-->

			<div class="paiming-div">
				<div class="nav-flex">
					<div v-for='(item,index) in allList' v-if='index==1'  @click="goPath(item.id)">
						<div class="nav-flex-img">
							<div>
								<img :src="item.headPic" />
							</div>
							
							<p>
								<span>NO.{{index+1}}</span>
							</p>
						</div>
						<h2>{{item.name}}</h2>
						<p>预约数<span>{{item.num}}</span>例</p>
					</div>
					<div v-for='(item,index) in allList' v-if='index==0'  @click="goPath(item.id)">
						<div class="nav-flex-img">
							<div>
								<img :src="item.headPic" />
							</div>
							
							<p>
								<span>NO.{{index+1}}</span>
							</p>
						</div>
						
						<h2>{{item.name}}</h2>
						<p>预约数<span>{{item.num}}</span>例</p>
					</div>
					<div v-for='(item,index) in allList' v-if='index==2'  @click="goPath(item.id)">
						<div class="nav-flex-img">
							<div>
								<img :src="item.headPic" />
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
					<li v-for="(item,index) in allList" v-if='index>2'  @click="goPath(item.id)">
						<h1>{{index+1}}</h1>
						<img :src="item.headPic" alt="" />
						<div class="teacher-name">
							<h2>{{item.name}}</h2>
							<p>预约数<span>{{item.num}}</span>例</p>
						</div>
						<div class="teacher-icon">
							<p><img src="../../../assets/img/zan0.png" />{{item.praiseCount}}</p>
							<!--<p><img src="../../../assets/img/chat_w.png" />{{item.consultNum}}</p>-->
						</div>
						
					</li>

				</ul>
			</div>

			
		</div>

	</div>

</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	export default {
		components: {

		},
		created() {

		},
		data() {
			return {
				page1:1,
				myId:'',
				allList:[],
				next1_text:'',
				next1:true,	//加载更多 状态
				value: '',
				types: '1',
			
			}
		},
		mounted() {
			this.getNav1(2);
			var self=this;
			self.myId=localStorage.getItem('loginId');
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			getNav1(i){
				var self=this;
				var url=int.teacherPHP;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					current:self.page1,
					pageSize:10,
					type:i,
				}
				 ajax.get_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("排行榜列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.length; i++) {
							self.allList=d.data;
						}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无评论'
						}
						else{
							self.next1=true;
							self.next1_text='查看更多'
						}
						if(d.data.current==d.data.pages){
							self.next1=false;
							self.next1_text='没有更多了'
						}
						if(!d.data.records){
							self.tip=true
						}
					}
					
		       });
			},
			goPath(i) {
				this.$router.push({
						path:'/index2CInfo/'+i
					}
				
				)
			},
//			typeToggle(i) {
//				var self = this;
//				self.types = i;
//				self.getNav1(i)
//			},
			
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
	
	/*.nav-paiming {
		
		overflow: hidden;
		position: fixed;
		top: 2.5rem;
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 33;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		>h1 {
			padding: 0.75rem 0 0;
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
	}*/
	
	.nav-flex {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin: 1.75rem auto 0.5rem;
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
			.nav-flex-img{
				
					transform: scale(1.2);
				
			}
			h2{
				margin-top: 0.75rem;
			}
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
	.paiming-div{
		/*margin-top: 3rem;*/
	}
	.more-btn{
		color: #666;
		text-align: center;
		/*border: 0.05rem solid;*/
		width: 5rem;
		height: 1.5rem;line-height: 1.5rem;
		margin: 1rem auto;
	}
</style>