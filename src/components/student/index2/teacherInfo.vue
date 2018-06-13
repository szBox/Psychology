<template>
	<div class="teacherInfo">
		<header class="headerT">
			<div @click="back()"><img src="../../../assets/img/goback2.png" alt="" /></div>
			<h1>教师信息</h1>
		</header>
		<div class="top-bg">
			<div class="teacher-box">
				<div class="teacher-img">
					<img :src="teacherInfo.headPic" alt="" />
				</div>
				<div class="teacher-info">
					<h1>{{teacherInfo.name}}</h1>
					<div class="icon-position">
						<span>{{teacherInfo.identity}}</span>
						<p @click="zan()" v-if='teacherInfo.selfPraise==0'>
							<img src="../../../assets/img/zan0.png" alt="" />
							<em>{{teacherInfo.praiseCount}}</em>
						</p>
						<p @click="zanQx()" v-else>
							<img src="../../../assets/img/zan2.png" alt="" />
							<em>{{teacherInfo.praiseCount}}</em>
						</p>

					</div>
					<h4>{{teacherInfo.phone}}</h4>
				</div>
				<div class="teacher-like">
					<div>
						<h1>个性签名</h1>
						<p>{{teacherInfo.personSign}}</p>
					</div>
					<div>
						<h1>擅长领域</h1>
						<div class="teacher-skill" v-for="(skill,index) in skillArr">
							<p>{{skill}}</p>
						</div>
						
					</div>
				</div>
			</div>
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
				teacherInfo:'',
				skillArr:[],
				zanNum:'',
			}
		},
		mounted() {
			var self=this;
			self.getInfo()
		},

		methods: {
			
			back() {
				this.$router.go(-1);
			},
			zan(){
				var self=this;
				var url=int.TeacherZan+self.$route.params.id;
				var params={

				};
				ajax.post_data(url,params,function(d){
					console.log('点赞',d)
					self.zanNum+=1
					self.getInfo();
				})
			},
			zanQx(){
				var self=this;
				var url=int.TeacherZanQx+self.$route.params.id;
				var params={

				};
				ajax.delete_data(url,params,function(d){
					console.log('取消点赞',d)
					self.zanNum-=1
					self.getInfo();
				})
			},
			getInfo(){
				var self=this;
				var url=int.navTeacherInfo+self.$route.params.id;
				var params={
				};
				ajax.get_data(url,params,function(d){
					console.log('老师信息',d)
					if(d.code==0){
						self.teacherInfo=d.data;
						self.skillArr=d.data.skill.split(',');
						self.zanNum=d.data.praiseCount;
					}
				})
			},
		}
	})
</script>

<style scoped lang="less">
	.headerT {
		z-index: 999;
		/*border-bottom: 1px solid #C9C9C9;*/
		width: 100%;
		position: relative;
		>div {
			padding-left: 0.5rem;
			width: 1.8rem;
			height: 100%;
			position: absolute;
			top: 0%;
			line-height: 2.5rem;
			>img {
				width: 0.6rem;
			}
		}
		>h1 {
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			font-size: 0.8rem;
			color: #333;
		}
	}
	
	.top-bg {
		height: 10rem;
		width: 100%;
		background: url(../../../assets/img/bg1.png);
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
	}
	
	.teacher-box {
		height: 21rem;
		/*margin: 7rem 10%;*/
		margin: 6.5rem auto 2rem;
		width: 90%;
		background: url(../../../assets/img/bg2.png);
		background-size: cover;
		position: relative;
	}
	
	.teacher-img {
		>img {
			width: 4.5rem;
			height: 4.5rem;
			border-radius: 50%;
		}
		position: absolute;
		top: -2.5rem;
		left: 50%;
		-webkit-transform: translateX(-50%);
		-moz-transform: translateX(-50%);
		-ms-transform: translateX(-50%);
		-o-transform: translateX(-50%);
		transform: translateX(-50%);
		background: #fff;
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		line-height: 4.75rem;
		text-align: center;
	}
	
	.teacher-info {
		width: 9rem;
		margin: 0 auto;
		padding-top: 2.5rem;
		>h1 {
			text-align: center;
			font-size: 0.9rem;
			color: #333;
			margin: 0.2rem 0;
		}
		>div.icon-position {
			
			text-align: center;
			width: 6rem;
			height: 1.5rem;
			margin: 0 auto;
			/*overflow: hidden;*/
			>span{
				float: left;
				margin-left: 1rem;
			}
			>p{
				position: relative;
				float: right;
				>img {
				width: 1rem;
				margin-left: 0.5rem;
				vertical-align: unset;
				}
				>em {
					position: absolute;
					top: -0.5rem;
					right: -1.2rem;
					    min-width: 1.4rem;
					color: #fff;
					font-size: 0.6rem;
					background: #F06262;
					padding: 0 0.2rem;
					border-radius: 0.3rem;
				}
			}
	
			
		}
		>h4 {
			text-align: center;
			font-size: 0.75rem;
			margin-top: 0.2rem;
		}
	}
	
	.teacher-like {
		margin-top: 3.5rem;
		padding: 0 1.5rem;
		>div {
			border-bottom: 1px solid #F8F8F8;
			padding-bottom: 0.75rem;
			overflow: hidden;
			>p {
				color: #6B6B6B;
			}
			
			>div {
				float: left;
				margin-right: 0.5rem;
				
				width: 4rem;
				height: 1.5rem;
				line-height: 1.5rem;
				padding-left: 0.3rem;
				background-size: 100% 100%;
				color: #fff;
				
			}
				
		}
		>div:last-child {
			border: none;
		}
		h1 {
			font-size: 0.8rem;
			margin: 0.5rem 0;
		}
	}
	.teacher-skill:nth-child(3n-2){
		background: url(../../../assets/img/qian1.png);
		background-size: 100% 100%;
	}
	.teacher-skill:nth-child(3n-1){
		background: url(../../../assets/img/qian2.png);
		background-size: 100% 100%;
	}
	.teacher-skill:nth-child(3n){
		background: url(../../../assets/img/qian3.png);
		background-size: 100% 100%;
	}
</style>