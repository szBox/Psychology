<template>
  <div>
  	
    <tabbar >
    	<tabbar-item :link="{path:item.link,replace: true}" :selected="location===item.link"  v-for='(item,index) in footer' :key='index'>
    		<img slot="icon" :src="item.img1">
         <img slot="icon-active" :src="item.img2">
        <span slot="label">{{item.label}}</span>
    	</tabbar-item>
    </tabbar>
    <keep-alive v-if="$route.meta.keepAlive"> 
		 	<router-view></router-view> 
		</keep-alive> 
		<router-view v-if="!$route.meta.keepAlive"></router-view>
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
  	var self=this;
// 		console.log('vuex',self.$store.state.user)
  },
	data(){
		return{
			location:this.$route.path,
			role:'',
			footer:[],
				
			
			
			
		}
	},
	created(){
		var self=this;
		var list1=[
				{
					link:'/index1',img1:require('../../assets/img/icon1_1.png'),img2:require('../../assets/img/icon1.png'),label:'心灵阅读'
				},
				{
					link:'/index2A',img1:require('../../assets/img/icon2_1.png'),img2:require('../../assets/img/icon2.png'),label:'心理预约'
				},
				{
					link:'/index3',img1:require('../../assets/img/icon3_1.png'),img2:require('../../assets/img/icon3.png'),label:'社交互动'
				},
				{
					link:'/index4',img1:require('../../assets/img/icon4_1.png'),img2:require('../../assets/img/icon4.png'),label:'学生'
				},
		];
		var list2=[
				{
					link:'/index1',img1:require('../../assets/img/icon1_1.png'),img2:require('../../assets/img/icon1.png'),label:'心灵阅读'
				},
				{
					link:'/index2B',img1:require('../../assets/img/icon2_1.png'),img2:require('../../assets/img/icon2.png'),label:'心理预约'
				},
				{
					link:'/index3',img1:require('../../assets/img/icon3_1.png'),img2:require('../../assets/img/icon3.png'),label:'社交互动'
				},
				{
					link:'/index4',img1:require('../../assets/img/icon4_1.png'),img2:require('../../assets/img/icon4.png'),label:'老师'
				},
		]
		var list3=[
				{
					link:'/index1',img1:require('../../assets/img/icon1_1.png'),img2:require('../../assets/img/icon1.png'),label:'心灵阅读'
				},
				{
					link:'/index2C',img1:require('../../assets/img/icon2_1.png'),img2:require('../../assets/img/icon2.png'),label:'心理预约'
				},
				{
					link:'/index3',img1:require('../../assets/img/icon3_1.png'),img2:require('../../assets/img/icon3.png'),label:'社交互动'
				},
				{
					link:'/index4',img1:require('../../assets/img/icon4_1.png'),img2:require('../../assets/img/icon4.png'),label:'管理员'
				},
		]
		var role=localStorage.getItem('role');
			if(role=='S'){
				self.footer=list1;
			}else if(role=='T'){
				self.footer=list2;
			}else{
				self.footer=list3;
			}
	}


}
</script>
<style type="text/css">
	.tabbar{
		position: fixed;
	
	}
	.weui-tabbar{
			height: 3rem;
	}
	.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
		color: #31C4FF !important;
	}
</style>
