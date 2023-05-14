<script>
 
export default {
    name: 'limitedSale',
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

    <section>

        <div>

            <div id="front-man">
                <h1>
                    Start your Human Revolution today
                </h1>
                <div>
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </div>
            </div>

        </div>

        <div>
            <div>
                <div>
                    Limited Sale: All courses with 55% off
                </div>
                <div>
                    <input type="input" name="email" id="email" placeholder="Enter your E-mail">
                    <button>subscribe</button>
                </div>
            </div>
            <div>
                COUNT DOWN
            </div>
        </div>

        <div>

            <div>
                <span>
                    Hey there, my name is John Doe. I'm the founder of the Brain Academy.
                </span>
                <img src="../../assets/images/sign-184x108.jpg" alt="John Doe signature">
            </div>
            <div>
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and fel the charm of existence in this spot, which was created for th bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense od mere tranquil exixtence, that I neglect my talents. When, while thee lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the  impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary . 
            </div>

        </div>

    </section>
    
</template>


<style lang="scss" scoped>

@use '../../style/partials/variables';

#front-man{
    background-image: url(../../assets/images/slide-1.jpg);
    background-size: contain;
    height: 40rem;
}

</style>