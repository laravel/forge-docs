---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/monitoring.html'
---
# Monitoring

[[toc]]

## Overview

Forge can be configured to monitor the following metrics on your server and email you when their state changes:

- CPU Load Average
- Used Disk Space
- Used Memory

:::warning Business Plan Only

Server monitoring is only available on our "business" plan.
:::

## Monitor Types

### CPU Load Average

The **CPU Load Average** monitor will track the server's load average. This is based on the average system load over a one minute interval.

### Used Disk Space

The **Used Disk Space** monitor tracks the amount of disk space that has been used on the primary drive.

### Used Memory

The **Used Memory** monitor tracks how much of the RAM is in active use.

## Creating Monitors

You may configure a new monitor from the **Monitoring** tab within a server's management dashboard. Below is a brief overview of how to create and configure a monitoring metric:

1. Select the metric to monitor.
2. Select whether the value of the metric should be `>=` or `<=` a threshold.
3. Enter the threshold percentage that the metric would need to meet before notifying you.
4. Enter how long (in minutes) the metric needs to exceed the threshold criteria for before you are notified.
5. Enter an email address to notify when the monitor's state changes.
6. Click **Install Monitor**.

Once the monitor is installed, your server will begin collecting metric data data and notify you once the state changes.

:::tip Notifying Multiple People

Forge will only accept one email address to notify. If you need to notify multiple people, you should create a distribution list such as `team@example.com`.
:::

### Stat Collection Frequencies

The CPU Load and Used Memory metric data will be collected every minute. The Disk Space metric will be collected hourly.

## Circle Permissions

The ability to manage server monitors is split into two permissions:

- `server:create-monitors`
- `server:delete-monitors`
