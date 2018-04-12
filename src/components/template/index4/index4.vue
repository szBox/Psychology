<template>
	<div class="index4">
		<div class="my-top">
			<div class="img-div">
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
				<li>
					<img src="../../../assets/img/init3.png" alt="" />
					<span>收藏文章</span>
				</li>
				<li>
					<img src="../../../assets/img/init3.png" alt="" />
					<span>我的咨询</span>
				</li>
				<li>
					<img src="../../../assets/img/init3.png" alt="" />
					<span>我的审核</span>
				</li>
				<li>
					<img src="../../../assets/img/init3.png" alt="" />
					<span>设置</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.my-top{
		padding: 1.5rem 0;
		background: #F2F2F2;
		text-align: center;
		
	}
	.img-div{
		
		
		margin: 0 auto;
	}
	.img-div>img{
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		background: red;
	}
	.img-div>p{
		font-size: 0.9rem;
		color: #000;
		font-weight: 600;
		margin: 0.75rem auto ;
	}
	.ov-div{
		text-align: center;
	}
	.ov-div>img{
		width: 1rem;
		height: 1rem;
	}
	.ov-div>span{
		display: inline-block;
		font-size: 0.6rem;
		line-height: 1rem;
		height: 1rem;
	}
	
	.my-list{
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 5px 0.75rem 1.5rem;
	}
	.my-list li{
		overflow: hidden;
		border-bottom: 1px solid #E4E4E4;
		padding: 0.5rem 0;
	}
	.my-list li img{
		width: 1.2rem;
		height: 1.2rem;
		float: left;
		margin-left: 1rem;
		margin-right: 0.8rem;
	}
	.my-list li span{
		float: left;
		height: 1.2rem;
		line-height: 1.2rem;
		/*font-size: 0.7rem;*/
		
	}
</style>