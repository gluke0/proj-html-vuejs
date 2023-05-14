<script >

import headerComp from './components/header/headerComp.vue'
import mainComp from './components/main/mainComp.vue';
import footerComp from './components/footer/footerComp.vue';

export default{
    name: 'App',
    components:{
        headerComp,
        mainComp,
        footerComp,
    },
    data(){
        return{
        }       
    },
    methods: {
    },
}

</script>


<template>

    <headerComp></headerComp>

    <mainComp></mainComp>

    <footerComp></footerComp>


</template>


<style lang="scss" scoped>

</style>
