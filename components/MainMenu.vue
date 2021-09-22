<template>
    <nav class="main-menu">
        <ul class="menu-list">
            <li class="menu-list__item"><NuxtLink :to="localePath('/')" class="main-menu__link">{{ $t('pages.main')}}</NuxtLink></li>
            <li class="menu-list__item"><NuxtLink :to="localePath('/projects')" class="main-menu__link">{{ $t('pages.projects')}}</NuxtLink></li>
            <li class="menu-list__item"><NuxtLink :to="localePath('/contact')" class="main-menu__link">{{ $t('pages.contact')}}</NuxtLink></li>
        </ul>
        <div class="main-menu__language-switcher">
            <nuxt-link
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="main-menu__link"
            >
                {{ locale.code }}
            </nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'main-menu',
    computed: {
        availableLocales() {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

.main-menu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
}

.main-menu__language-switcher {
    border-left: 1px solid colors.$colorSecondaryDark;
    padding: 0px .5em;
}

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
    .main-menu {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
    }

    .main-menu__language-switcher {
        border-left: none;
        border-top: 1px solid colors.$colorSecondaryDark;
        margin-top: 1em;
        padding: .25em .5em;
    }

    .menu-list {
        margin-top: 2em;
        flex-direction: column;
    }

    .menu-list__item{
        margin: .5em;
    }
}
</style>


