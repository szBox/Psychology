<template>
	<div class="yuyueJilu">
		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>预约名单管理员</h1>
		</header>
		<div class="b-content">
		<div class="pickerBox">
			<div class="picker-div" style="padding-left: 0.75rem;">
     			<datetime format='YYYY-MM-DD HH:mm' clear-text='确认' :placeholder='dateTitle1' v-model="startTime"  start-date='2018-01-01' @on-clear='change1'></datetime>
				<img src="../../../assets/img/sdown.png" alt="" />
			</div>
			<div class="picker-div">
				<input type="text" v-model='val' @input="search()" placeholder="老师姓名"/>
				<img style="width: 0.8rem;" class="search-img" :src="imgS1" alt=""/>
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
						<h4>{{王老师}}</h4>
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
				startTime:'',
				val:'',
				dateTitle1:'所有时间',
				searchVal:'',
				time1num: '', //时间1  时间戳
				results: [],
      			imgS1:'src/assets/img/search.png',
			}
		},
		mounted(){
			var self=this;
			this.getList();
			var role=localStorage.getItem('role');
			if(role=='T'){
				self.searchVal='学生姓名'
			}else if(role=='M'){
				self.searchVal='老师姓名'
			}
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
			getList(){
				var self=this;
				var url=int.yuyueJilu;
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
					teacherId:loginId,
					
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
			},
			change1(value) {
				console.log('change', value)
				var self = this;
				self.time1num = new Date(value).getTime()
				console.log(self.time1num)
				if(value.length > 12) {
					self.startTime = value.slice(5)
				}
			},
		
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
	}
	.picker-div>img.search-img{
		z-index: 1;
	}
	.weui-cell__ft.vux-cell-primary.vux-datetime-value .vux-cell-placeholder{
		color: red;
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