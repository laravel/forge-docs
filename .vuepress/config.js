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
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],

    themeConfig: {
        repo: 'laravel/forge-docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',

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
