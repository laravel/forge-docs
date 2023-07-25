import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from 'pilgrim-theme'
import config from 'pilgrim-theme/config'

export default defineConfigWithTheme<ThemeConfig>({
    extends: config,
    title: 'Laravel Forge',
    description: 'Deploy your Laravel PHP application painlessly',
    base: '/docs/',
    cleanUrls: true,
    srcDir: 'src',

    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo.svg',
        },
        nav: [
            { text: 'Home', link: 'https://forge.laravel.com' },
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
                    { text: 'The Basic', link: '/sites/the-basics' },
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