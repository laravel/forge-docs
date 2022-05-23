---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/resources/caches.html'
---
# Caches

[[toc]]

## Overview

When provisioning a server, Forge will automatically install Memcache and Redis. By default, neither of these services are exposed to the public and may only be accessed from within your server.

## Connecting To Redis

Redis and Memcache are both available via `127.0.0.1` and their default ports.

```bash
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

## External Connections

All Forge servers require SSH key authentication and are not able to be accessed using passwords. Therefore, when using a GUI client or other external client to connect to your cache instance, you will need to use SSH authentication. When selecting the SSH key to use during authentication, **ensure that you select your private SSH key**.
