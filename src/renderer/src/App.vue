<script setup>
import { ref, watch } from 'vue'
const webviewRef = ref()

watch(webviewRef.value, () => {
  console.log(webviewRef.value)
})
</script>

<template>
  <!-- <iframe
    src="https://www.bing.com/"
    width="100%"
    height="1200"
    frameborder="0"
    allowfullscreen
    sandbox
  /> -->
  <!-- <webview ref="webviewRef" class="webview" src="https://www.bing.com/" /> -->
  <webview allowpopups class="webview" src="https://www.bing.com/" />
  <!-- <webview ref="webview" class="webview" src="about:blank" ></webview> -->
</template>

<style lang="less">
@import './assets/css/styles.less';
webview {
  height: 100vh;
  // height: 50vh;
}
</style>
