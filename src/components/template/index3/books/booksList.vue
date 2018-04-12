<template>
	<div class="speakList">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>图书漂流</h1>
		</header>

		<ul class="speakList-ul">
			<li>
				<h1>我有<span>鲁冰逊漂流记</span></h1>
				<div class="think-div">
					<h1>我想要换取<span>西游记</span>这本书</h1>
					<p>2017-08-25 14:00</p>
					<div>
						联系地址：<span>二年级三班406的<i>王大明</i></span>
					</div>
				</div>
				<div class="think-img">
					<img src="../../../../assets/img/exchange_icon_recharge_n.png" />
				</div>
			</li>
			<li>
				<h1>我有<span>鲁冰逊漂流记</span></h1>
				<div class="think-div">
					<h1>我想要换取<span>西游记</span>这本书</h1>
					<p>2017-08-25 14:00</p>
					<div>
						联系地址：<span>二年级三班406的<i>王大明</i></span>
					</div>
				</div>
				<div class="think-img">
					<img src="../../../../assets/img/exchange_icon_recharge_n.png" />
				</div>
			</li>
		</ul>
		
		<div class="flexd-go" @click="goWrite()">
			<span>发起漂流</span>
		</div>
	</div>
</template>

<script>
	import booksWrite from '@/components/template/index3/books/booksWrite'		//互动 > 图书漂流list >发起漂流
	export default({
		data() {
			return {
			
			}
		},
		mounted() {
//			var mH=$(window).height()-$('.header').height();
//			console.log(mH);
//			$('.speakList-ul').css({'minHeight':mH})
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			goWrite() {
				this.$router.push({
					path: "/index3/booksWrite"
				})
			},
			
		}
	})
</script>

<style scoped lang="less">
	
	.speakList-ul {
	
		padding: 0.5rem 0.75rem;
		>li {
			background: #F2F2F2;
			padding: 0.75rem;
			margin-bottom: 0.5rem;
			overflow: hidden;
			border-radius: 0.5rem;
			h1 {
				span {
					font-size: 0.9rem;
				}
			}
			.think-div {
				float: left;
				width: 80%;
				>p {
					color: #999;
					font-size: 0.6rem;
				}
				>div {
					color: #666;
					font-size: 0.6rem;
					i {
						color: lightcoral;
					}
				}
			}
			.think-img {
				float: right;
				>img {
					width: 3rem;
					height: 3rem;
				}
			}
		}
	}
</style>