<template>
	<div class="activitysNav1">

		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in items" @click="goPath(item.id)">
					<div class="lf zutuan-img">
						<img :src="item.headPic" alt="" />
						<h1>{{item.nickName}}</h1>
						<p :class="typeClass">{{item.type | Types}}</p>
						<h5>{{item.timelast}}</h5>
					</div>
					<div class="lf zutuan-info">
						<h1>
						<span class="ellipsis">{{item.name}}</span>
						<em>
							<span>
								<i>{{item.count}}</i>人/
							</span>
							<i>{{item.total}}</i>人
						</em>
					
					</h1>
					<h2 class="ellipsis">{{item.content}}</h2>
					<div class="activitys-info">
						<div>
							<img src="../../../../assets/img/icon_time.png" alt="" />
							<p>
								<span>{{item.signupStartTime | mdDate}}</span>~
								<span>{{item.signupEndTime | mdDate}}</span>
							</p>
						</div>
						<div>
							<img src="../../../../assets/img/icon_money.png" alt="" />
							<em>{{item.payPer}}元</em>
						</div>
					</div>
					</div>
					
				</li>
			</ul>
		</scroller>

	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	export default({
		data() {
			return {
				typeClass:'',
				items: [],
				allList:[
//					{name:'王大力',play:'植树活动',bb:"我想组织一次秋游,希望大家积极来参与",
//					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'20元',img:'src/assets/img/teacher2.png',
//					type:'我发起'},
//					{name:'杀马特',play:'聚餐活动',bb:"我想组织一次聚餐,希望大家积极来参与",
//					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'120元',img:'src/assets/img/ren2.png',
//					type:'已参与'},
//					{name:'伏地魔',play:'亲子活动',bb:"我想组织一次亲子活动,希望大家积极来参与",
//					times:"08-16 08:00~08-18",timelast:"40分钟前",money:'10元',img:'src/assets/img/ren3.png',
//					type:'未参与'},
//					{name:'王大力',play:'植树活动',bb:"我想组织一次秋游,希望大家积极来参与",
//					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'20元',img:'src/assets/img/ren1.png',
//					type:'已审核'},
//					{name:'杀马特',play:'聚餐活动',bb:"我想组织一次聚餐,希望大家积极来参与",
//					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'120元',img:'src/assets/img/ren2.png',
//					type:'未审核'},
//				
					],
				/*最后的数组*/
				page: '',
				allPage:'',
				/*当前页码*/
			}
		},
		created() {
			this.getPage()

		},
		filters: {
			...filter,
			Types(val){
				if(val==5){
					return	'已满'
				}
			}
	   },
	   mounted(){
//	   	this.getPage()
	   },
		methods: {
			goPath(i) {
				this.$router.push({
					path: "/activitysList/activitysInfo/" + i
				})

			},
			goWrite() {
				this.$router.push({
					path: "/index3/speakWrite"
				})
			},
			getPage(done){
				var self=this;
				var mainUrl = int.activityList;
	         	var role=localStorage.getItem('role');
	         	var sid=localStorage.getItem('sid');
	         	 var params = {
	           		current: 1, //当前页
					sid: sid,	//学校id
					size: 2,  //每页展示 几条
					state: 1 //状态
	//				type: 0
	          	};
	          ajax.post_data(mainUrl, params, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
	            console.log(d);
	            self.page=d.data.current;
	            self.allPage=d.data.pages;
				if(d.code==0){
					self.allList=d.data.records;
					if (done) {
		              done(true)
		            }
					for(let i = 0; i < self.allList.length; i++) {
						self.items.push(self.allList[i]);
					}
				}
				
	             
	
	          });
			},
			refresh(done) {
				var self=this;
				setTimeout(() => {
					self.getPage();
					console.log('刷新了',self.page)
					done()
				}, 1500)
			},
			infinite(done) {
				
				
				var self=this;
				
				self.page++;
				self.getPage();
				if(self.page==self.allPage){
					done(true)
				}
				
				
			}
			
		
    
			
			
			
		}
	})
</script>

<style scoped lang="less">
		
		.zutuan-img{
			background: #31C4FF;
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			padding: 0.5rem 0;
			>img{
				width: 3rem;
				border-radius: 50%;
			}
			>h1{
				color: #fff;
				font-size: 0.8rem;
			}
			>p{
				font-size: 0.7rem;
				color: #fff;
				background: #ffa200;
				text-align: center;
				border-radius: 1rem;
				margin: 0 15%;
			}
			h5{
				color: #fff;
				font-size: 0.65rem;
			}
		}
		.zutuan-info{
			width: 64%;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			h1{
				font-size: 0.8rem;
				>span{
					-webkit-line-clamp: 1;
				}
			}
			h1>em{
				float: right;
				font-size: 0.7rem;
				>span{
					color: #E23736;
				}
			}
			h2{
				color: #999;
				font-size: 0.8rem;
				-webkit-line-clamp: 2;
			}
		}
		.activitys-info{
			
			>div{
				overflow: hidden;
				margin-top: 0.25rem;
				>img{
					float: left;
					width: 0.9rem;
					margin-top: 0.1rem;
					margin-right: 0.4rem;
				}
				>p{
					float: left;
					color: #9C9C9C;
					
				}
				>em{
						color: #EBAF3B;
					}
			}
		}
		.zutuan-img p.types-1{
			background: #FFA200;
		}
		.zutuan-img p.types-2{
			background: #FFA200;
		}
		.zutuan-img p.types-3{
			background: #FFA200;
		}
		.zutuan-img p.types-4{
			background: #FFA200;
		}
		.zutuan-img p.types-5{
			background: #FFA200;
		}
		.zutuan-img p.types-6{
			background: #FFA200;
		}
</style>