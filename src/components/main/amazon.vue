<script>
 
export default {
    name: 'amazon',
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

    <section id="amazon">
        <div class="container d-flex pt-5">
            <div class="text-center side px-4 mt-4">
                <h2 class="mb-4"> Get My Exclusive Investing Book just for $19.50 </h2>
                <span class="text"> Vestibulum imentum eu urna vel cursus. Aenean vehicula quam quam, viate pellentesque urna elementum cursus.</span>
                <div class="mt-4">
                    <img class="amazon" src="../../assets/images/amazon.png" alt="Order On Amazon Button">
                </div>
            </div>
            <div class="side">
                <img class="book" src="../../assets/images/book.png" alt="Book Template Image">
            </div>
        </div>
        <div id="sidebar" class="lh-lg text-center">
            <i class="fa-solid fa-desktop"></i>
            <i class="fa-solid fa-life-ring"></i>
            <i class="fa-solid fa-wrench"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-mobile-screen-button"></i>
        </div>


    </section>
    
</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

#amazon{
    background-image: url(../../assets/images/slider_1-1917x607-1914x606.jpg);
    background-size: cover;
    width: 100%;
}

.container{
    width: 70%;

    .side{
        width: calc(100% / 2);
    }
    h2{
        color: variables.$buttercup;
    }

    .text{
        font-style: italic;
        font-size: 1.3rem;
        color: white;
    }

    .amazon{
        width: 40%;
    }

    .book{
        width: 80%;
    }

}

#sidebar{
    background-color: white;
    height: fit-content;
    width: 2rem;
    position: fixed;
    right: 0;
    top: 50%;
    bottom: 50%;
    z-index: 1;


    .fa-solid{
        width: 100%;
        font-size: 1rem;
    }
}
   

</style>