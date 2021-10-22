<template>
<div id="card" class="container">
    <div class="button">
        <router-link to="/">
            <b-button class="btn" variant="outline-light">
                Back to home
            </b-button>
        </router-link>
    </div>
    <div class="title">
        <h1>{{this.$store.getters.idPersonaje.name}}</h1>
    </div>
    <b-card no-body class="overflow-hidden card__container-character" style="max-width: 70%;">
        <b-row no-gutters>
            <b-col md="4" class="card__container-imagen">
                <b-card-img :src="this.$store.getters.idPersonaje.image" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8" class="card__container-texto">
                <b-card-body>
                    <b-card-text>
                        <p>Location: <span>{{this.$store.getters.idPersonaje.location.name}}</span></p>
                        <p 
                        v-if="this.$store.getters.idPersonaje.status == 'Alive'">
                            Status: {{this.$store.getters.idPersonaje.status}} 💚
                        </p>
                        <p 
                        v-else-if="this.$store.getters.idPersonaje.status == 'Dead'">
                            Status: {{this.$store.getters.idPersonaje.status}} 💀
                        </p>
                          <p 
                        v-else-if="this.$store.getters.idPersonaje.status == 'unknown'">
                            Staus: {{this.$store.getters.idPersonaje.status}} ⁉️
                        </p>
                        <p>Species: <span>{{this.$store.getters.idPersonaje.species}}</span></p>
                        <p>Created: <span>{{this.$store.getters.idPersonaje.created}}</span></p>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('obtenerIdPersonaje', this.$route.params.id)
    }
}
</script>

