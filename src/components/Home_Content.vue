<template>

    <div class="row fullscreen content">
        <div>
        <h1>Content</h1>
        </div>

        <div class="row">
            <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
                <img :src="data.image" class="img-fluid">
                <h3>{{data.productTitle}}</h3>
                <h3 @click="goTodetail()" >{{data.productTitle}}</h3>
                <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
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
                        productTitle:"ABCN",
                        image       : require('../assets/header1.jpg'),
                        productId:1

                    },
                    {
                        productTitle:"KARMA",
                        image       : require('../assets/header2.jpg'),
                        productId:2
                    },
                    {
                        productTitle:"Tino",
                        image       : require('../assets/header3.jpg'),
                        productId:3
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

</style>