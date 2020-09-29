<template>
    <div>
        <nuxt-content :document="page" />
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
.nuxt-content {
    margin: clamp(.05em, 6vw, 4em) clamp(.05em, 6vw, 5em);
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;

    h1 {
        font-family: 'Spartan', sans-serif, 
    }
}
</style>