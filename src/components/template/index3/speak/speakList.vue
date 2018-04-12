<template>
	<div class="speakList">
		<header class="header">
			<img src="../../../../assets/img/exchange_icon_my_n.png" alt="" @click="back()" />
			<h1>话题列表</h1>
		</header>

		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="speakList-ul">
				<li v-for="(item, index) in items" @click="goPath(1)">
					<div class="speakList-img">
						<img src="../../../../assets/img/exchange_icon_a-market_n.png" />
					</div>
					<div class="speakList-div">
						<h3 class="ellipsis">不好玩了，回去睡觉去，附上我睡觉的图片</h3>
						<div>
							<span>2018-03-16 12:00:00</span>
							<em>留言:<i>25</i></em>
						</div>
					</div>
				</li>

			</ul>
		</scroller>

		<div class="flexd-go speak-go" @click="goWrite()">
			<span>发布话题</span>
		</div>
	</div>
</template>

<script>
	import speakWrite from '@/components/template/index3/speak/speakWrite' //互动 > 留言板list >发表话题
	import speakInfo from '@/components/template/index3/speak/speakInfo' //互动 > 留言板list >话题详情
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
			this.bottom = 10; //一页展示10个
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
					path: "/index3/speakWrite"
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
	.speakList-ul {
		/*padding-top: 2.75rem;*/
		li {
			overflow: hidden;
			border-bottom: 1px solid #c9c9c9;
			padding: 0.75rem;
		}
		.speakList-img {
			float: left
		}
		.speakList-img>img {
			width: 3rem;
			height: 3rem;
			border: 1px solid lightblue;
		}
		.speakList-div {
			width: 75%;
			float: left;
			margin-left: 0.8rem;
			h3 {
				color: #000;
				font-weight: bold;
				-webkit-line-clamp: 1;
				margin-top: 0.25rem;
			}
			>div {
				margin-top: 0.3rem;
			}
			>div>span {
				color: #666;
				margin-right: 1rem;
				font-size: 0.6rem;
			}
			>div>em {
				font-size: 0.6rem;
				color: #666;
			}
		}
	}
	
		

</style>