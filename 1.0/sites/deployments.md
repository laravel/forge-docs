# Deployments

[[toc]]

## Overview

A deployment is the process in which your code is downloaded from your source control provider on to your server, ready for the world to access. Forge tracks the latest 10 deployments so that you can see what was deployed, when it was deployed, and how long it took to be deployed.

### Environments

Some applications, such as those created with the Laravel framework, may require a `.env` file to configure settings such as databases and caches. You can create and edit your Environment file within the Forge site's management dashboard.

:::tip Automatic Environment Files

If your project contains a `.env.example` file, Forge will automatically copy this and replace some of the settings to match your server's database settings. An empty `.env.example` could result in an empty environment file on the first deploy.
:::

## Quick Deploy

Forge's "Quick Deploy" feature allows you to easily deploy your projects when you push to your source control provider. When you push to your configured quick deploy branch, Forge will pull your latest code from source control and run your application's configured deployment script.

You can enable Forge's quick deploy feature by clicking the "Enable Quick Deploy" button within the *Apps* tab of your site's management dashboard.

## Deploy Script

The commands that are executed on your server when your project is deployed are determined by your site's deployment script. Of course, this deployment script can be edited directly within the Forge UI. By default, your site's deployment script will:

- Navigate into the site's directory
- Execute the `git pull` command
- Installs your application's Composer dependencies
- Execute the `php artisan migrate` command (if your application contains an `artisan` file)

:::warning Zero Downtime Deployments

Deployments may make your site unavailable for a brief moment. If you need absolutely zero downtime during deployments, check out [Envoyer](https://envoyer.io).
:::

### PHP Versions

If you have installed [multiple versions of PHP](/1.0/servers/php.html) on your server, your deploy script may need to be updated to use the correct version of PHP.

By default, `php` will always point to the active version of PHP used on the CLI. If you need to use a different version of PHP, you must use `phpx.x` where `x.x` reflects on the version used (e.g. `php8.0`) when invoking PHP commands.

The deploy script for newly created sites uses the `$FORGE_PHP` [environment variable](#environment-variables). This environment variable will always contain the current PHP binary configured for the site, so no additional changes are needed to your deployment script when using this variable and switching your site's PHP version.

### Environment Variables

Forge will automatically inject the following environment variables into your deployment script at runtime:

| Key | Description |
| ----- | ---- |
| `FORGE_COMPOSER` | The path to the Composer installation. |
| `FORGE_CUSTOM_DEPLOY` | Whether the deployment was triggered with a custom deployment trigger request. |
| `FORGE_DEPLOY_AUTHOR` | The author of the commit. |
| `FORGE_DEPLOY_COMMIT` | The Git hash of the commit being deployed. |
| `FORGE_DEPLOY_MESSAGE` | The Git commit message. |
| `FORGE_MANUAL_DEPLOY` | Whether the deploy was triggered by clicking "Deploy Now". |
| `FORGE_PHP_FPM` | The PHP-FPM process name that is being used by Forge. |
| `FORGE_PHP` | The `php` binary that is being used by the Forge site or server. |
| `FORGE_QUICK_DEPLOY` | Whether the deploy was triggered by a source control provider webhook. |
| `FORGE_REDEPLOY` | Whether this is a re-deployed commit. |
| `FORGE_SERVER_ID` | The ID of the Forge server that is being deployed to. |
| `FORGE_SITE_BRANCH` | The name of the branch that is being deployed. |
| `FORGE_SITE_ID` | The ID of the Forge site that is being deployed to. |
| `FORGE_SITE_PATH` | The root of the deployment path, e.g. `/home/forge/mysite.com` |
| `FORGE_SITE_USER` | The name of the user deploying the site. |

You may use these variables as you would any other Bash variable:

```bash
if [[ $FORGE_MANUAL_DEPLOY -eq 1 ]]; then
    echo "This deploy was triggered manually."
fi
```

For example, you may wish to prevent deployments if the commit message contains "wip":

```bash
if [[ $FORGE_DEPLOY_MESSAGE =~ "wip" ]]; then
    echo "WORK IN PROGRESS, DO NOT CONTINUE."
    exit 1
fi
```

:::warning Environment Variables

Forge will prefix any injected variables with `FORGE_`. Please do not use this "namespace" when defining your own environment variables.
:::

## Deploying From CI

So far, we have discussed deploying Forge sites from the Forge UI or by using Forge's "Quick Deploy" feature. However, you may also deploy them from a CI platform of your choice.

To execute a Forge deployment from a CI platform, you may use Deployment Triggers or Forge CLI.

### Using Deployment Triggers

You may execute a deployment at any time by instructing your CI platform to make a `GET` or `POST` request to the URL displayed in your site's details.

Although you can refresh the site token at any time, you will need to update any services which are using this URL after refreshing the token.

Additional data may be passed to your deployment script via query parameters passed to the deployment trigger URL. For example, when passing the following query parameters `?token=abc1234&env=staging`, Forge will automatically inject a custom `FORGE_VAR_ENV` variable that will evaluate to `"staging"`.

### Using Forge CLI

If you would like to have access to the deployment output or execute additional deployment actions such as restarting services, you may use [Forge CLI](https://forge.laravel.com/docs/1.0/accounts/cli.html).

Once you have installed Forge CLI, you may execute the `forge deploy` command in your CI platform's deployment pipeline.

In order to authenticate with Forge from your CI platform, you will need to add a `FORGE_API_TOKEN` environment variable to your CI build environment. You may generate an API token in your [Forge API settings dashboard](https://forge.laravel.com/user/profile#/api). In addition, your CI platform will need SSH Access to your server.

#### Example With GitHub Actions

If your site uses [GitHub Actions](https://github.com/features/actions) as its CI platform, the following guidelines will assist you in configuring Forge deployments so that your application is automatically deployed when someone pushes a commit to the `master` branch:

1. First, add the `FORGE_API_TOKEN` environment variable to your "GitHub > Project Settings > Secrets" settings so that GitHub can authenticate with Forge while running actions.

2. Next, add the `SSH_PRIVATE_KEY` environment variable to your "GitHub > Project Settings > Secrets" settings so that GitHub can have SSH Access to your site's server.

3. Then, create a `deploy.yml` file within the `your-project/.github/workflows` directory. The file should have the following contents:

```yml
name: Deploy

on:
  push:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Setup SSH
        uses: webfactory/ssh-agent@v0.5.3
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: 8.0
          tools: composer:v2
          coverage: none
      - name: Require Forge CLI
        run: composer global require laravel/forge-cli
      - name: Deploy Site
        run: |
          forge server:switch your-server-name
          forge deploy your-site-name.com
        env:
          FORGE_API_TOKEN: ${{ secrets.FORGE_API_TOKEN }}
```

4. Finally, you can edit the `deploy.yml` file to fit your site's deployment needs, as it may require a different PHP version or a library like `npm`. Once you are done, commit and push the `deploy.yml` file to the `master` branch so GitHub Actions can run the first deployment job.

## Deployment Branch

You may change the branch that is deployed to your site by updating the deployment branch setting. Once you have updated the branch, you will then need to click **Deploy Now** to manually trigger a fresh deployment of the new branch.

## Git Remote

Updating the Git remote from the site's **App** management dashboard will update the Git remote URL on your server; however, the site will not be removed or become unavailable during the process. The updated Git remote must contain the same repository / Git history as the currently installed repository.

You should not use this function to install an entirely different project onto a site. If you would like to install an entirely different project, you should completely uninstall the existing repository using the "Uninstall Repository" button within the **App** dashboard.

## Deployment Notifications

You can enable deployment notifications for your site from the site management dashboard's **Notifications** tab. Forge supports several notification channels:

- Email
- Slack
- Telegram
- Microsoft Teams
- Discord

:::tip Default Notifications For Failed Deployments

By default, Forge will automatically notify you by email for failed deployments.
:::

### Slack

To enable Slack notifications, first enter the Channel name that you wish to send messages to, and then click **Enable Slack Notifications**. You will be redirected to the Slack application authorization page, where you need to click **Allow**.

If you wish to modify the channel that Forge messages, you should first disable Slack notifications and then re-enable them for your site.

### Telegram

To enable Telegram notifications, click the **Enable Telegram Notifications** button. Forge will open a new window that takes you to the official Telegram website. If you have the desktop application installed, your browser will ask if you wish to open Telegram. Alternatively, you will need to login to the web version of Telegram.

Click **Open Telegram** and select the group chat that you want Forge to send deployment notifications to. Forge will send the group a message confirming the connection.

If you wish to change the group that Forge messages, you should disable Telegram notifications and then re-enable the notifications.

### Microsoft Teams

To enable Microsoft Teams notifications, you first need to create a new **Incoming Webhook** connector in your Teams channel of choice. Once Teams has generated a webhook, you need to copy the URL into the **Webhook URL** field, then click **Enable Microsoft Teams Notifications**. Forge will now notify the configured channel for both successful and failed deployments.

If you wish to change the webhook URL, you first need to disable Microsoft Teams notifications and then re-enable the notifications.

### Discord

To enable Discord notifications, you first need to create a new **Incoming Webhook** integration on your Discord server. Once Discord has generated a webhook, you need to copy the URL into the **Webhook URL** field, then click **Enable Discord Notifications**. Forge will now notify the configured channel for both successful and failed deployments.

If you wish to change the webhook URL, you first need to disable Discord notifications and then re-enable the notifications.

### Webhooks

Forge can also send an HTTP POST request to arbitrary URLs after each deployment. The payload of the request will contain the server ID, site ID, deployment status, and the relevant commit information:

```json
{
  "status": "success",
  "server": {
    "id": 123,
    "name": "my-awesome-server"
  },
  "site": {
    "id": 456,
    "name": "my-awesome-site.dev"
  },
  "commit_hash": "382b0f5185773fa0f67a8ed8056c7759",
  "commit_url": "https://github.com/johndoe/my-awesome-site/commit/382b0f5185773fa0f67a8ed8056c7759",
  "commit_author": "John Doe",
  "commit_message": "deploying!"
}
```
