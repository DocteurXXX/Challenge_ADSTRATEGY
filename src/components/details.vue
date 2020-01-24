<template>
    <div class="fullscreen details">
        <div class="container">
            <router-link to="/annonce" class="btn btn-secondary btn-lg retour">Retour aux annonces</router-link>

            <div class="row desc">
                <div class="col-md-12" v-for="(user,index) in users" :key="index">
                    <div v-if="proId === user.productID">
                        <h1 class="productTitre">{{user.marque}} {{user.cyl}} {{user.model}}</h1>
                            <map name=m1><area shape=rect coords="0 0 1000 1000" href=#img1></map>
                            <map name=m2><area shape=rect coords="0 0 1000 1000" href=#img2></map>
                            <map name=m3><area shape=rect coords="0 0 1000 1000" href=#img3></map>
                            <map name=m4><area shape=rect coords="0 0 1000 1000" href=#img4></map>
                            <div id=wrapper>
                                <a href=# class=close></a>
                                <img id=img1 class=img usemap=#m1 :src=user.photo1 alt="" />

                                <a href=# class=close></a>
                                <img id=img2 class=img usemap=#m2 :src=user.photo2 alt=""/>

                                <a href=# class=close></a>
                                <img id=img3 class=img usemap=#m3 :src=user.photo3 alt=""/>

                                <a href=# class=close></a>
                                <img id=img4 class=img usemap=#m4 :src=user.photo4 alt=""/>
                            </div>

                        <div class="descriptionMoto">
                            <h3 class="description">Marque : {{user.marque}}</h3>
                            <h3 class="description">Cylindrée : {{user.cyl}} cm3</h3>
                            <h3 class="description">Modèle : {{user.model}}</h3>
                            <h3 class="description">Année : {{user.year}}</h3>
                            <h3 class="description">Coleur(s) dominante(s) : {{user.color}}</h3>
                            <h3 class="description">Kilométrage : {{user.km}} certifiés</h3>
                            <h3 class="description">Prix de vente : {{user.prix}}</h3><br/>
                            <h3 class="description">{{user.message}}</h3>
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