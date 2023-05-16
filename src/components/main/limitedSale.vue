<script>
 
 import countDown from './countDown.vue';
 import {store} from '../../store'


export default {
    name: 'limitedSale',
    components:{
        countDown,
    },
    data() {
        return{
            store,
        }
    },
    methods:{
    },
}

</script>


<template>

    <section>

        <div id="front-man">

            <div class="container">
                <div class="title">
                    <h1>
                        Start your Human <span>Revolution</span> today
                    </h1>
                    <div>
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of   spring which I enjoy with my whole heart.
                    </div>
                </div>    
            </div>

        </div>

        <div class="container limited d-flex py-3 position-absolute">
            <div class="lim-left lim d-flex justify-content-center flex-wrap">
                <h5 class="title-sale">
                    <span class="sale">Limited Sale:</span> All courses with 55% off
                </h5>
                <form class="email" @submit.prevent="subscribe">
                    <input v-model="this.store.newEmail" type="input" name="email" id="email" placeholder="Enter your E-mail">
                    <button class=" text-uppercase">subscribe</button>
                </form>
            </div>
            <div class="lim-right lim d-flex justify-content-center align-items-center">
                <countDown></countDown>
            </div>
        </div>

        <div class="container d-flex py-5 sign">

            <div class="sec left">
                <h5>
                    Hey there, my name is John Doe. I'm the founder of the Brain Academy.
                </h5>
                <img src="../../assets/images/sign-184x108.jpg" alt="John Doe signature">
            </div>
            <div class="sec right lh-base">
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and fel the charm of existence in this spot, which was created for th bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense od mere tranquil exixtence, that I neglect my talents. When, while thee lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the  impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary . 
            </div>

        </div>

    </section>
    
</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

#front-man{
    background-image: url(../../assets/images/slide-1.jpg);
    background-size: cover;
    height: 35rem;

}

.container{
    width: 70%;

    .title{
        width: 50%;
        margin-left: 25rem;
        padding-top: 12rem;

        h1{
            font-weight: bold;
            font-size: 3rem;


        span{
            color: variables.$buttercup;
        }

        }
    }

    
}

.limited{
    background-color: variables.$buttercup;
    top: 36rem;
    left: 13.5rem;

    .lim{
        width: calc(100% / 2);

        .title-sale{
            font-size: 1.5rem;
        }

        .sale{
            color:white
        }
    }

    input{
        border: none;
        width: 20rem;
        padding: 1.09rem;
        border-radius: 1.5rem;
        margin-top: 0.2rem;
    }
    
    button{
        border: none;
        color: white;
        background-color: rgb(45, 70, 73);
        border-radius: 1.5rem;
        font-size: smaller;
        margin-left: - 3rem;
        padding: 1.3rem;
    }
}

.sign{
    margin-top: 5rem;
}
.left{
    padding-right: 4rem;
    width: 35%;

    img{
        width: 40%;
        margin-left: 5rem;
    }
}
.right{
    width: 65%;
}
</style>