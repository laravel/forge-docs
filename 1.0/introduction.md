# Introduction

[[toc]]

## What is Forge?

Laravel Forge is a server management and application deployment service. Forge takes the pain and hassle out of deploying servers and can be used to launch your next website. Whether your app is built with a framework such as <a href="https://github.com/laravel/laravel">Laravel</a>, <a href="https://github.com/symfony/symfony">Symfony</a>, <a href="https://statamic.com/">Statamic</a>, <a href="https://github.com/WordPress/WordPress">WordPress</a> or is just a vanilla PHP application - Forge is the solution for you.

We live and breath PHP here at Forge, but Forge is also ready to handle other tech stacks too, such as NodeJS.

After connecting to your preferred [server provider](http://localhost:8080/docs/1.0/servers/providers.html), Forge will be able to provision new servers for you in minutes. We offer you the ability to provision [multiple server types](https://forge.laravel.com/docs/1.0/servers/types.html) (e.g. web servers, database servers, load balancers) with the option of having the following services configured for you to hit the ground running:

- Nginx
- PHP
- MySQL / Postgres / MariaDB (if selected)
- Logrotate
- UFW Firewall
- OPcache
- Memcached
- Redis
- MeiliSearch
- Automatic Security Updates
- And more!

In addition, Forge can assist you in managing scheduled jobs, queue workers, SSL certificates, and more. After a server has provisioned, you can then deploy your PHP / Laravel applications or WordPress applications using the Forge UI dashboard.

## Learning More

Laracasts has a comprehensive and **free** [video course](https://laracasts.com/series/learn-laravel-forge) on Forge. Feel free to review this course if you are new to Laravel Forge and want a video overview of its features.

:::tip Open Source Documentation
Forge's documentation is completely [open source](https://github.com/laravel/forge-docs)! Please consider adding to it if you find something missing.
:::

## Forge IP Addresses

If you are restricting SSH access to your server using IP allow lists, you should allow the following IP addresses:

- `159.203.161.246`
- `159.203.163.240`
- `68.183.145.91`

You can also access the IP addresses via the following URL: [https://forge.laravel.com/ips-v4.txt](https://forge.laravel.com/ips-v4.txt). This is particulary useful if you intend on automating your network or firewall infrastructure.

Your server should also allow incoming and outgoing traffic from `forge.laravel.com`.

:::warning IP Address Changes

The Forge IP addresses may change from time to time; however, we will always email you several weeks prior to an IP address change.
:::

## Forge API

Forge provides a powerful API that allows you to manage your servers programatically, providing access to the vast majority of Forge features. You can find the Forge API documentation [here](https://forge.laravel.com/api-documentation).

## Found Something Wrong?

If you find something in the documentation that is confusing or incorrect, please consider submitting a pull request on [GitHub](https://github.com/laravel/forge-docs).

