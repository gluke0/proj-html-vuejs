<script>
 
import {store} from '../../store'

export default {
    name: 'newCourses',
    components:{
    },
    data() {
        return{
            store
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
                <div class="card" v-for="(elem, index) in store.courses">
                    <div>
                        <img :src="`../src/assets/images/${elem.img}`" alt="Course">
                        <div class="position-absolute text-uppercase special">{{elem.special}}</div>
                        <div class="position-absolute text-center price">{{ elem.price }}</div>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap p-1">
                        <h5 class="mt-4 text-center">{{ elem.name }}</h5>
                        <span class="w-100 text-center my-3 sub"><small>{{ elem.genre }}</small></span>
                        <div class="py-2 more-info">
                            <span><i class="fa-solid fa-signal mx-2"></i> {{ elem.lvl }}</span>
                            <span><i class="fa-solid fa-list-ul mx-2"></i>{{ elem.lect }}</span>
                            <span><i class="fa-regular fa-clock mx-2"></i>{{ elem.time }}</span>
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
                height: 50%;
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

        &:hover{
            background-color: rgb(210, 167, 63)
        }
    }
}

</style>