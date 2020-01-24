<template>
    <div class="row formulaire fullscreen">

                <div class="col-lg-7 offset-lg-1">
                    <div class="card">
                        <div class="card-header bg-primary text-white"><i class="fa fa-envelope bar"></i>CONTACTEZ-NOUS</div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="name">Nom et Prénom</label>
                                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Saisissez votre nom et prénom" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Adresse email</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Saisissez vore adresse email" required>
                                        <small id="emailHelp" class="form-text text-muted">Ces informations ne seront jamais diffusées</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <textarea class="form-control" id="message" rows="6" required></textarea>
                                    </div>
                                    <div class="mx-auto">
                                        <button type="submit" class="btn btn-primary text-right">Envoyez</button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>

                <div class="col-lg-3 ">
                        <div class="card">
                            <div class="card-header bg-primary text-white"><i class="fa fa-envelope bar"></i>ADRESSE</div>
                                <div class="card-body">
                                    <p>10, rue du Vigna</p>
                                    <p>26260 BATHERNAY</p>
                                    <p>France</p>
                                    <p>Email : jul.beauhaire@gmail.com</p>
                                    <p>Tel. +33 776 691 063</p>
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
    export default {
        name: "Formulaire"
    }
</script>

<style scoped>

    .formulaire
    {
        margin-top: 5vh;
    }

    .bg-primary
    {
        background-color: var(--main-color) !important;
    }
</style>