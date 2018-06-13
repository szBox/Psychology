<template>
	<div class="index4">
		<div class="my-top">
			<div class="img-div" @click="goPath({path:'/index4/ziliao'})">
				<div>
					<img class="" :src="myInfo.headPic" alt="" />
				</div>
				
				
			</div>
			<div class="ov-div">
				<p>{{myInfo.nickName}}</p>
				<img class="" src="../../../assets/img/icon_yu.png" alt="" />
				<span class="">{{myInfo.personSign}}</span>
			</div>
		</div>
		
		
			<ul class="my-list">
				<li @click="goPath({path:'/index4/huati'})">
					<img src="../../../assets/img/icon_wo1.png" alt="" />
					<span>参与话题</span>
					<em>
						<img src="../../../assets/img/icon_next.png"/>
					</em>
				</li>
				<li  @click="goPath({path:'/index4/shoucang'})">
					<img src="../../../assets/img/icon_wo2.png" alt="" />
					<span>收藏文章</span>
					<em>
						<img src="../../../assets/img/icon_next.png"/>
					</em>
				</li>
				<li v-show='roleT'  @click="goPath({path:'/index4/zixunList'})">
					<img src="../../../assets/img/icon_wo3.png" alt="" />
					<span>我的咨询</span>
					<em>
						<img src="../../../assets/img/icon_next.png"/>
					</em>
				</li>
				<li @click="goPath({path:'/index4/shenhe'})">
					<img src="../../../assets/img/icons_1.png" alt="" />
					<span>我的审核</span>
					<em>
						<img src="../../../assets/img/icon_next.png"/>
					</em>
				</li>
				<li @click="goPath({path:'/index4/setting'})">
					<img src="../../../assets/img/icon_wo5.png" alt="" />
					<span>设置</span>
					<em>
						<img src="../../../assets/img/icon_next.png"/>
					</em>
				</li>
			</ul>
		
	</div>
</template>

<script>
	import int from '@/assets/js/interface'
	import ajax from '@/assets/js/ajax'
	
	export default({
		data() {
			return {
				myInfo:'',
				roleT:true,
			}
		},
		mounted() {
			this.getRole();
			var self=this;
			var role=localStorage.getItem('role');
			if(role!='S'){
				self.roleT=false
			}
		},
		methods:{
			goPath(path){
				this.$router.push(path)
			},
			getRole(){
				var self=this;
				var url=int.roleType;
				var role=localStorage.getItem('role');
				var loginId=localStorage.getItem('loginId');
				var params={
					id:loginId,
					type:role,
				}
				 ajax.get_data(url, params, function(d) {
				 	console.log('身份验证',d)
					if(d.code==0){
						self.myInfo=d.data;
					}
				})
			},
		}
	})
</script>

<style scoped>
	.my-top {
	   background: url(../../../assets/img/wode.png);
	   background-size: 100% 100%;
	    text-align: center;
	    position: relative;
	    height: 12rem;
	}

.img-div {
    width: 4.5rem;
    height: 4.5rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 2rem;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
}
.img-div div{
	position: relative;
	height: 4.5rem;
	width:4.5rem;
}
.img-div img {
	position: absolute;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    top: 50%;
   	left: 50%;
   	-webkit-transform: translate(-50%,-50%);
   	-moz-transform: translate(-50%,-50%);
   	-ms-transform: translate(-50%,-50%);
   	-o-transform: translate(-50%,-50%);
   	transform: translate(-50%,-50%);
}

.img-div>p {
    font-size: 0.9rem;
    color: #000;
    font-weight: 600;
   
    margin: 0.75rem auto;
}

.ov-div {
    text-align: center;
    background: #fff;
    background:rgba(255,255,255,0.8);
    /*opacity: 0.5;*/
 	padding: 2rem 0 0;
    position: absolute;
    top: 5rem;
    left: 8%;
     width: 84%;
     border-radius: 0.2rem;
     
}
.ov-div >p{
     	font-size: 0.9rem;
     	color: #333;
     }
.ov-div>img {
    width: 0.8rem; 
}

.ov-div>span {
    display: inline-block;
    line-height: 1rem;
    height: 1rem;
    color: #666;
    font-size: 0.8rem;
    margin: 0.2rem 0 1.5rem;
}

.my-list {
  
   
    /*padding: 5px 0.75rem 1.5rem;*/
}

.my-list li {
    overflow: hidden;
    border-bottom: 1px solid #E4E4E4;
    padding: 0.5rem 0;
}

.my-list li>img {
    width: 1rem;
    float: left;
    margin-left: 1rem;
    margin-right: 0.8rem;
    margin-top: 0.1rem;
}

.my-list li span {
    float: left;
    height: 1.2rem;
    line-height: 1.2rem;
    /*font-size: 0.7rem;*/
}
.my-list li em {
    float: right;
    height: 1.2rem;
    margin-right: 0.75rem;
    line-height: 1.2rem;
    /*font-size: 0.7rem;*/
}
.my-list li em img{
	width: 0.4rem;
}
</style>