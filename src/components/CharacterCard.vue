<template>
<div class="card_container">
    <router-link to="`/personaje/${item.id}`">
        <div class="card" v-for="item in personajes" :key="item.id">
            <img :src="item.image" alt="Imagen del personaje" class="card__img">
            <div class="card__information">
                <h2 class="card__information-title">
                    {{item.name}}
                </h2>
                <div class="card__information-secondary">
                    <p class="card__information-status">
                        Status: {{item.status}}
                    </p>
                    <p class="card__information-gender">
                        Gender: {{item.gender}}
                    </p>
                    <p class="card__information-species">
                        Species: {{item.species}}
                    </p>
                </div>
            </div>
        </div>
    </router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
            personajes: [],
            totalPersonajes: 0,
            paginaActual: 1,
            personajesPagina: 20,
        };
    },
    async created() {
        await this.$store.dispatch("obtenerPersonajes", 1);
        this.personajes = this.$store.getters.personajes.results;
        this.totalPersonajes = this.$store.getters.personajes.info.count;
    },
    methods: {
        async cambioPagina(pagina) {
            await this.$store.dispatch("obtenerPersonajes", pagina);
            this.personajes = this.$store.getters.personajes.results;
        }
    }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Asap&family=Shadows+Into+Light&display=swap');

.card_container a {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    text-decoration: none;
}

.card {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    width: 40%;
    min-width: 300px;
    height: auto;
}

.card:hover {
    outline: 1px solid rgb(106, 223, 91);
    opacity: .9;
}

.card .card__img {
    width: 50%;
    object-fit: cover;
}

.card .card__information {
    width: 50%;
}

.card img {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
}

.card__information {
    font-family: 'Asap', sans-serif;
    font-size: 1.5rem;
}

.card__information .card__information-title {
    color: white;
    font-family: 'Shadows Into Light', cursive;
    text-align: center;
    -webkit-text-stroke: .8px rgb(106, 223, 91);
}

.card__information .card__information-secondary {
    color: white;
    font-size: 1.4rem;
    -webkit-text-stroke: .3px black;
    width: 80%;
    margin: auto;
    text-align: start;
    overflow: hidden;
}

.card__information .card__information-secondary p {
    white-space: nowrap;
    overflow: hidden;
    overflow-block: hidden;
}
</style>

<style>
/*
.card__container {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.card .card__img {
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    height: 300px;
    width: 300px;
}

.card__information {
    font-family: 'Asap', sans-serif;
}

.card__information-title {
    font-size: 2.5rem;
}
*/
</style>
