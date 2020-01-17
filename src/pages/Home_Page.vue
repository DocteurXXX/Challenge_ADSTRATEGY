<template>
    <div class="homePage">
        <Navbar />
        <Slider />
        <Footer />

    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Slider from "../components/Slider";
    import Footer from "../components/Footer";
    export default {
        name: "Home_Page",
        components : {
            Navbar,
            Slider,
            Footer
        }
    }
</script>

<style scoped>

</style>