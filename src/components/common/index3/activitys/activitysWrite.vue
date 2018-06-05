<template>
	<div class="activitysWrite">
		<header class="header">
			<div @click="back()"><img src="../../../../assets/img/goback.png" alt="" /></div>
			<h1>发起组团</h1>
		</header>
		<div class="b-content">
			<div class="img-top">
				<img class="" src="../../../../assets/img/topw3.png"/>
			</div>
			<div class="write-title">
				<p>
					<span>活动名称：</span>
					<input type="text" />
				</p>
				<p>
					<span>联系方式：</span>
					<input type="text" />
				</p>
			</div>
			
			
			<div class="write-title">
				<p>
					<span>活动人数：</span>
					<input type="text" />
				</p>
				<p>
					<span>人均消费：</span>
					<input type="text" />
				</p>
				<p>
					<span>活动详情：</span>
					<textarea rows="3"></textarea>
				</p>
				
			</div>
		
			
			<div class="write-title">
				<p>
					<span>报名时间：</span>
					<em class="time-sel">
						<datetime format='YYYY-MM-DD HH:mm' clear-text='确认' :placeholder='dateTitle1' v-model="startTime"  start-date='2018-01-01' @on-clear='change1'></datetime>
					</em>
					<span  class="time-sel">
						<datetime format='YYYY-MM-DD HH:mm' clear-text='确认' :placeholder='dateTitle2' v-model="endTime"  start-date='2018-01-01' @on-clear='change2'></datetime>
					</span>
				</p>
				<p>
					<span>集合时间：</span>
					<em class="time-sel">
						<datetime format='YYYY-MM-DD HH:mm' clear-text='确认' :placeholder='dateTitle3' v-model="jiheTime"  start-date='2018-01-01' @on-clear='change3'></datetime>
					</em>
				</p>
				<p>
					<span>集合地点：</span>
					<textarea rows="3"></textarea>
				</p>
			</div>
			

			<div class="write-bottom">
				<p>
					<img src="../../../../assets/img/icons_1.png"/>
					<span>发布之后需要进行审核</span>
				</p>
				<div class="btn-init" @click="fabu()">
					发布
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {  Datetime , Toast  } from 'vux'
	export default({
		data() {
			return {
				startTime:'',
				endTime:'',
				jiheTime:'',
				time1num:'', //报名时间1  时间戳
				time2num:'', //报名时间2  时间戳
				time3num:'', //集合时间3  时间戳
				val:'',
				clear:false,
				dateTitle1:'开始时间',
				dateTitle2:'结束时间',
				dateTitle3:'集合时间',
				results: [],
				sty:{
					width:'50%'
				}
			}
		},
		components: {
	   		Toast,
	   	    Datetime,
	 	},
		methods: {
			back() {
				this.$router.go(-1);
			},
			addPic() {
				$(".imgshow").append("<img style='width: 3rem;height: 3rem;margin-right: 0.75rem;' src=" + URL.createObjectURL($('#imgFile')[0].files[0]) + ">")
			},
			change1 (value) {
		       console.log('change', value)
		       var self=this;
		       self.time1num= new Date(value).getTime()
		       if(value.length>12){
		       	self.startTime=value.slice(5)
		       }
		    },
		    change2 (value) {
		       console.log('change', value)
		       var self=this;
		       self.time2num=new Date(value).getTime()
		       if(value.length>12){
		       	self.endTime=value.slice(5)
		       }
		    },
			change3 (value) {
		       console.log('change', value)
		       var self=this;
		       self.time3num=new Date(value).getTime()
		       if(value.length>12){
		       	self.jiheTime=value.slice(5)
		       }
		    },
		    fabu(){
		    	var self=this;
		    	if(self.time2num<self.time1num){
		    		self.$vux.toast.show({
			            type: 'text',
			            text: '结束时间不能小于开始时间',
			            position: 'bottom'
			          })
		    	}
		    }
		}
	})
</script>

<style scoped lang="less">
	.activitysWrite {
		background: #F4F4F4;
	}
	.header{
		position: fixed;
	}
	input,
	textarea {
		border: none;
	}
	
	.write-title,
	.write-bbox,
	.write-bottom {
		background: #fff;
	}
	.img-top{
		text-align: center;
		padding: 1rem 0;
		background: #fff;
		margin-bottom: 0.4rem;
		img{
			width: 8.5rem;
			
		}
	}
	.write-title {
		padding: 0.5rem 0.75rem;
		margin-bottom: 0.45rem;
		overflow: hidden;
		>p{
			clear: both;
			overflow: hidden;
			border-bottom: 1px solid #F7F7F7;
			margin-top: 0.3rem;
			padding-bottom: 0.3rem;
			line-height: 1.5rem;
		}
		>p:first-child{
			margin-top: 0;
		}
		>p:last-child{
			border: none;
		}
		span {
			float: left;
			line-height: 1.5rem;
			
		}
		em.time-sel{
			margin-right: 1.5rem;
		}
		em.time-sel, span.time-sel{
			float: left;
			width: 32%;
			padding-left: 0.75rem;
			border: 1px solid #E7E7E7;
			border-radius: 0.5rem;
			color: #999;
		}
		
		input,textarea {
			float: left;
			width: 78%;
			height: 1.5rem;
		}
		textarea{
			padding-top: 0.35rem;
			height: auto;
		}
	}
	
	.write-bbox {
		margin-bottom: 0.45rem;
		>div.wtire-text {
			overflow: hidden;
			padding: 0.75rem;
			span {
				float: left;
				line-height: 1.5rem;
			}
			textarea {
				float: left;
				width: 78%;
				padding-top: 0.3rem;
			}
		}
	}
	
	.write-bottom{
		padding: 0.75rem;
		
		p>img{
			width: 1.2rem;
		}
		p>span{
			font-size: 0.6rem;
			color: #555;
			line-height: 1rem;
		}
		div{
			width: 10rem;
		margin: 2rem auto 1rem;
			background: #31C4FF;
			border-radius: 1.5rem;
			color: #fff;
			height: 2.2rem;
			line-height: 2.2rem;
		}
	}
	
</style>