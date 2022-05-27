---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/types.html'
---
# Server Types

[[toc]]

## Introduction

Forge supports provisioning several different types of servers:

- Application Servers
- Web Servers
- Worker Servers
- Load Balancers
- Database Servers
- Cache Servers

Below, we will discuss each of these server types in more detail.

## Server Types

For reference, here is a breakdown of what is offered by each server type:

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Nginx</th>
            <th>PHP</th>
            <th>MySQL / Postgres / MariaDB</th>
            <th>Redis, Memcached</th>
            <th>Node.js</th>
            <th>MeiliSearch</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="col">App Server</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">Web Server</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">Database Server</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">Cache Server</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">Worker Server</td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">MeiliSearch Server</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
        </tr>
        <tr>
            <td scope="col">Load Balancer</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
        </tr>
    </tbody>
</table>


### App Servers

Application servers are designed include everything you need to deploy a typical Laravel / PHP application within a single server. Therefore, they are provisioned with the following software:

- PHP
- Nginx
- MySQL / Postgres / MariaDB (if selected)
- Redis
- Memcached
- Node.js
- Supervisor

Application servers are the most typical type of server provisioned on Laravel Forge. If you're unsure which server type you need, most likely you should provision an application server. As you need to scale your application, you may look at provisioning dedicated servers for services such as your database or caching, but starting with an App server is recommended.

### Web Servers

Web servers contain the web server software you need to deploy a typical Laravel / PHP application, but they do not contain a database or cache. Therefore, these servers are meant to be [networked to](./../resources/network.md) other dedicated database and cache servers. Web servers are provisioned with the following software:

- PHP
- Nginx
- Node.js
- Supervisor

### Database Servers

Database servers are intended to function as dedicated MySQL / Postgres / MariaDB servers for your application. These servers are meant to be accessed by a dedicated application or web server via Forge's [network management features](./../resources/network.md). Database servers are provisioned with the following software, based on your selections during the server's creation:

- MySQL, MariaDB, or PostgreSQL

### Cache Servers

Cache servers are intended to function as dedicated Redis / Memcached servers for your application. These servers are meant to be accessed by a dedicated application or web server via Forge's [network management features](./../resources/network.md). Cache servers are provisioned with the following software:

- Redis
- Memcached

### Worker Servers

Worker servers are intended to function as dedicated PHP queue workers for your application. These servers are intended to be networked to your web servers, do not include Nginx, and are not accessible via HTTP. Worker servers are provisioned with the following software:

- PHP
- Supervisor

### MeiliSearch Servers

MeiliSearch servers install [MeiliSearch](https://meilisearch.com) to provide a blazingly fast search service to your application. They are intended to be connected to another server, and communicate via a [private network](./../resources/network.md#server-network).

A MeiliSearch server will only display and manage one [Site](/1.0/sites/the-basics.html). You cannot create or delete other sites on this server. When connecting to the MeiliSearch server from a web or application server, you should connect to it via its private IP address.

### Load Balancers

Load balancers are meant to distribute incoming web traffic across your servers. To do so, load balancers use Nginx as a "reverse proxy" to evenly distribute the incoming traffic. Therefore, load balancers are only provisioned with Nginx.

Once provisioned you may [configure your load balancer](/1.0/servers/load-balancing.html) to meet your needs.
