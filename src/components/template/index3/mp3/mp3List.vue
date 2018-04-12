<template>
	<div class="mp3List">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>点歌台</h1>
		</header>
		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="mp3-bbox">
				<li v-for="(item, index) in items">
					<h2 class="ellipsis">王大翠要赠送一首'王者'，送给好朋友'王大锤'</h2>
					<h4>
						<em>我想对他说：</em>
						<span class="ellipsis">幸福半辈子</span>
					</h4>
					<p>
						<em>播放时间：</em>
						<span class="ellipsis">明天下午三点</span>
					</p>
				</li>
			</ul>
		</scroller>
		
		<div class="flexd-go" @click="goWrite()">
			<span>我要点歌</span>
		</div>
		
	</div>
</template>

<script>
	import mp3Choose from '@/components/template/index3/mp3/mp3Choose' //互动 > 点歌台list >我要点歌
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
			border-bottom: 1px solid #C9C9C9;
			padding: 0.5rem 0;
			overflow: hidden;
		}
		h2{
			-webkit-line-clamp: 1;
		}
		h4{
			color: #666;
			font-size: 0.6rem;
		}
		h4>span,p>span{
			float: left;
			width: 73%;
			-webkit-line-clamp: 2;
		}
		em{
			float: left;
		}
	}
</style>