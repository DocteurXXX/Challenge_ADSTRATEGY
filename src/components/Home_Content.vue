<template>

    <div class="row fullscreen content">
        <div>
        <h1>Content</h1>
        </div>

        <div id="card" v-for="person in team" :key="person.index">
            <div>
                <h2>{{person.name}}</h2>

                 <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".reference">
                    {{person.role}}
                    {{person.index}}
                </button>

                <!-- Modal -->
                <div class="modal fade reference" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">{{person.name}} {{person.role}} </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {{person.name}} {{person.role}}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>





    </div>
</template>

<script>
    export default {
        name: "Home_Content",
        data () {
            return {
                team: [
                    { index: 1, name: 'Julien', role: 'Father', target:'target1'},
                    { index: 2, name: 'Stéphanie', role: 'Mother', target:'target2'},
                    { index: 3, name: 'Lily', role: 'Daughter', target:'target3'},
                    { index: 4, name: 'Annie', role: 'GrandMam', target:'target4'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>