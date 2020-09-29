<template>
    <div>
        <nuxt-content :document="page" />
        <h2 class="content__heading">{{ $t('pages.projects') }}</h2>
        <nuxt-content
            v-for="(project, key) in projects"
            :key="key"
            :document="project"
        />
    </div>
</template>

<script>
export default {
    layout: 'main',
    async asyncData({ $content, app }) {
        const page = await $content(`${app.i18n.locale}/home_${app.i18n.locale}`).fetch()
        const projects = await $content(`${app.i18n.locale}/projects`).fetch()
        return {
            page,
            projects
        }
    }
}
</script>

<style lang="scss">
@use '@/assets/scss/_colors.scss';

.nuxt-content {
    margin: clamp(.05em, 6vw, 4em) clamp(.05em, 6vw, 5em);
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;

    h1 {
        font-family: 'Spartan', sans-serif, 
    }
}

.content__heading {
    font-family: 'Spartan', sans-serif;
    text-align: center;
    font-weight: 700;
    position: relative;

    &::after {
        content: " ";
        position: relative;
        top: .3em;
        left: 40%;
        display: block;
        background-color: colors.$colorSecondary;
        width: 20%;
        height: .1em;
        border-radius: 2px;
    }
}
</style>