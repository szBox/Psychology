<template>
  <div class="nav">
    <ul class="swiper-wrapper tabs">
      <router-link class="swiper-slide" v-for="(i,index) in localList" :id=" index == cur-1 ? 'navCur':'' " tag="li" :to=" '/index1/'+(index+1)+'?gid='+i.id " :key="index" replace>
        {{ i.name }}
      </router-link>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery'
  import Swiper from 'swiper'

    export default({
      name: 'nav',
      props:{
        navCur:{
          type:String,
          default:''
        },
        list:{
          type:Array,
          default:[{name:' 1'}]
        }
      },
      data(){
        return {
          navSwiper:''
        }
      },
      methods:{
        navSlider(){
          let vm = this
          vm.navSwiper = new Swiper(".nav",{
            freeMode : true,
//            initialSlide:vm.navCur,
            slidesPerView : 'auto'
          });
        },
      },
      computed:{
        cur(){
          return this.navCur
        },
        localList(){
          let defaultRes = [
            { name:'一二三',id:'1' },
            { name:'一二三',id:'2' },
            { name:'一二三',id:'3' },
            { name:'一二三',id:'4' },
            { name:'一二三',id:'5' },
            { name:'一二三',id:'6' },
            { name:'一二三',id:'7' },
            { name:'一二三',id:'8' },
            { name:'一二三',id:'9' },
            { name:'一二三',id:'6' }
          ]
          return this.list
        }
      },
      mounted(){
        let vm = this

        setTimeout(function(){
          vm.navSlider()
        },1000)
      },
      watch:{
        '$route'(to,from){
            let vm = this
            vm.navSwiper.slideTo(to.params.index - 1,300)
        }
      }
    })
</script>
<style>
  .nav{
    background: #fff none repeat scroll 0 0;
    color: #999;
    font-size: 0.8rem;
    width: 100%;
    border-bottom:1px solid #E5E5E5;
    position:relative;
  }
  .nav ul{
    display:flex;
    width:100%;
    position:relative;
  }
  .nav ul li{
    width:25%;
    /*height: 3rem;*/
    flex-shrink:0;
    text-align:center;
    padding: 0.5rem 0;
  }
  /*.nav ul li:nth-child(1){
  	background: url(../../assets/img/indexNav1.png);
	background-size: 100% 100%;
  }
  .nav ul li:nth-child(2){
  	background: url(../../assets/img/indexNav2.png);
	background-size: 100% 100%;
  }
  .nav ul li:nth-child(3){
  	background: url(../../assets/img/indexNav3.png);
	background-size: 100% 100%;
  }
  .nav ul li:nth-child(4){
  	background: url(../../assets/img/indexNav4.png);
	background-size: 100% 100%;
  }
  .nav ul li:nth-child(5){
  	background: url(../../assets/img/indexNav5.png);
	background-size: 100% 100%;
  }*/
  .nav ul li#navCur{
    border-bottom:2px solid #129563;
    color:red;
  }
  

</style>
