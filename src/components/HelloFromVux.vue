<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1 @click="c()">1 </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import footBar from '@/components/common/footBar'
import { Group, Cell  } from 'vux'

export default {
  components: {
    Group,
    Cell,
    footBar
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods:{
  	c(){
  		this.$vux.toast.show({
				 type:'text',
				 text: 'yes',
				 position:'bottom'
				})
  		this.$router.push({ path: "/footBar" });
  	}
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
