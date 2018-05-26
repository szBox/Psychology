<template>
	<div class="yuyueJilu">
		<header class="header">
			<div  @click="back()"><img src="../../../assets/img/goback.png" alt=""/></div>
			<h1>预约名单</h1>
		</header>
		<div class="b-content">
			<data-picker></data-picker>
		<ul class="name-list">
			<li>
				<div class="data-div">
					<p>2018/03/12 星期三 上午</p>
					<p>1人</p>
				</div>
				
				<div class="name-div">
					<img src="../../../../build/logo.png" alt="" />
					<div>
						<h4>王老师</h4>
						<h5>三年级二班</h5>
					</div>
					
					<p class="">2018/03/12</p>
				</div>
			</li>
			<li>
				<div class="data-div">
					<p>2018/03/12 星期三 上午</p>
					<p>1人</p>
				</div>
				
				<div class="name-div">
					<img src="../../../../build/logo.png" alt="" />
					<div>
						<h4>王老师</h4>
						<h5>三年级二班</h5>
					</div>
					
					<p class="">2018/03/12</p>
				</div>
			</li>
		</ul>
		</div>
		
	</div>
</template>

<script>
	import dataPicker from '../../common/dataPicker'
	export default({
		components:{
			dataPicker
		},
		methods:{
			back() {
				this.$router.go(-1);
			},

		}
	})
</script>

<style scoped lang="less">
	.header{
		position: fixed;
	}
	.name-list{
		padding: 0.75rem;
	}
	.name-list li{
		.data-div{
			overflow: hidden;
			border-bottom:1px solid #F2FAFA;
			padding:10px 0;
			>p:first-child{
				float: left;
				color: #A09E9F;
				
			}
			>p:last-child{
				float: right;
				color: #D45851;
			}
		}
		.name-div{
			overflow: hidden;
			padding: 10px 0;
			>img{
				float: left;
				width: 3rem;
				height: 3rem;
				border-radius: 50%;
			}
			>div{
				float: left;
				margin-left: 0.75rem;
				>h5{
					color: #ADACAD;
					font-size: 0.65rem;
				}
			}
			>p{
				float: right;
				color: #A09E9F;
				margin-top: 0.5rem;
				font-size: 0.65rem;
			}
		}
	}
	
</style>