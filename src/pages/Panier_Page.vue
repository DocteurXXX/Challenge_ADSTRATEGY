<template>
    <div>
        <Navbar />
        <Construction />
        <Footer/>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Construction from "../components/Construction";
    import Footer from "../components/Footer";
    export default {
        name: "Panier_Page",
        components: {Footer, Construction, Navbar}
    }
</script>

<style scoped>

</style>