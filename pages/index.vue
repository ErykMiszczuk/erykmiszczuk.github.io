<template>
    <div>
        <h1>{{ $t('greetings') }}</h1>
        <nuxt-content :document="page" />
    </div>
</template>

<script>
export default {
    layout: 'main',
    async asyncData({ $content, app }) {
        const page = await $content(`home_${app.i18n.locale}`).fetch()

        return {
            page
        }
    }
}
</script>