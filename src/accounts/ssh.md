---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/accounts/ssh.html'
---
# SSH Keys

[[toc]]

## Introduction

SSH is a protocol that allows you to access your server via a command line terminal. SSH keys are used to authenticate with your server over the SSH protocol. If you are new to SSH keys, we recommend checking out the [GitHub documentation of generating SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to get started.

After adding your SSH key to your server, you may SSH into the server without a password:

```sh
ssh forge@YOUR_SERVERS_PUBLIC_IP_ADDRESS
```

## Adding Your SSH Key To New Servers

Before you provision a server for the first time, you should add your SSH keys to your account. You can do this from the your accounts [SSH Keys page](https://forge.laravel.com/user-profile/ssh-keys) in the Forge dashboard.

As part of the provisioning process, Forge will add all your active SSH keys to the `forge` account. This will allow you to SSH into the server as the `forge` user.

If any of your sites are using User Isolation, you will be asked to select the user you want to add the key to. You will then be able to SSH into the server as that user.

## Adding SSH Key To Existing Servers

If you already have servers provisioned and want to add a new SSH key to several servers at once, then first add your key to your account via the [SSH Keys page](https://forge.laravel.com/user-profile/ssh-keys). Once it is listed in the "Active Keys", you may use the "Add To Servers" action and select which servers you would like the key added to.

You can also [add SSH keys directly to a server](/1.0/servers/ssh.html) without adding them to your account.

## Server Public Key

During the provisioning process, Forge will generate its own keypair so that it may access the server. It will add the public key from this keypair to the `authorized_keys` file of both the `root` and `forge` users.

## Forge Public Key

During the provisioning process, Forge will generate a public key for the `forge` user. This is used by Git to clone the projects to your server. The key will be added to the source control provider. This key is located at `/home/forge/.ssh/id_rsa.pub`.
