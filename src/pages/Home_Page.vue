<template>
    <div class="homePage">
        <Navbar />
        <Slider />
        <Home_Content />
        <Footer />

    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Slider from "../components/Slider";
    import Footer from "../components/Footer";
    import Home_Content from "../components/Home_Content";
    export default {
        name: "Home_Page",
        components : {
            Home_Content,
            Navbar,
            Slider,
            Footer
        }
    }
</script>

<style scoped>

</style>