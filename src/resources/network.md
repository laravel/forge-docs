---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/resources/network.html'
---
# Network

[[toc]]

## Overview

Forge allows you to manage your server's firewall as well as configure which servers can connect to other servers via the **Network** management panel within your server's management dashboard.


:::tip Manually Managing Rules

If you manually create a `ufw` rule on your server, this will not be reflected in the Forge dashboard. Forge is only aware of rules created via the Forge dashboard.
:::

## Server Network

Server networks make it painless to use a connected server as a separate database, cache, or queue server. For a server to be connected to an internal network, it must:

- Be created by the same provider.
- Be using the same server provider credentials.
- Be owned by the same user.
- Be within the same region.

Once you have granted access from one server to another, you may access the other server via its private IP address.

## Firewalls

You can configure and manage your firewall from within the Forge dashboard via the **Network** tab on the server's management dashboard. Firewalls are used to open ports on your server to the Internet. For example, when using FTP you may need to open port `21`.

For added security, you can restrict opened ports to specific IP addresses.

### Port Ranges

When creating new firewall rules, you may supply a range of ports to open (`8000:8010`), which will open every port from `8000` to `8010`.

### Allow / Deny Rules

You may select whether to allow or deny the traffic that matches a given rule. By creating a `deny` rule, you will be preventing traffic from reaching the service.

:::tip Deny Rules Run First

To make `deny` rules work correctly, they are added at a higher priority than `allow` rules. Each new `deny` rule for IPv4 addresses will be added above any existing `deny` rules. UFW does not currently support IPv6 rules at first priority.
:::

## Default Firewall Rules

As part of the provisioning process, Forge will automatically configure three rules:

- SSH - Allow port 22 traffic from any IP Address
- HTTP - Allow port 80 traffic from any IP Address
- HTTPS - Allow port 443 traffic from any IP Address

You should note that although incoming traffic is allowed on port 22 for SSH connections, SSH connections that do not use an SSH key are not accepted. Therefore, it is not possible to brute force an SSH connection to your server. **You should never delete the rule that allows SSH traffic to your server; otherwise, Forge will be unable to connect to or manage your server.**

#### Deleted SSH Firewall Rule

If you have deleted the firewall rule (typically port 22) from the Forge UI or directly on the server, Forge will be unable to connect to the server and will be unable to re-create this rule for you.

To fix this, you will need to access the server directly via your provider and manually add the SSH port again. DigitalOcean allows you to connect remotely through their dashboard.

Forge uses `ufw` for the firewall, so once you've connected to the server you need to run the following as `root`:

```bash
ufw allow 22
```

## Circle Permissions

You may grant a circle member authority to manage the server's network by granting the `server:manage-network` permission.
