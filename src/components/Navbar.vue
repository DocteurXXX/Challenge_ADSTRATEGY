<template>
    <div class=" Navbar">
        <nav class="row navbar navbar-expand-lg navbar-light bg-light">
            <img class="monkeyLogo"
                 src="./../assets/Monkey.png"
                 alt="Logo">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/">Accueil</router-link>
                    <router-link class="nav-link" to="/annonce">Annonces</router-link>
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                    <router-link class="nav-link" to="/profil"><img class="NavLogo" src="./../assets/Profil.png"/></router-link>
                    <router-link class="nav-link" to="/panier"><img class="NavLogo" src="./../assets/Panier.png"/></router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .monkeyLogo
    {
        height: 10vh;
        margin-right: 10vw;
        margin-left: 3vw;
    }

    .NavLogo
    {
        height: 5vh;
    }

    .navbar-nav
    {
        margin: 0;
        width: available;
    }

    .nav-link
    {
        margin-left: 2vw;
        margin-right: 7vw;
        font-size: 4vh;
        float: right;
    }

    .nav-link:hover
    {
        color: var(--main-color) !important;
    }


</style>