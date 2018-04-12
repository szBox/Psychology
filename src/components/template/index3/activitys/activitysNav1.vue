<template>
	<div class="activitysNav1">

		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in items" @click="goPath(1)">
					<h1>
					<span>植树活动</span>
					<em>
						<span>
							<i>10</i>人
						</span>
						/<i>20</i>人
					</em>
					<p>2018-08-11 11:00</p>
				</h1>
					<h2>我想组织一次秋游,希望大家积极来参与</h2>
					<div class="activitys-info">
						<p>
							发起人：<span>王大大</span>
						</p>
						<p>
							人均消费：<span>20</span>元
						</p>
						<p>
							报名时间：<span>2017-08-12 :08:00~2017-09-12 08:00</span>
						</p>
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
			this.bottom = 4; //一页展示10个
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

</style>