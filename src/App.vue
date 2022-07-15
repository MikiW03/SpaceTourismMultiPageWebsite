<script setup lang="ts">

</script>

<template>
    <nav class="main-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/destination">Destination</router-link>
        <router-link to="/crew">Crew</router-link>
        <router-link to="/technology">Technology</router-link>
    </nav>

    <router-view></router-view>
</template>

<style scoped>
.main-nav {
    position: absolute;
    display: flex;
    gap: 1em;
}

.main-nav>* {
    text-decoration: none;
    color: var(--accent-color)
}
</style>
