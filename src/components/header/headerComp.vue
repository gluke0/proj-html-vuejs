<script>
 
export default {
    name: 'headerApp',
    components:{
    },
    data() {
        return{
            navbar: [
                {
                    menu: 'Courses',
                    new: false,
                    active: false,
                },
                {
                    menu: 'Courses Formats',
                    new: false,
                    active: false,
                },
                {
                    menu: 'Add Course',
                    new: true,
                    active: false,
                },
                {
                    menu: 'Pages',
                    new: false,
                    active: false,
                },
                {
                    menu: 'Demos',
                    new: false,
                    active: true,
                },
            ]
        }
    },
    methods:{
    },
}

</script>


<template>

    <div class="container d-flex justify-content-between align-items-center">
        <div class="d-flex self-start logo">
            <img class="py-4" src="../../assets/images/MasterStudy-1.svg" alt="">
        </div>

        <div id="navbar">
            <ul class="d-flex align-items-center">
                <li v-for="item in navbar">
                    <a href="#" :class="{active: item.active == true}">{{ item.menu }}</a> 
                    <span class="label" v-if="item.new">NEW</span>
                </li>
            </ul>
        </div>

        <div class="social">
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
        </div>
    </div>

</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

.container{
    width: 70%!important;
}

.logo{
    padding-right: 4rem;
}

ul{
    padding-top: 1rem;

    li{
    margin-left: 1.8rem;
    list-style: none;

        a{
            border-bottom: 0.5rem solid transparent;
            display: inline-block;
            line-height: 2rem;
            text-decoration: none;
            &.active,
            &:hover{
                border-bottom: 0.3rem solid variables.$buttercup;
            }
        }
    }

    .label{
        background-color: red;
        font-size: xx-small;
        color: white;
        padding: 0.1rem;
        position: absolute;
        top: 1.2rem;
        right: 32rem;
    }

}

.social{
    .fa-brands{
        margin-left: 0.8rem;
    }
}

</style>