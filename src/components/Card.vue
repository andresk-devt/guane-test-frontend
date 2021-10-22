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
    <b-card no-body class="overflow-hidden" style="max-width: 70%;">
        <b-row no-gutters>
            <b-col md="4">
                <b-card-img :src="this.$store.getters.idPersonaje.image" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
                <b-card-body>
                    <b-card-text>
                        <p>Location: <span>{{this.$store.getters.idPersonaje.location.name}}</span></p>
                        <p>Staus: <span>{{this.$store.getters.idPersonaje.status}}</span></p>
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

<style lang="scss" scoped>
$border-color: #8bf130;
$color: white;

.title {
    text-align: center;
}

h1 {
    display: inline-block;
    position: relative;
    font-family: 'Nosifer';
    color: $color;
}

h1::after,
h1::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 3px;
    background: $color;
    top: 0.5em;
}

h1::before {
    left: -220px;
}

h1::after {
    right: -220px;
}

@mixin card {
    margin: auto;
    background: rgba(0, 0, 0, .8);
    color: $color;
    border: 1px solid $border-color;

    img {
        margin: 20px;
        width: 280px;
        outline: 5px solid $color;
    }

    p {
        font-size: 35px;
        font-family: 'Shadows Into Light', cursive;
        -webkit-text-stroke: .3px $border-color;
        color: white;
    }

    span {
        font-size: 25px;
        font-family: sans-serif;
        font-weight: 500;
    }
}

.overflow-hidden {
    @include card
}

.button {
    width: 10%;
    margin: 10px auto;
}
</style>
