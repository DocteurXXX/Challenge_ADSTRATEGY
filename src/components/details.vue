<template>
    <div class="details">
        <div class="container">
            <div class="row">
                <div class="col-md-12" v-for="(product,index) in products" :key="index">
                    <div v-if="proId === product.productId">
                        <h1>{{product.productTitle}}</h1>
                        <img :src="product.image" class="img-fluid">
                    </div>
                </div>
            </div>
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
                        productTitle: "ABCN",
                        image: require('../assets/header1.jpg'),
                        productId: 1

                    },
                    {
                        productTitle: "KARMA",
                        image: require('../assets/header2.jpg'),
                        productId: 2
                    },
                    {
                        productTitle: "Tino",
                        image: require('../assets/header3.jpg'),
                        productId: 3
                    },
                ]
            }
        }
    }

</script>