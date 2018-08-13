<template>
	<div class="shengheNav2">
		<scroller v-if='showInit' style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in AllList" @click="goPath(item.state,item.id)">
					<div class="lf zutuan-img">
						<img  style="border-radius: 0.3rem;" :src="item.imageUrl" alt="" />
						<h1>{{item.nickName}}</h1>
						<!--<p>{{item.type | TypeLeft}}</p>-->
						<state-shenhe :state='item.state'></state-shenhe>
						<!--<h5>30分钟前</h5>-->
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
	import filter from '@/assets/js/filters'
	import stateShenhe from '../../State_shenhe'
	export default({
		data() {
			return {
				//				tab_index:2
				AllList: [],
				/*最后的数组*/
				page: 1,
				showInit:false,
				pages:'',
				/*当前页码*/
			}
		},
		components:{
			stateShenhe
		},
		filters:{
			...filter,
			TypeLeft(val){
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
		mounted(){
			this.$root.eventHub.$emit('Vloading',true)
			this.getList()
		},
		
		methods: {
			goPath(state,i) {
				if(state=='2'){
					this.$router.push({
						path: "/activitysList/activitysInfo/" + i
					})
				}else{
					this.$router.push({
						path: "/shenheNav2Info/" + i
					})
				}
				

			},
			getList(){
				var self=this;
				var url=int.activityList;
				var sid=localStorage.getItem('sid')
				var params={
					 current: self.page,
					 sid: sid,
					 size: 10,
					 state: 4,
					 type:'',
				};
				ajax.post_data(url,params,function(d){
					console.log('组团审核列表',d)
					if(d.code==0){
						self.$root.eventHub.$emit('Vloading',false);
						self.showInit=true;
						self.pages=d.data.pages;
						self.AllList=d.data.records;
					}
				})
			},
			getPage(){
				var self=this;
				var url=int.speakList;
				var sid=localStorage.getItem('sid')
				var params={
					 current: self.page,
					 sid: sid,
					 size: 10,
					 state: 4,
					 type:'',
				};
				ajax.post_data(url,params,function(d){
					console.log('组团审核列表',d)
					if(d.code==0){
						self.pages=d.data.pages;
						for(let i = 0; i < d.data.records.length; i++) {
							self.AllList.push(d.data.records[i]);
						}
					}
				})
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
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			padding: 0.5rem 0;
			>img{
				width: 3rem;
				border-radius: 50%;
			}
			>h1{
				color: #333;
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
</style>