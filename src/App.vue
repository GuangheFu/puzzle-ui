<template>
  <div id="app-container">
    <div class="view">
      <transition name="fade"
          mode="out-in">
          <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { LoadingPlugin, AlertPlugin, ToastPlugin } from 'vux';
import Vue from 'vue';
Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
export default {
  name: 'App'
}
</script>

<style lang="scss">
//@import "styles/reset.scss";
//@import "../node_modules/flex.css/dist/flex.css";
body{
  margin: 0px;
}
.view {
  height: 100%;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  transform: translateZ(0);
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateZ(0);
}
@font-face {
  font-family: 'iconfont';  /* project id 1281136 */
  src: url('http://at.alicdn.com/t/font_1281136_c1p7otkmk97.eot');
  src: url('http://at.alicdn.com/t/font_1281136_c1p7otkmk97.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_1281136_c1p7otkmk97.woff2') format('woff2'),
  url('http://at.alicdn.com/t/font_1281136_c1p7otkmk97.woff') format('woff'),
  url('http://at.alicdn.com/t/font_1281136_c1p7otkmk97.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_1281136_c1p7otkmk97.svg#iconfont') format('svg');
}
</style>