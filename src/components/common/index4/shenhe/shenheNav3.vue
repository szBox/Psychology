<template>
	<div class="shengheNav2">
		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in AllList" @click="goPath(item.id)">
					<div class="lf zutuan-img">
						<img src="../../../../assets/img/ren1.png" alt="" />
						<h1>{{item.nickName}}</h1>
						<p>{{item.type | TypeLeft}}</p>
						<h5>30分钟前</h5>
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
	export default({
		data() {
			return {
				//				tab_index:2
				AllList: [],
				/*最后的数组*/
				page: 1,
				/*当前页码*/
			}
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
			var self=this;
			var role=localStorage.getItem('role');
			if(role=='S'||role=='T'){
				self.getList()
			}else{
				self.getList(1)
			}
		},
		
		methods: {
			goPath(i) {
				this.$router.push({
					path: "/shenheNav2Info/" + i
				})

			},
			getList(s){
				var self=this;
				var url=int.activityList;
				var sid=localStorage.getItem('sid')
				var params={
					 current: self.page,
					 sid: sid,
					 size: 10,
					 state: s,
					 type:2,
				};
				ajax.post_data(url,params,function(d){
					console.log('组团审核列表',d)
					self.AllList=d.data.records;
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
					 state: 2,
					 type:2,
				};
				ajax.post_data(url,params,function(d){
					console.log('话题发布详情',d)
					self.AllList=d.data.records;
				})
			},
			refresh(done) {
				setTimeout(() => {

					done()
				}, 1500)
			},
			infinite(done) {
				if(this.page == 1) {
					done(true)
				}
				console.log('拉啦啦')
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
</style>