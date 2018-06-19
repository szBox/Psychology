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
					<p v-if='userInfo.state==1' style="float: right; color: #E37212;">{{userInfo.state | State}}</p>
					<p v-if='userInfo.state==3' style="float: right; color: #B1B1B1;">{{userInfo.state | State}}</p>
				</h1>
				
				<p class="ellipsis">
					{{userInfo.summary}}
				</p>
				<img :src="userInfo.imageUrl" alt="" />
				<h6>{{userInfo.insertTime | niceDate}}</h6>
			</div>
			<div class="bgg"></div>
			
			
			<div v-if='roleType' class="btn-fixed">
				<div v-if='userInfo.state==1' @click="conshowFn(2,'通过')" class="btn-yes">通过</div>
				<div v-if='userInfo.state==1'@click="conshowFn(3,'驳回')" class="btn-no">驳回</div>
			</div>
			
			 <confirm v-model="conShow"
			title='操作提示'
	      @on-cancel="onCancel"
	      @on-confirm="onConfirm">
	        <p style="text-align:center;">是否确认{{ConfirmStr}}?</p>
	      </confirm>
			
		</div>

		
	
	
	
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	import { Toast, Confirm } from 'vux'
	export default({
		data() {
			return {
				userInfo:'', //话题 作者信息
				roleType:false,
				stateData:'',
				conShow:false,   //二次提示 
				ConfirmState:'',  //提示  通过/驳回的状态 传给提示框
				ConfirmStr:'', //提示  通过/驳回的内容  传给提示框
			}
		},
		components:{
			Toast,
			Confirm
		},
		mounted(){
			var self=this;
			self.getInfo();
			var role=localStorage.getItem('role');
			if(role=='M'){
				self.roleType=true
			}
		},
		filters:{
			...filter,
			State(val){
				if(val=='1'){
					return '审核中'
				}else if(val=='3'){
					return '已驳回'
				}
			}
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
					self.userInfo=d.data;
					self.stateData=d.data.state;
				})
			},
				conshowFn(state,str){
//				再次确认提示框
				this.conShow=true
				this.ConfirmState=state;
				this.ConfirmStr=str;

			},
		 	onCancel () {
		      
		    },
		    onConfirm () {
		     var self=this;
		     console.log(self.ConfirmState+'////'+self.ConfirmStr)
		     //	调ajax  通过传2, 驳回传3
				var url=int.speakShenhe;
				var params={
					state:self.ConfirmState,
					id:self.$route.params.id,
				}
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
						},1000)
					}
					
				})
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