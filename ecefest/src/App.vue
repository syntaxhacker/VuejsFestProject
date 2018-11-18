<template>
  <div id="app">
   
     <transition name="fade-down" mode="out-in" appear>
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" src="./global.scss">
</style>
