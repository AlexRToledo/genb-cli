# JMJC ClI
* * *

## Important *
This CLI works with templates, the templates are created by us. Those templates are stock in the project directory templates.
So if you want, you can modify all the entire project for your use. Enjoy it.

## How install it
### Steps:
    1 - Clone this project
    2 - Go to project location
    3 - Into bash prompt write:
        npm install (wait for installation)
        npm link (This is for now)
This create a system link for Windows or Linux, is not significative the execution order.

## How use it
### Steps:
    1 - Go to the project folder
    2 - Into the console write:
        jmjc {language} {type} {name}
Where {language} is php or node for now, {type} is app, controller or model and name, well that what you wants.
** Php is under development.

## Commands and Descriptions
### PHP:
     1 - jmjc php app base
This create a php app with name base
     2 - jmjc php controller User
this create a php file with name UserController
     3 - jmjc php model User
This create a php file with name UserModel
     4 - jmjc php repository User
This create a php file with name UserRepository
### Node
     1 - jmjc node app base
This create a node app with name base
     2 - jmjc node controller User
this create a node js file with name UserController
     3 - jmjc node model User
This create a node js file with name UserModel
     4 - jmjc node repository User
This create a node js file with name UserRepository

## Projects Struture
    core
      --> CliHandler.js
      --> Generator.js
    templates
      --> php
        --> base
          -->  *
        --> controller
          --> controller.php
        --> model
          --> model.php
        --> repository
          --> repository.js
      --> node
        --> base
          --> *
        --> controller
          --> controller.js
        --> model
          --> model.js
        --> repository
          --> repository.js
    index.js
    package.json
    README.md

## License
Open Source License, MIT

## Create bY
Development Team
