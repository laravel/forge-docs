---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/queues.html'
---
# Queues

[[toc]]

## Overview

Forge's site management dashboard allows you to easily create as many Laravel queue workers as you like. Queue workers will automatically be monitored by Supervisor, and will be restarted if they crash. All workers will start automatically if the server is restarted.

## Creating A Queue Worker

You can create a new queue worker within the site's management dashboard. The "New Worker" form is a wrapper around the Laravel queue feature. You can read more about queues in the [full Laravel queue documentation](https://laravel.com/docs/queues).

When creating a new queue worker, you may [select a version of PHP](/1.0/servers/php.html) that is already installed on the server. The selected version of PHP will be used to execute the queue worker.

## Laravel Horizon

If your Laravel application is using [Laravel Horizon](https://laravel.com/docs/horizon), you should not setup queue workers as described above. Instead, you may enable Horizon on Forge using Forge's "daemon" feature.

First, create a [server daemon](/1.0/resources/daemons.html#configuring-daemons) that executes the `php artisan horizon` Artisan command from your site's root directory.

Next, add the `php artisan horizon:terminate` Artisan command to your site's deployment script, as described in [Horizon's deployment](https://laravel.com/docs/master/horizon#deploying-horizon) documentation.

Finally, if you wish to use Horizon's [metrics graphs](https://laravel.com/docs/master/horizon#metrics), you should configure the scheduled job for `horizon:snapshot` in your application code. In addition, you should define a [Scheduler task](/1.0/resources/scheduler.html#scheduled-jobs) within Forge for the `php artisan schedule:run` Artisan command if you have not already done so.

## Circle Permissions

You may grant a circle member authority to create and manage queue workers by granting the `site:manage-queues` permission.
