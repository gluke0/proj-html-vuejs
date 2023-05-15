<script>
 
export default {
    name: 'numbers',
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

    <section id="numbers">
        <div class="container d-flex justify-content-between">
            <div class="d-flex">
                <div>
                    <i class="fa-solid fa-user-group"></i> 
                </div>
                <div class="d-flex flex-wrap ms-3">
                    <span class="num">3195</span>
                    <span class="w-100">Online Learner</span>
                </div>
            </div>
            <div class="d-flex">
                <div>
                    <i class="fa-solid fa-film"></i> 
                </div>
                <div class="d-flex flex-wrap ms-3">
                    <span class="num">23</span>
                    <span class="w-100">Video Courses</span>
                </div>
            </div>
            <div class="d-flex">
                <div>
                    <i class="fa-regular fa-images"></i> 
                </div>
                <div class="d-flex flex-wrap ms-3">
                    <span class="num">437</span>
                    <span class="w-100">Slider & Images</span>
                </div>
            </div>
            <div class="d-flex">
                <div>
                    <i class="fa-solid fa-thumbs-up"></i> 
                </div>
                <div class="d-flex flex-wrap ms-3">
                    <span class="num">1440</span>
                    <span class="w-100">Excellent Reviews</span>
                </div>
            </div>

        </div>
    </section>

</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

#numbers{
    background-image: url(../../assets/images/counter-1919x1101.jpg);
    background-size: cover;

    .container{
        width: 70%;
        padding: 12rem 0rem;

        .fa-solid, .fa-regular{
            font-size: 3rem;
            color: white;
        }
        .num{
            font-size: x-large;
            color: variables.$buttercup;
        }

        .w-100{
            color: white;
        }
    }
}

</style>