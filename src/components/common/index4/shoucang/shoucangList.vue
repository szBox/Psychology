<template>
	<div class="shoucangList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>我的收藏</h1>
		</header>
		
		<ul class="activitys-ul" v-if="allList.length">
				<li  v-for="(sou,index) in allList" @click="goPath(sou.id)" >
					<div class="lf zutuan-img">
						<img style="border-radius: 0.3rem;" class="imgz" :src="sou.covers" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">{{sou.title}}</h2>
						<div>
							<p>{{sou.insertTime | niceDate}}</p>
							<h5>
								<img src="../../../../assets/img/pinglun.png"/>
								<span>{{sou.comments}}</span>
							</h5>
						</div>
						
						
					</div>
					
				</li>
				
				<p  class="more-btn" @click="next1 && more1() ">{{next1_text}}</p>
			</ul>
		
		<div v-if='tip' class="err-tips">
			暂无数据
		</div>
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	export default({
		data(){
			return{
				allList:[],
				page:1,
				next1_text:'',
				next1:true,	//加载更多 状态
				tip:false,
			}
		},
		mounted(){
			this.getList();
		},
		filters:{
			...filter,
		},
		computed:{
			
		},
		methods:{
			back() {
				this.$router.go(-1);
			},
			more1(){
				//加载更多
				var vm = this;
				vm.page++;
				vm.getPage();
	
			},
			goPath(i){
				this.$router.push({
					path:'/index1/yueduInfo/'+i
				})
			},
			getList(){
				var self=this;
				var url=int.soucangList;
				var params={
					current:self.page,
					size:10,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("收藏列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.allList=d.data.records;
						}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无评论'
						}
						else{
							self.next1=true;
							self.next1_text='查看更多'
						}
						if(d.data.current==d.data.pages){
							self.next1=false;
							self.next1_text='没有更多了'
						}
						if(!d.data.records.length){
							self.tip=true
						}
					}
					
		       });
			},
			getPage(){
				var self=this;
				var url=int.soucangList;
				var params={
					current:self.page,
					size:10,

				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("收藏列表",d);
					if(d.code==0){	
						for(let i = 0; i < d.data.records.length; i++) {
							self.allList.push(d.data.records[i]);
						}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无评论'
						}
						else{
							self.next1=true;
							self.next1_text='查看更多'
						}
						if(d.data.current>=d.data.pages){
							self.next1=false;
							self.next1_text='没有更多了'
						}
					}
					
		       });
			}
		}
	})
</script>

<style scoped lang="less">
	.shoucangList{
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
		.more-btn{
		color: #666;
		text-align: center;
		/*border: 0.05rem solid;*/
		width: 5rem;
		height: 1.5rem;line-height: 1.5rem;
		margin: 1rem auto;
	}
	.err-tips{
		position: absolute;
	    top: 12rem;
	    left: 50%;
	    color:#666;
	    -webkit-transform: translateX(-50%);
	    transform: translateX(-50%);
	}   
</style>