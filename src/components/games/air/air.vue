<template>
  <div class="all">
    <remote-js src="http://192.168.0.33:8123/static/js/entity.js"></remote-js>
    <remote-js src="http://192.168.0.33:8123/static/js/main.js"></remote-js>
    <remote-js src="http://192.168.0.33:8123/static/js/util.js"></remote-js>

    <div id="parent" style="
        margin: 0 auto;
        width:350px; height:480px;
        background-color:#c3c9c9;
        position: relative;
        overflow:hidden;">
      <div style="
    	position:absolute;
        left:5px;
        top:5px;">积分:<span id="score">0</span></div>
      <button
        style="
    		position:absolute;
        	left:150px;
            top:240px;
            display:block;"
        id="startBtn">
        点击开始
      </button>

    </div>
  </div>
</template>
<script>
  import script from './script'

  export default{
    data(){
      return {

      }
    },
    mounted(){
      let s = setInterval(function(){
        if(Main){
          Main.init();
          Util.g("startBtn").onclick=function(){
            Main.start();
            this.style.display="none";
          }
          clearInterval(s)
        }
      },100)

    },
    methods: {

    },
    components:{
      ...script
    }
  }
</script>
<style scoped>
  .list {
    width: 100%;
    position: relative;
  }

  .list .list-item {
    position: absolute;
    /*left: 200%;*/
    transition:left 3s ease;
  }
</style>
