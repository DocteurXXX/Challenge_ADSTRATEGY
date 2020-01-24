<template>
    <div>
        <Navbar />
        <Test />
        <Construction />
        <Footer/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Construction from "../components/Construction";
    import Footer from "../components/Footer";
    import Test from "../components/Test";
    export default {
        name: "Panier_Page",
        components: {Test, Footer, Construction, Navbar}
    }
</script>

<style scoped>

</style>