#  NodeJS + Express part 2: Creating a skeleton website
## 
```angular2html
/your-app-name
|-- /node_modules
|-- /public
|   |-- /images
|   |-- /javascripts
|   |-- /stylesheets
|       |-- style.css
|-- /routes
|   |-- index.js
|   |-- users.js
|-- /views
|   |-- error.pug
|   |-- index.pug
|   |-- layout.pug
|-- /models (optional, for database models)
|-- /controllers (optional, for separating controller logic)
|-- /middlewares (optional, for custom middleware functions)
|-- /tests (optional, for your test suites)
|-- app.js (or server.js)
|-- package.json
|-- package-lock.json (or yarn.lock, depending on the package manager)
|-- .env (for your environment variables, not to be committed)
|-- .gitignore
|-- README.md

```
You can create it by hand or automate it with some presettings

## 1. Installation

First, you need to install the generator globally using npm (Node Package Manager):
```angular2htmlnpm install -g express-generator
npm install -g express-generator
```
## 2. Generating an Application

Once installed, you can create a new Express application by running:

```angular2html
express --help
```
will output:

```angular2html
express --help

  Usage: express [options] [dir]

  Options:

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
        --no-view        use static html instead of view engine
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information

```
### Call the generator:
```angular2html

```
**Output:**
```angular2html
express --force  --view ejs my_app

   create : my_app/
   create : my_app/public/
   create : my_app/public/javascripts/
   create : my_app/public/images/
   create : my_app/public/stylesheets/
   create : my_app/public/stylesheets/style.css
   create : my_app/routes/
   create : my_app/routes/index.js
   create : my_app/routes/users.js
   create : my_app/views/
   create : my_app/views/error.ejs
   create : my_app/views/index.ejs
   create : my_app/app.js
   create : my_app/package.json
   create : my_app/bin/
   create : my_app/bin/www

   change directory:
     $ cd my_app

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=my-app:* npm start

```

## WEBSTORM
![Alt text](/home/jose/Documents/dev/node/DAM_M04/docs/img/application_generator.png)

## FINAL STRUCTURE
```angular2html
my_app/
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    └── index.ejs

```



## 3. INSTALL DEPENDENCIES
All dependecies listed on project.json must be installed:
```angular2html
$ cd my_app
$ npm install
```

## 4. EXECUTE THE APPLICATION
### Command line
```angular2html
$ cd my_application
$ node bin/www
```
### Webstorm

![Play project buton](/home/jose/Documents/dev/node/DAM_M04/docs/img/play_button.png)

## 4. VIEW THE APPLICATION
Application runs on port set in **bin/www** file which default's value is 3000
![Firefox fresh start](/home/jose/Documents/dev/node/DAM_M04/docs/img/firefox_fresh_start.png)
