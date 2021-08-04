module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ['introduction'],
    },
    {
        title: "Accounts",
        collapsable: false,
        children: prefix('accounts', [
            'your-account',
            'circles',
            'source-control',
            'ssh',
            'api',
            'cli',
            'cookbook',
            'tags',
        ]),
    },
    {
        title: "Servers",
        collapsable: false,
        children: prefix('servers', [
            'providers',
            'types',
            'management',
            'ssh',
            'php',
            'load-balancing',
            'backups',
            'monitoring',
            'recipes',
            'nginx-templates',
            'provisioning-process',
            'cookbook',
        ]),
    },
    {
        title: "Sites",
        collapsable: false,
        children: prefix('sites', [
            'the-basics',
            'deployments',
            'commands',
            'queues',
            'redirects',
            'security-rules',
            'ssl',
            'user-isolation',
            'cookbook',
        ]),
    },
    {
        title: "Resources",
        collapsable: false,
        children: prefix('resources', [
            'daemons',
            'databases',
            'caches',
            'network',
            'scheduler',
            'integrations',
            'cookbook',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
