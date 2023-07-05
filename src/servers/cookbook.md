---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/cookbook.html'
---
# Cookbook

[[toc]]

## Restarting PHP FPM

When configuring your server, Forge configures FPM so that it can be restarted without using your server's "sudo" password. To do so, you should issue the following command. Of course, you should adjust the PHP version to match the version of PHP installed on your machine:

```bash
echo "" | sudo -S service php8.1-fpm reload
```

## Resetting The `forge` User Sudo Password

Forge does not store your server's `forge` user sudo password and is therefore unable to reset it for you. To reset the `forge` user sudo password, you'll need to contact your server provider and regain SSH access to your server as the `root` user.

Once you are connected to your server as the `root` user, you should run the `passwd forge` command to redefine the `forge` user sudo password.

#### Digital Ocean

If your servers are managed by DigitalOcean, the following steps should assist you in resetting the `forge` user's sudo password using Digital Ocean's dashboard.

1. First, on DigitalOcean's dashboard, click on the server name. Then, within the "Access" tab, click on "Reset Root Password". Usually, this operation restarts the server and sends the new `root` user's sudo password to your DigitalOcean account's associated email address.

2. Next, still on the "Access" tab, click on "Launch Droplet Console" to gain access to your server terminal as the `root` user. During this step, you will be asked to redefine the `root` user's sudo password.

3. Finally, execute the `passwd forge` terminal command as the `root` userto redefine the `forge` user's sudo password.

## Upgrading Composer

The latest version of Composer is installed by Forge when a new server is provisioned. However, as your server ages, you may wish to upgrade the installed version of Composer. You may do so using the following command:

```bash
composer self-update --2
```

This will instruct Composer to update itself and specifically select version 2. If your application is not compatible with Composer 2, you can roll back to Composer 1 at any time:

```bash
composer self-update --1
```

## Upgrading Nginx

The latest version of Nginx is installed by Forge when a new server is provisioned. However, as your server ages, you may wish to upgrade the installed version of Nginx. You may do so using the following commands:

```bash
sudo apt-get install -y --only-upgrade nginx
sudo nginx -v
sudo service nginx restart
```

:::danger Nginx Upgrades

You should upgrade the Nginx version on your server at your own risk. Upgrading the version of Nginx installed on your server may cause downtime or conflict with other installed software.
:::

## Upgrading Node.js

The latest version of Node.js is installed by Forge when it is provisioning a new server. However, as your server ages, you may wish to upgrade the version of Node.js:

```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -

sudo apt-get install -y nodejs
```

[Node.js version information](https://nodejs.org/en/about/releases/)

## Upgrading npm

The latest version of npm is installed by Forge when provisioning new servers. However, you may upgrade the installed version of npm using the following commands:

```bash
sudo npm install npm@latest -g
```

## DigitalOcean Droplet Limit Exceeded

This error is returned by [DigitalOcean](https://digitalocean.com) when you have reached a limit on how many droplets you can create. You can ask DigitalOcean to increase your droplet limit by contacting their support. Once they have increased your limit, you may create servers in Forge.

## AWS Provisioned Servers Are Disappearing

To ensure Forge works correctly with AWS, please review [these requirements](/1.0/servers/providers.html#amazon-aws-api-access).

## Server Disconnected

There are several reasons why your server may have a "disconnected" status. We encourage you to check these common solutions before contacting support:

- Verify that the server is powered on via your server provider's dashboard. If the server is powered off, you should restart it using your **provider's dashboard**.
- Verify that the public IP address of the server is known to Forge (the public IP address may change between reboots of the actual VPS).
- Verify that the Forge generated public key for the server is included in the `/root/.ssh/authorized_keys` and `/home/forge/.ssh/authorized_keys` files. This key is available via the "Meta" tab of your server's Forge management panel.
- If your server is behind a firewall, make sure you have [allowed Forge's IP addresses to access the server](/1.0/introduction.html#forge-ip-addresses).
- If you removed Port 22 from the server's firewall rules, you will need to contact your server provider and ask them to restore the rule. Removing this rule prevents Forge from accessing your server via SSH.
- Remove any private keys or other lines that do not contain a valid public key from the `/root/.ssh/authorized_keys` and `/home/forge/.ssh/authorized_keys` files.

If you are still experiencing connectivity issues, you should also verify that the permissions and ownership of the following directories and files are correct:

```bash
# Fixes the "root" user (run as root)

chown root:root /root
chown -R root:root /root/.ssh
chmod 700 /root/.ssh
chmod 600 /root/.ssh/authorized_keys

# Fixes the "forge" user

chown forge:forge /home/forge
chown -R forge:forge /home/forge/.ssh
chmod 700 /home/forge/.ssh
chmod 600 /home/forge/.ssh/authorized_keys
```

If, after trying all of the above solutions, Forge is still unable to connect to your server but you can still SSH to the server, please run the following command as the `root` user and share the output with Forge support:

```bash
grep 'sshd' /var/log/auth.log | tail -n 10
```

:::danger Forge Management

If Forge is not able to connect to your server, you will not be able to manage it through the Forge dashboard until connectivity is restored.
:::

## "Too Many Open Files" Error

If you are receiving an error stating that your server has "too many open files", you likely need to increase the maximum amount of file descriptors that your operating system is configured to allow at a given time. This may be particularly true if your server will be handling a very large number of incoming web requests.

First, ensure the maximum number of "open files" is correctly configured based on the size of your server. Usually, the maximum number of open files allowed by the operating system should be about 100 files for every 1MB of RAM. For example, if your server has 4GB memory, the maximum number of open files can safely be set to `409600`.

You can determine how many files your operating system currently allows to be opened at once by running the `sysctl fs.file-max` command. You can configure the existing setting by adding or modifying the following line in `/etc/sysctl.conf`:

```
fs.file-max = LIMIT_HERE 
```

While the instructions above set the maximum number of "open files" system-wide, you also need to specify these limits for each server user by editing the `/etc/security/limits.conf` file and adding the following lines:

```
root soft nofile LIMIT_HERE
root hard nofile LIMIT_HERE
forge soft nofile LIMIT_HERE
forge hard nofile LIMIT_HERE
```

Of course, if your server contains additional users due to the use of "site isolation", those users also need to be added to the `/etc/security/limits.conf` file:

```
isolated-user soft nofile LIMIT_HERE
isolated-user hard nofile LIMIT_HERE
```

Additionally, if the "too many open files" error was triggered by an Nginx process (very common on load balancers at scale), you will need to also add the `nginx` user to `/etc/security/limits.conf`:

```
nginx soft nofile LIMIT_HERE
nginx hard nofile LIMIT_HERE
```

And, add the following directive to your server's `/etc/nginx/nginx.conf` file:

```
worker_rlimit_nofile LIMIT_HERE;
```

You should restart the Nginx service once this directive has been added to your Nginx configuration file:

```
service nginx restart
```
