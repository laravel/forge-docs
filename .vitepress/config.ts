import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from '@hempworks/pilgrim'
import config from '@hempworks/pilgrim/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Laravel Forge',
    description: 'Deploy your Laravel PHP application painlessly',
    base: '/docs/',
    cleanUrls: false,
    srcDir: 'src',

    head: [
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
        logo: {
            light: '/logo.svg',
            dark: '/logo.svg',
        },
        nav: [
            { text: 'Laravel Forge', link: 'https://forge.laravel.com' },
            { text: 'Video Tutorials', link: 'https://laracasts.com/series/learn-laravel-forge-2022-edition' },
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'CLI', link: '/cli' }
                ],
            },
            {
                text: "Accounts",
                items: [
                    { text: 'Your Account', link: '/accounts/your-account' },
                    { text: 'Circles', link: '/accounts/circles' },
                    { text: 'Source Control', link: '/accounts/source-control' },
                    { text: 'SSH', link: '/accounts/ssh' },
                    { text: 'API', link: '/accounts/api' },
                    { text: 'Cookbook', link: '/accounts/cookbook' },
                    { text: 'Tags', link: '/accounts/tags' },
                ],
            },
            {
                text: "Servers",
                items: [
                    { text: 'Server Providers', link: '/servers/providers' },
                    { text: 'Server Types', link: '/servers/types' },
                    { text: 'Management', link: '/servers/management' },
                    { text: 'Root Access / Security', link: '/servers/provisioning-process' },
                    { text: 'SSH Keys / Git Access', link: '/servers/ssh' },
                    { text: 'PHP', link: '/servers/php' },
                    { text: 'Packages', link: '/servers/packages' },
                    { text: 'Recipes', link: '/servers/recipes' },
                    { text: 'Load Balancing', link: '/servers/load-balancing' },
                    { text: 'Nginx Templates', link: '/servers/nginx-templates' },
                    { text: 'Backups', link: '/servers/backups' },
                    { text: 'Monitoring', link: '/servers/monitoring' },
                    { text: 'Cookbook', link: '/servers/cookbook' },
                ],
            },
            {
                text: "Sites",
                items: [
                    { text: 'The Basics', link: '/sites/the-basics' },
                    { text: 'Deployments', link: '/sites/deployments' },
                    { text: 'Commands', link: '/sites/commands' },
                    { text: 'Packages', link: '/sites/packages' },
                    { text: 'Queues', link: '/sites/queues' },
                    { text: 'Security Rules', link: '/sites/security-rules' },
                    { text: 'Redirects', link: '/sites/redirects' },
                    { text: 'SSL', link: '/sites/ssl' },
                    { text: 'User Isolation', link: '/sites/user-isolation' },
                    { text: 'Cookbook', link: '/sites/cookbook' },
                ],
            },
            {
                text: "Resources",
                items: [
                    { text: 'Daemons', link: '/resources/daemons' },
                    { text: 'Databases', link: '/resources/databases' },
                    { text: 'Caches', link: '/resources/caches' },
                    { text: 'Network', link: '/resources/network' },
                    { text: 'Scheduler', link: '/resources/scheduler' },
                    { text: 'Integrations', link: '/resources/integrations' },
                    { text: 'Cookbook', link: '/resources/cookbook' },
                ],
            },
        ],
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search Forge Docs...',
            },
        }
    },
    vite: {
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
    }
})
