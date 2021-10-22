<template>
<div id="api" class="container contenedor__personajes">
    <div class="contenedor__title">
        <h1 class="contenedor__personajes-title-h1">Characters</h1>
    </div>
    <div class="cards__container">
        <b-card no-body class="overflow-hidden card-container" v-for="item in personajes" :key="item.id">
            <router-link :to="`/personaje/${item.id}`">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="item.image" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <b-card-text>
                                <h2>Name: {{item.name}}</h2>
                                <hr size="3px">
                                <h3 v-if=" item.status == 'Dead'">Status: ☠</h3>
                                <h3 v-else>Status: {{item.status}}</h3>
                                <h3>Gender: {{item.gender}}</h3>
                                <h3>Species: {{item.species}}</h3>
                                <h3 v-if=" item.type == '' ">Type: Does not have</h3>
                                <h3 v-else>Type: {{item.type}}</h3>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </router-link>
        </b-card>
    </div>
    <div class="paginador">
        <b-pagination @change="cambioPagina" v-model="paginaActual" :total-rows="totalPersonajes" :per-page="personajesPagina" aria-controls="my-table"></b-pagination>
    </div>
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
/*
$color-border: #8bf130;
$font-title: "Nosifer";
$font-text: "Shadows Into Light";

@import url("https://fonts.googleapis.com/css2?family=Nosifer&family=Shadows+Into+Light&display=swap");

a {
    text-decoration: none;
}

hr {
    color: white;
}

.paginador {
    display: flex;
    justify-content: center;
}

.title {
    text-align: center;
}

.title-h1 {
    display: inline-block;
    position: relative;
    font-family: $font-title;
    color: white;
}

.title-h1::after,
.title-h1::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 3px;
    background: white;
    top: 0.5em;
}

h1::before {
    left: -220px;
}

h1::after {
    right: -220px;
}

img {
    margin: 20px;
    outline: 1.5px solid $color-border;
}

.container {
    display: flex;
    margin: 0 auto;
    width: 80%;
}

@mixin card {
    margin: 20px;
    background: rgba(0, 0, 0, 0.698);
    color: white;
    border: 1px solid $color-border;
    font-family: $font-text;
}

@mixin cardContent {
    @include card;

    h2 {
        font-size: 28px;
        font-weight: 900;
        -webkit-text-stroke: 0.5px $color-border;
        color: white;
    }

    h3 {
        @extend h2;
        font-size: 25px;
        font-weight: 600;
    }
}

/*
.overflow-hidden {
  margin: 20px;
  background: rgba(0, 0, 0, 0.698);
  color: white;
  border: 1px solid $color-border;
  font-family: $font-text;

    h2 {
      font-size: 28px;
      font-weight: 900;
      -webkit-text-stroke: 0.5px $color-border;
      color: white;
    }

      h3 {
        font-size: 25px;
        font-weight: 600;
        -webkit-text-stroke: 0.3px $color-border;
        color: white;
      }

}
*/
/*
.overflow-hidden {
    @include cardContent
}

.overflow-hidden:hover {
    background: rgba(255, 255, 255, 0.171);
    box-shadow: inset 0 0 20px $color-border;
    border: none;
}
*/
</style>
