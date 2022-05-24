---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/recipes.html'
---
# Recipes

[[toc]]

## Overview

Recipes allow you to save common Bash scripts and run them across any of your servers. For example, you could save a recipe to install MongoDB so you can conveniently run it on future servers. The output of the recipe will be emailed to you.

## Creating Recipes

You can create your own recipe from the [Recipes dashboard](https://forge.laravel.com/recipes). When creating a new recipe you will be asked to supply:

- The name of the recipe
- The operating system user that the script should be run as
- The recipe script contents

### Variables

Forge provides a few variables that can be used to make your recipe more dynamic. You are free to use any of these variables within your recipe's script:

<div v-pre>

- `{{server_id}}` - The ID of the server that the recipe is running on
- `{{server_name}}` - The name of the server that the recipe is running on
- `{{ip_address}}` - The public IP address of the server
- `{{private_ip_address}}` - The private IP address of the server
- `{{username}}` - The server user who is running the script
- `{{db_password}}` - The database password for the server the script is running on
- `{{server_type}}` - The type of the server that the recipe is running on, i.e. one of the following...
  - `"app"`
  - `"cache"`
  - `"database"`
  - `"loadbalancer"`
  - `"meilisearch"`
  - `"web"`
  - `"worker"`

</div>

When using these variables, you should ensure that they exactly match the syntax shown above.

## Running Recipes

When running a recipe, you will be presented with options that allow you to have the output of the recipe emailed to you and allow you to configure which servers the recipe will run on.
