---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/resources/cookbook.html'
---
# Cookbook

[[toc]]

## Scheduled Jobs Not Running

It's important to be aware that one single misconfigured scheduled job will break **all jobs** in the scheduler. You should verify that your frequency and commands are correct using a tool such as [Crontab.guru](https://crontab.guru).

## Deleted SSH Firewall Rule

If you have deleted the firewall rule (typically port 22) from the Forge UI or directly on the server, Forge will be unable to connect to the server and will be unable to re-create this rule for you.

To fix this, you will need to access the server directly via your provider and manually add the SSH port again. DigitalOcean allows you to connect remotely through their dashboard.

Forge uses `ufw` for the firewall, so once you've connected to the server you need to run the following as `root`:

```bash
ufw allow 22
```