module.exports = {
    title: "Laravel Forge",
    base: '/docs/',

    markdown: {
        externalLinks: { target: '_self', rel: false }
    },

    plugins: [
        ['sitemap', {
            hostname: 'https://forge.laravel.com',
        }]
    ],

    head: [
        ['link', {
            rel: 'home',
            href: 'https://forge.laravel.com',
        }],
        ['link', {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'https://forge.laravel.com/apple-touch-icon.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: 'https://forge.laravel.com/favicon-16x16.png',
        }],
        ['link', {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: 'https://forge.laravel.com/favicon-32x32.png',
        }],
        ['link', {
            rel: 'manifest',
            href: 'https://forge.laravel.com/site.webmanifest',
        }],
        ['link', {
            rel: 'mask-icon',
            href: 'https://forge.laravel.com/safari-pinned-tab.svg',
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#18b69b',
        }],
        ['meta', {
            name: 'msapplication-TileImage',
            content: 'forge.laravel.com/mstile-144x144.png',
        }],
        ['meta', {
            name: 'theme-color',
            content: '#18b69b',
        }],
        ['link', {
            rel: 'preconnect',
            crossorigin: true,
            href: 'https://fonts.gstatic.com',
        }],
        ['link', {
            href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;800;900&display=swap',
            rel: 'stylesheet',
        }],
        ['meta', {
            property: 'og:image',
            content: 'https://forge.laravel.com/social-share.png',
        }],
        ['meta', {
            property: 'twitter:card',
            content: 'summary_large_image',
        }],
        ['meta', {
            property: 'twitter:image',
            content: 'https://forge.laravel.com/social-share.png',
        }],
    ],

    themeConfig: {
        logo: '/assets/img/logo.svg',
        displayAllHeaders: false,
        activeHeaderLinks: false,
        searchPlaceholder: 'Press / to search',
        lastUpdated: 'Last Updated', // string | boolean
        sidebarDepth: 0,

        nav: [
            { text: 'Home', link: 'https://forge.laravel.com', target: '_self', rel: false }
        ],

        sidebar: {
            '/1.0/': require('./1.0')
        },
    },
}
