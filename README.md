### Setup

To set up your app and compile your files, run the following commands from the project root:

```
$ npm install
$ gulp
```

The first command will install the node dependencies for this project. The second command will compile/concat/minify your JS, Stylus and Jade files and start your server with accompanying watch tasks.

### Config

To connect to your firebase database, after creating a firebase account and creating your database, add your firebase url to the 
`var ref = new Firebase('https://<<yourappurl>>.firebaseio.com/');` in the following location:

```
app/controllers/main.js

```