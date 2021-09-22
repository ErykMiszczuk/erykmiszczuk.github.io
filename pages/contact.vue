<template>
    <div>
        <nuxt-content :document="page" />
    </div>
</template>

<script>
export default {
    layout: 'main',
    async asyncData({ $content, app }) {
        const page = await $content(`${app.i18n.locale}/contact_${app.i18n.locale}`).fetch()
        return {
            page
        }
    }
}
</script>

<style lang="scss">
    @use '@/assets/scss/content.scss';
</style>