<template>
	<div class="mp3List">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>点歌台</h1>
			<em @click="goWrite()">我要点歌</em>
		</header>
		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="mp3-bbox">
				<li v-for="(item, index) in allList">
					<img :src="item.headPic" alt="" />
					<div>
						<h1>
							<em class="ellipsis">{{item.fromNickName}}</em>
							<span>
								<img src="../../../../assets/img/mp3.png" alt="" />
								<i>{{item.playTime | niceDate}}</i>
							</span>
						</h1>
						<h2 class="ellipsis">我要赠送一首'《{{item.name}}》'，送给好朋友 '{{item.toNickName}}' </h2>
						<h4 class="ellipsis"> {{item.content}}</h4>
						
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
				allList: [],
				/*最后的数组*/
				page: 1,
				pages:'',
				/*当前页码*/
			}
		},
		created(){

		},
		filters:{
			...filter
		},
		mounted(){
			var self=this;
			self.getList()
		},
		methods: {
			back() {
				this.$router.go(-1);
				this.tab_index = 2
			},
			goPath(i) {
				this.$router.push({
					path: "/index3/speakInfo/" + i
				})
			},
			getList(){
				var self=this;
				var url=int.mp3List;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					sid:sid,
//					stuId:loginId,
					current:self.page,
					size:10,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("点歌列表",d);
					if(d.code==0){
						self.allList=d.data.records;
						self.pages=d.data.pages;
//						for(let i = 0; i < d.data.records.length; i++) {
//							self.allList.push(d.data.records[i]);
//							
//						}
					}
					
		       });
			},
			getPage(){
				var self=this;
				var url=int.mp3List;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					sid:sid,
//					stuId:loginId,
					current:self.page,
					size:10,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("点歌列表",d);
					if(d.code==0){
//						self.allList=d.data.records;
						self.pages=d.data.pages;
						for(let i = 0; i < d.data.records.length; i++) {
							self.allList.push(d.data.records[i]);
							
						}
					}
					
		       });
			},
			goWrite() {
				this.$router.push({
					path: "/index3/mp3Choose"
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
				console.log('112',self.page)
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
	ul.mp3-bbox{
		padding: 0.5rem 1rem 1rem;
		li{
			border-bottom: 1px solid #EBEBEB;
			padding: 0.5rem 0;
			overflow: hidden;
			>img{
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
				float: left;
			}
			>div{
				float: left;
				width: 68%;
				margin-left: 1.25rem;
				h1{
					overflow: hidden;
					>em{
						float: left;
						color: #333;
						font-size: 0.75rem;
						width: 4rem;
						-webkit-line-clamp: 1;
					}
					>span{
						float: right;
						color: #666;
						font-size: 0.6rem;
						img{
							width: 0.9rem;
							
						}
					}
				}
				h2{
					-webkit-line-clamp: 2;
					font-size: 0.85rem;
				}
				h4{
					color: #666;
					font-size: 0.75rem;
					-webkit-line-clamp: 2;
					margin: 0.8rem 0 0;
					
				}
				
			}
		}
		
	}
</style>