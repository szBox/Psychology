<template>
	<div id="app">
		<keep-alive v-if="$route.meta.keepAlive"> 
		 	<router-view></router-view> 
		</keep-alive> 
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
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