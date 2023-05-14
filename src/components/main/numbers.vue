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
        <div>
            <div>
                <div>
                    <i class="fa-solid fa-user-group"></i> 
                </div>
                <div>
                    <span>3195</span>
                    <span>Online Learner</span>
                </div>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-film"></i> 
                </div>
                <div>
                    <span>23</span>
                    <span>Video Courses</span>
                </div>
            </div>
            <div>
                <div>
                    <i class="fa-regular fa-images"></i> 
                </div>
                <div>
                    <span>437</span>
                    <span>Slider & Images</span>
                </div>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-thumbs-up"></i> 
                </div>
                <div>
                    <span>1440</span>
                    <span>Excellent Reviews</span>
                </div>
            </div>

        </div>
    </section>

</template>


<style lang="scss" scoped>

@use '../../style/partials/variables';

#numbers{
    background-image: url(../../assets/images/counter-1919x1101.jpg);
    background-size: contain;
}

</style>