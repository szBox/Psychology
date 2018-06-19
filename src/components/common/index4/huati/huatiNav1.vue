<template>
	<div class="shengheNav1">
		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(speak, index) in speakList" @click="goPath(speak.id)">
					<div class="lf zutuan-img">
						<img  class="imgz" :src="speak.imageUrl" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">{{speak.name}}</h2>
						<div>
							<p>{{speak.insertTime | niceDate}}</p>
							<h5>
								<img src="../../../../assets/img/pinglun.png"/>
								<span>{{speak.commentCount}}</span>
							</h5>
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
				speakList: [],
				/*最后的数组*/
				page: 1,
				pages:''
				/*当前页码*/
			}
		},
		created() {
			
		},
		filters:{
			...filter,
			
		},
		mounted(){
			this.getList()
		},
		methods: {
			goPath(i) {
				this.$router.push({
					path: "/index3/speakInfo/" + i
				})

			},
			getList(){
				var self=this;
				var url=int.speakList;
				var sid=localStorage.getItem('sid')
				var params={
					 current: self.page,
					 sid: sid,
					 size: 10,
					 state: 2,
					 type:1,
				};
				ajax.post_data(url,params,function(d){
					console.log('话题发布详情',d)
					if(d.code==0){
						self.speakList=d.data.records;
						self.pages=d.data.pages;
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
					 state: 2,
					 type:1,
				};
				ajax.post_data(url,params,function(d){
					console.log('话题发布详情',d)
					if(d.code==0){
						self.pages=d.data.pages;
						for(let i = 0; i < d.data.records.length; i++) {
							self.speakList.push(d.data.records[i]);
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
		
		.activitys-ul li{
			padding: 0.5rem 0 0.5rem 0.5rem;
		}
		.zutuan-img{
			
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			height: 4.5rem;
		}
		.zutuan-info{
			width: 64%;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			>h2{
				-webkit-line-clamp: 2;
				font-size: 0.8rem;
				
			}
			
			>div{
				overflow: hidden;
				line-height: 1.5rem;
				>p{
					float: left;
					font-size: 0.65rem;
					color: #A1A1A1;
					margin: 0.5rem 0;
				}
				>h5{
					float: right;
					margin: 0.5rem 0;
					img{
						width: 0.7rem;
					}
					span{
						color: #999;
					}
				}
			}
		}
</style>