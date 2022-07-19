<script setup lang="ts">
import { inject, Ref, ref } from 'vue';

import type { Data } from '../types/index'

enum destinationsSet {
    moon,
    mars,
    europa,
    titan
}

type destination = "moon" | "mars" | "europa" | "titan"
const activeDestination = ref<destination>("moon")

const data = inject('data') as Ref<Data>

</script>

<template>
    <div class="background"></div>
    <section>
        <article class="part1">
            <h5><span>01</span>PICK YOUR DESTINATION</h5>
            <img :src="'src/assets/destination/image-' + activeDestination + '.png'"
                :alt="'image of ' + activeDestination">
        </article>
        <article class="part2">
            <nav>
                <ul>
                    <li>
                        <button :class="activeDestination == 'moon' ? 'active' : ''"
                            @click="activeDestination = 'moon'">MOON</button>
                    </li>
                    <li>
                        <button :class="activeDestination == 'mars' ? 'active' : ''"
                            @click="activeDestination = 'mars'">MARS</button>
                    </li>
                    <li>
                        <button :class="activeDestination == 'europa' ? 'active' : ''"
                            @click="activeDestination = 'europa'">EUROPA</button>
                    </li>
                    <li>
                        <button :class="activeDestination == 'titan' ? 'active' : ''"
                            @click="activeDestination = 'titan'">TITAN</button>
                    </li>
                </ul>
            </nav>
            <h2>{{ data?.destinations[destinationsSet[activeDestination]].name }}</h2>
            <p>
                {{ data?.destinations[destinationsSet[activeDestination]].description }}
            </p>
            <hr>
            <div class="wrapper">
                <div class="distance">
                    <h5 class="sub-title">AVG. DISTANCE</h5>
                    <div class="sub1">{{ data?.destinations[destinationsSet[activeDestination]].distance }}</div>
                </div>
                <div class="time">
                    <h5 class="sub-title">EST. TRAVEL TIME</h5>
                    <div class="sub1">{{ data?.destinations[destinationsSet[activeDestination]].travel }}</div>
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped>
.background {
    background-image: url("../assets/destination/background-destination-desktop.jpg");
}

section {
    display: flex;
    flex-direction: column;
    margin-block: 24px;
}

.part1,
.part2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.part1 {
    gap: 32px;
}

.part2 {
    margin-top: 26px;
}

h5 {
    font-size: 16px;
    color: var(--accent-color);

    display: flex;
    gap: 18px;
}

span {
    color: var(--accent-color);
    opacity: 0.25;
}

img {
    width: 170px;
    aspect-ratio: 1;
}

nav ul {
    display: flex;
    gap: 26px;

    list-style: none;
}

button {
    background-color: transparent;
    border: 0;
    padding-bottom: 8px;

    font-family: 'Barlow Condensed';
    letter-spacing: 2.36px;
    color: inherit;
}

button:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

button.active {
    color: var(--accent-color);
    border-bottom: 3px solid var(--accent-color);
}



h2 {
    margin-top: 20px;

    font-size: 56px;
    color: var(--accent-color);
    text-transform: uppercase;
}

p {
    max-width: 573px;
    margin-inline: 24px;

    font-family: "Barlow", sans-serif;
    text-align: center;
    font-size: 15px;
    letter-spacing: 0;
}

hr {
    width: 327px;
    height: 1px;
    color: #383B4B;
    margin-block: 32px;
}

.distance,
.time {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.sub-title {
    color: var(--secondary-color);
    font-size: 14px;
    letter-spacing: 2.36px;
}

.sub1 {
    font-family: "Bellefair", serif;
    color: var(--accent-color);
    font-size: 28px;
    text-transform: uppercase;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
}


@media (min-width: 35.05rem) and (max-width: 55rem) {
    .background {
        background-image: url("../assets/destination/background-destination-tablet.jpg");
    }

    section {
        margin-inline: 38.5px;
        margin-top: 40px
    }

    .part1 {
        gap: 60px;
    }

    .part2 {
        margin-top: 53px;
    }

    h5 {
        align-self: flex-start;

        font-size: 20px;
        letter-spacing: 3.38px;
    }

    img {
        width: 300px;
    }

    button {
        font-size: 16px;
        letter-spacing: 2.7px;
    }

    h2 {
        margin-top: 32px;
        margin-bottom: 8px;

        font-size: 80px;
    }

    p {
        font-size: 16px;
    }

    hr {
        width: 573px;
    }

    .time {
        margin: 0
    }

    .sub-title {
        align-self: center;
    }

    .wrapper {
        flex-direction: row;
        gap: 100px;
    }
}

@media (min-width: 55.01rem) {
    .background {
        background-image: url("../assets/destination/background-destination-desktop.jpg");
    }

    section {
        flex-direction: row;
        align-items: flex-end;

        margin-top: 76px;
        gap: 10.91vw
    }

    .part1 {
        align-items: flex-start;
        gap: 97px;

        margin-left: 15.97vw;
    }

    .part2 {
        margin-top: 0;
        margin-right: 11.32vw;

        align-items: flex-start;
    }

    h5 {
        font-size: 28px;
    }

    img {
        width: min(30.90vw, 470px);
    }

    button {
        font-size: 16px;
    }

    h2 {
        margin-top: 37px;
        margin-bottom: 14px;

        font-size: 100px;
    }

    p {
        text-align: left;
        margin-inline: 0;

        font-size: 18px;
        letter-spacing: 0px;
    }

    hr {
        margin-block: 54px 28px;
        width: 444px
    }

    .wrapper {
        flex-direction: row;
        gap: 79px
    }

    .distance,
    .time {
        align-items: flex-start;
    }
}

@media (min-width: 55rem) and (max-width: 1200px) {
    .part1 {
        margin-left: 5vw;
    }

    .part2 {
        margin-right: 5vw;
    }
}

@media (max-height: 850px) and (min-width: 55rem) {
    section {
        margin-top: 30px
    }
}
</style>
