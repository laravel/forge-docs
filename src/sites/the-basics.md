---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/the-basics.html'
---
# The Basics

[[toc]]

## Creating Sites

When creating a new site on your Forge server, a variety of configuration options are available to you:

- **Root Domain:** The domain name that the server should respond to.
- **Aliases:** Additional domains that the site should respond to.
- **Project Type:** This configuration setting indicates if the project installed for your site will be a General PHP / Laravel project, Laravel Octane, a Symfony project, or a static HTML site. This setting is used to determine the structure of the Nginx configuration file that is created for your site.
- **Web Directory:** The directory that should be publicly accessible via the Internet. For Laravel applications, this is typically the `/public` directory.
- **PHP Version:** If you have multiple versions of PHP installed on your server, you can select which one should be used to serve the site.
- **Nginx Template**: If you have configured any [Nginx Templates](/1.0/servers/nginx-templates.html) for you server, you will have the option to select one as the site's Nginx configuration, otherwise Forge will utilise its default Nginx configuration for you new site.
- **Wildcard Sub-Domains:** This configuration setting will enable the site to respond to any subdomain under its configured root domain.
- **Website Isolation:** This configuration setting indicates whether the PHP-FPM process should run under its own user account. You may learn more about website isolation by consulting the [full documentation regarding this feature](/1.0/sites/user-isolation.html).
- **Create Database:** This setting indicates if you would like a new database to be created for your site.

### Circle Permissions

You may grant a circle member authority to create and delete sites by granting the `site:create` and `site:delete` permissions.

## Apps / Projects

Once the site has been created in Forge, you can then install an application or project. Projects contain the actual source code of your application. Forge can install three types of applications: an application that exists within a [Git repository](/1.0/sites/the-basics.html#git-repository), [WordPress](/1.0/sites/the-basics.html#wordpress), or [phpMyAdmin](/1.0/sites/the-basics.html#phpmyadmin). 

### Git Repository

:::tip Source Control Providers

Before you can install a Git repository, you must first ensure that you have [connected your source control provider](/1.0/accounts/source-control.html) to your Forge account.
:::

Once you have connected your source control provider accounts, you may choose the provider from one of the available options. If you're self-hosting your own code or using a provider that Forge doesn't include first-party support for, you may select the **Custom** option. When using either the Bitbucket or Custom provider option, you will need to manually add the Forge SSH key to the provider.

You will also need to provide the repository name. For GitHub, GitLab, and Bitbucket providers, you should provide the name in `user/repository` format, e.g. `laravel/laravel`. Self-hosted projects should use the full SSH URL, e.g. `git@laravel.com:laravel/laravel.git`.

Before you install the repository, you can also decide whether or not to install Composer dependencies. If your project does not contain a `composer.json` file, you should uncheck this option.

#### Deploy Keys

Sometimes you may wish to only grant the Forge user access to a specific repository. This is typically accomplished by adding an SSH key to that repository's "Deploy Keys" on the repository's GitHub, GitLab, or Bitbucket dashboard.

When adding a new site to the server, you may choose to generate a Deploy Key for that application. Once the key has been generated, you can add it to the repository of your choice via your source control provider's dashboard - allowing the server to clone that specific repository.

### WordPress

Forge can also install [WordPress](https://wordpress.org) for you, so you can get right into writing your next blog post.

If you haven't done so already, you should [create a new database](/1.0/resources/databases.html#creating-databases) and database user. This is used by WordPress to store all of your blog posts.

Once WordPress has been installed, you can visit your site's domain name and continue the WordPress installation from your browser.

When installing WordPress for your site, Forge will also install the [WordPress CLI](https://wp-cli.org/) so that you can manage your installation with the `wp` terminal command.

:::danger Securing WordPress

You should continue installing WordPress as soon as Forge has installed it for you, so that it's made secure with your username and password. You could also choose to create a new [Security Rule](/1.0/sites/security-rules.html) before you install WordPress so that your installation is password protected.
:::

### phpMyAdmin

Forge also supports installing [phpMyAdmin](https://phpmyadmin.net), so you can manage your databases from anywhere.

If you haven't done so already, you should [create a new database](/1.0/resources/databases.html#creating-databases) and database user. This is used by phpMyAdmin to store the configuration of your databases and users.

Once Forge has installed phpMyAdmin, you can then login to your installation using any of your database username and password combinations.

:::danger Server Sizes

Some very small server sizes, such as `t2.nano` on AWS, do not have enough resources to run an application like phpMyAdmin.
:::

## Default Sites

When you initially provision a Forge server, Forge creates a single site on the server named `default`. This site may be accessed by visiting the IP address of your server in your web browser. This is convenient because sometimes you may not have a particular domain you want to associate with a given server immediately after provisioning.

When you are ready to transition your application to an official domain name, you may rename the site in the **Meta** tab of the site's management panel. After renaming the site, you will no longer be able to access it using the server's IP address. After renaming the site, you should add a DNS `A` record for the domain that points to your server's IP address.

### Nginx Configuration

Below is an example of the default Nginx site configuration that is used by Laravel Forge. [Additional Nginx templates](/1.0/servers/nginx-templates.html) may be created in Forge using the "Nginx Templates" panel within your server's management dashboard.

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
    ssl_prefer_server_ciphers off;
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
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
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

Once your site has been created, you may edit the Nginx configuration on a site-by-site basis. This is done by accessing the **Edit Files** drop down at the top right of the site management panel and using the **Edit Nginx Configuration** action.

## PHP Version

If your server has [multiple versions of PHP](/1.0/servers/php.html) installed, you can switch the version used by your site at any time by using the site's **Meta** tab in the Forge dashboard.

#### Changing A Site's Installed PHP Version

When switching the version used by your site, you should ensure that your server has any additional PHP extensions / modules installed for that version. Failure to install additional modules may make your site unresponsive.

You will also need to update your site's [deployment script](/1.0/sites/deployments.html#deploy-script) to reload the correct version of PHP-FPM and invoke the correct version of PHP when running any PHP commands.

## Maintenance Mode

If you have deployed a Laravel application, Forge allows you to make use of Laravel's maintenance mode feature. Clicking the **Enable Maintenance Mode** button within the site's **App** tab will run the `php artisan down` Artisan command within your application, which will make your site unavailable. When the site is in maintenance mode, you can then click the **Disable Maintenance Mode** button to make your site available again.

#### Maintenance Mode "Secret"

Laravel 8.0+ applications can make use of the "secret" option to bypass maintenance mode. Using this option with older versions of Laravel is not supported.

## Site Logs

Forge also provides the ability to view a site's log files from within the dashboard.

For performance reasons, Forge will only return the last 500 lines from a file. The log file path will be shown in both the dropdown and at the bottom of the log output.

:::tip Laravel Log Files Only

Forge is only able to display log files from Laravel 5+ applications. Both `daily` and `single` log formats are supported. Forge will automatically read the last updated file.
:::
