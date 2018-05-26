<template>
	<div class="pickerBox">
		<div>
			<div class="picker-div" style="padding-left: 0.75rem;">
     			<datetime :placeholder='dateTitle' v-model="value7"  start-date='1950-01-01' @on-change="change"  clear-text="today" @on-clear="setToday"></datetime>
				<img src="../../assets/img/sdown.png" alt="" />
			</div>
			<div class="picker-div">
				<input type="text" v-model='val' @input="search()" placeholder="学生姓名"/>
				<img style="width: 0.8rem;" class="search-img" :src="imgS1" alt="" @click="clear && clearV()"/>
			</div>
		</div>
	</div>
</template>

<script>
	import {  Datetime , Search} from 'vux'

	export default {
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
		created(){
		
		},
	  	components: {
	   		
	   	    Datetime,
	   	    Search
	 	},
	 	methods:{
	 		change (value) {
		       console.log('change', value)
		       var self=this;
		      
		    },
		     setToday (value) {
		      let now = new Date()
		      let cmonth = now.getMonth() + 1
		      let day = now.getDate()
		      if (cmonth < 10) cmonth = '0' + cmonth
		      if (day < 10) day = '0' + day
		      this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
		      
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
		    }
	 	}
	}
</script>

<style scoped lang="less">
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