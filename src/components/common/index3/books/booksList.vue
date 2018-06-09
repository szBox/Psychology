<template>
	<div class="speakList">
		<header class="header">
			<div  @click="back()"><img src="../../../../assets/img/goback.png" alt=""/></div>
			<h1>图书漂流</h1>
			<em @click="goWrite()">发起漂流</em>
		</header>
		<div class="b-content">
			<scroller style="padding-top: 2.8rem;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
			<ul class="speakList-ul">
			<li v-for='(item,index) in allList'>
				<div class="book-left">
					<h1>{{item.nickName}}：<span>《{{item.hasName}}》</span></h1>
					<div class="think-div">
						<h1>想换：<span class="think-book">《{{item.wantName}}》</span></h1>
						<div>
							<p>
								<img src="../../../../assets/img/dz.png" alt="" />
								<span>{{item.contactAddress}}</span>
							</p>
							<p>发布日期：{{item.insertTime | niceDate}}</p>
						</div>
					</div>
				</div>
				
				<div class="think-img">
					<img :src="item.imageUrl" />
				</div>
			</li>
			
		</ul>
		</scroller>
		</div>
		
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	import filter from '@/assets/js/filters'
	export default({
		data() {
			return {
				page:1,
				items:[],
				allList:[],
			}
		},
		mounted() {
			var self=this;
			self.getList()
		},
		filters:{
			...filter
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
			getList(){
				var self=this;
				var url=int.bookList;
				var sid=localStorage.getItem('sid');
				var loginId=localStorage.getItem('loginId');
				var params={
					sid:sid,
					stuId:loginId,
					current:self.page,
					size:10,
				}
				 ajax.post_data(url, params, function(d) {
		//        	_this.$root.eventHub.$emit('Vloading',false)
		            console.log("书籍列表",d);
					if(d.code==0){
						for(let i = 0; i < d.data.records.length; i++) {
							self.allList.push(d.data.records[i]);
						}
					}
					
		       });
			},
			refresh(done) {
				setTimeout(() => {
					console.log('刷新了')
					done()
				}, 1500)
			},
			infinite(done) {
				var self=this;
				self.page++;
				console.log(self.page)
				done(true);
				console.log('拉啦啦')
				if(self.page == self.pageAll) {
//					return
									
				}
				
			}
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