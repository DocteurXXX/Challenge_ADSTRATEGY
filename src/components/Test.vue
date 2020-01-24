<template>
    <div id="test">
        <h1>TEST TABLE</h1>
        <h2>{{message}}</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Marque</th>
                <th scope="col">Model</th>
                <th scope="col">Photo1</th>
                <th scope="col">Photo2</th>
                <th scope="col">Photo3</th>
                <th scope="col">Photo4</th>
                <th scope="col">Prix</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.id}}</td>
                <td>{{ user.marque}}</td>
                <td>{{ user.model }}</td>
                <td><img :src="user.photo1" class="imgmoto" alt=""></td>
                <td><img :src="user.photo2" class="imgmoto" alt=""></td>
                <td><img :src="user.photo3" class="imgmoto" alt=""></td>
                <td><img :src="user.photo4" class="imgmoto" alt=""></td>
                <td>{{ user.prix }}</td>

            </tr>
            </tbody>
        </table>
    </div>
</template>


<script>

    export default {
        name: "Test",

        data() {
            return {
                users: []
            }
        },
                mounted: function() {
                    // eslint-disable-next-line no-undef
                axios.get('./Motos.json')
                    .then(response => {
                        this.users = response.data;
                        // console.log(response);
                    })
                    // .catch(error => {
                    //     console.log(error);
                    // });
            }
    }



</script>

<style scoped>
.imgmoto
{
    height: 50px;
}
</style>