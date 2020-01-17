<template>
    <div class="row footer">
        <footer class="row page-footer font-small mdb-color">

            <div class="row text-center text-md-left ">
                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-12 mx-auto mt-3">
                    <Grid container>
                        <ul>
                            <li><router-link class="link" to="/">Accueil</router-link></li>
                            <li><router-link class="link" to="/annonce">Annonces</router-link></li>
                            <li><router-link class="link" to="/contact">Contact</router-link></li>
                        </ul>
                    </Grid>
                </div>

                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-12 mx-auto mt-3">
                    <Grid container>
                        <ul>
                            <li><router-link  to="/profil"><img class="footerLogo2" src="./../assets/Profil.png"/></router-link></li>
                            <li><router-link  to="/panier"><img class="footerLogo2" src="./../assets/Panier.png"/></router-link></li>
                        </ul>
                    </Grid>
                </div>


                <div class="col-md-4 col-lg-4 col-xl-4 col-12 col-sm-12 reseauparent">
                    <Grid container class="reseau">
                        <img class="logoReseau" src="./../assets/facebook.svg" alt="facebook">
                        <img class="logoReseau" src="./../assets/instagram.svg" alt="instagram">
                        <img class="logoReseau" src="./../assets/youtube.svg" alt="youtube">
                        <img class="logoReseau" src="./../assets/twitter.svg" alt="twitter">
                    </Grid>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 logoplace">
                    <div class='footerLogo'>
                        <a href="/"><img src="./../assets/Monkey.png" alt="footerLogo" class="footerLogoImg"/></a>
                    </div>
                </div>
            </div>

        </footer>
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
        z-index: 10;
        position: relative;
        width: 100vw;
    }

    ul
    {
        list-style:none;
        display: inline-block;
        margin-top: 7%;
    }

    li
    {
        margin: 5% 5% 10% 80%;
    }

    a
    {
        color: var(--third-color) !important;

    }


    .link
    {
        font-size: 4vh;
        margin-top: 30px;
    }

    .footerLogo
    {
        overflow: hidden;
        margin-bottom: 2vh;
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
        margin-top: 10%;
    }

    .reseauparent
    {
        text-align: center;
    }



    @media only screen and (max-width: 768px) {
        li
        {
            margin: 0 0 0 0;
            text-align: center;
        }

        .reseau
        {
            display: inline-block;
            margin-top: 0;
        }

        .logoReseau
        {
            height: 200px;
        }

        .logoReseau
        {
            height: 5rem;
        }

        .footerLogoImg
        {
            margin-right: 0;
            height: 120px;
        }

        .page-footer
        {
            margin: 0 1rem 0 1rem;
        }
    }



</style>