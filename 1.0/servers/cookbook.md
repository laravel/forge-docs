# Cookbook

[[toc]]

## Droplet Limit Exceeded

This error is returned by [DigitalOcean](https://digitalocean.com) when you have reached a limit on how many droplets you can create.

You can ask DigitalOcean to increase your droplet limit by contacting their support. Once they have increased your limit, you may create servers in Forge.

## Increasing Max Execution Time

To increase the maximum execution time of your scripts you need to update the `max_execution_time` directive in your `php.ini` file. The `php.ini` file is located at `/etc/php/7.3/fpm/php.ini`.

In addition, you will need to update the `fastcgi_read_timeout` directive in the `/etc/nginx/nginx.conf` file to match the value provided for the `max_execution_time` configuration option you just updated.

:::tip Use The Right PHP Version
When editing the PHP files, be sure to edit the correct file under the PHP version you're using to serve your applications.
:::

## Restarting PHP FPM

When configuring your server, Forge configures FPM so that it can be restarted without using your server's "sudo" password. To do so, you should issue the following command. Of course, you should adjust the PHP version to match the version of PHP installed on your machine:

```bash
echo "" | sudo -S service php8.0-fpm reload
```

## Resetting The Sudo Password

Forge does not store the sudo password and is therefore unable to reset it for you. To reset the password, you'll need to contact your server provider or use the sudo password reset facilities on the server provider's dashboard.

Once the password has been reset, Forge will be unable to SSH into your machine as `root`. This prevents you from editing PHP / Nginx configuration files from the Forge UI, and will also prevent various Forge functionality from working correctly. Before Forge can access your server, you will need to SSH into your Forge server as `forge` and reset the `root` users password:

```bash
ssh forge@your-ip-address
sudo -i
passwd
```

## Upgrading Node.js

The latest version of Node.js is installed by Forge when it is provisioning a new server. However, as your server ages, you may wish to upgrade the version of Node.js:

```bash
sudo apt-get install --only-upgrade nodejs
```

## AWS provisioned servers are disappearing from the Forge UI

To ensure Forge works correctly with AWS, please review [these requirements](/1.0/servers/providers.html#amazon-aws-api-access).
