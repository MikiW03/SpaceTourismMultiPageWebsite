<script setup lang="ts">

</script>

<template>
    <div class="background"></div>
    <section>
        <article>
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                kind
                of
                on
                the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </article>
        <router-link to="/destination">EXPLORE</router-link>
    </section>
</template>

<style scoped>
.background {
    background-image: url("../assets/home/background-home-mobile.jpg");
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 81px;
}

article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    margin-top: 48px;
}

h5 {
    font-size: 16px;
}

h1 {
    font-size: 80px;
    color: var(--accent-color)
}

p {
    font-size: 15px;
    text-align: center;
    letter-spacing: 0;

    margin-inline: 24px;
    max-width: 444px;
}

a {
    border: 0;
    border-radius: 50%;
    background-color: var(--accent-color);

    width: 150px;
    aspect-ratio: 1;

    font-family: "Bellefair";
    font-size: 20px;
    letter-spacing: 1.25px;
    color: #0B0D17;
    text-decoration: none;

    display: grid;
    place-content: center;
}

a:hover {
    box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1036);
}

@media (min-width: 35.05rem) and (max-width: 55rem) {
    .background {
        background-image: url("../assets/home/background-home-tablet.jpg");
    }

    section {
        gap: 156px;
    }

    article {
        gap: 24px;
        margin-top: 106px;
    }

    h5 {
        font-size: 20px;
    }

    h1 {
        font-size: 150px;
    }

    p {
        font-size: 16px;
    }

    a {
        width: 242px;

        font-size: 32px;
        letter-spacing: 2px;
    }
}

@media (min-width: 55rem) {
    .background {
        background-image: url("../assets/home/background-home-desktop.jpg");
    }

    section {
        flex-direction: row;
        gap: 396px;
        justify-content: center;
        align-items: flex-end;
        margin-top: 251px;
        margin-inline: 100px;
    }

    article {
        align-items: flex-start;
        margin-top: 0;
        gap: 24px;
    }

    h5 {
        font-size: clamp(20px, 2vw, 28px);
        letter-spacing: 4.72px;
    }

    h1 {
        font-size: clamp(100px, 10.5vw, 150px);
    }

    p {
        font-size: 18px;

        margin-inline: 0;
        text-align: left;
    }

    a {
        width: 274px;

        font-size: 32px;
        letter-spacing: 2px;
    }
}

@media (min-width: 55.05rem) and (max-width: 1320px) {
    section {
        gap: clamp(15px, 7vw, 100px);
    }
}
</style>
