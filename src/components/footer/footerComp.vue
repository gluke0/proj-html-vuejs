<script>
 
export default {
    name: 'footerComp',
    components:{
    },
    data() {
        return{
            listO: [
                {
                    menu: 'Blog',
                },
                {
                    menu: 'Home',
                },
                {
                    menu: 'Shortcodes',
                },
            ],
            listT: [
                {   
                    menu: 'Courses',
                },
                {
                    menu: 'Membership A...',
                },
                {
                    menu: 'Typography',
                },

            ]
        }
    },
    methods:{
    },
}

</script>


<template>

    <footer class="py-5">
        <div class="container d-flex justify-content-between">
            <div class="card">
                <h4 class="text-uppercase">about</h4>
                <div class="fs-6">Masterstudy is Education WordPress theme featured by Learning Management System (LSM) for online education.</div>
                <div>Developed by Stylemix Themes.</div>
                <div class="mt-2">
                    <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter mx-3"></i></a>
                    <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div class="card">
                <h4 class="text-uppercase">contact</h4>
                <div class="mb-3">USA, California 20, First Avenue, California</div>
                <div> Tel.: +1 212  458 300 32</div>
                <div>Fax.: +1 212 375 24 14</div>
                <a class="mt-3" href="malito:info@masterstudy.com">info@masterstudy.com</a>
            </div>
            <div class="card">
                <h4 class="text-uppercase">pages</h4>
                <div class="d-flex">
                    <ul class="lh-lg ps-3">
                        <li v-for="item in listO">
                        <a href="#" >{{ item.menu }}</a> 
                        </li>
                    </ul>
                    <ul class="lh-lg">
                        <li v-for="item in listT">
                        <a href="#" >{{ item.menu }}</a> 
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card">
                <h4 class="text-uppercase">blog</h4>
                <div class="d-flex">
                    <img src="../../assets/images/photo-1517520287167-4bbf64a00d66-75x75.jpeg" alt="">
                    <div class="ms-3 d-flex flex-wrap important">
                        Our main target is to "Developing Yourself as a Leader"
                        <span>- August 9, 2018</span>
                    </div>
                </div>
                <div class="mt-3 d-flex">
                    <img src="../../assets/images/photo-1490376840453-5f616fbebe5b-75x75.jpeg" alt="">
                    <div class="ms-3 d-flex flex-wrap important">
                        Those Other College Expenses You Aren't Thinking About
                        <span>- June 3, 2015</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>


<style lang="scss" scoped>

@use '../../style/main.scss';
@use '../../style/partials/variables';

footer{
    background-color: variables.$buttercup;

    .container{
        width: 70%;
        color: rgb(121, 116, 116);
        
        .card{
            width: calc(100% / 4);
            
            h4{
                margin-bottom: 2rem;
                color: black;
            }

            .fa-brands{
                color: black;
            }

            .important{
                color: black;
            }

            span{
                font-size: x-small;
                margin-top: 0.5rem;
                color: rgb(121, 116, 116);
            }

            a{
                text-decoration: none;
            }

        }

    }
}



</style>