<template>
    <div>
        <Navbar />
        <Details />
        <Footer />
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Details from "../components/details";
    import Footer from "../components/Footer";
    export default {
        name: "Detail_Page",
        components: {Footer, Details, Navbar}
    }
</script>

<style scoped>

</style>