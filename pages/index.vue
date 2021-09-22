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
        const projects = await $content(`${app.i18n.locale}/projects`).limit(5).fetch()
        return {
            page,
            projects
        }
    }
}
</script>

<style lang="scss">
    @use '@/assets/scss/content.scss';
</style>