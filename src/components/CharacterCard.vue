<template>
<div class="card">
    <img src="https://pbs.twimg.com/profile_images/991611400731660294/e9gBq6w0_400x400.jpg" alt="Imagen del personaje" class="card__img">
    <div class="card__information">
        <h2 class="card__information-title">
            Juggling Rick
        </h2>
        <p class="card__information-status">
            unknown
        </p>
        <p class="card__information-species">
            Human
        </p>
        <p class="card__information-created">
            <span>Creado en: </span> 2017-12-29T18:59:47.440Z
        </p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Asap&family=Shadows+Into+Light&display=swap');

.card{
    background: white;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    width: 40%;
    min-width: 600px;
}
.card .card__img{
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    height: 300px;
    width: 300px;
}
.card__information{
    font-family: 'Asap', sans-serif;
}
.card__information-title{
    font-family: 'Shadows Into Light', cursive;
    font-size: 2.5rem;
}
</style>
