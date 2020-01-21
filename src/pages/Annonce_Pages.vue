<template>
    <div>
        <Navbar/>
        <Annonce />
        <Footer/>

    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Annonce from "../components/Annonce";
    import Footer from "../components/Footer";
    export default {
        name: "Annonce_Pages",
        components: {Footer, Annonce, Navbar}
    }
</script>

<style scoped>

</style>