<template>
    <nav class="main-menu">
        <ul class="menu-list">
            <li class="menu-list__item"><NuxtLink :to="localePath('/')">{{ $t('pages.main')}}</NuxtLink></li>
            <li class="menu-list__item"><NuxtLink :to="localePath('/projects')">{{ $t('pages.projects')}}</NuxtLink></li>
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
    border-bottom: .1em solid colors.$colorSecondary;
}

.menu-list__item {
    display: block;
    font-family: 'Spartan', sans-serif;
    color: colors.$colorSecondary;
    padding: .5em 2em;
    border: .1em solid colors.$colorSecondary;
    border-radius: 2em;
    text-transform: uppercase;

}
</style>


