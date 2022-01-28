# Upgrading

[[toc]]

## Node.js

The latest version of Node.js is installed by Forge when it is provisioning a new server. However, as your server ages, you may wish to upgrade to the latest version of Node.js:

```bash
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - sudo apt-get install -y nodejs
```

## Nginx

The latest version of Nginx is installed by Forge when it is provisioning a new server. However, as your server ages, you may wish to upgrade to the latest version of Nginx:

```bash
apt-get install -y --only-upgrade nginx
```

To verify the new version has been installed:

```bash
nginx -v
```

To restart the Nginx Service:

```base
service nginx restart
```
