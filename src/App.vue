<template>
  <div id="app">
    <post></post>
  </div>
</template>

<script>
import SyuhoPost from './components/syuho/Post'

export default {
  name: 'app',
  components: {
    SyuhoPost
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
