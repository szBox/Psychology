<template>
	<div class="activitysNav1">

		<scroller style="padding-top: 5.05rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="activitys-ul">
				<li v-for="(item, index) in items" @click="goPath(index,item.play,item.type)">
					<div class="lf zutuan-img">
						<img :src="item.img" alt="" />
						<h1>{{item.name}}</h1>
						<p :class="typeClass">{{item.type}}</p>
						<h5>{{item.timelast}}</h5>
					</div>
					<div class="lf zutuan-info">
						<h1>
						<span>{{item.play}}</span>
						<em>
							<span>
								<i>10</i>人/
							</span>
							<i>20</i>人
						</em>
					
					</h1>
					<h2>我想组织一次秋游,希望大家积极来参与</h2>
					<div class="activitys-info">
						<div>
							<img src="../../../../assets/img/icon_time.png" alt="" />
							<p>
								<span>{{item.times}}</span>
							</p>
						</div>
						<div>
							<img src="../../../../assets/img/icon_money.png" alt="" />
							<em>{{item.money}}</em>
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
				typeClass:'',
				items: [],
				allList:[
					{name:'王大力',play:'植树活动',bb:"我想组织一次秋游,希望大家积极来参与",
					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'20元',img:'src/assets/img/teacher2.png',
					type:'我发起'},
					{name:'杀马特',play:'聚餐活动',bb:"我想组织一次聚餐,希望大家积极来参与",
					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'120元',img:'src/assets/img/ren2.png',
					type:'已参与'},
					{name:'伏地魔',play:'亲子活动',bb:"我想组织一次亲子活动,希望大家积极来参与",
					times:"08-16 08:00~08-18",timelast:"40分钟前",money:'10元',img:'src/assets/img/ren3.png',
					type:'未参与'},
					{name:'王大力',play:'植树活动',bb:"我想组织一次秋游,希望大家积极来参与",
					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'20元',img:'src/assets/img/ren1.png',
					type:'已审核'},
					{name:'杀马特',play:'聚餐活动',bb:"我想组织一次聚餐,希望大家积极来参与",
					times:"08-16 08:00~08-18",timelast:"30分钟前",money:'120元',img:'src/assets/img/ren2.png',
					type:'未审核'},
				
					],
				/*最后的数组*/
				page: 1,
				allPage:3,
				/*当前页码*/
			}
		},
		created() {
			for(let i = 0; i < this.allList.length; i++) {
				if(this.allList[i].type=='我发起'){
//					this.typeClass=
				}
				this.items.push(this.allList[i]);
			}

			console.log(this.items);
		},
		methods: {
			goPath(i,play,type) {
				this.$router.push({
					path: "/activitysList/activitysInfo/" + i+ '?play='+play+ '&playType='+type
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
				this.page++;
				done(true);
				console.log('拉啦啦')
				if(this.page == this.pageAll) {
					return
				}
				
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
		.zutuan-img p.types-1{
			background: #FFA200;
		}
		.zutuan-img p.types-2{
			background: #FFA200;
		}
		.zutuan-img p.types-3{
			background: #FFA200;
		}
		.zutuan-img p.types-4{
			background: #FFA200;
		}
		.zutuan-img p.types-5{
			background: #FFA200;
		}
		.zutuan-img p.types-6{
			background: #FFA200;
		}
</style>