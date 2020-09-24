<template>
    <nav class="main-menu">
        <ul class="menu-list">
            <li class="menu-list__item"><NuxtLink :to="localePath('/')" class="main-menu__link">{{ $t('pages.main')}}</NuxtLink></li>
            <li class="menu-list__item"><NuxtLink :to="localePath('/projects')" class="main-menu__link">{{ $t('pages.projects')}}</NuxtLink></li>
            <li class="menu-list__item"><NuxtLink :to="localePath('/contact')" class="main-menu__link">{{ $t('pages.contact')}}</NuxtLink></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'main-menu'
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

.menu-list {
    list-style-type: none;
    margin: 0;
    padding: clamp(.5em, 2vw, 1em);
    display: flex;
    flex-direction: row;
}

.main-menu__link {
    display: block;
    font-family: 'Spartan', sans-serif;
    white-space: nowrap;
    color: colors.$colorTextLight;
    padding: .5em 2em .3em 2em;
    border: .1em solid transparent;
    border-radius: 2em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    line-height: 1em;
    height: 1em;
    text-align: center;

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

.nuxt-link-exact-active {
    position: relative;
    
    &::after {
        content: " ";
        position: relative;
        top: .3em;
        left: 15%;
        display: block;
        background-color: colors.$colorSecondary;
        width: 70%;
        height: .1em;
        border-radius: 2px;
    }
}

@media (max-width: 768px) {
    .menu-list {
        margin-top: 2em;
        flex-direction: column;
    }
}
</style>


