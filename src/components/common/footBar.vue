<template>
  <div>
    <tabbar  v-model="tab_index">
      <tabbar-item @click="clk(0)"   link='/'>
        <img slot="icon" src="../../assets/img/exchange_icon_a-market_s.png">
         <img slot="icon-active" src="../../assets/img/exchange_icon_a-market_n.png">
        <span slot="label">心灵阅读</span>
      </tabbar-item>
      <tabbar-item @click="clk(1)"  link='/home/index2'>
       <img slot="icon" src="../../assets/img/exchange_icon_game-interaction_s.png">
       <img slot="icon-active" src="../../assets/img/exchange_icon_game-interaction_n.png">
        <span slot="label">预约咨询</span>
      </tabbar-item>
      <tabbar-item @click="clk(2)"  link='/home/index3'>
        <img slot="icon" src="../../assets/img/exchange_icon_recharge_s.png">
        <img slot="icon-active" src="../../assets/img/exchange_icon_recharge_n.png">
        <span slot="label">互动</span>
      </tabbar-item>
      <tabbar-item  @click="clk(3)" link='/home/index4'>
        <img slot="icon" src="../../assets/img/exchange_icon_my_s.png">
        <img  slot="icon-active" src="../../assets/img/exchange_icon_my_n.png">
        <span slot="label">我的</span>
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
  data(){
  	return{
  		tab_index:0
  	}
  },
//methods:{
//	clk(index){
//		this.tab_index=index;
//		console.log(this.tab_index)
//	}
//},
  feature:{
  	clk(index){
  		this.tab_index=index;
  		console.log(this.tab_index)
  	}
  }
}
</script>
<style type="text/css">
	tabbar{
		position: fixed
	}
</style>
