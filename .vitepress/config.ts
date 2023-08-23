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
            { text: 'Laravel Forge', link: 'https://laravel.com/forge.html' },
            { text: 'Video Tutorials', link: 'https://laracasts.com/series/learn-laravel-forge-2022-edition.html' },
        ],
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: 'Introduction', link: '/introduction.html' },
                    { text: 'CLI', link: '/cl.htmli' }
                ],
            },
            {
                text: "Accounts",
                items: [
                    { text: 'Your Account', link: '/accounts/your-account.html' },
                    { text: 'Circles', link: '/accounts/circles.html' },
                    { text: 'Source Control', link: '/accounts/source-control.html' },
                    { text: 'SSH', link: '/accounts/ssh.html' },
                    { text: 'API', link: '/accounts/api.html' },
                    { text: 'Cookbook', link: '/accounts/cookbook.html' },
                    { text: 'Tags', link: '/accounts/tags.html' },
                ],
            },
            {
                text: "Servers",
                items: [
                    { text: 'Server Providers', link: '/servers/providers.html' },
                    { text: 'Server Types', link: '/servers/types.html' },
                    { text: 'Management', link: '/servers/management.html' },
                    { text: 'Root Access / Security', link: '/servers/provisioning-process.html' },
                    { text: 'SSH Keys / Git Access', link: '/servers/ssh.html' },
                    { text: 'PHP', link: '/servers/php.html' },
                    { text: 'Packages', link: '/servers/packages.html' },
                    { text: 'Recipes', link: '/servers/recipes.html' },
                    { text: 'Load Balancing', link: '/servers/load-balancing.html' },
                    { text: 'Nginx Templates', link: '/servers/nginx-templates.html' },
                    { text: 'Backups', link: '/servers/backups.html' },
                    { text: 'Monitoring', link: '/servers/monitoring.html' },
                    { text: 'Cookbook', link: '/servers/cookbook.html' },
                ],
            },
            {
                text: "Sites",
                items: [
                    { text: 'The Basics', link: '/sites/the-basics.html' },
                    { text: 'Deployments', link: '/sites/deployments.html' },
                    { text: 'Commands', link: '/sites/commands.html' },
                    { text: 'Packages', link: '/sites/packages.html' },
                    { text: 'Queues', link: '/sites/queues.html' },
                    { text: 'Security Rules', link: '/sites/security-rules.html' },
                    { text: 'Redirects', link: '/sites/redirects.html' },
                    { text: 'SSL', link: '/sites/ssl.html' },
                    { text: 'User Isolation', link: '/sites/user-isolation.html' },
                    { text: 'Cookbook', link: '/sites/cookbook.html' },
                ],
            },
            {
                text: "Resources",
                items: [
                    { text: 'Daemons', link: '/resources/daemons.html' },
                    { text: 'Databases', link: '/resources/databases.html' },
                    { text: 'Caches', link: '/resources/caches.html' },
                    { text: 'Network', link: '/resources/network.html' },
                    { text: 'Scheduler', link: '/resources/scheduler.html' },
                    { text: 'Integrations', link: '/resources/integrations.html' },
                    { text: 'Cookbook', link: '/resources/cookbook.html' },
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
