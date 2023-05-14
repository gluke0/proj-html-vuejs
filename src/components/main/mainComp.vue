<script>

import limitedSale from './limitedSale.vue';
import newCourses from './newCourses.vue';
import amazon from './amazon.vue';
import whyCourses from './whyCourses.vue';
import numbers from './numbers.vue';
import students from './students.vue';
 
export default {
    name: 'mainComp',
    components:{
        limitedSale,
        newCourses,
        amazon,
        whyCourses,
        numbers,
        students,
    },
    data() {
        return{
        }
    },
    methods:{
    },
}

</script>


<template>

    <main>  
        <limitedSale></limitedSale>
        <newCourses></newCourses>
        <amazon></amazon>
        <whyCourses></whyCourses>
        <numbers></numbers>
        <students></students>
    </main>
    
</template>


<style lang="scss" scoped>

@use '../../style/partials/variables';

</style>