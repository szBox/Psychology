<template>
	<div class="loading">
		<div class="spinner">
		  <div class="bounce1"></div>
		  <div class="bounce2"></div>
		  <div class="bounce3"></div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
.loading {
	z-index: 499;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
 .spinner{
 	position: absolute;
 	top: 50%;
 	left: 50%;
 	-webkit-transform: translate(-50%,-50%);
 	-moz-transform: translate(-50%,-50%);
 	-ms-transform: translate(-50%,-50%);
 	-o-transform: translate(-50%,-50%);
 	transform: translate(-50%,-50%);
 }
.spinner > div {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #55CFFD;
 
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
 
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>