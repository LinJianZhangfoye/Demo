<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口地方 -->
    <router-view></router-view>
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer>  -->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>
<script >
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default {
    mounted() {
        this.$store.dispatch('getCategoryList')
    },
    data() {
        return {}
    },

    components: {
        Header,
        Footer
    },

}
</script>

<style>
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    }
</style>