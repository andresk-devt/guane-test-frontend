<template>
<div id="app">
    <header class="header">
        <router-link to="/">
            <img src="./assets/logo.png" alt="Logo de rick and morty" class="header__img">
        </router-link>
    </header>
    <router-view></router-view>
</div>
</template>

<style>
body {
    background-image: url('https://www.xtrafondos.com/wallpapers/rick-y-morty-en-otra-dimension-8735.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}

.header {
    width: 100%;
}

.header img {
    width: 300px;
    margin: 25px;
}
</style>
