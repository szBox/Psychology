<template>
	<div class="activitysWrite">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>发起组团</h1>
		</header>
		
		<div class="write-title">
			<span>活动名称：</span>
			<input type="text" />
		</div>
		<div class="write-title">
			<span>联系方式：</span>
			<input type="text" />
		</div>
		<div class="write-title">
			<span>报名时间：</span>
			<input type="text" />
		</div>
		<div class="write-title">
			<span>活动消费：</span>
			<input type="text" />
		</div>
		<div class="write-title">
			<span>活动人数：</span>
			<input type="text" />
		</div>
		<div class="write-bbox">
			<div class="wtire-text">
				<span>活动详情：</span>
				<textarea  rows="4"></textarea>
			</div>
			
		</div>
		
		<div class="write-bottom">
			<p>
				<img src="../../../../assets/img/init3.png"/>
				<span>发布之后需要进行审核</span>
			</p>
			<div class="btn-init">
				发布
			</div>
		</div>
	</div>
</template>

<script>
	export default({
		data() {
			return {
				//				tab_index:2
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			addPic(){
    			$(".imgshow").append("<img style='width: 3rem;height: 3rem;margin-right: 0.75rem;' src="+URL.createObjectURL($('#imgFile')[0].files[0])+">")
			}
		}
	})
</script>

<style scoped lang="less">
	.activitysWrite{
		background: #F2F2F2;
	}
	input,textarea{border: none;}
	header,.write-title,.write-bbox,.write-bottom{
		background: #fff;
	}
	.write-title{
		padding:0.5rem 0.75rem;
		margin-bottom: 0.45rem;
		overflow: hidden;
		span{
			float: left;
			line-height: 1.5rem;
		}
		input{
			float: left;
			width: 78%;
			height: 1.5rem;
		}
	}
	.write-bbox{
		margin-bottom: 0.45rem;
		>div.wtire-text{
			overflow: hidden;
			padding: 0.75rem;
			span{
				float: left;
				line-height: 1.5rem;
			}
			textarea{
				float: left;
				width: 78%;
				padding-top: 0.3rem;
			}
		}
	}
	.write-bottom{
		padding: 0.75rem;
		p>img{
			width: 1rem;
			height: 1rem;
			
		}
		p>span{
			font-size: 0.6rem;
			color: #555;
			line-height: 1rem;
		}
		div{
			margin: 20px 0;
		}
	}
</style>