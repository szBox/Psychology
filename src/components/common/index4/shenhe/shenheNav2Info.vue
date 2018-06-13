<template>

	<div class="activitysInfo">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>{{userInfo.name}}</h1>
		</header>
		<div class="b-content">
			<div class="activi-li">
				<div class="faqi-img">
					<img src="../../../../assets/img/ren1.png" alt="" />
					<div>
						<p>{{userInfo.nickName}}</p>
						<h6>{{userInfo.insertTime | niceDate}}</h6>
					</div>
				</div>
				<p class="activi-type">
					{{userInfo.type | TypesName}}
				</p>
			</div>
			<div class="activi-li">
				<p style="border: none;font-size: 0.8rem;">
					<span style="font-size: 0.7rem;">活动详情：</span>
					{{userInfo.content}}
				</p>
			</div>
			<div class="activi-li">
				<p>
					<span>报名时间：</span>
					{{userInfo.signupStartTime | mdDate}} ~{{userInfo.signupEndTime | mdDate}}
				</p>
				<p>
					<span>联系方式：</span>
					{{userInfo.contactMethod}}
				</p>
				<p>
					<span>人均消费：</span>
					<em>{{userInfo.payPer}}元</em>
				</p>
			</div>
			<div class="activi-li">
				<p>
					<span>集合时间：</span>
					{{userInfo.gatherStartTime | mdDate}}
				</p>
				<p>
					<span>集合地点：</span>
					{{userInfo.gatherAddress}}
				</p>
			</div>
		
			
		</div>
	
		<div v-if='roleType' class="btn-fixed">
			<div v-if='userInfo.state==2' @click="getYes(2)" class="btn-yes">通过</div>
			<div v-if='userInfo.state==2'@click="getYes(3)" class="btn-no">驳回</div>
		</div>
		
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import myalert from '../../alert'
	import { Toast } from 'vux'
	import filter from '@/assets/js/filters'
	export default({
		data(){
			return{
				userInfo:"",      //发起作者 信息
				roleType:false,
			}
		},
		components:{
			Toast
		},
		created(){
			
		},
		
		mounted(){
			var self=this;
			this.getUser();
			var role=localStorage.getItem('role');
			if(role=='M'||role=='T'){
				self.roleType=true
			}

		},
		computed:{
			colorFn(val){
				if(val==6){
					
				}
			}
		},
		filters: {
			...filter,
			TypesName(val){
				 if(val==1){
					return '我发起'
				}
				else if(val==2){
					return '审核中'
				}
				else if(val==3){
					return '我参与'
				}
				else if(val==4){
					return '驳回'
				}
				else if(val==5){
					return	'已满'
				}
				else if(val==6){
					return	'不在报名时间内'
				}
				else if(val==7){
					return '未参与'
				}
			},
			TypesBtn(val){
				
				if(val ==3||val==4||val==5||val==6||val==7){
					return	'我要报名'
				}else if(val==2){
					return '审核中'
				}
			},
	   },
		methods: {
			back() {
				this.$router.go(-1);
			},
	
			getUser(){
				var self=this;
					var url1=int.activityListInfo+self.$route.params.id;
					var params1={
						
					}
				ajax.get_data(url1, params1, function(d) {
	//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log('发起作者信息',d);
					if(d.code==0){
						self.userInfo=d.data;
						if(d.data.type==5||d.data.type==6){ //报名人数已满,不在时间内
							
						}
						else if(d.data.type==7){ //未参与
							
						}
					}
				
	             
	
	          	});
			},
			getYes(s){
				var self=this;
				var url=int.activityCaozuo;
				var params={
					id:self.$route.params.id,
					state:s
				};
				ajax.put_data(url,params,function(d){
					console.log('通过/驳回',d)
					if(d.code==0){
						self.$vux.toast.show({
							type: 'text',
							text: '操作成功',
							position: 'bottom'
						})
						setTimeout(function(){
							self.back()
						},800)
					}
					
				})
			},
		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
		border: none;
	}
	.activitysInfo{
		background: #f4f4f4;
	}
	.activi-li{
		padding:0 0.75rem;
		margin-bottom: 0.3rem;
		background: #fff;
		overflow: hidden;
		>.faqi-img{
			float: left;
			overflow: hidden;
			padding: 0.5rem 0;
			>img{
				width: 2rem;
				border-radius: 50%;
				float: left;
				margin-right: 0.5rem;
			}
			>div{
				float: left;
				>p{
					color: #000;
					font-size: 0.75rem;
				}
				>h6{
					color: #B4B4B4;
					font-size: 0.6rem;
				}
			}
		}
		>p.activi-type{
			padding: 0.5rem 0;
			float: right;
			color: #25BEFF;
			border: none;
		}
		>p{
			border-bottom: 1px solid #F2F2F2;
			padding: 0.5rem 0;
			>span{
				color: #999;
			}
			>em{
				color: #E06E0C;
			}
		}
		>p:last-child{
			border-bottom: none;
		}
	}
		.btn-fixed{
		position: fixed;
		bottom: 2rem;
		width:100%;
		color: #fff;
		left:0%;
		padding: 0 2rem;
		>div{
			width: 45%;
			text-align: center;
			line-height: 2rem;
			border-radius: 1rem;
		}
		>div.btn-yes{
			float: left;
			background: #32C4FF;
			
		}
		>div.btn-no{
			float: right;
			background: #FE6637;
		}
	}
</style>