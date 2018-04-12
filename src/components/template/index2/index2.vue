
<template>
  <div>
    <nav>ssss</nav>
    <scroller  style="padding-top: 44px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              ref="my_scroller">

      <div v-for="(item, index) in items" @click="onItemClick(index, item)"
          class="row" :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>

<script>
 
  export default {
    components: {
     
    },
    data () {
      return {
        items: [],/*最后的数组*/
      	page: 1,  /*当前页码*/
      }
    },
    mounted() {
       this.bottom = 10;   //一页展示10个
      	for (let i = 1; i <= this.bottom; i++) {
        this.items.push(i + '')
      }
    },
    methods: {
      refresh(done) {
        setTimeout(() => {
         
          done()
        }, 1500)
      },
      infinite(done) {
      	if(this.page == 1){
      		done(true)
      	}
      	console.log('拉啦啦')
      },
      onItemClick(index, item) {
        console.log(index)
      }
    }
  }
</script>
<style scoped>
	nav{
		background: lightcoral;
		height: 44px;
		line-height: 44px;
		width: 100%;
	    position: relative;
	    z-index: 1000;
	    text-align: center;
	}
	#scrollerBox{
		background: lavender;
	}
	#scrollerBox>div{
		/*padding-bottom: 100px;*/
	}
	.row{
		/*height: 60px;
		line-height: 60px;*/
	}
</style>