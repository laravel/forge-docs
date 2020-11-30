# The Basics

[[toc]]

## Overview

There are two important parts that you need to know that make up sites in Laravel: the site and the project. The site is the domain and configuration, that Forge uses to configure your server to respond with. The project is the code that responds to any HTTP requests.

## Creating Sites

When creating a site, we have several options that we can provide:

- Root domain - This is the domain name that the server should respond to.
- Aliases - These domains will also respond to requests.
- Project Type - Whether your project is a PHP/Laravel, Static HTML or Symfony codebase.
- Web Directory - For Laravel applications this is `/public`, but other projects may live elsewhere.
- PHP Version - If you have multiple versions of PHP installed on your server, you can select which one to use.
- Wildcard Sub-Domains - This would make `example.com` and `*.example.com` respond with the same project.
- Website Isolation - Whether the PHP-FPM process should run under its own user account. [Learn about Website Isolation here](/1.0/sites/user-isolation.html).
- Create Database - Quickly create a new database for your site.

## Projects

Once the site has been created in Forge, you can then install a project. Projects contain the actual code that make your application work. Forge has three options that you can use; Git repository, Wordpress or phpMyAdmin.

### Git Repository

Before you can install a custom Git repository, you must first make sure that you have [connected your Source Control provider](/1.0/accounts/source-control.html) in your account.

Once you have connected your accounts, you may choose the provider from one of the available options. If you're self-hosting your own code or using a provider that Forge doesn't include first-party support for, you may also select the **Custom** option. When using either the Bitbucket or Custom provider option, you will need to manually add the Forge SSH key to the provider.

You will also need to provide the repository name. For GitHub, GitLab and Bitbucket providers you should provide the name in `user/repository` format, e.g. `laravel/laravel`. Self-hosted projects should use the full SSH URL, e.g. `git@laravel.com:laravel/laravel.git`. You should also change the branch if you do not use `master` by default.

Before you install the repository, you can also decide whether or not to install Composer dependencies. If your project does not contain a `composer.json` file, you should uncheck this option.

### WordPress

Forge can install [WordPress](https://wordpress.org) automatically for you, so you can get right into writing your next blog post.

If you haven't done so already, you should create a new database and database user. This is used by WordPress to store all of your blog posts.

Once installed, you can visit your site's domain name and continue the WordPress installation from your browser.

When installing WordPress into your site, Forge will also install the [WordPress CLI](https://wp-cli.org/), so that you can manage your installation with the `wp` command.

:::tip Securing WordPress

You should continue installing WordPress as soon as Forge has installed it for you, so that it's made secure with your username and password. You could also choose to create a new [Security Rule](/1.0/sites/security-rules.html) before you install WordPress, so that your installation is password protected.
:::

### phpMyAdmin

Forge also comes with support for installing [phpMyAdmin](https://phpmyadmin.net) for you, so you can manage your databases from anywhere.

If you haven't done so already, you should create a new database and database user. This is used by phpMyAdmin to store the configuration of your databases and users.

Once Forge has installed phpMyAdmin, you can then login to your installation using any of your database username and password combinations.

:::warning Server Sizes

Some very small server sizes, such as `t2.nano` on AWS, do not have enough resources to run an application like phpMyAdmin.
:::

## Default Sites

When you initially provision a Forge server, Forge creates a single site on the server named `default`. This site may be accessed by visiting the IP address of your server in your web browser. This is convenient because sometimes you may not have a particular domain you want to associate with a given server immediately after provisioning.

When you are ready to transition your application to an official domain name, you may rename the site in the "Meta" tab of the site's management panel. After renaming the site, you will no longer be able to access it using the server's IP address. You should then add a DNS `A` record for the domain that points to your server's IP address.

### Default Nginx Template

Below is an example of the default Nginx site configuration that is used by Laravel Forge. Additional Nginx templates may be created in Forge using the "Nginx Templates" panel within your server's management dashboard:

```nginx
# FORGE CONFIG (DO NOT REMOVE!)
include forge-conf/your-domain.com/before/*;

server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com;
    server_tokens off;
    root /home/forge/your-domain.com;

    # FORGE SSL (DO NOT REMOVE!)
    # ssl_certificate
    # ssl_certificate_key

    ssl_protocols TLSv1.2 TLSv1.3;
    # ssl_ciphers XXXXXXX
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    # FORGE CONFIG (DO NOT REMOVE!)
    include forge-conf/your-domain.com/server/*;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/your-domain.com-error.log error;

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php8.0-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}

# FORGE CONFIG (DO NOT REMOVE!)
include forge-conf/your-domain.com/after/*;
```
