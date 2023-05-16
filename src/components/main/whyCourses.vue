<script>
 
export default {
    name: 'whyCourses',
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

    <section class="container">
        <h2 class="my-5 text-center">Why my Courses?</h2>

        <div class="d-flex flex-wrap mb-5">

            <div class="card d-flex">
                <div class="d-flex">
                    <i class="fa-solid fa-briefcase"></i>
                    <div>
                        <h3>Entrepreneurship</h3>
                        <p>Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posueree ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                    </div>
                </div>
            </div>

            <div class="card d-flex">
                <div class="d-flex">
                    <i class="fa-solid fa-rocket"></i>                
                    <div>
                        <h3>Accelerated learning</h3>
                        <p>Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posueree ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                    </div>
                </div>
            </div>

            <div class="card d-flex">
                <div class="d-flex">
                    <i class="fa-regular fa-thumbs-up"></i>
                    <div>
                        <h3>Productivity</h3>
                        <p>Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posueree ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                    </div>
                </div>
            </div>

            <div class="card d-flex">
                <div class="d-flex">
                    <i class="fa-solid fa-gear"></i>
                    <div>
                        <h3>Life Coaching</h3>
                        <p>Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posueree ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

.container{
    width: 70%;

    .card{
        padding: 1.5rem 1rem;
        border-left: 4px solid variables.$buttercup;
        box-shadow: 4px 4px 4px #b8b7b743;
        width: calc(100% / 2 - 1rem);
        margin: 0.5rem;

        &:hover{
            background-color: variables.$buttercup;
        }

        .fa-solid, .fa-regular{
            font-size: 2.5rem;
            color: variables.$buttercup;
            margin: 0.4rem 0.8rem 0rem 0rem;

        }

        p{
            color: rgb(121, 116, 116);
        }
    }
}

</style>