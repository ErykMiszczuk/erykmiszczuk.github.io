<template>
    <footer class="bottom-bar">
        <ul class="social-links">
            <li class="social-links__item"><a class="link--social" href="https://www.instagram.com/erykmiszczuk/">Instagram</a></li>
            <li class="social-links__item"><a class="link--social" href="https://github.com/ErykMiszczuk">Github</a></li>
            <li class="social-links__item"><a class="link--social" href="https://www.linkedin.com/in/erykmiszczuk216/">Linkedin</a></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'bottom-bar'
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

.bottom-bar {
    background-color: colors.$colorPrimary;
    border-top: .1em solid colors.$colorSecondaryDark;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
}

.social-links__item {
    font-family: 'Spartan', sans-serif;
    font-size: clamp(.5em, 1.5vw, .75em);
    padding: clamp(.5em, 2vw, 1em);
}

.link--social {
    color: colors.$colorTextLight;

    &:link {
        color: colors.$colorTextLight;
        text-decoration: none;
    }

    &:visited {
        color: colors.$colorTextLight;
        text-decoration: none;
    }

    &:hover {
        color: colors.$colorSecondary;
        border-color: colors.$colorSecondary;
    }

    &:active {
        color: colors.$colorSecondaryDark;
        border-color: colors.$colorSecondaryDark;
    }
}
</style>