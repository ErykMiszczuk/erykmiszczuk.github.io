export default {
    components: true,
    modules: [
        'nuxt-i18n',
        '@nuxt/content'
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
    },
    css: [
        '@/assets/scss/_colors.scss'
    ],
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Spartan:wght@400;600&display=swap'
            }
        ],
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1'
            }
        ]
    }
}