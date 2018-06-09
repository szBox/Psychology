<template>
	<div class="speakList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>话题列表</h1>
			<em @click="goWrite()">发布</em>
		</header>

		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li  @click="goPath(item.id)" v-for="(item, index) in allList">
					<div class="lf zutuan-img">
						<img  class="imgz" :src="item.imageUrl" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">{{item.summary}}</h2>
						<div>
							<p>{{item.insertTime | niceDate}}</p>
							<h5>
								<img src="../../../../assets/img/pinglun.png"/>
								<span>{{item.commentCount}}</span>
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
				allList:[],
				items: [],
				/*最后的数组*/
				page: 1,
				/*当前页码*/
			}
		},
		filters:{
			...filter
		},
		created(){
			
		},
		mounted(){
			var self=this;
			self.getList();
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
			goWrite() {
				this.$router.push({
					path: "/index3/speakWrite"
				})
			},
			getList(){
				var self=this;
				var url=int.speakList;
				var sid=localStorage.getItem('sid');
				var params={
					sid:sid,
					current:self.page,
					size:10,
					state:2,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("话题列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.allList.push(d.data.records[i]);
						}
					}
					
		       });
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
	.speakList{
		background: #f4f4f4;
	}
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