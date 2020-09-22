export default {
    components: true,
    modules: [
        'nuxt-i18n'
    ],
    i18n: {
        baseUrl: 'https://erykmiszczuk.github.io',
        locales: [
            { code: 'pl', iso: 'pl-PL', file: 'pl.json'},
            { code: 'en', iso: 'en-US', file: 'en.json'}
        ],
        defaultLocale: 'pl',
        strategy: 'prefix',
        langDir: 'locales/',
        lazy: true,
        detectBrowserLanguage: {
            onlyOnRoot: true
        }
    }
}