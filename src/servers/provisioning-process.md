---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/provisioning-process.html'
---
# Root Access / Security

[[toc]]

## Provisioning

During the initial provisioning of your server, Forge will connect as the `root` user over SSH. This is so that Forge is able to add repositories, install dependencies and configure new services, firewalls, and more.

## Post-Provisioning

After initially provisioning your server, Forge continues to use root access so that it can manage your server's software, services, and configuration. For example, root access is needed to manage:

- Firewalls
- Daemons
- Scheduled tasks
- Isolated users
- PHP configuration and management
- Other operating system dependencies

## Security

We take security very seriously and ensure that we do everything we can to protect customer's data. Below is a brief overview of some of the steps we take to ensure your server's security:

- Forge issues a unique SSH key for each server that it connects to.
- Password based server SSH connections are disabled during provisioning.
- Each server is issued a unique root password.
- All ports are blocked by default with UFW, a secure firewall for Ubuntu. We then explicitly open ports: 22 (SSH), 80 (HTTP) and 443 (HTTPS).
- Automated security updates are installed using Ubuntu's automated security release program.

## Automated Security Updates

Security updates are automatically applied to your server on a weekly basis. Forge accomplishes this by enabling and configuring Ubuntu's automated security update service that is built in to the operating system.

Forge does not automatically update other software such as PHP or MySQL automatically, as doing so could cause your server to suffer downtime if your application's code is not compatible with the upgrade. However, it is possible to [install new versions](/1.0/servers/php.html#multiple-php-versions) and [patch existing versions of PHP](/1.0/servers/php.html#updating-php-between-patch-releases) manually via the Forge UI.
