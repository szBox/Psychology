<template>
	<div class="activitysNav1">

		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in items" @click="goPath(index)">
					<div class="lf zutuan-img">
						<img src="../../../../assets/img/ren2.png" alt="" />
						<h1>王大力</h1>
						<p>我参与</p>
						<h5>1小时前</h5>
					</div>
					<div class="lf zutuan-info">
						<h1>
						<span>亲子活动</span>
						<em>
							<span>
								<i>10</i>人/
							</span>
							<i>50</i>人
						</em>
					
					</h1>
					<h2>我想组织一次秋游,希望大家积极来参与</h2>
					<div class="activitys-info">
						<div>
							<img src="../../../../assets/img/icon_time.png" alt="" />
							<p>
								<span>8-17 08:00</span>~
								<span>8-18 08:00</span>
							</p>
						</div>
						<div>
							<img src="../../../../assets/img/icon_money.png" alt="" />
							<em>20元</em>
						</div>
					</div>
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
					path: "/activitysList/activitysInfo2/" + i
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
		
		.zutuan-img{
			background: #31C4FF;
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			padding: 0.5rem 0;
			>img{
				width: 3rem;
				border-radius: 50%;
			}
			>h1{
				color: #fff;
				font-size: 0.8rem;
			}
			>p{
				font-size: 0.7rem;
				color: #fff;
				background: #ffa200;
				text-align: center;
				border-radius: 1rem;
				margin: 0 15%;
			}
			h5{
				color: #fff;
				font-size: 0.65rem;
			}
		}
		.zutuan-info{
			width: 64%;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			h1{
				font-size: 0.8rem;
			}
			h1>em{
				float: right;
				font-size: 0.7rem;
				>span{
					color: #E23736;
				}
			}
			h2{
				color: #999;
				font-size: 0.8rem;
			}
		}
		.activitys-info{
			
			>div{
				overflow: hidden;
				margin-top: 0.25rem;
				>img{
					float: left;
					width: 0.9rem;
					margin-top: 0.1rem;
					margin-right: 0.4rem;
				}
				>p{
					float: left;
					color: #9C9C9C;
					
				}
				>em{
						color: #EBAF3B;
					}
			}
		}
</style>