<template>
	<div class="speakList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>话题列表学生</h1>
			<em @click="goWrite()">发布</em>
		</header>

		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="speakList-ul">
				<li v-for="(item, index) in allList" @click="goPath(item.id)">
					<h3 class="ellipsis">{{item.summary}}</h3>
					<div class="speakList-img">
						<img :src="item.imageUrl" />
					</div>
					<div class="speakList-div">
						<div>
							<p><span>{{item.insertTime | niceDate}}</span></p>
							<p><img src="../../../../assets/img/pinglun.png"/><i>{{item.commentCount}}</i></p>
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
		created(){
			
		},
		filters:{
			...filter
		},
		mounted(){
			var self=this;
			self.getList();
		},
		methods: {
			back() {
				this.$router.go(-1);
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
		background: url(../../../../assets/img/bg1m.png);
		background-size: 100% 100%;
	}
	.speakList-ul {
		
		/*padding-top: 2.75rem;*/
		li {
			background:url(../../../../assets/img/speakLi.png);
			background-size: 100% 100%;
			overflow: hidden;
			
			padding: 1.8rem;
			
			margin: 0 0.75rem;
			margin-top: 0.4rem;
			h3 {
				color: #333;
				font-size: 0.75rem;
				-webkit-line-clamp: 2;
				margin-bottom: 0.75rem;
			}
		}
		.speakList-img {
			float: left
		}
		.speakList-img>img {
			width: 6rem;
			height: 4rem;
		
			border-radius: 0.4rem;
		}
		.speakList-div {
			width: 50%;
			float: left;
			margin-left: 0.8rem;
			p:last-child{
				margin-top: 0.75rem;
			}
			img{
				width: 1rem;
				margin-right: 0.3rem;
				
			}
			
			span {
				color: #666;
				font-size: 0.65rem;
			}
			i {
				font-size: 0.7rem;
				color: #666;
			}
		}
	}
	
._v-container>._v-content>.pull-to-refresh-layer{
	    height: 56px !important;
    margin-top: -60px !important;
}	

</style>