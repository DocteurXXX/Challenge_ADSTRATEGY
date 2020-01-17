<template>
    <div class="construction">
        <section>
            <div class="container containerConstruction">
                <div class="card CardConstructionLogo">
                    <div class="row cardConstruction">
                        <div class="pictureConstruction">
                            <div class="card-img-bottom-Construction">
                                <img class="illustrationConstruction" src=./../assets/Construction.png>
                            </div>
                        </div>
                    </div>
<!--                    <div class="row cardConstruction">-->
<!--                        <div>-->
<!--                            <div class="card-block">-->
<!--                                <h4 class="card-title">Page en cours de réalisation</h4>-->
<!--                                <p class="card-text">Merci pour votre compréhension</p>-->
<!--                                <a href="/" class="btn btn-primary enSavoirPlus">Retour Accueil</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Construction"
    }
</script>

<style scoped>
    .illustrationConstruction
    {
        height: 70vh;
    }

    .pictureConstruction
    {
        display : table;
        margin : 0 auto;
    }

    .cardConstruction
    {
        /*margin-top: 5%;*/
        /*padding: 0 5% 0 5%;*/
        /*text-align: justify;*/
    }

    .CardConstructionLogo
    {
        border-style: none !important;
    }
</style>