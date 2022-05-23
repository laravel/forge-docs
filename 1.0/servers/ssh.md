---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/ssh.html'
---
# SSH Keys / Git Access

[[toc]]

## Account SSH Keys

When provisioning a new server Forge will automatically add any of your [account's SSH keys](/1.0/accounts/ssh.html) to the server. This means that you can SSH onto your server without using a password:

```bash
ssh forge@IP_ADDRESS
```

## Server SSH Key / Git Project Access

When a server is provisioned, an SSH key is generated for the server. This key is stored at `~/.ssh/id_rsa` and its public key counterpart is stored at `~/.ssh/id_rsa.pub`. When creating a server, you will have the option to add this key to your connected source control providers. By doing so, the server will be able to clone any repository that your source control account has access to.

Alternatively, you may opt-out of having this key added to your source control providers by un-checking the **Add Server's SSH Key To Source Control Providers** option when creating a server. When opting-out, you will need to use site-level [Deploy Keys](#deploy-keys) in order to grant your server access to specific repositories on a source control provider such as GitHub, GitLab, or Bitbucket.

### Deploy Keys

Sometimes you may wish to only grant the Forge user access to a specific repository. This is typically accomplished by adding an SSH key to that repository's "Deploy Keys" on the repository's GitHub, GitLab, or Bitbucket dashboard.

When adding a new site to the server, you may choose to generate a Deploy Key for that application. Once the key has been generated, you can add it to the repository of your choice via your source control provider's dashboard - allowing the server to clone that specific repository.

:::tip Additional Access

You are also free to use Deploy Keys even on servers that have their SSH key attached to your source control provider accounts, allowing you to grant the server access to clone a repository that the source control account connected to your Forge account does not have collaborator access to.
:::