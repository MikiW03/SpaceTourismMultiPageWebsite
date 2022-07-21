<script setup lang="ts">
import { computed, inject, Ref, ref } from 'vue';

import type { Data } from '../types/index'

enum crewMatesSet {
    hurley,
    shuttleworth,
    glover,
    ansari
}

type crewMate = "hurley" | "shuttleworth" | "glover" | "ansari"
const activeCrewMate = ref<crewMate>("hurley")
const activeCrewMateIndex = computed(() => crewMatesSet[activeCrewMate.value])

const data = inject('data') as Ref<Data>
const touched = ref("")

const getLastName = (fullName: string) => fullName.split(" ")[fullName.split(" ").length - 1].toLocaleLowerCase()

const leftSwipe = () => {
    if (activeCrewMateIndex.value > 0) {
        activeCrewMate.value = getLastName(data?.value.crew[activeCrewMateIndex.value - 1].name) as crewMate
    }
}
const rightSwipe = () => {
    if (activeCrewMateIndex.value < 3) {
        activeCrewMate.value = getLastName(data?.value.crew[activeCrewMateIndex.value + 1].name) as crewMate
    }
}


// SWIPE HANDLING

// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);

var xDown: number | null;
var yDown: number | null;

function getTouches(evt: TouchEvent) {
    return evt.touches
}

function handleTouchStart(evt: TouchEvent) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt: TouchEvent) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* right swipe */
            rightSwipe()
        } else {
            /* left swipe */
            leftSwipe()
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
}
</script>


<template>
    <div class="background"></div>
    <section @touchstart="handleTouchStart($event)" @touchmove="handleTouchMove($event)">
        <h5><span>02</span>MEET YOUR CREW</h5>
        <div class="image-box">
            <img :src="data?.crew[activeCrewMateIndex].images.png.slice(1)"
                :alt="'Image of ' + data?.crew[activeCrewMateIndex].name">
        </div>
        <ul>
            <label class="container">
                <input type="radio" name="radio" value="hurley" v-model="activeCrewMate">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="radio" name="radio" value="shuttleworth" v-model="activeCrewMate">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="radio" name="radio" value="glover" v-model="activeCrewMate">
                <span class="checkmark"></span>
            </label>
            <label class="container">
                <input type="radio" name="radio" value="ansari" v-model="activeCrewMate">
                <span class="checkmark"></span>
            </label>
        </ul>
        <h4>{{ data?.crew[activeCrewMateIndex].role }}</h4>
        <h3>{{
                data?.crew[activeCrewMateIndex].name
        }}</h3>
        <p>
            {{ data?.crew[activeCrewMateIndex].bio }}
        </p>
    </section>
</template>

<style scoped>
.background {
    background-image: url("../assets/crew/background-crew-mobile.jpg");
}

section {
    display: grid;
    justify-items: center;
    margin: 24px;

    grid-template-areas:
        "page-title"
        "image"
        "select"
        "title"
        "name"
        "description"
    ;
}

h5 {
    font-size: 16px;
    color: var(--accent-color);

    display: flex;
    gap: 18px;

    grid-area: page-title;
}

span {
    z-index: -1;

    color: var(--accent-color);
    opacity: 0.25;
}

.image-box {
    width: 100%;
    height: 222px;
    margin-top: 32px;
    margin-bottom: 32px;
    text-align: center;
    border-bottom: 1px solid #383B4B;
    z-index: -10;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    grid-area: image;
}

img {
    max-height: 100%;
}

ul {
    display: flex;
    gap: 1em;
    overflow: hidden;
    min-height: 10px;

    list-style-type: none;

    grid-area: select
}

.container {
    width: 10px;
    height: 10px;
    display: block;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.checkmark {
    z-index: -1;

    position: absolute;
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    background-color: var(--accent-color);
    opacity: 0.17;
    border-radius: 50%;
}

.checkmark:hover {
    opacity: .5
}

input:checked~.checkmark {
    opacity: 1
}

h4 {
    z-index: -1;
    margin-top: 32px;

    font-size: 16px;
    text-transform: uppercase;
    color: var(--accent-color);
    opacity: 0.5;

    grid-area: title
}

h3 {
    margin-block: 8px 16px;

    font-size: 24px;
    text-transform: uppercase;

    grid-area: name;
}

p {
    font-size: 15px;
    text-align: center;

    grid-area: description;
}

@media (min-width: 35.05rem) and (max-width: 70rem) {
    .background {
        background-image: url("../assets/crew/background-crew-tablet.jpg");
    }

    section {
        grid-template-areas:
            "page-title"
            "title"
            "name"
            "description"
            "select"
            "image"
        ;

        margin-bottom: 0;
        margin-top: 40px;

        height: calc(100vh - 128px);
    }

    h5 {
        justify-self: start;

        font-size: 20px;
    }

    h4 {
        font-size: 24px;

        margin-top: 60px;
    }

    h3 {
        font-size: 40px;
    }

    p {
        font-size: 16px;
        max-width: 458px;
        margin-bottom: 40px;
    }

    .image-box {
        align-self: flex-end;

        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 0;

        height: 572px;
    }

    img {
        height: 572px
    }
}

@media (min-width: 55rem) {
    .background {
        background-image: url("../assets/crew/background-crew-desktop.jpg");
    }
}

@media (min-width: 70rem) {

    section {
        grid-template-areas:
            "page-title image"
            "title image"
            "name image"
            "description image"
            "select image"
        ;
        justify-items: start;

        margin-inline: 137px;
        margin-top: 76px;
        margin-bottom: 0;

        height: calc(100vh - 40px - 89.5px - 75px);
    }

    h5 {
        font-size: 28px;
    }

    h4 {
        font-size: 32px;
        margin-top: 154px;
    }

    h3 {
        font-size: 56px;
        margin-block: 15px 27px;
    }

    p {
        max-width: 444px;
        text-align: left;
        font-size: 18px;
    }

    ul {
        gap: 24px;
        margin-top: 120px;
        margin-bottom: 94px;
        min-height: 15px;
    }

    .container,
    .checkmark {
        width: 15px;
        height: 15px;
    }

    .image-box {
        margin: 0;
        height: 100%;

        border: 0;
    }

}
</style>
