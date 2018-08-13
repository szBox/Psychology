<template>
	<div>
		<div @click="toggleY(yuyueDay,!isT && true,ap,yuyue.split('&')[1])" v-show='yuyue!="4"&&yuyue!="3"&&yuyue!="2"&&yuyue!=""'  :class="{'yuyueY':isT,'yuyuek':!isT}" :data-id=" yuyue.split('&')[1] ">
			<p>{{isT ? '已设置':'设置'}}</p>
			<p>预约</p>
		</div>
		<div v-show='yuyue=="2"||yuyue=="4"' class="yuyueN">
			<p>设置</p>
			<p>预约</p>
		</div>
		
		<div  @click="toggleY(yuyueDay,isT && true,ap,'')" v-show='yuyue==""' :class="{'yuyueY':!isT,'yuyuek':isT}">
			<p>{{isT ? '设置':'已设置'}}</p>
			<p>预约</p>
		</div>
		
	</div>
</template>

<script>
	export default({
		data() {
			return {
				isT:true,
				newArr:[],
				
			}
		},

		props:{
		
			yuyue:{
				type:String,
				default:''
			},
			yuyueDay:{
				default:''
			},
			ap:{
				default:''
			},
			id:{
				default:''
			},
			keys:{
				default:''
			},
			Arr:{
				type:Array,
				default:function(){
					return []
				}
			}
			
		},
		mounted(){
			
		},

		
		methods: {
			toggleY(yuyueDay,dataon,ap,id){
				this.isT = !this.isT;
				var self=this
				this.$root.eventHub.$emit('zidingyi',dataon,yuyueDay,ap,id)
				
			}
		}
	})
</script>

<style scoped>
	
	.yuyueY{
		color: #fff;
		background: #32C4FF;
		width: 100%;
		border: none;
		font-size: 0.6rem;
		display: inline-block;
	}
	.yuyueN{
		color: #9B999A;
		background: #F3EFF0;
		width: 100%;
		font-size: 0.6rem;
		display: inline-block;
		
	}
	.yuyuek{
		color: #32C4FF;
		width: 100%;
		font-size: 0.6rem;
		display: inline-block;
	}
	.yuyueN>p,.yuyueY>p,.yuyuek>p{
		
		line-height: 0;
		height: 1.125rem;
		line-height: 1.125;
	}
	.yuyueN>p:first-child,.yuyueY>p:first-child,.yuyuek>p:first-child{
		padding-top: 0.4rem;
	}
	.yuyue3{
		color: #fff;
		background: #3991F5;
		width: 100%;
		font-size: 0.6rem;
		display: inline-block;
	}

</style>