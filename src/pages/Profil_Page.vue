<template>
    <div class="profilPage">
        <Navbar />
        <Construction />
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import Construction from "../components/Construction";
    export default {
        name: "Profil_Page",
        components: {Construction, Footer, Navbar}
    }
</script>

<style scoped>

</style>