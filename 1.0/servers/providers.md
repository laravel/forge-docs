# Server Providers

[[toc]]

## Supported Server Providers

Forge can create and manage servers on the following cloud server providers:

- DigitalOcean
- Linode Cloud
- Amazon AWS
- Vultr
- Hetzner Cloud

:::tip Bring Your Own Provider

If your preferred server provider is not supported by Forge, you may use Forge's "Custom VPS" option to create your server. Custom VPS servers receive all of the same functionality as first-party supported server providers.
:::

### Linking Additional Server Providers

You can link additional server providers from your Forge account profile. You can access your account profile via the drop-down selection menu at the top-right of the Forge UI. Once you have accessed your account profile, you should navigate to the "Server Providers" tab.

### Amazon AWS API Access

There are a few requirements you should review to ensure Forge works correctly with your linked AWS account:

- AWS IAM users must have  **Programmatic API Access**.
- AWS IAM users need to belong to a group with the **AmazonEC2FullAccess** and **AmazonVPCFullAccess** managed policies.
- If you are using an existing VPC, the subnet must be configured to **auto-assign public IP addresses**.
- If you are using an existing VPC, the default security group **must allow Forge to SSH into the server**. Here is an example:

| Type  | Protocol | Port Range | Source |                    | Description      |
| ----- | -------- | ---------- | ------ | ------------------ | ---------------- |
| HTTP  | TCP      | 80         | Custom | 0.0.0.0/0          |                  |
| HTTP  | TCP      | 80         | Custom | ::/0               |                  |
| SSH   | TCP      | 22         | Custom | YOUR_IP_ADDRESS/32 | SSH from your IP |
| SSH   | TCP      | 22         | Custom | 159.203.161.246/32 | SSH from Forge   |
| SSH   | TCP      | 22         | Custom | 159.203.163.240/32 | SSH from Forge   |
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

- The server **must be** running a fresh installation of Ubuntu 20.04 x64.
- The server **must be** accessible externally over the Internet.
- The server requirements **must meet** the following criteria or more: 1 CPU Core with 1GHz, 1GB RAM, and 25GB Disk space.

Please refer to the [Forge IP address documentation](/1.0/introduction.html#forge-ip-addresses) if you restrict SSH access to your server by IP addresses.
