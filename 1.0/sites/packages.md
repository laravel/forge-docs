---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/packages.html'
---
# Packages

[[toc]]

## Overview

Forge allows you to manage the "http-basic" portion of the selected site's user's `auth.json` Composer configuration file. The provided credentials are only stored on the server being managed by Forge - not within Forge itself.

### Site Composer Credentials

The Composer Credentials that you can manage on the site level only apply to this site . For example, if you have two sites installed under the `forge` user, and you need both sites to use different credentials for the same Composer package, you should use the site's packages. If you want to store one set of credentials that applies to all sites with a user's home directory, please see [Packages](/1.0/servers/packages.html) for more details.

### Adding Credentials Before Installing a Repository

Forge does not allow you to install credentials before you have installed a repository; instead, it will redirect you back to the "App" tab. This is because Forge recreates the site's base directory if the initial installation does not finish successfully. So, if you need to provide local Composer credentials, you first need to install a repository without the "Install Composer Dependencies" checked so that you can update the credentials after the repository is installed.

## Adding Credentials

Additional credentials can be added by clicking the "Add Credentials" button. You need to provide:

- Repository URL - this is how Composer matches the credentials to the package for which the provider wants to authenticate users
- Username - this is often an email address, but can also be any kind of unique identifier that the provider of the package uses
- Password - this is generally the password associated with the username, however in some case, this may also be a license key

Click "Save" in order to store these credentials in the user's global Composer configuration directory (`~/.config/composer/auth.json`).

## Removing Credentials

In order to remove Composer credentials, you can simply click on the red button displayed on the same line as the Repository URL.

After removing credentials, please do not forget to click "Save" in order to store your new credentials configuration on the server.

# Updating Credentials

Any credentials that are shown on the screen can be updated with any new adequate value.

After updating the value, please do not forget to click the "Save" button in order your new credentials configuration on the server.

## Circle Permissions

The ability to manage a site's Composer packages is determined by the `server:manage-packages` permission. This permission will also allow the circle member to manage a server's Composer packages too.
