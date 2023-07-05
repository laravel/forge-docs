---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/cookbook.html'
---
# Cookbook

[[toc]]

## Site Is Stuck Deploying

Rarely, your application may get stuck in a "deploying" state. When this occurs, you can reset the deployment state at the top right of the site management panel using the **Self Help** drop-down menu.

## Using User Isolation With Existing Sites

It is not currently possible to use isolated users to manage existing sites that have already been created without user isolation. Instead, you will need to create a new site with the user isolation option enabled.

## Uncommitted Commits During Deployment

This error may occur when files under source control within the site directory have been changed by the application and will be overwritten by the fresh deployment.

You may discard these changes by accessing the **Self Help** drop-down menu at the top right of the site management panel and triggering the **Reset Git State** action. Please note that the changes made will be lost when this action is run.

You should also review your application and correct any parts of the applications that may be writing to a source controlled directory on your server. Otherwise, you may continue to encounter this error on further deployments.
