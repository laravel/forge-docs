---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/user-isolation.html'
---
# User Isolation

[[toc]]

## Overview

By default, Forge uses the default `forge` user that is created as part of the server's initial provisioning process for all deployments, daemons, scheduled jobs, PHP-FPM, and other processes.

Via Forge's "User Isolation" feature, Forge will create a separate user for a given site. This is particularly useful when combined with a project like WordPress in order to prevent plugins from maliciously accessing content in your `forge` user (or other isolated user) owned directories.

:::tip Forge User Permissions

The `forge` user is considered a "super user" and is therefore able to read all files within isolated user directories.
:::

## Sudo Access

Like the `forge` user, newly created isolated users also have limited sudo access. They may reload the PHP-FPM services requiring a password:

```bash
sudo -S service php8.1-fpm reload
```

If you need further sudo access, you should login as the `forge` user and switch to the `root` user using the `sudo su` or the `sudo -ì` command.

## Connecting Via SFTP

You can connect to your server via SFTP as the isolated user. We recommend using an SFTP client such as [Transmit](https://panic.com/transmit/) or [Filezilla](https://filezilla-project.org/). However, before getting started, you should first [upload your SSH key to the server](/1.0/accounts/ssh.html) for the isolated user.
