<template>
	<div class="mp3List">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>点歌台</h1>
			<em @click="goWrite()">我要点歌</em>
		</header>
		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="mp3-bbox">
				<li v-for="(item, index) in items">
					<img src="../../../../assets/img/ren1.png" alt="" />
					<div>
						<h1>
							<em>王大力</em>
							<span>
								<img src="../../../../assets/img/mp3.png" alt="" />
								<i>今天下午三点</i>
							</span>
						</h1>
						<h2 class="ellipsis">我要赠送一首'《王者》'，送给好朋友'王大锤'</h2>
						<h4 class="ellipsis"> 幸福半辈子</h4>
						
					</div>
					
				</li>
			</ul>
		</scroller>
		
		
		
	</div>
</template>

<script>
	import mp3Choose from '@/components/common/index3/mp3/mp3Choose' //互动 > 点歌台list >我要点歌
	export default({
		data() {
			return {
				//				tab_index:2
				items: [],
				/*最后的数组*/
				page: 1,
				/*当前页码*/
			}
		},
		created(){
			this.bottom = 4; //一页展示10个
			this.result = '';
			for(let i = 1; i <= this.bottom; i++) {
				this.result = ``
				this.items.push(this.result);
			}
			
			console.log(this.items);
		},
		methods: {
			back() {
				this.$router.go(-1);
				this.tab_index = 2
			},
			goPath(i) {
				this.$router.push({
					path: "/index3/speakInfo/" + i
				})
			},
			goWrite() {
				this.$router.push({
					path: "/index3/mp3Choose"
				})
			},
			refresh(done) {
				setTimeout(() => {

					done()
				}, 1500)
			},
			infinite(done) {
				if(this.page == 1) {
					done(true)
				}
				console.log('拉啦啦')
			}
		}
	})
</script>

<style scoped lang="less">
	ul.mp3-bbox{
		padding: 0.5rem 1rem 1rem;
		li{
			border-bottom: 1px solid #EBEBEB;
			padding: 0.5rem 0;
			overflow: hidden;
			>img{
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
				float: left;
			}
			>div{
				float: left;
				width: 68%;
				margin-left: 1.25rem;
				h1{
					overflow: hidden;
					>em{
						float: left;
						color: #333;
						font-size: 0.75rem;
					}
					>span{
						float: right;
						color: #666;
						img{
							width: 0.9rem;
							
						}
					}
				}
				h2{
					-webkit-line-clamp: 2;
					font-size: 0.85rem;
				}
				h4{
					color: #666;
					font-size: 0.75rem;
					-webkit-line-clamp: 2;
					margin: 0.8rem 0 0;
					
				}
				
			}
		}
		
	}
</style>