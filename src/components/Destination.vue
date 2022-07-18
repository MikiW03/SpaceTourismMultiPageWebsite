<script setup lang="ts">

</script>

<template>
    <div class="background"></div>
    <section>
        <article class="part1">
            <h5><span>01</span>PICK YOUR DESTINATION</h5>
            <img src="../assets/destination/image-moon.png" alt="Moon image">
        </article>
        <article class="part2">
            <nav>
                <ul>
                    <li>
                        <button class="active">MOON</button>
                    </li>
                    <li>
                        <button>MARS</button>
                    </li>
                    <li>
                        <button>EUROPA</button>
                    </li>
                    <li>
                        <button>TITAN</button>
                    </li>
                </ul>
            </nav>
            <h2>MOON</h2>
            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective
                and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11
                landing sites.
            </p>
            <hr>
            <div class="wrapper">
                <div class="distance">
                    <h5 class="sub-title">AVG. DISTANCE</h5>
                    <div class="sub1">384,400 KM</div>
                </div>
                <div class="time">
                    <h5 class="sub-title">EST. TRAVEL TIME</h5>
                    <div class="sub1">3 DAYS</div>
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
    margin-top: 24px;
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
    color: var(--accent-color)
}

p {
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

.time {
    margin-top: 32px;
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
        max-width: 573px;

        font-size: 16px;
    }

    hr {
        width: 573px;
    }

    .wrapper {
        display: flex;
        justify-content: center;
    }

    .time {
        margin: 0
    }

    .sub-title {
        align-self: center;
        padding-inline: 4.2em;
    }
}

@media (min-width: 55rem) {
    .background {
        background-image: url("../assets/destination/background-destination-mobile.jpg");
    }
}
</style>
