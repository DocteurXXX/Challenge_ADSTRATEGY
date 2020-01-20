<template>
    <div>
        <Navbar/>
        <Formulaire />
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Footer from "../components/Footer";
    import Formulaire from "../components/Formulaire";
    export default {
        name: "Contact_Page",
        components: {Formulaire, Footer, Navbar}
    }
</script>

<style scoped>

</style>