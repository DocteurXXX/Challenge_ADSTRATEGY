<template>

    <div class="fullscreen annonce">
        <div>
            <h1 class="AnnonceTitle">Toutes nos annonces</h1>
        </div>

        <div class="row">
            <div class="col-md-4 col-lg4 col-sm-6 col-xs-12 cardAnnonce" v-for="(data,index) in products" :key="index">
                <div class="cadre">
                    <img :src="data.image1" class="img-fluid AnnoncePhoto">
                    <h3 class="productTitre">{{data.productTitle}}</h3>
                    <h3 class="productTitre">{{data.cylindre}} {{data.model}} </h3><br/>
                    <h5 class="description">Année : {{data.year}}</h5>
                    <h5 class="description">Prix : {{data.prix}}</h5><br/>
                    <button @click="goTodetail(data.productId)" type="button" class="btn btn-dark MoreInfo">En savoir plus</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Annonce",

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
                    {
                        productTitle:"SUZUKI",
                        image1       : require('../assets/Annonce_4A.jpeg'),
                        image2       : require('../assets/Annonce_4B.jpeg'),
                        image3       : require('../assets/Annonce_4C.jpeg'),
                        image4       : require('../assets/Annonce_4D.jpeg'),
                        image5       : require('../assets/Annonce_4E.jpeg'),
                        productId:4,
                        model: "GSXR",
                        cylindre: "1000",
                        year: "2006",
                        color: "Noir / Blanc",
                        km:"4500 km",
                        message:"Moto uniquement à usage piste",
                        prix: "6799 €"
                    },
                    {
                        productTitle:"YAMAHA",
                        image1       : require('../assets/Annonce_5A.jpeg'),
                        image2       : require('../assets/Annonce_5B.jpeg'),
                        image3       : require('../assets/Annonce_5C.jpeg'),
                        image4       : require('../assets/Annonce_5D.jpeg'),
                        image5       : require('../assets/Annonce_5E.jpeg'),
                        image6       : require('../assets/Annonce_5F.jpeg'),
                        image7       : require('../assets/Annonce_5G.jpeg'),
                        productId:5,
                        model: "MT09 TRACER",
                        cylindre: "900",
                        year: "2016",
                        color: "Gris / Bleu",
                        km:"7500 km",
                        message:"Moto parfaite pour utilisation quotidienne",
                        prix: "8999 €"
                    },
                    {
                        productTitle:"KTM",
                        image1       : require('../assets/Annonce_6A.jpeg'),
                        image2       : require('../assets/Annonce_6B.jpeg'),
                        image3       : require('../assets/Annonce_6C.jpeg'),
                        productId:6,
                        model: "SM",
                        cylindre: "690",
                        year: "2009",
                        color: "Orange",
                        km:"6500 km",
                        message:"Une tuerie pour mettre une branlèe à vos potes !!",
                        prix: "5000 €"
                    },
                    {
                        productTitle:"SUZUKI",
                        image1       : require('../assets/Annonce_7A.jpeg'),
                        image2       : require('../assets/Annonce_7B.jpeg'),
                        image3       : require('../assets/Annonce_7C.jpeg'),
                        image4       : require('../assets/Annonce_7D.jpeg'),
                        image5       : require('../assets/Annonce_7E.jpeg'),
                        productId:7,
                        model: "GSXR",
                        cylindre: "1000",
                        year: "2005",
                        color: "Noir",
                        km:"2500 km",
                        message:"Moto sans carte grise, pour pise uniquement",
                        prix: "5500 €"
                    },
                    {
                        productTitle:"YAMAHA",
                        image1       : require('../assets/Annonce_8A.jpeg'),
                        image2       : require('../assets/Annonce_8B.jpeg'),
                        productId:8,
                        model: "XJR",
                        cylindre: "1300",
                        year: "2000",
                        color: "Noir",
                        km:"12500 km",
                        message:"Un gros veau qui se tord sur la moindre courbe, mais gavé de couple",
                        prix: "3500 €"
                    },
                    {
                        productTitle:"YAMAHA",
                        image1       : require('../assets/Annonce_9A.jpeg'),
                        image2       : require('../assets/Annonce_9B.jpeg'),
                        productId:9,
                        model: "WRF",
                        cylindre: "450",
                        year: "2000",
                        color: "Noir",
                        km:"3000 km",
                        message:"Moto équipée en supermotard. Le top pour se prendre des gamelles : un coup de marteau, et ça repart !",
                        prix: "2500 €"
                    },
                    {
                        productTitle:"KAWASAKI",
                        image1       : require('../assets/Annonce_10A.jpeg'),
                        image2       : require('../assets/Annonce_10B.jpeg'),
                        image3       : require('../assets/Annonce_10C.jpeg'),
                        image4       : require('../assets/Annonce_10D.jpeg'),
                        productId:10,
                        model: "ZZR",
                        cylindre: "1400",
                        year: "2009",
                        color: "Gris",
                        km:"23000 km",
                        message:"Ça tire les bras, un truc de malade ...",
                        prix: "6500 €"
                    },
                    {
                        productTitle:"SUZUKI",
                        image1       : require('../assets/Annonce_11A.jpeg'),
                        image2       : require('../assets/Annonce_11B.jpeg'),
                        image3       : require('../assets/Annonce_11C.jpeg'),
                        productId:11,
                        model: "GSXR",
                        cylindre: "1000",
                        year: "2006",
                        color: "Bleu / Banc",
                        km:"13000 km",
                        message:"Inconfortable, mais bien violent !.",
                        prix: "4900 €"
                    },

                ]
            }
        },
        methods:{
            goTodetail(prodId) {
                this.$router.push({name:'Detail_Page',params:{Pid:prodId}})
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
    .annonce
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