<template>
	<div class="activitysNav1">

		<scroller v-if='showInit'  style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in allList" @click="goPath(item.id)">
					<div class="lf zutuan-img">
						<img :src="item.headPic" alt=""/>
						<h1>{{item.nickName}}</h1>
						<!--<p :class="typeClass">{{item.type | Types}}</p>-->
						<state-activity  :state='item.type'></state-activity>
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
								<span>{{item.signupStartTime | mdDate }}</span>~
								<span>{{item.signupEndTime | mdDate }}</span>
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
	import stateActivity from '../../../common/State_Activity'
	import filter from '@/assets/js/filters'
	export default({
		data() {
			return {
				typeClass:'',
				allList:[],
				/*最后的数组*/
				page: 1,
				pages:'',
				showInit:false,
				/*当前页码*/
			}
		},
		components: {
			stateActivity
		},
		filters:{
			...filter,
		},
		mounted() {
			this.$root.eventHub.$emit('Vloading',true)
			this.getList()
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
			getList(){
				var self=this;
				var mainUrl = int.activityList;
	         	var token=localStorage.getItem('token');
	         	var role=localStorage.getItem('role');
	         	var sid=localStorage.getItem('sid');
	         	 var params = {
	           		current: self.page, //当前页
					sid: sid,	//学校id
					size: 10,  //每页展示 几条
					state: 2,//状态
					type: 1
	          	};
	          ajax.post_data(mainUrl, params, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
	            console.log(d);
				if(d.code==0){
					self.$root.eventHub.$emit('Vloading',false);
					self.showInit=true;
					self.pages=d.data.pages;
					self.allList=d.data.records;
				}
	          });
			},
			getPage(){
				var self=this;
				var mainUrl = int.activityList;
	         	var token=localStorage.getItem('token');
	         	var role=localStorage.getItem('role');
	         	var sid=localStorage.getItem('sid');
	         	 var params = {
	           		current: self.page, //当前页
					sid: sid,	//学校id
					size: 10,  //每页展示 几条
					state: 2, //状态
					type: 1
	          	};
	          ajax.post_data(mainUrl, params, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
	            console.log(d);
				if(d.code==0){
					self.pages=d.data.pages;
					for(var i = 0; i < d.data.records.length; i++) {
						self.allList.push(d.data.records[i]);
					}
				}
	          });
			},
			refresh(done) {
				var self=this;
				self.page=1;
				
				setTimeout(function(){
					self.getList()
						done()
				},1500)
			},
			infinite(done) {
				var self=this;
				console.log('112',self.page+'---'+self.pages)
				if(self.page>=self.pages){
					done(true)
				}
				else{
		
					console.log('拉啦啦')
					self.page++
					setTimeout(function(){
						self.getPage()
						done()
					},1500)
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