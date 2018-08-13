<template>
	<div class="yueduInfo">
		<header class="header">
			
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>文章详情</h1>
		</header>
		<div v-if="showInit" class="b-content">
			<!--<div class="info-img">
				<img class="imgz" :src="indexInfo.covers" alt="" />
			</div>-->
			<div class="yuedu-content">
				<h1>{{indexInfo.title}}</h1>
				<em>{{indexInfo.insertTime | niceDate}}</em>
				
				<div v-html="indexInfo.content">
			
				</div>
			</div>
		
		<div class="yuedu-bbox">
			<h1>评论</h1>
			<ul>
				<li v-for="(speak,index) in speakList">
					<div class="pinglun-user">
						<img :src="speak.headPic"/>
						<div>
							<h2>{{speak.nickName}}</h2>
							
						</div>
						<p>
							<em>{{speakAll-index}}</em>楼
						</p>
					</div>
					<div class="pinglun">
						<p>{{speak.content}}</p>
						<div>
							<span>{{speak.insertTime | niceDate}}</span>
							<!--<p class="icon-p">
								<img src="../../../assets/img/zan0.png" alt="" />
								<span>{{speak.praise}}</span>
							</p>-->
						</div>
					</div>
				</li>
				
			</ul>
			<p  class="more-btn" @click="next1 && more1() ">{{next1_text}}</p>
		</div>
		<div class="component-bbb" v-show="display">
			<div class="inp-bbBox">
				<div>
					<span @click="close()">取消</span>
					<em @click='fabuFn()'>发布</em>
				</div>
			<textarea  autofocus id='textarea' @input="maxLen(value)" maxlength="100"  v-model='value' class="inp-bb" placeholder="写点什么..."></textarea>
			<em class="em-max">{{maxL}}</em>
			</div>
			
		</div>
		<div v-show='fixed' class="pinlun-fixed">
			<input @click="inpshow()" readonly placeholder="发表评论">
			<div class="icon-fixed">
				<p v-if='indexInfo.selfPraise==0' @click="zan()">
					<img src="../../../assets/img/zan0.png"/>
					<span>{{zanNum}}</span>
				</p>
				<p v-else @click="zanQx()">
					<img src="../../../assets/img/zan1.png"/>
					<span>{{zanNum}}</span>
				</p>
				<p>
					<img src="../../../assets/img/pinglun.png"/>
					{{speakAll}}
				</p>
				
				<p v-if='indexInfo.selfFavorite==0' @click='Soucang()'>
					<img style="margin-top: -2px;" src="../../../assets/img/sc0.png"/>
					<!--<span>{{indexInfo.favorite}}</span>-->
				</p>
				<p v-else @click='SoucangQx()'>
					<img style="margin-top: -2px;" src="../../../assets/img/sc1.png"/>
					<!--<span>{{indexInfo.favorite}}</span>-->
				</p>
			</div>
		</div>
		</div>
		
	</div>
</template>

<script>
	import bbb from '../../common/bbb'
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	export default({
		components:{
			bbb	
		},
		data(){
			return{
				display:false,
				fixed:true,
				next1_text:'',
				next1:true,	//加载更多 状态
				page:1,
				bb:'',
				zanNum:'',  //返回的赞
				indexInfo:'',   
				speakList:'',
				value:'',
				speakAll:'',
				maxL:100,
				showInit:false
			}
		},
		filters:{
			...filter,
			
		},
		created(){
			
		},
		
		mounted(){
			this.$root.eventHub.$emit('Vloading',true)
			var self=this;
			self.getInfo();
			self.getList();
			
		},
		beforeRouteLeave(to, from, next) {
			// 设置下一个路由的 meta
			if(to.path=='/index1'){
//				alert('111111111')
				 to.meta.keepAlive = true;  // 让 A 缓存，即不刷新
			}else{
				 to.meta.keepAlive = false;  
			}
             
           
            next();
       	},
		methods:{
			back(){
				this.$router.go(-1)
			},
			
			maxLen(val){
				var self=this;
				self.maxL=100-val.length
			},
			getInfo(){
				var self=this;
				var url=int.index1Info+self.$route.params.id;
				var params={
					
				};
				ajax.get_data(url,params,function(d){
					console.log('心理预约详情',d)
					if(d.code==0){
						self.$root.eventHub.$emit('Vloading',false);
						self.showInit=true;
						self.indexInfo=d.data;
						self.zanNum=d.data.praise;
					}
					
					
				})
			},
			zan(){
				var self=this;
				var url=int.index1Zan+self.$route.params.id;
				var params={

				};
				ajax.post_data(url,params,function(d){
					console.log('点赞',d)
					self.zanNum+=1
					self.getInfo();
				})
			},
			zanQx(){
				var self=this;
				var url=int.index1Zanquxiao+self.$route.params.id;
				var params={

				};
				ajax.delete_data(url,params,function(d){
					console.log('取消点赞',d)
					self.zanNum-=1
					self.getInfo();
				})
			},
			Soucang(){
				var self=this;
				var url=int.index1Soucang+self.$route.params.id;
				var params={
				};
				ajax.post_data(url,params,function(d){
					console.log('收藏',d)
					if(d.code==0){
						self.getInfo();
					}
				})
			},
			SoucangQx(){
				var self=this;
				var url=int.index1SQuxiao+self.$route.params.id;
				var params={
				};
				ajax.delete_data(url,params,function(d){
					console.log('取消收藏',d)
					if(d.code==0){
						self.getInfo();
					}
				})
			},
			more1(){
				//加载更多
				var vm = this;
				vm.page++;
				vm.getPage();
	
			},
			getList(){
				var self=this;
				var url=int.index1InfobbList;
				var params={
					current: 1,
					size: 10,
					articleId:self.$route.params.id
				};
				ajax.post_data(url,params,function(d){
					console.log('评论列表',d)
					self.speakAll=d.data.total;
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.speakList=d.data.records;
						}
						if(d.data.total==0){
							self.next1=false;
							self.next1_text='暂无评论'
						}
						else{
							self.next1=true;
							self.next1_text='查看更多'
						}
						if(d.data.current == d.data.pages){
							self.next1=false;
							self.next1_text='没有更多了'
						}
					}
				})
			},
			getPage(){
				var self=this;
				var url=int.index1InfobbList;
				var params={
					current: self.page,
					size: 10,
					articleId:self.$route.params.id
				};
				ajax.post_data(url,params,function(d){
					console.log('评论列表',d)
//					self.speakAll=d.data.total;
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.speakList.push(d.data.records[i]);
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
				})
			},
			close(){
				var self=this;
				self.display=false;
				self.fixed=true;
			},
			inpshow () {
				var self=this;
				self.display=true;
				self.fixed=false;

			},
			fabuFn(){
				var self=this;
				if(self.value){
					
					var url=int.index1Infobb;
					var params={
						content: self.value,
						articleId:self.$route.params.id
					};
					ajax.post_data(url,params,function(d){
						console.log('评论',d)
						if(d.code==0){
							
							self.getList();
							self.display=false;
							self.fixed=true;
							self.value='';
							self.maxL=100;
						}
					})
				}
				
				
			},
		
		}
	})
</script>
<style>
	.yuedu-content >div img{
		max-width:100%;
	}
	.yuedu-content iframe{
		width: 100%;
		height: 12rem;
	}
</style>
<style scoped lang="less">
	.header{
		position: fixed;
	}
	/*心灵阅读 info*/
.yueduInfo{
        background: #F2F2F2;
    }
    .yuedu-content,.yuedu-bbox{
        background: #fff;
    }
    .info-img{
        width: 100%;
        height: 8rem;
    }
    .yuedu-content{
        padding: 0.75rem;    
        h1{
            font-weight: bold;
            font-size: 1rem;
            color: #333;
        }
        em{
            display: block;
            margin: 0.5rem 0;
            font-size: 0.65rem;
            color: #9C9C9C;
        }
        
        div {
            font-size: 0.8rem;
            color: #333;
            line-height: 1.4rem;
            text-align: justify;
            >span{
                margin-left: 1.3rem;
            }
          
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
    .yuedu-bbox{
        margin: 0.4rem 0 2rem;
        padding-bottom: 20px;
        ul>li{
            padding:0.25rem 0.75rem;
        }
        div.pinglun{
            border-bottom: 1px solid #e4e4e4;
            padding: 0.2rem 0 0.75rem;
            padding-left: 2.25rem;
            >p{
            	color: #000;
            	font-size: 0.7rem;
            	margin: 0.5rem 0;
            }
            >div{
            	color: #9C9C9C;
            	overflow: hidden;
            	>span{
            		float: left;
            	}
            	>p.icon-p{
            		float: right;
            		margin-left: 0.5rem;
            		img{
            			width: 0.7rem;
            			margin-left: 0.2rem;
            		}
            		span{
            			margin-left: 0.2rem;
            			color: #000;
            		}
            	}
            }
        }
        h1{
            padding: 0.5rem 0.75rem;
            color: #000;
        }
    }
    
    
    .pinglun-user{
        overflow: hidden;
        >img{
            float: left;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
        }
        >div{
            float: left;
            margin-left: 0.75rem;
            height: 1.5rem;
            line-height: 1.5rem;
            p{
                font-size: 0.6rem;
                color: #555;
            }
        }
        >p{
            float: right;
            color: #555;
            font-size: 0.6rem;
        }
        
    }
	.pinlun-fixed{
		background: #fff;
		position: fixed;
		bottom: 0;
		padding: 0.5rem 0;
		left: 0;
		width: 100%;
		textarea,input{
			float: left;
			background: #E5E5E5;
			border-radius: 2rem;
			width: 60%;
			height: 1.5rem;
			line-height: 1.5rem;
			margin-left: 0.75rem;
		}
		.icon-fixed{
			float: right;
			line-height: 1.5rem;
			img{
				width: 0.9rem;
			}
			>p{
				float: left;
				margin-right: 0.5rem;
			}
		}
	}
	.more-btn{
		color: #666;
		text-align: center;
		/*border: 0.05rem solid;*/
		width: 5rem;
		height: 1.5rem;line-height: 1.5rem;
		margin: 0 auto;
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
</style>