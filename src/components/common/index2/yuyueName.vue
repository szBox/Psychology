<template>
	<div class="yuyueJilu">
		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>预约名单</h1>
		</header>
		<div class="b-content">
		<div class="pickerBox">
		<div>
			<div class="picker-div" style="padding-left: 0.75rem;">
     			<datetime  :placeholder='dateTitle' clear-text='确认' format='YYYY-MM-DD HH:mm'  v-model="value7"  start-date='2018-01-01' @on-clear='change1' ></datetime>
				<img src="../../../assets/img/sdown.png" alt="" />
			</div>
			<div class="picker-div">
				<input type="text" v-model='val' @input="search()" placeholder="学生姓名"/>
				<img style="width: 0.8rem;" class="search-img" :src="imgS1" alt="" @click="clear && clearV()"/>
			</div>
		</div>
		</div>
		<ul class="name-list">
			<li>
				<div class="data-div">
					<p>2018/03/12 星期三 上午</p>
					<p>1人</p>
				</div>
				
				<div class="name-div">
					<img src="../../../assets/img/ren1.png" alt="" />
					<div>
						<h4>王老师</h4>
						<h5>三年级二班</h5>
					</div>
					
					<p class="">2018/03/12</p>
				</div>
			</li>
			<li>
				<div class="data-div">
					<p>2018/03/12 星期三 上午</p>
					<p>1人</p>
				</div>
				
				<div class="name-div">
					<img src="../../../assets/img/ren1.png" alt="" />
					<div>
						<h4>王老师</h4>
						<h5>三年级二班</h5>
					</div>
					
					<p class="">2018/03/12</p>
				</div>
			</li>
		</ul>
		</div>
		
	</div>
</template>

<script>
	import {  Datetime } from 'vux'
	export default({
		data(){
			return{
				value7:'',
				val:'',
				clear:false,
				dateTitle:'所有时间',
				results: [],
      			imgS1:'src/assets/img/search.png',
      			
			}
		},
		components: {
	   		
	   	    Datetime,
	 	},
		methods:{
			change1 (value) {
		       console.log('change', value)
		       var self=this;
		       if(value.length>12){
		       	self.value7=value.slice(5)
		       }
		       
//		       console.log(self.value7.slice(5))
		       console.log('触发了')
		    },
		    
		    search () {
		    	var self=this;
		    	if(self.val.length>0){
		    		self.imgS1='src/assets/img/clear.png';
		    		self.clear=true;
		    	}else{
		    		self.imgS1='src/assets/img/search.png';
		    		
		    	}
		    },
		    clearV () {
		    	var self=this;
		    	self.clear=false;
		    	self.val='';
		    	self.imgS1='src/assets/img/search.png';
		    },
			back() {
				this.$router.go(-1);
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
	.pickerBox>div{
		border-bottom: 1px solid #C9C9C9;
		padding:0.5rem 0.75rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.pickerBox .picker-div{
		border: 1px solid #C9C9C9;
		border-radius: 0.25rem;
		width: 47%;
		/*text-align: center;*/
		height: 2rem;
		line-height: 2rem;
		position: relative;
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
</style>