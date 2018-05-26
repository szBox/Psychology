<template>
  <div>
    <tabbar >
    	<tabbar-item :link="{path:item.link,replace: true}" :selected="location===item.link"  v-for='(item,index) in footer'>
    		<img slot="icon" :src="item.img1">
         <img slot="icon-active" :src="item.img2">
        <span slot="label">{{item.label}}</span>
    	</tabbar-item>
    </tabbar>
    
    <router-view></router-view>
  </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  mounted(){
 
  },
	data(){
		return{
			location:this.$route.path,
			footer:[],
				
			
			
			
		}
	},
	created(){
		var self=this;
		var list1=[
				{
					link:'/index1',img1:'/src/assets/img/icon1_1.png',img2:'/src/assets/img/icon1.png',label:'心灵阅读'
				},
				{
					link:'/student/index2',img1:'/src/assets/img/icon2_1.png',img2:'/src/assets/img/icon2.png',label:'心理预约'
				},
				{
					link:'/index3',img1:'/src/assets/img/icon3_1.png',img2:'/src/assets/img/icon3.png',label:'社交互动'
				},
				{
					link:'/student/index4',img1:'/src/assets/img/icon4_1.png',img2:'/src/assets/img/icon4.png',label:'学生'
				},
		];
		var list2=[
				{
					link:'/index1',img1:'/src/assets/img/icon1_1.png',img2:'/src/assets/img/icon1.png',label:'心灵阅读'
				},
				{
					link:'/teacher/index2',img1:'/src/assets/img/icon2_1.png',img2:'/src/assets/img/icon2.png',label:'心理预约'
				},
				{
					link:'/index3',img1:'/src/assets/img/icon3_1.png',img2:'/src/assets/img/icon3.png',label:'社交互动'
				},
				{
					link:'/index4',img1:'/src/assets/img/icon4_1.png',img2:'/src/assets/img/icon4.png',label:'老师'
				},
		]
//		self.footer=list1;
			self.footer=list2;
	}


}
</script>
<style type="text/css">
	.tabbar{
		position: fixed
	}
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
		color: #31C4FF !important;
	}
</style>
