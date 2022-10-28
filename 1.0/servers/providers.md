---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/providers.html'
---
# Server Providers

[[toc]]

## Supported Server Providers

Forge can create and manage servers on the following cloud server providers:

- [DigitalOcean](https://www.digitalocean.com/)
- [Linode Cloud](https://www.linode.com/)
- [Amazon AWS](https://aws.amazon.com/)
- [Vultr](https://www.vultr.com/)
- [Hetzner Cloud](https://www.hetzner.com/cloud)

:::tip Bring Your Own Provider

If your preferred server provider is not supported by Forge, you may use Forge's "Custom VPS" option to create your server. Custom VPS servers receive all of the same functionality as first-party supported server providers.

[Learn more](/1.0/servers/providers.html#bring-your-own-server)
:::

### Linking Server Providers

You can link server providers from your [Server Providers dashboard](https://forge.laravel.com/user-profile/server-providers). It is possible to link any number of supported provider accounts, including multiple accounts for one provider.

### Amazon AWS API Access

There are a few requirements you should review to ensure Forge works correctly with your linked AWS account:

- AWS IAM users must have  **Programmatic API Access**.
- AWS IAM users need to belong to a group with the **AmazonEC2FullAccess** and **AmazonVPCFullAccess** managed policies.
- If you are using an existing VPC, the subnet must be configured to **auto-assign public IP addresses**.
- If you are using an existing VPC, the default security group **must allow Forge to SSH into the server**. Here is an example:

| Type  | Protocol | Port Range | Source |                    | Description      |
|-------|----------|------------|--------|--------------------|------------------|
| HTTP  | TCP      | 80         | Custom | 0.0.0.0/0          |                  |
| HTTP  | TCP      | 80         | Custom | ::/0               |                  |
| SSH   | TCP      | 22         | Custom | YOUR_IP_ADDRESS/32 | SSH from your IP |
| SSH   | TCP      | 22         | Custom | 159.203.150.232/32 | SSH from Forge   |
| SSH   | TCP      | 22         | Custom | 159.203.150.216/32 | SSH from Forge   |
| SSH   | TCP      | 22         | Custom | 45.55.124.124/32   | SSH from Forge   |
| HTTPS | TCP      | 443        | Custom | 0.0.0.0/0          |                  |
| HTTPS | TCP      | 443        | Custom | ::/0               |                  |

### Linode API Access

When creating a [new Linode Cloud API token](https://cloud.linode.com/profile/tokens) for your Linode account, Linode will ask you to select which permissions are needed by the token. You will need to select the following permissions:

- **Linodes** - Read/Write
- **IPs** - Read/Write

In addition, you may wish to set the token to never expire.

### Vultr API Access

The Vultr server provider requires you to add the [Forge IP addresses](/1.0/introduction.html#forge-ip-addresses) to an IP address allow list so that Forge can communicate with your servers. You should ensure that you do this before provisioning a Vultr server via Forge.

## Bring Your Own Server

Alongside supporting several first-party server providers, Forge also supports the ability to use your own custom server. To do so, select the **Custom VPS** option when creating a new server.

In addition, you should review the following server requirements:

- The server **must be** running a fresh installation of Ubuntu 20.04 / 22.04 x64.
- The server **must be** accessible externally over the Internet.
- The server **must have** `root` SSH access enabled.
- The server requirements **should meet** the following criteria or more: 1 CPU Core with 1GHz, 1GB RAM, and 10GB Disk space.
- The server **must have** curl installed.

Please refer to the [Forge IP address documentation](/1.0/introduction.html#forge-ip-addresses) if you restrict SSH access to your server by IP addresses.

If you are protecting your internal network through Network Address Translation and you are mapping public SSH ports to different internal SSH ports, you may let Forge know about this by checking the **This server is behind a NAT** checkbox. This will show an extra input field, **NAT SSH Port**, that you can use to tell Forge about the SSH port to which SSH traffic is mapped. Forge will use this port to allow traffic into the server via `ufw`. If the internal SSH port is the same as the public SSH port, you **may** leave the **NAT SSH Port** field empty.
