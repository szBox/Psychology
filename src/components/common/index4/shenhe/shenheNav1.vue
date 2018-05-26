<template>
	<div class="shengheNav1">
		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in items" @click="goPath(index)">
					<div class="lf zutuan-img">
						<img  class="imgz"src="../../../../assets/img/x7.png" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">不好玩回去睡觉了,附上我睡觉的照片,不好玩回去睡觉了</h2>
						<p>2018-08-17 08:00</p>
						<div>待审核</div>
					</div>
					
				</li>
			</ul>
		</scroller>
	</div>
</template>

<script>
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
		created() {
			this.bottom = 3; //一页展示10个
			this.result = '';
			for(let i = 1; i <= this.bottom; i++) {
				this.result = ``
				this.items.push(this.result);
			}

			console.log(this.items);
		},
		methods: {
			goPath(i) {
				this.$router.push({
					path: "/activitysList/activitysInfo/" + i
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
		
		.activitys-ul li{
			padding: 0.5rem 0 0.5rem 0.5rem;
		}
		.zutuan-img{
			
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			height: 6.5rem;
		}
		.zutuan-info{
			width: 64%;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			>h2{
				-webkit-line-clamp: 2;
				font-size: 0.8rem;
				
			}
			>p{
				font-size: 0.65rem;
				color: #A1A1A1;
				margin: 0.5rem 0;
			}
			>div{
				width: 3.5rem;
				text-align: center;
				height: 1.3rem;
				line-height: 1.3rem;
				color: #fff;
				border-radius: 1rem;
				background: #FFA200;
			}
		}
</style>