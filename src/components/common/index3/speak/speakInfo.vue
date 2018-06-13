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
			
			<div class="dan-box" v-show="danTitle">
				<span>留言<em>({{speakAll}})</em></span>
				<img @click="danOn()" src="../../../../assets/img/dan_n.png"/>
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

		
		
		<div v-show='fixed' class="pinlun-fixed speak-bb">
			<input @click="inpshow()" readonly placeholder="发表评论">
		</div>
		<div class="component-bbb" v-show="display">
			<div class="inp-bbBox">
				<div>
					<span @click="close()">取消</span>
					<em @click='speakBB()'>发布</em>
				</div>
			<textarea  autofocus="autofocus" id='textarea' @input="maxLen(bb)" maxlength="100"  v-model='bb' class="inp-bb" placeholder="写点什么..."></textarea>
			<em class="em-max">{{maxL}}</em>
			</div>
			
		</div>
		<div v-show='danmu' class="danmu-cover">
			<div class="danmu-box">
			 	<h1 v-if='speakAll!=0'>{{speakAll}}条弹幕来袭</h1>
				 <p @click="danOff()">
				 	<img src="../../../../assets/img/dan_y.png"/>
				 </p>
				
			 	<ul  v-if='speakAll!=0' class="danmu-ul">
			 		<li v-for="(item,index) in speakList">
						<p>{{item.content}}</p>
					</li>
			 	</ul>
			 	<h4 class='err-dan' v-if='speakAll==0'>
			 		暂无弹幕
			 	</h4>
				
			</div>
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
				bb:'',  //留言 BB
				fixed:true,
				display:false,
				maxL:100,
				danTitle:true,
				danmu:false,
			}
		},
		mounted(){
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
			maxLen(val){
				var self=this;
				self.maxL=100-val.length
			},
			danStyle(){
				var margin;
				var mNum=200
				var times;
				console.log('长度',$('.danmu-ul li').length)
				for(var i=0; i<$('.danmu-ul li').length; i++){
					var ran=(Math.random()*1)
					console.log('随机数',ran)
					if((ran*(i+1))<5){
						times=5
					}else if((ran*(i+1))>10){
						times=10
					}else{
						times=ran*(i+1)
					}
					$('.danmu-ul li').eq(i).css({
						left:mNum*(1+ran)+'%',
						transition:"all "+times+"s linear",
					})
				}
			},
			danOn(){
				//开启弹幕
				var self=this;
				self.danmu=true;
				self.danTitle=false;
				$('.danmu-ul li').css({
					left:-100+'%'
				})
			},
			danOff(){
				//关闭弹幕
				var self=this;
				self.danmu=false;
				self.danTitle=true;
				self.danStyle()
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
						self.$nextTick(function(){
							self.danStyle()
						})
						
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
							self.display=false;
							self.fixed=true;
							self.bb='';
							self.maxL=100;
							self.getList();
							
						}
					})
				}
				
			},
			inpshow () {
				var self=this;
				self.display=true;
				self.fixed=false;

			},
			close(){
				var self=this;
				self.display=false;
				self.fixed=true;
			},
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
				border-bottom: 1px solid #E4E4E4;
				>div{
					overflow: hidden;
					height: 2rem;
					>img{
						width: 2rem;
						height: 2rem;
						border-radius: 50%;
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
		height: 2.5rem;
		padding: 0 0.75rem ;
		background: #fff;
		padding-top: 0.4rem;
		input{
			line-height: 1.5rem;
			width: 100%;
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
	  .component-bbb{
    	position: fixed;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	height: 10rem;
    	background: #E5E5E5;
    }
    .inp-bbBox{
		padding: 0.5rem 0.75rem;
		>div{
			margin: 0.5rem 0;
			overflow: hidden;
			span{
				float: left;
			}
			em{
				float: right;
			}
		}
		input,textarea{
			width: 100%;
			height: 100%;
			height: 8rem;
			background: #E5E5E5;
			border: none;
		}
	}
	.em-max{
		position: absolute;
		bottom: 0.5rem;
		right: 0.75rem;
	}
	.danmu-cover{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 14rem;
		background: rgba(0,0,0,.5);
		div.danmu-box{
			height: 100%;
			padding: 0.75rem 0 0;
			overflow: hidden;
			h1{
				float: left;
				margin-left: 0.75rem;
				color: #fff;
			}
			p{
				margin-right: 0.75rem;
				float: right;
				img{
					width: 1.2rem;
				}
			}
			
				
			>ul.danmu-ul{
				height: 100%;
				clear: both;
			color: #fff;
			height: 100%;
				li{
					position: absolute;
					height: 1.5rem;
					line-height: 1.5rem;
					border: 2px solid red;
					/*left:300%;
					transition:left 5s linear;
					-webkit-transition:left 5s linear;*/
				}
				li:nth-child(5n-4){
					top: 15%;
					background: ;
				}
				li:nth-child(5n-3){
					top: 30%;
				}
				li:nth-child(5n-2){
					top: 45%;
				}
				li:nth-child(5n-1){
					top: 65%;
				}
				li:nth-child(5n){
					top: 75%;
				}
			}
			
		}
		
		.err-dan{
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%,-50%);
			-moz-transform: translate(-50%,-50%);
			-ms-transform: translate(-50%,-50%);
			-o-transform: translate(-50%,-50%);
			transform: translate(-50%,-50%);
		}
		
	}


	 
</style>