<template>

    <div class="fullscreen content">
        <div>
            <h1 class="AnnonceTitle">Nos coups de coeur</h1>
        </div>

        <div class="row">
            <div class="col-md-4 col-lg4 col-sm-6 col-xs-12 cardAnnonce" v-for="(user,index) in users" :key="index">
                <div class="cadre" v-if="user.productID <= 3">
                    <img :src="user.photo1" class="img-fluid AnnoncePhoto">
                    <h3 class="productTitre">{{user.marque}}</h3>
                    <h3 class="productTitre">{{user.cyl}} {{user.model}} </h3><br/>
                    <h5 class="description">Année : {{user.year}}</h5>
                    <h5 class="description">Prix : {{user.prix}}</h5><br/>
                    <button @click="goTodetail(user.productID)" type="button" class="btn btn-dark MoreInfo">En savoir plus</button>
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
                users: []
            }
        },
        mounted: function() {
            // eslint-disable-next-line no-undef
            axios.get('./Motos.json')
                .then(response => {
                    this.users = response.data;
                    // console.log(response);
                })
            // .catch(error => {
            //     console.log(error);
            // });
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
        margin-bottom: 1%;
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