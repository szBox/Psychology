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
						<span>{{item.name}}</span>
						<em>
							<span>
								<i>{{item.count}}</i>人/
							</span>
							<i>{{item.total}}</i>人
						</em>
					
					</h1>
					<h2>{{item.content}}</h2>
					<div class="activitys-info">
						<div>
							<img src="../../../../assets/img/icon_time.png" alt="" />
							<p>
								<span>{{item.signupStartTime | formatDateToTime}}</span>~
								<span>{{item.signupEndTime}}</span>
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
				page: 1,
				allPage:'',
				/*当前页码*/
			}
		},
		created() {
			var self=this;
			var mainUrl = int.activityList;
         	var token=localStorage.getItem('token');
         	var role=localStorage.getItem('role');
         	var sid=localStorage.getItem('sid');
         	 var params = {
           		current: 1, //当前页
				sid: sid,	//学校id
				size: 10,  //每页展示 几条
				state: 2 //状态
//				type: 0
          	};
          ajax.post_data(mainUrl, params, function(d) {
//        	_this.$root.eventHub.$emit('Vloading',false)
            console.log(d);
             self.page=d.data.current;
            self.allPage=d.data.pages;
			if(d.code==0){
				self.allList=d.data.records;
				for(let i = 0; i < self.allList.length; i++) {
					self.items.push(self.allList[i]);
				}
			}
			
             

          });


		},
		filters: {
//	   	    formatDateToTime(val)
			Types(val){
				if(val==1){
					return '我发起'
				}
				else if(val==2){
					return '审核中'
				}
				else if(val==3){
					return '我参与'
				}
				else if(val==4){
					return '驳回'
				}
				else if(val==5){
					return	'已满'
				}
				else if(val==6){
					return	'不在报名时间内'
				}
				else if(val==7){
					return '未参与'
				}
			}
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
			refresh(done) {
				setTimeout(() => {
					console.log('刷新了')
					done()
				}, 1500)
			},
			infinite(done) {
				var self=this;
				self.page++;
				console.log(self.page)
				done(true);
				console.log('拉啦啦')
				if(self.page == self.pageAll) {
//					return
									
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