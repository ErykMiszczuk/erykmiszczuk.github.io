<template>
    <div>
        <h1>{{ $t('greetings') }}</h1>
        <nuxt-content :document="page" />
    </div>
</template>

<script>
export default {
    layout: 'main',
    async asyncData({ $content }) {
        const page = await $content('home').fetch()

        return {
            page
        }
    }
}
</script>