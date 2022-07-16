<script setup lang="ts">
import { ref } from 'vue';

const toggled = ref(false)
</script>

<template>
    <header>
        <img class="logo" src="./assets/shared/logo.svg" alt="logo">
        <button class="menu-toggle"><img
                :src="toggled ? 'src/assets/shared/icon-close.svg' : 'src/assets/shared/icon-hamburger.svg'" alt="Menu"
                @click="toggled = !toggled"></button>
        <nav :data-toggled="toggled">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/destination">Destination</router-link>
                </li>
                <li>
                    <router-link to="/crew">Crew</router-link>
                </li>
                <li>
                    <router-link to="/technology">Technology</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <router-view></router-view>
</template>

<style scoped>
header {
    margin-block-start: 40px;
    margin-inline-start: clamp(24px, 5vw, 55px);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-toggle {
    display: none;
}

ul {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81px);
    padding-inline: clamp(20px, 12vw, 172px);
    padding-block: 35px;
    list-style: none;
    display: flex;
    gap: 2em;
    position: relative;

    width: 100%;
    height: 100%;

    counter-reset: a -1;
}

nav {
    position: relative;
}

nav::before {
    --width: 475px;

    content: "";
    position: absolute;
    width: var(--width);
    height: 1px;
    background-color: white;
    opacity: 0.25;
    z-index: 10;
    top: 45px;
    left: calc(var(--width) * -1 + 30px);
}

a {
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    color: var(--accent-color)
}

a {
    padding-bottom: 32px;
}

a::before {
    content: "0" counter(a);
    margin-right: .5em;
    font-weight: 700;

    counter-increment: a;
}

a:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.router-link-active {
    border-bottom: 3px solid white;
}

@media (min-width: 35.05rem) and (max-width: 55rem) {
    header {
        margin-block-start: 0;
    }

    nav::before {
        display: none
    }

    ul {
        padding-inline: clamp(20px, 7vw, 172px);
    }

    a {
        font-size: 14px;
    }

    a::before {
        display: none
    }

}

@media (max-width: 35rem) {
    .logo {
        height: 40px;
    }

    .menu-toggle {
        display: block;
        z-index: 100;
        margin-right: 26px;
        height: 21px;
        aspect-ratio: 1;

        background-color: transparent;
        border: 0;
        cursor: pointer;
    }

    .menu-toggle>img {
        height: 100%
    }

    nav {
        position: fixed;
        left: 30vw;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 50;

        transform: translateX(100%)
    }

    nav[data-toggled=true] {
        transform: translateX(0%)
    }

    nav::before {
        display: none
    }

    ul {
        flex-direction: column;
        padding-block: 17vh;
        padding-inline: 8.5vw;
    }

    a {
        padding-bottom: 0;
    }

    a:hover {
        border: 0
    }

    .router-link-active {
        border-bottom: 0;
    }
}
</style>
