<template>
	<div class="yuyueJilu">
		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>预约记录</h1>
		</header>
		
		<div class="b-content">
			<ul v-if='allList.length'>
			<li v-for="(item,index) in allList">
				<img :src="item.tHeadPic" alt="" />
				<div class="xiaoxi-div">
					<h4>{{item.teacherName}}</h4>
					<h5>{{item.insertTime | niceDate}}</h5>
					<p class="">预约地点：<span>{{item.address}}</span></p>
				</div>
				
			</li>
			<p  class="more-btn" @click="next1 && more1() ">{{next1_text}}</p>
		</ul>
		<div v-if='tip'>
			暂无数据
		</div>
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
			getList(){
				var self=this;
				var url=int.yuyueJilu;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					current:self.page,
					size:10,
					stuid:loginId,
					
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("预约记录列表",d);
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
				var url=int.yuyueJilu;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					current:self.page,
					size:10,
					stuid:loginId,
					
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("预约记录列表",d);
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
						if(d.data.current==d.data.pages){
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
.header{
	position: fixed;
}
	.yuyueJilu ul{
		li{
			border-bottom: 1px solid #F7F7F7;
			overflow: hidden;
			padding: 0.5rem 0;
			>img{
				float: left;
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
				margin-left: 0.75rem;
			}
			>.xiaoxi-div{
				float: left;
				width: 65%;
				margin-left: 0.5rem;
				>h4{
					font-size: 0.75rem;
				}
				>h5{
					color: #999;
					font-size: 0.65rem;
					margin: 0.3rem 0;
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
	
</style>