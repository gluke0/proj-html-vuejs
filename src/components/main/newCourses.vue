<script>
 
export default {
    name: 'newCourses',
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

    <section class="d-flex justify-content-center flex-wrap">
        <div class="container py-5">
            <h2 class="text-center mb-4"> New Courses </h2>
            <div class="d-flex justify-content-between flex-wrap">
                <div class="card">
                    <div>
                        <img src="../../assets/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg" alt="">
                        <div class="position-absolute text-uppercase special">special</div>
                        <div class="position-absolute text-center price">$56</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">How to be a DJ? Make Electronic Music</h5>
                        <span class="w-100 text-center my-3 sub"><small>Electonic</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> Advanced</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>8 Lectures</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <img src="../../assets/images/12345-1-370x200.png" alt="">
                        <div class="position-absolute text-uppercase special">special</div>
                        <div class="position-absolute text-center price">$67</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">Nvidia and EU4 Technologies Practice</h5>
                        <span class="w-100 text-center my-3 sub"><small>Nvidia</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> Advanced</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>8 Lectures</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <img src="../../assets/images/photo-1491897554428-130a60dd4757-370x200.jpeg" alt="">
                        <div class="position-absolute text-uppercase special">special</div>
                        <div class="position-absolute text-center price">$32</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">Fashion Photography from professional</h5>
                        <span class="w-100 text-center my-3 sub"><small>Fashion</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> Advanced</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>6 Lectures</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>8 hours</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <img src="../../assets/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg" alt="">
                        <div></div>
                        <div class="position-absolute text-center price">$88</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">Design Instruments for Communication</h5>
                        <span class="w-100 text-center my-3 sub"><small>Communication</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> Intermediate</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>6 Lectures</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <img src="../../assets/images/cathryn-lavery-67852-unsplash-370x200.jpg" alt="">
                        <div></div>
                        <div class="position-absolute text-center price">$12</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">Make your Concept Right and Beautiful</h5>
                        <span class="w-100 text-center my-3 sub"><small>Art</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> Intermediate</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>6 Lectures</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>6 hours</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div>
                        <img src="../../assets/images/photo-1475452779376-caebfb988090-370x200.jpeg" alt="">
                        <div></div>
                        <div class="position-absolute text-center price">$77</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">Road Bike Manual or How to Be a Champion.</h5>
                        <span class="w-100 text-center my-3 sub"><small>Bicycling</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> Beginner</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>6 Lectures</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>6 hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="px-5 text-uppercase py-3" id="button"><strong>load more</strong></button>
    </section>


</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

section{
    background-color: variables.$lightgray;

    .container{
        width: 70%;
        
        .card{
            width: calc(100% / 3 - 0.7rem);
            background-color: white;
            margin-bottom: 0.7rem;

            img{
                width: 100%;
        
            }

            .special{
                right: 4px;
                top: 4px;
                background-color: variables.$buttercup;
                color: white;
                padding: 0.2rem;
                font-size: x-small;
                z-index: 1;
            }

            .price{   
                top: 0;
                padding-top: 20%;
                color: white;
                font-size: 1.8rem;
                font-weight: bold;
                filter: opacity(0);
                width: 100%;
                height: 58%;
                background-color: rgba(0, 0, 0, 0.4);
                

                &:hover{
                    filter: opacity(1);
                }
            }

            .sub{
                color: gray;
            }

            .more-info{
                border-top: 1px solid variables.$lightgray;
                font-size: smaller;
            }

            .fa-solid, .fa-regular{
                color: variables.$buttercup
            }
        }
    }

    #button{
        margin: 1rem 20rem 5rem 20rem;
        border: none;
        border-radius: 1.6rem;
        background-color: variables.$buttercup;
        color: white;
        font-size: 1.5rem;
    }
}

</style>