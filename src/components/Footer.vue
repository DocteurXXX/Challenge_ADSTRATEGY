<template>
    <div class="footer">
        <div class="">
            <div class="row">

                <div class="col-lg-4 col-md-12 position ">
                        <ul>
                            <li><router-link class="link" to="/">Accueil</router-link></li>
                            <li><router-link class="link" to="/annonce">Annonces</router-link></li>
                            <li><router-link class="link" to="/contact">Contact</router-link></li>
                        </ul>
                </div>

                <div class="col-lg-5 col-md-12 position reseau">
                        <img class="logoReseau" src="./../assets/facebook.svg" alt="facebook">
                        <img class="logoReseau" src="./../assets/instagram.svg" alt="instagram">
                        <img class="logoReseau" src="./../assets/youtube.svg" alt="youtube">
                        <img class="logoReseau" src="./../assets/twitter.svg" alt="twitter">
                </div>

                <div class="col-lg-3 col-md-12  position logoplace footerLogo">
                        <a href="/"><img src="./../assets/Monkey.png" alt="footerLogo" class="footerLogoImg"/></a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

    .footer
    {
        background-color: var(--main-color);
        padding-top: 2%;
        position: relative;
    }

    ul
    {
        list-style:none;
        display: inline-block;
        /*margin-top: 7%;*/
    }

    li
    {
        /*margin: 5% 5% 10% 80%;*/
    }

    a
    {
        color: var(--third-color) !important;

    }


    .link
    {
        font-size: 4vh;
        /*margin-top: 30px;*/
    }

    .footerLogo
    {
        overflow: hidden;
        /*margin-bottom: 2vh;*/
    }

    .footerLogoImg
    {
        width: 150px;
    }

    .footerLogo2
    {
        height: 80px;
    }

    .logoReseau
    {
        height: 80px;
    }

    .reseau
    {
        display: inline-block;
        /*margin-top: 10%;*/
    }

    .position
    {
        text-align: center;
    }



    /*@media only screen and (max-width: 768px) {*/
    /*    li*/
    /*    {*/
    /*        margin: 0 0 0 0;*/
    /*        text-align: center;*/
    /*    }*/

    /*    .reseau*/
    /*    {*/
    /*        display: inline-block;*/
    /*        margin-top: 0;*/
    /*    }*/

    /*    .logoReseau*/
    /*    {*/
    /*        height: 200px;*/
    /*    }*/

    /*    .logoReseau*/
    /*    {*/
    /*        height: 5rem;*/
    /*    }*/

    /*    .footerLogoImg*/
    /*    {*/
    /*        margin-right: 0;*/
    /*        height: 120px;*/
    /*    }*/

    /*    .page-footer*/
    /*    {*/
    /*        margin: 0 1rem 0 1rem;*/
    /*    }*/
    /*}*/



</style>