<template>
    <div class="fullscreen details">
        <div class="container">
            <router-link to="/annonce" class="btn btn-secondary btn-lg retour">Retour aux annonces</router-link>

            <div class="row desc">
                <div class="col-md-12" v-for="(product,index) in products" :key="index">
                    <div v-if="proId === product.productId">
                        <h1 class="productTitre">{{product.productTitle}} {{product.cylindre}} {{product.model}}</h1>
                            <map name=m1><area shape=rect coords="0 0 1000 1000" href=#img1></map>
                            <map name=m2><area shape=rect coords="0 0 1000 1000" href=#img2></map>
                            <map name=m3><area shape=rect coords="0 0 1000 1000" href=#img3></map>
                            <map name=m4><area shape=rect coords="0 0 1000 1000" href=#img4></map>
                            <div id=wrapper>
                                <a href=# class=close></a>
                                <img id=img1 class=img usemap=#m1 :src=product.image1 alt="" />

                                <a href=# class=close></a>
                                <img id=img2 class=img usemap=#m2 :src=product.image2 alt=""/>

                                <a href=# class=close></a>
                                <img id=img3 class=img usemap=#m3 :src=product.image3 alt=""/>

                                <a href=# class=close></a>
                                <img id=img4 class=img usemap=#m4 :src=product.image4 alt=""/>
                            </div>

                        <div class="descriptionMoto">
                            <h3 class="description">Marque : {{product.productTitle}}</h3>
                            <h3 class="description">Cylindrée : {{product.cylindre}} cm3</h3>
                            <h3 class="description">Modèle : {{product.model}}</h3>
                            <h3 class="description">Année : {{product.year}}</h3>
                            <h3 class="description">Coleur(s) dominante(s) : {{product.color}}</h3>
                            <h3 class="description">Kilométrage : {{product.km}} certifiés</h3>
                            <h3 class="description">Prix de vente : {{product.prix}}</h3><br/>
                            <h3 class="description">{{product.message}}</h3>
                        </div>

                        </div>
                    </div>
            </div>

            <router-link to="/annonce" class="btn btn-secondary btn-lg retour">Retour aux annonces</router-link>
        </div>
    </div>
</template>



<script>

    export default {
        name: 'details',

        data() {
            return {
                proId:this.$route.params.Pid,
                products: [
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
        }
    }

</script>

<style scoped>

    .retour
    {
        display: block;
        width: 25%;
        margin : 2% auto 2% auto;
    }

    .productTitre
    {
        text-align: center;
        margin-top: 2%;
    }
    .description
    {
        text-align: justify;
    }
    .img {
        border-radius: 2px;
        box-shadow: 0 0 5px #343436;
        filter:brightness(1.1);
        height: 250px;
        width: 250px;
        margin : 0 1% 5% 1%;
    }
    .img:target {
        height: auto;
        width: 100%;
    }
    .img:target+.close {
        display: block;
    }
    .close {
        background-image: url(https://bit.ly/29QeT21);
        background-repeat: no-repeat;
        top:0;
        display: none;
        height: 32px;
        width: 32px;
    }
    #wrapper {
        margin: auto;
        text-align: center;
    }

</style>