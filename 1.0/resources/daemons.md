---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/resources/daemons.html'
---
# Daemons

[[toc]]

## Overview

Powered by [Supervisor](http://supervisord.org), daemons are used to keep long-running scripts alive. For instance, you could start a daemon to keep a [ReactPHP](http://reactphp.org/) application running. If the process stops executing, Supervisor will automatically restart the process.

## Configuring Daemons

When creating a new daemon you need to provide Forge with the following information:

**Command:** The command that should be run by the daemon. For example: `php artisan websockets:serve`.

**User:** The operating system user that should be used to invoke the command. By default, the `forge` user will be used.

**Directory:** The directory in which to run your command from. This can be left empty.

**Processes:** This option determines how many instances of the process should be kept running.

## Log Files

Forge automatically configures your daemon to write to its own log file. Logs can be found within the `/home/forge/.forge/` directory. Log files are named `daemon-*.log`.

:::warning User Isolation

If you are using Forge's user isolation features, you should navigate to the `.forge` directory within the `/home/{username}` directory based on the user that the process belongs to in order to locate the daemon's log files.
:::
