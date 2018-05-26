<template>
	<div class="speakList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>图书漂流</h1>
			<em @click="goWrite()">发起漂流</em>
		</header>
		<div class="b-content">
			<ul class="speakList-ul">
			<li>
				<div class="book-left">
					<h1>王小明：<span>《鲁冰逊漂流记》</span></h1>
					<div class="think-div">
						<h1>想换：<span class="think-book">《西游记》</span></h1>
						<div>
							<p>
								<img src="../../../../assets/img/dz.png" alt="" />
								<span>二年级三班</span>
							</p>
							<p>发布日期：2017-08-25 14:00</p>
						</div>
					</div>
				</div>
				
				<div class="think-img">
					<img src="../../../../assets/img/book1.png" />
				</div>
			</li>
			<li>
				<div class="book-left">
					<h1>王小明：<span>《秘密花园》</span></h1>
					<div class="think-div">
						<h1>想换：<span class="think-book">《西游记》</span></h1>
						<div>
							<p>
								<img src="../../../../assets/img/dz.png" alt="" />
								<span>二年级三班</span>
							</p>
							<p>发布日期：2017-08-25 14:00</p>
						</div>
					</div>
				</div>
				
				<div class="think-img">
					<img src="../../../../assets/img/book2.png" />
				</div>
			</li>
			
			<li>
				<div class="book-left">
					<h1>王小明：<span>《鲁冰逊漂流记》</span></h1>
					<div class="think-div">
						<h1>想换：<span class="think-book">《西游记》</span></h1>
						<div>
							<p>
								<img src="../../../../assets/img/dz.png" alt="" />
								<span>二年级三班</span>
							</p>
							<p>发布日期：2017-08-25 14:00</p>
						</div>
					</div>
				</div>
				
				<div class="think-img">
					<img src="../../../../assets/img/book1.png" />
				</div>
			</li>
		</ul>
		</div>
		
		
	</div>
</template>

<script>
	import booksWrite from '@/components/common/index3/books/booksWrite'		//互动 > 图书漂流list >发起漂流
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
	.speakList{
		background: #F4F4F4;
	}
	.header{
		position: fixed;
	}
	.speakList-ul {
	
		padding: 0.5rem 0.75rem;
		>li {
			border: 1px solid #F3F3F3;
			-webkit-box-shadow: 0 0 3px #E3E3E3;;
			-moz-box-shadow: 0 0 3px #E3E3E3;;
			box-shadow: 0 0 3px #E3E3E3;
			background: #fff;
			padding: 0.75rem;
			margin-bottom: 0.5rem;
			overflow: hidden;
			border-radius: 0.5rem;
			.book-left{
				overflow: hidden;
				float: left;
				width: 68%;
			}
			h1 {
				font-size:0.75rem;
				color: #666;
				span {
					font-size: 0.9rem;
					color: #000;
				}
			}
			.think-div {
				float: left;
				
				.think-book{
					color: #3B92F2;
				}
				>h1{
					margin: 0.3rem 0 0.5rem;
				}
				>p {
					color: #999;
					font-size: 0.6rem;
				}
				>div {
					padding-top: 0.5rem;
					border-top: 1px dotted #DADADA;
					color: #666;
					font-size: 0.6rem;
					>p:first-child{
						margin-bottom: 0.4rem;
						img{
							width: 0.9rem;
							vertical-align: text-bottom;
						}
						span{
							font-size: 0.7rem;
							color: #333;
							margin-left: 0.3rem;
						}
					}
					>p:last-child{
						font-size: 0.65rem;
						color: #999;
					}
					i {
						color: lightcoral;
					}
				}
			}
			.think-img {
				float: right;
				>img {
					width: 5rem;
					height: 6rem;
				}
			}
		}
	}
</style>