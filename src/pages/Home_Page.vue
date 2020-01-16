<template>
    <div class="homePage">
        <Navbar />
        <Slider />

    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import Slider from "../components/Slider";
    export default {
        name: "Home_Page",
        components : {
            Navbar,
            Slider
        }
    }
</script>

<style scoped>

</style>