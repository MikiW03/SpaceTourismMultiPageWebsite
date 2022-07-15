<script setup lang="ts">

</script>

<template>
    <div class="nav-box">
        <img src="./assets/shared/logo.svg" alt="logo" class="logo">
        <nav class="main-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/destination">Destination</router-link>
            <router-link to="/crew">Crew</router-link>
            <router-link to="/technology">Technology</router-link>
        </nav>
    </div>
    <router-view></router-view>
</template>

<style scoped>
.nav-box {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    height: 100px;
    top: 40px;
    left: 0;
    right: 0;
}



.main-nav {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding: 39px 165px 0 123px;
    height: 96px;
    width: 830px;
    display: flex;
    justify-content: space-between;
    gap: 1em;
    position: relative;

    counter-reset: a -1;
}

.main-nav::before {
    content: "";
    position: absolute;
    width: 473px;
    height: 1px;
    background-color: white;
    opacity: 0.25;
    z-index: 2;
    top: 50%;
    left: -53%
}

.main-nav a::before {
    content: "0" counter(a);
    margin-right: 10px;
    font-weight: 700;

    counter-increment: a;
}

.main-nav>* {
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    color: var(--accent-color)
}

.main-nav>a:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.router-link-active {
    border-bottom: 3px solid white;
}
</style>
