<template>
	<div class="speakInfo">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>话题详情</h1>
			
		</header>

		<div class="b-content">
			<div class="zuozhe-top">
				<h1>
					<img :src="userInfo.headPic"/>
					<span>{{userInfo.nickName}}</span>
				</h1>
				<p class="ellipsis">
					{{userInfo.summary}}
				</p>
				<img :src="userInfo.imageUrl" alt="" />
				<h6>{{userInfo.insertTime | niceDate}}</h6>
			</div>
			<div class="bgg"></div>
			
			<div class="dan-box">
				<span>留言<em>({{speakAll}})</em></span>
				<img src="../../../../assets/img/dan_n.png"/>
			</div>
			<div class="speak-box">
				<ul class="speak-ul">
					<li v-for="(item,index) in speakList">
						<div>
							<img :src="item.headPic" alt="" />
							<div>
								<h1>{{item.nickName}}</h1>
								<p>{{speakAll-index}}楼</p>
							</div>
							<span>{{item.insertTime | niceDate}}</span>
						</div>
						
						<p>{{item.content}}</p>
					</li>
				</ul>
				<p  class="more-btn" @click="next1 && more1() ">{{next1_text}}</p>
			</div>
		</div>

		<div class="speak-bb">
			<input v-model="bb" placeholder="我来说两句..." type="text" />
			<p @click="speakBB()">发布</p>
		</div>
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	import { Toast } from 'vux'
	export default({
		data() {
			return {
				page:1,
				userInfo:'', //话题 作者信息
				speakAll:'',  //话题总条数
				speakList:[],  //话题列表
				next1_text:'',
				next1:true,	//加载更多 状态
				bb:''  //留言 BB
			}
		},
		created(){
			var self=this;
			self.getInfo();
			self.getPage();
			
		},
		filters:{
			...filter,
			
		},
		
		components:{
			Toast
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			getInfo(){
				var self=this;
				var url=int.speakInfo+self.$route.params.id;
				var params={
					
				};
				ajax.get_data(url,params,function(d){
					console.log('话题用户详情',d)
					self.userInfo=d.data
				})
			},
			more1(){
				//加载更多
				var vm = this;
				vm.page++;
				vm.getPage();
	
			},
			getPage(){
				var self=this;
				var url=int.speakPage;
				var params={
					current: self.page,
					size: 10,
					topicId:self.$route.params.id
				};
				ajax.post_data(url,params,function(d){
					console.log('留言列表详情',d)
					self.speakAll=d.data.total;
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.speakList.push(d.data.records[i]);
						}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无留言'
						}
						else{
							self.next1=true;
							self.next1_text='加载更多'
						}
						if(d.data.current==d.data.pages){
							self.next1=false;
							self.next1_text='没有更多了'
						}
					}
				})
			},
			getList(){
				var self=this;
				var url=int.speakPage;
				var params={
					current: 1,
					size: 10,
					topicId:self.$route.params.id
				};
				ajax.post_data(url,params,function(d){
					console.log('留言列表详情',d)
					self.speakAll=d.data.total;
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.speakList=d.data.records;
						}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无留言'
						}
						else{
							self.next1=true;
							self.next1_text='加载更多'
						}
						if(d.data.current==d.data.pages){
							self.next1=false;
							self.next1_text='没有更多了'
						}
					}
				})
			},
			speakBB(){
				var self=this;
				if(self.bb){
					var url=int.speakBB;
					var params={
						content: self.bb,
						topicId:self.$route.params.id
					};
					ajax.post_data(url,params,function(d){
						console.log('BB详情',d)
						if(d.code==0){
							self.bb='';
							self.getList()
						}
					})
				}
				
			}
	
		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
	}
	
	.zuozhe-top{
		padding: 0.75rem 0.75rem 0.25rem 0.75rem;
		>h1{
			img{
				width: 2rem;
				border-radius: 50%;
				line-height: 2rem;
				margin-right: 0.3rem;
			}
		}
		>p{
			-webkit-line-clamp: 2;
			font-size: 0.8rem;
			margin: 0.5rem 0;
		}
		>img{
			width: 100%;
			height: 10rem;
		}
		>h6{
			margin: 0.5rem 0;
			color: #999;
			font-size: 0.65rem;
		}
	}
	.dan-box{
		padding: 0.75rem;
		overflow: hidden;
		>span{
			color: #666;
			float: left;
			em{
				margin-left: 0.4rem;
			}
		}
		>img{
			width: 1.2rem;
			float: right;
		}
	}
	.speak-box{
		width:100%;
		margin-bottom: 2.5rem;
		ul.speak-ul{
			background: #f4f4f4;
			li{
				padding: 0.75rem;
				background: #fff;
				margin: 10px 0;
				>div{
					overflow: hidden;
					height: 2rem;
					>img{
						width: 2rem;
						height: 2rem;
						border-radius: 50%;
						border: 1px solid red;
						margin-right: 0.4rem;
						float: left;
					}
					>div{
						float: left;
						h1{
							line-height: 1rem;
						}
						p{
							line-height: 1rem;
							font-size: 0.6rem;
							color: #999;
						}
					}
					>span{
						float: right;
						color: #999;
					}
				}
				>p{
					margin: 0.2rem 0;
					margin-left: 2.4rem;
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
	.speak-bb{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 2.25rem;
		padding: 0 0.75rem ;
		background: #fff;
		input{
			line-height: 1.5rem;
			width: 88%;
			background: #E5E5E5;
			border-radius: 1rem;
			height: 1.5rem;
			float: left;
		}
		p{
			line-height: 1.5rem;
			float: right;
			height: 1.5rem;
			color: #555;
		}
	}
</style>