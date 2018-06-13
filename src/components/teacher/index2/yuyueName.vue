<template>
	<div class="yuyueJilu">
		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>预约名单 (老师)</h1>
		</header>
		<div class="b-content">
		<div class="pickerBox">
			<div class="picker-div" style="padding-left: 0.75rem;">
     			<datetime format='YYYY-MM-DD' clear-text='确认' :placeholder='dTime'    start-date='2018-01-01' @on-clear='change1'></datetime>
				<img src="../../../assets/img/sdown.png" alt="" />
			</div>
			<div class="picker-div">
				<input type="text" v-model='sName' placeholder="学生姓名"/>
				<img style="width: 0.8rem;" @click="search(sName)" class="search-img" :src="imgS1" alt=""/>
			</div>
		</div>
		<ul v-if="allList.length" class="name-list">
			<li v-for="(item,index) in allList">
				<div class="data-div">
					<p>{{item.insertTime | niceDate}}</p>
					<p></p>
				</div>
				
				<div class="name-div">
					<img src="../../../../build/logo.png" alt="" />
					<div>
						<h4>{{}}</h4>
						<h5>三年级二班</h5>
					</div>
					
					<p class="">2018/03/12</p>
				</div>
			</li>
			<li>
				<div class="data-div">
					<p>2018/03/12 星期三 上午</p>
					<p></p>
				</div>
				
				<div class="name-div">
					<img src="../../../../build/logo.png" alt="" />
					<div>
						<h4>王老师</h4>
						<h5>三年级二班</h5>
					</div>
					
					<p class="">2018/03/12</p>
				</div>
			</li>
			<p  class="more-btn" @click="next1 && more1() ">{{next1_text}}</p>
		</ul>
		<div class="err-tips" v-if='tip'>
			暂无数据
		</div>
		</div>
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	import { Datetime, Toast } from 'vux'
	export default({
		data(){
			return{
				allList:[],
				page:1,
				next1_text:'',
				next1:true,	//加载更多 状态
				tip:false,
				
				mm:'',
				dd:'',
				dTime:'',
				sName:'',
				results: [],
      			imgS1:'src/assets/img/search.png',
			}
		},
		mounted(){
			var self=this;
			var d = new Date()
			if(parseInt(d.getMonth()+1)<10){
				self.mm= '0'+parseInt(d.getMonth()+1)
			}else{
				self.mm= parseInt(d.getMonth()+1)
			}
			if(parseInt(d.getDate())<10){
				self.dd='0'+parseInt(d.getDate());
			}else{
				self.dd=+parseInt(d.getDate());
			}
    		self.dTime = parseInt(d.getFullYear()) + '-' + self.mm + '-' + self.dd;
    		this.getList();
			
		},
		filters:{
			...filter,
		},
		computed:{
			
		},
		components: {
			Toast,
			Datetime,
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
			getList(d,name){
				var self=this;
				d=self.dTime;
				name=self.sName;
				var url=int.stuNameList;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				console.log('1111',self.dTime)
				var params={
					current:self.page,
					size:10,
					teacherId:loginId,
					date:d,
					stuName:name
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("预约记录列表",d);
					if(d.code==0){
						if(d.data){
							for(let i = 0; i < d.data.length; i++) {
							self.allList=d.data;
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
						}else{
							self.tip=true
						}
						
					}
					
		       });
			},
			getPage(){
				var self=this;
				var url=int.stuNameList;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					current:self.page,
					size:10,
					teacherId:loginId,
					
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("预约记录列表",d);
					if(d.code==0){	
						if(d.data){
							for(let i = 0; i < d.data.length; i++) {
							self.allList.push(d.data[i]);
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
						
					}
					
		       });
			},
			change1(value) {
				var self = this;
				self.dTime = value;
				console.log(self.dTime)
				self.getList(value)
			},
			search(name){
				var self = this;
				
				self.sName=name;
				console.log(self.sName)
				self.getList(name)
			}
		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
	}
	.name-list{
		padding: 0.75rem;
	}
	.name-list li{
		.data-div{
			overflow: hidden;
			border-bottom:1px solid #F2FAFA;
			padding:10px 0;
			>p:first-child{
				float: left;
				color: #A09E9F;
				
			}
			>p:last-child{
				float: right;
				color: #D45851;
			}
		}
		.name-div{
			overflow: hidden;
			padding: 10px 0;
			>img{
				float: left;
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
			}
			>div{
				float: left;
				margin-left: 0.75rem;
				>h5{
					color: #ADACAD;
					font-size: 0.65rem;
				}
			}
			>p{
				float: right;
				color: #A09E9F;
				margin-top: 0.5rem;
				font-size: 0.65rem;
			}
		}
	}
	.pickerBox{
		overflow: hidden;
		/*background: greenyellow;*/
		padding: 0.5rem 0.75rem;
	}
	.pickerBox>div{
		border-bottom: 1px solid #C9C9C9;
		padding:0.5rem 0.75rem;
		float: left;
	}
	.pickerBox .picker-div{
		border: 1px solid #C9C9C9;
		border-radius: 0.25rem;
		width: 48%;
		/*text-align: center;*/
		position: relative;
	}
	.picker-div:last-child{
		float: right;
	}
	.picker-div>img{
		z-index: -1;
		position: absolute;
		top: 50%;
		right: 0.75rem;
		width:0.7rem;
		-webkit-transform: translateY(-50%);
		-moz-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		-o-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.picker-div>input{
		height: 100%;
		width: 100%;
		border: none;
		background: transparent;
		color: #A09E9F;
	}
	.picker-div>img.search-img{
		z-index: 1;
	}
	.vux-datetime-value .vux-cell-placeholder{
		color:#333 !important;
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
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		
	}
</style>