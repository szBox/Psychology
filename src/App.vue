<template>
	<div id="app">
		
		
		<keep-alive v-if="$route.meta.keepAlive"> 
		 	<router-view></router-view> 
		</keep-alive> 
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<s_loading v-show="shows"></s_loading>
	</div>
</template>

<script>
	import loading from '@/components/common/loading' //loading (公共的)
	export default {
		name: 'app',
		data(){
		   	return{
		   		shows:false
		   	}
		},
		components:{
			 s_loading:loading
    	},
    	mounted(){
	      var vm=this
	      this.$root.eventHub.$on('Vloading',function(t){
	      	vm.shows=t
//	      	setTimeout(function(){
//	      			vm.shows=	false
//	      	},3500)
	      })
	    },
	}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	#app>div:first-child{
    height: 100%;
    overflow-x: hidden;
    position: absolute;
    width: 100%;
	}
</style>