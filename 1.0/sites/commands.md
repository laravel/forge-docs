---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/commands.html'
---
# Commands

[[toc]]

## Overview

You may execute arbitrary Bash commands from the Commands panel. Commands are executed from within the site's root directory, e.g. `/home/forge/site.com`. If you need to run commands within another directory you may prefix the command with a `cd` operation:

```bash
cd bin && ./run-command.sh
```

## Running Commands

Commands can be executed from the Site's **Commands** panel.

Sites that were created with the **General PHP / Laravel** project type will automatically suggest common Laravel Artisan commands.

:::tip Command Input

Commands are not executed within a tty, which means that input / passwords cannot be provided.
:::

## Command History

The last 10 previously executed commands will be shown within the **Command History** table. Alongside the command that was run, Forge will also display:

- The user who initiated the command. This is particularly helpful when using Forge within [Circles](/1.0/accounts/circles.html).
- The command that was executed.
- The date and time of execution.
- The status of the command.

From the Command History table, it's also possible to view the output of the command and re-run the command.

## Commands vs. Recipes

While [Recipes](/1.0/servers/recipes.md) also allow you to run arbitrary Bash scripts on your servers, Commands differ in a few, but important ways:

- Recipes run at a server level. In other words, they cannot dynamically change into a site's directory unless you already know the directory ahead of time.
- Recipes can run using the `root` user. Commands only run as the site's user, which in most cases will be `forge` unless the site is "isolated".
- Recipes are better equipped for running larger Bash scripts. Commands focus on running short commands, such as `php artisan config:cache`.

## Circle Permissions

You may grant a circle member authority to run arbitrary commands in a site's directory by granting the `site:manage-commands` permission.
