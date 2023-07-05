---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/load-balancing.html'
---
# Load Balancing

[[toc]]

## Overview

Load balancers are used to distribute web traffic amongst two or more servers and are often used for websites which receive high volumes of traffic.

The key differences between a Forge application server and a load balancer are:

- A database server will not be installed
- PHP is not installed
- Node.js is not installed

## Creating Load Balancers

When provisioning a new server, select the **Load Balancer** type. Once provisioning has completed, you can now create a load balanced site. The site name / domain should match the name of the corresponding site on the servers that will be receiving the traffic.

Once you have added the site to your server, Forge will ask you to select the servers you wish to balance traffic across. The list of servers will include all of the servers in the same private network as the load balancer.

### Load Balancer Methods

Forge allows you to select one of three load balancer methods:

1. Round Robin - the default method, where requests are distributed evenly across all servers
2. Least Connections - requests are sent to the server with the least connections
3. IP Hash - The server to which a request is sent is determined from the client IP address.

You may switch the load balancer method at any time.

:::tip Nginx Load Balancing Methods

You can learn more about how Nginx load balancers work by [consulting the Nginx documentation](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/#method).
:::

### Server Weights

Each server balanced by the load balancer can be configured with different weights, indicating that some servers should serve more traffic than others. For example, if you have two servers in your load balancer, one with a weight of 5 and the other with 1, then the first server would be sent five out of every six requests made to the load balancer.

### Backup Servers

Individual servers can be marked as a **backup**. Backup servers will receive no traffic unless all other servers managed by the load balancer are not responding.

### Pausing Traffic

You may pause traffic to a specific server being managed by the balancer. While paused, the selected server will no longer serve incoming traffic. You may unpause the server at any time.

## SSL

Typically, SSL certificates are installed on the individual application servers. However, when using load balancing, the certificate should be configured on the load balancer itself. You should consult the [SSL documentation](/1.0/sites/ssl.html#ssl) for more information on managing SSL certificates for your servers, including load balancers.

When using SSL on a load balancer, you will likely need to configure the "trusted proxies" for your application. For Laravel applications, consult the [trusted proxies documentation](https://laravel.com/docs/requests#configuring-trusted-proxies).
