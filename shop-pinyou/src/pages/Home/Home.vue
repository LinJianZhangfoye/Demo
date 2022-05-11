<template>
    <div class="">
        <NavType/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(list,index) in floorList" :key="index" :list="list"></Floor>
    </div>
</template>

<script >
import {mapState} from 'vuex'
import ListContainer from './ListContainer/ListContainer.vue'
import Like from './Like/Like.vue'
import Recommend from './Recommend/Recommend.vue'
import Rank from './Rank/Rank.vue'
import Floor from './Floor/Floor.vue'
export default {
    name: "Home",
    mounted() {
        //派发action，获取floor组件信息
        this.$store.dispatch('getFloorList')
        //获取用户信息
        this.$store.dispatch('getUserInfo')
    },
    computed:{
        ...mapState({
            floorList:(state) => state.home.floorList
        })
    },
    data() {
        return {}
    },
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
    },
    methods: {}
}
</script>

<style lang="less" scoped>

</style>
