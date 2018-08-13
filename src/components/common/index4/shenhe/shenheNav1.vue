<template>
	<div class="shengheNav1">
		<scroller  v-if='showInit' style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in AllList" @click="goPath(item.state,item.id)">
					<div class="lf zutuan-img">
						<img style="border-radius: 0.3rem;"  class="imgz" :src="item.imageUrl" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">{{item.name}}</h2>
						
						<div>
							<p>{{item.insertTime | niceDate}}</p>
							<state-shenhe :state='item.state'></state-shenhe>
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
				AllList: [],
				/*最后的数组*/
				page: 1,
				pages:'',
				dataType:'',
				showInit:false,
				dataStatus:'',
				/*当前页码*/
			}
		},
		filters:{
			...filter,
			
		},
		components:{
			stateShenhe
		},
		mounted(){
			this.$root.eventHub.$emit('Vloading',true)
			var self=this;
			var role=localStorage.getItem('role');
			var speakQx=localStorage.getItem('speakQx');
			if(role=='S'||role=='T'){
				self.dataType=1;
				self.dataStatus=''
			}else if(role=='M'||speakQx=='Y'){
				self.dataType='';
				self.dataStatus=1
			}
			self.getList();
		},
		methods: {
			goPath(state,i) {
				if(state=='2'){
					this.$router.push({
						path: "/index3/speakInfo/" + i
					})
				}else{
					this.$router.push({
						path: "/shenheNav1Info/" + i
					})
				}
				

			},
			getList(){
				var self=this;
				var url=int.speakList;
				var sid=localStorage.getItem('sid')
				var params={
					 current: self.page,
					 sid: sid,
					 size: 10,
					 type: self.dataType,
					 state:self.dataStatus
				};
				ajax.post_data(url,params,function(d){
					console.log('话题审核',d)
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
					 type: self.dataType,
					 state:self.dataStatus
				};
				ajax.post_data(url,params,function(d){
					console.log('话题审核',d)
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
		
		.activitys-ul li{
			padding: 0.5rem 0 0.5rem 0.5rem;
		}
		.zutuan-img{
			
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 4.5rem;
			height: 4.5rem;
		}
		.zutuan-info{
			width: 68%;
			height: 4.5rem;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			>h2{
				-webkit-line-clamp: 2;
				font-size: 0.8rem;
				
			}
			
			>div{
				overflow: hidden;
				>p{
					float: left;
					font-size: 0.65rem;
					color: #A1A1A1;
					margin: 0.5rem 0;
				}
				>div{
					float: right;
					margin-top: 0.4rem;
				}
			}
		}
</style>