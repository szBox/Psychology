<template>
	<div>
		<div class="inp-bbBox">
			<div>
				<span @click="cl()">取消</span>
				<em @click='fb(value)'>发布</em>
			</div>
			<textarea  autofocus id='textarea' @input="test()" v-model='value' class="inp-bb" placeholder="写点什么..."></textarea>
		</div>
	</div>
</template>

<script>
	export default({
		props:['value'],
		mounted(){
			document.getElementById('textarea').focus()
		},
		methods:{
			cl(){
				this.$emit('quxiao')
			},
			fb(value){
				alert(value)
				this.$emit('fabu');
			},
			test(value){
				this.$emit('changes',value)
			}
		}
	})
</script>

<style scoped lang="less">
	.inp-bbBox{
		padding: 0.5rem 0.75rem;
		>div{
			margin: 0.5rem 0;
			overflow: hidden;
			span{
				float: left;
			}
			em{
				float: right;
			}
		}
		input,textarea{
			width: 100%;
			height: 100%;
			height: 8rem;
			background: #E5E5E5;
			border: none;
		}
	}
</style>