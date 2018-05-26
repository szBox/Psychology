<template>
	<div class="index4">
		<div class="my-top">
			<div class="img-div" @click="goPath({path:'/index4/ziliao'})">
				<div>
					<img class="" src="../../../assets/img/student.png" alt="" />
				</div>
				
				
			</div>
			<div class="ov-div">
				<p>安小静</p>
				<img class="" src="../../../assets/img/icon_yu.png" alt="" />
				<span class="">一圈一点,胜似晚语千言</span>
			</div>
		</div>
		
		
			<ul class="my-list">
				<li>
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
	import setting from '@/components/student/index4/setting/setting'		//我的 > 设置
	import ziliao from '@/components/student/index4/ziliao/ziliao'		//我的  >详细资料 
	import zixunList from '@/components/student/index4/zixun/zixunList'		//我的  >我的咨询 
	import shoucang from '@/components/student/index4/shoucang/shoucangList'		//我的  >我的收藏
	
	export default({
		methods:{
			goPath(path){
				this.$router.push(path)
			}
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
    opacity: 0.5;
 	padding: 2rem 0 0;
    position: absolute;
    top: 5rem;
    left: 8%;
     width: 84%;
     
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