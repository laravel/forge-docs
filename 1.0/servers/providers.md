# Server Providers

[[toc]]

## Supported Server Providers

Forge supports a range of third-party server providers:

- DigitalOcean
- Linode Cloud
- Amazon AWS
- Vultr
- Hetzner Cloud

:::tip Bring Your Own Provider
If your preferred provider is not baked into Forge, you can always use the Custom VPS option.
:::

### Linking Additional Server Providers

You can link additional server providers from your account profile. You can access your account profile via the drop-down selection menu at the top-right of the Forge UI. Once you have accessed your account profile, you should navigate to the "Server Providers" tab.

### DigitalOcean Backups

If you are using DigitalOcean as your server provider, you may also enable the [DigitalOcean Weekly Backups](https://www.digitalocean.com/community/tutorials/digitalocean-backups-and-snapshots-explained) feature.

:::warning Backups
Forge is not responsible for your backups. Enabling this feature only tells DigitalOcean to make weekly backups of your server.
:::

### Amazon AWS API Access

There are a few requirements you should review to ensure Forge works correctly with AWS:

- AWS IAM user must have  **Programmatic API Access**.
- AWS IAM user needs to belong to a group with **AmazonEC2FullAccess** and **AmazonVPCFullAccess** managed policies.
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

### Vultr API Access

The Vultr server provider requires you to add the [Forge IP addresses](/1.0/introduction.html#forge-ip-addresses) to an allowed list, so that Forge can communicate with your servers. Make sure that you do this before provisioning a server via Forge.

### Linode API Access

When creating a [new API token](https://cloud.linode.com/profile/tokens) in your account, Linode will ask you which permissions are needed. You will need to select:

- **Linodes** - Read/Write
- **IPs** - Read/Write

You may also wish to set the token to never expire.

## Bring Your Own Server

Alongside supporting several providers, Forge also supports the ability to use your own server. When creating a new server, select the **Custom VPS** option.

There are a few requirements to ensure that this works successfully:

- The server your connecting to **must be** running a fresh installation of Ubuntu 20.04 x64.
- Your server **must be** accessible externally over the internet.
- There **must be** a root user with no password.

During the creation process, you may customize the SSH Port that is used (defaulted to `22`).

If you need to add the Forge IP addresses to an allow list, you can find them [here](/1.0/introduction.html#forge-ip-addresses).
