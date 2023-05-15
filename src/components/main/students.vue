<script>
 
export default {
    name: 'students',
    components:{
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

    <section class="container text-center">
        <h2 class="mb-4">What Students Say</h2>
        <div class="testimony mb-2">
            <i class="fa-solid fa-arrow-left"></i>
            <img src="../../assets/images/1-100x100.jpg" alt="Student 1">
            <img class="test-middle" src="../../assets/images/2-100x100.jpg" alt="Student 2">
            <img src="../../assets/images/4-100x100.jpg" alt="Student 4">
            <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="mb-4">
            <h4>Paints of the Future</h4>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <div class="lh-base">
            "The response to your Masterstudy has been really overwhelming! Those who partecipated in the workshop are spreading the word here on campus and the "buzz" is on. The VP of instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornestone of our success program."
        </div>
    </section>
    
</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

.container{
    width: 50%;
    margin-top: 5rem;
    margin-bottom: 5rem;

    .testimony img{
        border-radius: 50%;
    }

    .test-middle{
        width: 9%;
        margin: 0 0.5rem ;
    }
    .testimony img:not(.test-middle){
        width: 7%;
    }
    .fa-arrow-left{
        margin-right: 7rem;
    }

    .fa-arrow-right{
        margin-left: 7rem;
    }

    .fa-star{
        color: variables.$buttercup
    }
}

</style>