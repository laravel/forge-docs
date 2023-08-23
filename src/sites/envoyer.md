# Envoyer

[[toc]]

## Overview

Forge now offers zero downtime deployments, thanks to a seamless first-party integration with [Envoyer](https://envoyer.io). Envoyer's zero downtime deployments ensure you avoid even those brief milliseconds of downtime while the server updates your code.

## Creating an Envoyer API Token

To kick things off, you'll need active subscriptions for both [Laravel Forge](https://forge.laravel.com/auth/register) and [Envoyer](https://envoyer.io/auth/register). Once you’re set up, navigate to your Envoyer dashboard and [create a new API token](https://envoyer.io/user/profile?name=Laravel%20Forge&scopes=projects:create,deployments:create,servers:create#/api). At a minimum, Forge requires the following scopes:

```
deployments:create
projects:create
servers:create
```

:::tip Envoyer API Access

To future-proof the integration, consider providing Forge with additional access permissions. You can update your Envoyer’s API token in Forge at any point.
:::

## Linking Your Envoyer Account To Forge

Next, it’s time to link Forge with your Envoyer API token. Navigate to your account settings in Forge and click on the [Envoyer navigation item](https://forge.laravel.com/user-profile/envoyer).

![Envoyer panel in Forge's Account settings](/img/forge-envoyer-panel.png)

## Creating New Sites With Envoyer

When creating a new site in Forge, you’ll notice a new option labeled “Configure with Envoyer”. Toggle this option to reveal a dropdown menu, where you can either select an existing Envoyer project or create a brand new one.

![Creating a new site with Envoyer](/img/envoyer-new-site.png)

![Creating a new Envoyer project from Forge](/img/new-envoyer-project.png)

## Envoyer Sites In Forge

To deploy your Envoyer project within Forge, simply click the “Deploy Now” button, just as you would with any other site in Forge. The “Deployment Trigger URL” is also available for use in a CI environment.

Additionally, Forge has been updated to align perfectly with Envoyer projects:

- Commands are executed from the `/current` directory.
- The Environment panel will display a read-only version of the `.env` file. Continue to use Envoyer to manage your environment file, especially since it may need to be synchronized across multiple servers.
- The site’s Packages panel is disabled to ensure the `auth.json` file remains intact through subsequent deployments.

![Application panel when a project is configured with Envoyer](/img/site-panel-with-envoyer.png)
