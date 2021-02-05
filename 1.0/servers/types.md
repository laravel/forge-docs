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
            <th width="200">Application</th>
            <th width="200">App Server</th>
            <th width="200">Web Server</th>
            <th width="200">Database Server</th>
            <th width="200">Cache Server</th>
            <th width="200">Worker Server</th>
            <th width="200">Load Balancer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td scope="col">Nginx</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
        </tr>
        <tr>
            <td scope="col">PHP</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">MySQL / PostgreSQL / MariaDB</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">Redis, Memcached</td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
            <td align="middle">✅</td>
            <td align="middle"></td>
            <td align="middle"></td>
        </tr>
        <tr>
            <td scope="col">Node.js</td>
            <td align="middle">✅</td>
            <td align="middle">✅</td>
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
- MySQL / Postgres (if selected)
- Redis
- Memcached
- Node.js
- Supervisor

Application servers are the most typical type of server provisioned on Laravel Forge. If your unsure which server type you need, most likely you should provision an application server.

### Web Servers

Web servers contain the web server software you need to deploy a typical Laravel / PHP application, but they do not contain a database or cache. Therefore, these servers are meant to be [networked to](./../resources/network.md) other dedicated database and cache servers. Web servers are provisioned with the following software:

- PHP
- Nginx
- Node.js
- Supervisor

### Database Servers

Database servers are intended to function as dedicated MySQL / Postgres servers for your application. These servers are meant to be accessed by a dedicated application or web server via Forge's [network management features](./../resources/network.md). Database servers are provisioned with the following software, based on your selections during the server's creation:

- MySQL, MariaDB, or PostgreSQL

### Cache Servers

Cache servers are intended to function as dedicated Redis / Memcached servers for your application. These servers are meant to be accessed by a dedicated application or web server via Forge's [network management features](./../resources/network.md). Cache servers are provisioned with the following software:

- Redis
- Memcached

## Worker Servers

Worker servers are intended to function as dedicated PHP queue workers for your application. These servers are intended to be networked to your web servers, do not include Nginx, and are not accessible via HTTP. Worker servers are provisioned with the following software:

- PHP
- Supervisor

### Load Balancers

Load balancers are meant to distribute incoming web traffic across your servers. To do so, load balances use Nginx as a "reverse proxy" to evenly distribute the incoming traffic. Therefore, load balancers are only provisioned with Nginx.
