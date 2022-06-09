---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/cli.html'
---
# CLI

[[toc]]

## Overview

Forge provides a command-line tool that you may use to manage your Forge servers, sites, and resources from the command-line.

## Installation

> **Requires [PHP 8.0+](https://php.net/releases/)**

You may install the **[Forge CLI](https://github.com/laravel/forge-cli)** as a global [Composer](https://getcomposer.org) dependency:

```bash
composer global require laravel/forge-cli
```

## Get Started

To view a list of all available Forge CLI commands and view the current version of your installation, you may run the `forge` command from the command-line:

```bash
forge
```

## Authenticating

You will need to generate an API token to interact with the Forge CLI. Tokens are used to authenticate your account without providing personal details. API tokens can be created from [Forge's API dashboard](https://forge.laravel.com/user-profile/api).

After you have generated an API token, you should authenticate with your Forge account using the login command:

```bash
forge login
forge login --token=your-api-token
```

Alternatively, if you plan to authenticate with Forge from your CI platform, you may set a `FORGE_API_TOKEN` environment variable in your CI build environment.

## Current Server & Switching Servers

When managing Forge servers, sites, and resources via the CLI, you will need to be aware of your currently active server. You may view your current server using the `server:current` command. Typically, most of the commands you execute using the Forge CLI will be executed against the active server.

```bash
forge server:current
```

Of course, you may switch your active server at any time. To change your active server, use the `server:switch` command:

```bash
forge server:switch
forge server:switch staging
```

To view a list of all available servers, you may use the `server:list` command:

```bash
forge server:list
```

## SSH Key Authentication

Before performing any tasks using the Forge CLI, you should ensure that you have added an SSH key for the `forge` user to your servers so that you can securely connect to them. You may have already done this via the Forge UI. You may test that SSH is configured correctly by running the `ssh:test` command:

```bash
forge ssh:test
```

To configure SSH key authentication, you may use the `ssh:configure` command. The `ssh:configure` command accepts a `--key` option which instructs the CLI which public key to add to the server. In addition, you may provide a `--name` option to specify the name that should be assigned to the key:

```bash
forge ssh:configure

forge ssh:configure --key=/path/to/public/key.pub --name=sallys-macbook
```

After you have configured SSH key authentication, you may use the `ssh` command to create a secure connection to your server:

```bash
forge ssh

forge ssh server-name
```

## Sites

To view the list of all available sites, you may use the `site:list` command:

```bash
forge site:list
```

### Initiating Deployments

One of the primary features of Laravel Forge is deployments. Deployments may be initiated via the Forge CLI using the `deploy` command:

```bash
forge deploy

forge deploy example.com
```

### Updating Environment Variables

You may update a site's environment variables using the `env:pull` and `env:push` commands. The `env:pull` command may be used to pull down an environment file for a given site:

```bash
forge env:pull
forge env:pull pestphp.com
forge env:pull pestphp.com .env
```

Once this command has been executed the site's environment file will be placed in your current directory. To update the site's environment variables, simply open and edit this file. When you are done editing the variables, use the `env:push` command to push the variables back to your site:

```bash
forge env:push
forge env:push pestphp.com
forge env:push pestphp.com .env
```

If your site is utilizing Laravel's "configuration caching" feature or has queue workers, the new variables will not be utilized until the site is deployed again.

### Viewing Application Logs

You may also view a site's logs directly from the command-line. To do so, use the `site:logs` command:

```bash
forge site:logs
forge site:logs --follow              # View logs in realtime

forge site:logs example.com
forge site:logs example.com --follow  # View logs in realtime
```

### Reviewing Deployment Output / Logs

When a deployment fails, you may review the output / logs via the Forge UI's deployment history screen. You may also review the output at any time on the command-line using the `deploy:logs` command. If the `deploy:logs` command is called with no additional arguments, the logs for the latest deployment will be displayed. Or, you may pass the deployment ID to the `deploy:logs` command to display the logs for a particular deployment:

```
forge deploy:logs

forge deploy:logs 12345
```

### Running Commands

Sometimes you may wish to run an arbitrary shell command against a site. The `command` command will prompt you for the command you would like to run. The command will be run relative to the site's root directory.

```
forge command

forge command example.com

forge command example.com --command="php artisan inspire"
```

### Tinker

As you may know, all Laravel applications include "Tinker" by default. To enter a Tinker environment on a remote server using the Forge CLI, run the `tinker` command:

```
forge tinker

forge tinker example.com
```

## Resources

Forge provisions servers with a variety of resources and additional software, such as Nginx, MySQL, etc. You may use the Forge CLI to perform common actions on those resources.

### Checking Resource Status

To check the current status of a resource, you may use the `{resource}:status` command:

```bash
forge daemon:status
forge database:status

forge nginx:status

forge php:status      # View PHP logs (default PHP version)
forge php:status 8.1  # View PHP 8.1 logs
```

### Viewing Resources Logs

You may also view logs directly from the command-line. To do so, use the `{resource}:logs` command:

```bash
forge daemon:logs
forge daemon:logs --follow  # View logs in realtime

forge database:logs

forge nginx:logs         # View error logs
forge nginx:logs access  # View access logs

forge php:logs           # View PHP logs (default PHP version)
forge php:logs 8.1       # View PHP 8.1 logs
```

### Restarting Resources

Resources may be restarted using the `{resource}:restart` command:

```bash
forge daemon:restart

forge database:restart

forge nginx:restart

forge php:restart      # Restarts PHP (default PHP version)
forge php:restart 8.1  # Restarts PHP 8.1
```

### Connecting To Resources Locally

You may use the `{resource}:shell` command to quickly access a command line shell that lets you interact with a given resource:

```bash
forge database:shell
forge database:shell my-database-name
forge database:shell my-database-name --user=my-user
```
