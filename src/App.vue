<script >

import headerComp from './components/header/headerComp.vue'
import footerComp from './components/footer/footerComp.vue';

export default{
    name: 'App',
    components:{
        headerComp,
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
  <footerComp></footerComp>


</template>


<style lang="scss" scoped>

</style>
