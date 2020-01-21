<template>

    <div class="fullscreen content">
        <div>
            <h1 class="AnnonceTitle">Nos coups de coeur</h1>
        </div>

        <div class="row">
            <div class="col-md-4 col-lg4 col-sm-6 col-xs-12 cardAnnonce" v-for="(data,index) in products" :key="index">
                <div class="cadre">
                    <img :src="data.image1" class="img-fluid AnnoncePhoto">
                    <h3 class="productTitre">{{data.productTitle}}</h3>
                    <h3 class="productTitre">{{data.cylindre}} {{data.model}} </h3><br/>
    <!--                <h5 class="description">Marque : {{data.productTitle}}</h5>-->
    <!--                <h5 class="description">Cylindrée : {{data.cylindre}}</h5>-->
                    <h5 class="description">Année : {{data.year}}</h5>
    <!--                <h5 class="description">Modèle : {{data.model}}</h5>-->
    <!--                <h5 class="description">Couleur dominante : {{data.color}}</h5>-->
    <!--                <h5 class="description">Kilomètrage : {{data.km}}</h5>-->
                    <h5 class="description">Prix : {{data.prix}}</h5><br/>
    <!--                <h5 class="description">{{data.message}}</h5>-->
                    <button @click="goTodetail(data.productId)" type="button" class="btn btn-dark MoreInfo">En savoir plus</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home_Content",

        data () {
            return {
                products:[
                    {
                        productTitle:"APRILIA",
                        image1       : require('../assets/Annonce_1A.jpeg'),
                        image2       : require('../assets/Annonce_1B.jpeg'),
                        image3       : require('../assets/Annonce_1C.jpeg'),
                        image4       : require('../assets/Annonce_1D.jpeg'),
                        productId:1,
                        model: "RSV",
                        cylindre: "1000",
                        year: "2009",
                        color: "Bleue",
                        km:"14356 km",
                        message:"Vend super belle moto, pas chère",
                        prix: "3499 €"
                    },
                    {
                        productTitle:"BMW",
                        image1       : require('../assets/Annonce_2A.jpeg'),
                        image2       : require('../assets/Annonce_2B.jpeg'),
                        image3       : require('../assets/Annonce_2C.jpeg'),
                        image4       : require('../assets/Annonce_2D.jpeg'),
                        image5       : require('../assets/Annonce_2E.jpeg'),
                        image6       : require('../assets/Annonce_2F.jpeg'),
                        productId:2,
                        model: "GS",
                        cylindre: "1200",
                        year: "2013",
                        color: "Rouge",
                        km:"35000 km",
                        message:"Magnifique BMW, increuvable ...",
                        prix: "8999 €"
                    },
                    {
                        productTitle:"APRILIA",
                        image1       : require('../assets/Annonce_3A.jpeg'),
                        image2       : require('../assets/Annonce_3B.jpeg'),
                        image3       : require('../assets/Annonce_3C.jpeg'),
                        image4       : require('../assets/Annonce_3D.jpeg'),
                        productId:3,
                        model: "DORSODURO",
                        cylindre: "750",
                        year: "2016",
                        color: "Grise",
                        km:"9768 km",
                        message:"Vend supermotard joueur et ultra efficace en courbe.",
                        prix: "4699 €"
                    },
                ]
            }
        },
        methods:{
            goTodetail(prodId) {
                this.$router.push({name:'details',params:{Pid:prodId}})
            }
        }
    }
</script>

<style scoped>
    .cardAnnonce
    {
        margin: 0 0 10% 0;
    }
    .cadre
    {
        border: solid;
        border-width: thin;
        padding: 2% 2% 2% 2%;
    }
    .content
    {
        padding: 2% 2% 2% 2%;
    }
    .AnnonceTitle
    {
        text-align: center;
        margin-bottom: 2%;
    }
    .AnnoncePhoto
    {
        height: 45vh;
        width: 100vw;
    }
    .productTitre
    {
        text-align: center;
        margin-top: 2%;
    }
    .MoreInfo
    {
        display: block;
        margin : auto;
    }
</style>