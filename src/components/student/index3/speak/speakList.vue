<template>
	<div class="speakList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>话题列表学生</h1>
			<em @click="goWrite()">发布</em>
		</header>

		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="speakList-ul">
				<li v-for="(item, index) in items" @click="goPath(1)">
					<h3 class="ellipsis">不好玩了，回去睡觉去，附上我睡觉的图片</h3>
					<div class="speakList-img">
						<img src="../../../../assets/img/ren6.png" />
					</div>
					<div class="speakList-div">
						<div>
							<p><span>2018-03-16 12:00</span></p>
							<p><img src="../../../../assets/img/pinglun.png"/><i>25</i></p>
						</div>
					</div>
				</li>

			</ul>
		</scroller>

		
	</div>
</template>

<script>
	import speakWrite from '@/components/common/index3/speak/speakWrite' //互动 > 留言板list >发表话题
	import speakInfo from '@/components/common/index3/speak/speakInfo' //互动 > 留言板list >话题详情
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
	.speakList{
		background: url(../../../../assets/img/bg1m.png);
		background-size: 100% 100%;
	}
	.speakList-ul {
		
		/*padding-top: 2.75rem;*/
		li {
			background:url(../../../../assets/img/speakLi.png);
			background-size: 100% 100%;
			overflow: hidden;
			
			padding: 1.8rem;
			
			margin: 0 0.75rem;
			margin-top: 0.4rem;
			h3 {
				color: #333;
				font-size: 0.75rem;
				-webkit-line-clamp: 2;
				margin-bottom: 0.75rem;
			}
		}
		.speakList-img {
			float: left
		}
		.speakList-img>img {
			width: 6rem;
			height: 4rem;
		
			border-radius: 0.4rem;
		}
		.speakList-div {
			width: 50%;
			float: left;
			margin-left: 0.8rem;
			p:last-child{
				margin-top: 0.75rem;
			}
			img{
				width: 1rem;
				margin-right: 0.3rem;
				
			}
			
			span {
				color: #666;
				font-size: 0.65rem;
			}
			i {
				font-size: 0.7rem;
				color: #666;
			}
		}
	}
	
._v-container>._v-content>.pull-to-refresh-layer{
	    height: 56px !important;
    margin-top: -60px !important;
}	

</style>