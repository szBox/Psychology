<template>
	<div class="speakList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>话题列表</h1>
			<em @click="goWrite()">发布</em>
		</header>

		<scroller style="padding-top: 2.75rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li  @click="goPath(index)" v-for="(item, index) in items">
					<div class="lf zutuan-img">
						<img  class="imgz"src="../../../../assets/img/x7.png" alt="" />
						
					</div>
					<div class="lf zutuan-info">
						<h2 class="ellipsis">不好玩回去睡觉了,附上我睡觉的照片,不好玩回去睡觉了</h2>
						<div>
							<p>2018-08-17 08:00</p>
							<h5>
								<img src="../../../../assets/img/pinglun.png"/>
								<span>20</span>
							</h5>
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
		created(){
			this.bottom = 3; //一页展示10个
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
		background: #f4f4f4;
	}
	.activitys-ul li{
			padding: 0.5rem 0 0.5rem 0.5rem;
		}
		.zutuan-img{
			
			border-radius: 0.4rem 0 0 0.4rem;
			text-align: center;
			width: 5.5rem;
			height: 4.5rem;
		}
		.zutuan-info{
			width: 64%;
			margin-left: 4%;
			
			padding:0.1rem 0.5rem  0.5rem 0;

			>h2{
				-webkit-line-clamp: 2;
				font-size: 0.8rem;
				
			}
			
			>div{
				overflow: hidden;
				line-height: 1.5rem;
				>p{
					float: left;
					font-size: 0.65rem;
					color: #A1A1A1;
					margin: 0.5rem 0;
				}
				>h5{
					float: right;
					margin: 0.5rem 0;
					img{
						width: 0.7rem;
					}
					span{
						color: #999;
					}
				}
			}
		}
		

</style>