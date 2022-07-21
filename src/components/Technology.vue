<script setup lang="ts">
import { computed, inject, Ref, ref } from 'vue';

import type { Data } from '../types/index'

enum techSet {
    vehicle,
    spaceport,
    capsule,
}

type tech = "vehicle" | "spaceport" | "capsule"
const activeTechnology = ref<tech>("vehicle")

const data = inject('data') as Ref<Data>

const imgSrc = computed(() => {
    const srcContent = window.innerWidth <= 1200
        ? data?.value.technology[techSet[activeTechnology.value]].images.landscape.slice(1)
        : data?.value.technology[techSet[activeTechnology.value]].images.portrait.slice(1)
    return '/src' + srcContent
})
</script>

<template>
    <div class="background"></div>
    <section>
        <h5><span>03</span>SPACE LAUNCH 101</h5>
        <img :src="imgSrc" :alt="data?.technology[techSet[activeTechnology]].name">
        <ul>
            <button :class="activeTechnology == 'vehicle' ? 'active' : ''"
                @click="activeTechnology = 'vehicle'">1</button>
            <button :class="activeTechnology == 'spaceport' ? 'active' : ''"
                @click="activeTechnology = 'spaceport'">2</button>
            <button :class="activeTechnology == 'capsule' ? 'active' : ''"
                @click="activeTechnology = 'capsule'">3</button>
        </ul>
        <div class="content">
            <h4>THE TERMINOLOGY...</h4>
            <h3>{{
                    data?.technology[techSet[activeTechnology]].name
            }}</h3>
            <p>
                {{ data?.technology[techSet[activeTechnology]].description }}
            </p>
        </div>
    </section>
</template>

<style scoped>
.background {
    background-image: url("../assets/technology/background-technology-desktop.jpg");
}

section {
    display: grid;
    justify-items: center;
}

h5 {
    font-size: 16px;
    color: var(--accent-color);

    display: flex;
    gap: 18px;

    margin-block: 24px 32px
}

span {
    z-index: -1;

    color: var(--accent-color);
    opacity: 0.25;
}

img {
    max-width: 100%;
}

ul {
    margin-block: 34px 26px;
    display: flex;
    gap: 16px;
}

button {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background-color: transparent;
    color: var(--accent-color);
    font-family: "Bellefair", serif;
    font-size: 16px;
}

button.active {
    background-color: var(--accent-color);
    color: var(--primary-color);
}

button:hover {
    border: 1px solid var(--accent-color);
}

h4 {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 14px;
    letter-spacing: 2.36px;

    margin-bottom: 9px;
}

h3 {
    font-size: 24px;
    text-transform: uppercase;
    color: var(--accent-color);
    margin-bottom: 16px;
}

p {
    font-size: 15px;
    text-align: center;

    margin-inline: 24px
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 35.05rem) and (max-width: 75rem) {
    .background {
        background-image: url("../assets/technology/background-technology-tablet.jpg");
    }

    h5 {
        padding-left: 38.5px;
        font-size: 20px;
        justify-self: flex-start;
    }

    img {
        width: 100%;
    }

    ul {
        margin-block: 56px 44px;
    }

    button {
        width: 60px;
        font-size: 24px;
    }

    h4 {
        font-size: 16px;
    }

    h3 {
        font-size: 40px;
    }

    p {
        font-size: 16px;
        max-width: 458px;
    }


}

@media (min-width: 55.01rem) {
    .background {
        background-image: url("../assets/technology/background-technology-desktop.jpg");
    }
}

@media (min-width: 75.01rem) {
    section {
        margin-left: 50.5px;

        grid-template-areas:
            "title title title"
            "select content image"
        ;
        align-items: center;
    }

    h5 {
        padding-left: 0;
        font-size: 28px;
        justify-self: flex-start;

        grid-area: title;
    }

    img {
        justify-self: end;
        height: 100%;

        grid-area: image;
    }

    ul {
        margin-block: 0;
        flex-direction: column;
        gap: 32px;
        justify-self: start;

        grid-area: select
    }

    button {
        width: 80px;
        font-size: 24px;
    }

    h4 {
        margin-bottom: 11px;
    }

    h3 {
        font-size: 56px;
        margin-bottom: 17px;
    }

    p {
        font-size: 18px;
        max-width: 500px;
        margin-inline: 0;

        text-align: left;
    }

    .content {
        grid-area: content;
        align-items: flex-start;
    }
}

@media (min-width: 1430px) {
    section {
        margin-left: 166.5px;
    }
}
</style>
