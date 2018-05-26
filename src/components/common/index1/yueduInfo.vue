<template>
	<div class="yueduInfo">
		<header class="header">
			
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>文章详情</h1>
		</header>
		<div class="b-content">
			<div class="info-img">
			<img class="imgz" src="../../../assets/img/details_img.png" alt="" />
		</div>
		<div class="yuedu-content">
			<h1>人性方面的细节调和，是从心理的角度还是从理性的角度思考？</h1>
			<em>2018-03-02 12:00</em>
			
			<p>
				<span></span>
				 学校心理辅导和学校思想品德教育在具体目标上不一致：心理辅导是为了解决心理问题、恢复心理平衡，提高理成熟水平、
				 心理功能正常化等；德育工作是使个体有正确的社会态度，提高社会化水平、行为符合社会规范。
			</p>
		</div>
		
		<div class="yuedu-bbox">
			<h1>评论</h1>
			<ul>
				<li>
					<div class="pinglun-user">
						<img src="../../../assets/img/exchange_icon_a-market_n.png"/>
						<div>
							<h2>王大明</h2>
							
						</div>
						<p>
							<em>1</em>楼
						</p>
					</div>
					<div class="pinglun">
						<p>老师说的很有道理，我发现我变了;</p>
						<div>
							<span>2018-03-16 12:00:00</span>
							<p class="icon-p">
								<img src="../../../assets/img/pinglun.png" alt="" />
								<span>0</span>
							</p>
							<p class="icon-p">
								<img src="../../../assets/img/zan0.png" alt="" />
								<span>0</span>
							</p>
						</div>
					</div>
				</li>
				
			</ul>
		</div>
		<div class="component-bbb" v-show="display">
			<bbb  @quxiao='quxiaoFn' @fabu='fabuFn' v-model='bb' @changes='changesFn'></bbb>
		</div>
		<div v-show='fixed' class="pinlun-fixed">
			<input @click="inpshow()" readonly placeholder="发表评论">
			<div class="icon-fixed">
				<p>
					<img src="../../../assets/img/zan0.png"/>
					<span>11</span>
				</p>
				<p>
					<img src="../../../assets/img/pinglun.png"/>
				</p>
				
				<p>
					<img src="../../../assets/img/sc0.png"/>
				</p>
			</div>
		</div>
		</div>
		
	</div>
</template>

<script>
	import bbb from '../../common/bbb'
	export default({
		components:{
			bbb	
		},
		data(){
			return{
				display:false,
				fixed:true,
				bb:'',
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			inpshow () {
				var self=this;
				
			
					self.display=true;
					self.fixed=false;

			},
			quxiaoFn(){
				var self=this;
				self.display=false;
				self.fixed=true;
			},
			fabuFn(){
				var self=this;
				self.display=false;
				self.fixed=true;
				self.bb='';
				
			},
			changesFn(){
				
			}
		}
	})
</script>

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
        
        p{
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
        ul>li{
            padding: 0.75rem;
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
            background: hotpink;
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
		padding-bottom: 10px;
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
				width: 0.7rem;
			}
			>p{
				float: left;
				margin-right: 1rem;
			}
		}
	}
	
</style>