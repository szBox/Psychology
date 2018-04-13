<template>
	<div class="index4">
		<div class="my-top">
			<div class="img-div" @click="goPath({path:'/index4/ziliao'})">
				<img class="" src="../../../assets/img/exchange_icon_my_n.png" alt="" />
				<p>安小静</p>
			</div>
			<div class="ov-div">
				<img class="" src="../../../assets/img/init3.png" alt="" />
				<span class="">一圈一点,胜似晚语千言</span>
			</div>
		</div>
		
		<div style="padding: 0.75rem 0.5rem;">
			<ul class="my-list">
				<li>
					<img src="../../../assets/img/init3.png" alt="" />
					<span>参与话题</span>
				</li>
				<li  @click="goPath({path:'/index4/shoucang'})">
					<img src="../../../assets/img/init3.png" alt="" />
					<span>收藏文章</span>
				</li>
				<li  @click="goPath({path:'/index4/zixunList'})">
					<img src="../../../assets/img/init3.png" alt="" />
					<span>我的咨询</span>
				</li>
				<li>
					<img src="../../../assets/img/init3.png" alt="" />
					<span>我的审核</span>
				</li>
				<li @click="goPath({path:'/index4/setting'})">
					<img src="../../../assets/img/init3.png" alt="" />
					<span>设置</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import setting from '@/components/template/index4/setting/setting'		//我的 > 设置
	import ziliao from '@/components/template/index4/ziliao/ziliao'		//我的  >详细资料 
	import zixunList from '@/components/template/index4/zixun/zixunList'		//我的  >我的咨询 
	import shoucang from '@/components/template/index4/shoucang/shoucangList'		//我的  >我的收藏
	
	export default({
		methods:{
			goPath(path){
				this.$router.push(path)
			}
		}
	})
</script>

<style scoped>
	
</style>