---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/management.html'
---
# Management

[[toc]]

## Server Metadata

The server dashboard's **Meta** tab can be used to update important details of a server including its name, SSH connection details, timezone, and tags.

### IP Addresses

If your server's IP address changes, you should inform Forge so that it can remain connected and continue to manage your server. To update the IP address of a server, navigate to the **Meta** tab and update the **IP Address** field under the Server Metadata section.

:::tip Rebooting an AWS Server

When rebooting an AWS server, AWS will allocate a new IP address to the server. Therefore, you will need to update the IP address after a server reboot.
:::

### Timezone

By default, all Forge servers are provisioned and configured to use the UTC timezone. If you need to change the timezone used by the server, you can do so by selecting one of the timezones from the list. Forge uses the `timedatectl` command to modify the system's timezone.

## Archiving Servers

You may archive a server from the Forge UI by clicking the **Archive** button at the bottom of the server's detail page. Archiving a server will remove Forge's access to the server. If necessary, you may reconnect an archived server to Forge via your Forge account profile.

Archiving a server **will not** delete your server from the server provider and **will not** cause any data loss on your server.

### Archive Circle Permission

You may grant a circle member authority to archive a server from your account by granting the `server:archive` permission.

## Transferring Servers To Other Users

Servers may be transferred to other Forge accounts from the server's **Meta** tab by providing the email address of the Forge account you wish to transfer the server to.

The Forge account that is receiving the server will be receive an email address asking them to confirm the request. They must also have set up the [server provider](/1.0/servers/providers.html) that the server exists in before the transfer request can be sent. For example, if the server is a DigitalOcean server, the recipient must have DigitalOcean set up as a server provider within their own account.

You may only transfer servers to a Forge accounts with an active subscription that have not reached their server quota.

### Transfer Circle Permission

You may grant a circle member authority to transfer a server from your account by granting the `server:transfer` permission.
