var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {json} = require("express");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
        filename: "./db_musica.sqlite"
    }
});


// WEB ENDPOINTS //////////////////////////
app.get('/', (req, res) => {
    const options = {title: ' WEB DE MUSICA'}
    res.render('index', options) //, options)
});


app.get('/api/groups', async (req, res) => {
    try {
        const groups = await knex('Groups')
        res.status(200).send(groups)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})


app.get('/api/albums', async (req, res) => {
    try {
        const albums = await knex('Albums')
        res.status(200).send(albums)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})


app.get('/groups', async (req, res) => {

    try {
        const groups = await knex('Groups')
        const options = {
            title: 'Group List',
            groups: groups
        }
        res.render('groups', options)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})

app.get('/albums', async (req, res) => {

    try {
        const albums = await knex('Albums as a')
            .join('Groups as g', 'a.idGroup', '=', 'g.id')
            .select('a.id', 'a.title', 'a.image', 'g.name as group', 'a.description')
        const options = {
            title: 'Group List',
            albums: albums
        }
        res.render('albums', options)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})

app.delete('/foo',(req, res)=>{
    console.log('OK')
    res.send('OK')
})
app.delete('/albums/:id', async (req, res)=> {

    const id = parseInt(req.params.id);
    console.log('app.put id:',id)
    try{
        const album = await knex('Albums').where({id}).first()
        if (!album) {
            res.status(404).send(' Album not found')
        }
        console.log('app.delete id:',id)


        const result = await knex('Albums')
            .where({id})
            .delete()


        if (result) {
            console.log('TODO OK')
            res.status(201).redirect('/albums')
        } else {
            console.log('esto no va')
            res.status(404).send({success: false, message: 'Group not found.'});
        }

    }catch (e) {
        console.log(e)
        res.status(500).send('ERROR'+ e.message)
    }
})

app.get('/albums/update/:id', async (req, res) => {


    // id should be found . Otherwise an error must be returnd
    try {
        const id = req.params.id;
        const groups = await knex('Groups')
        const albums = await knex('Albums')
            .select('Albums.id', 'title', 'image', 'idGroup', 'description').where('id', '=', id)

        const options = {
            title: 'Group List',
            album: albums[0], // albums is a lost of results
            groups: groups
        }
        res.render('update_album', options)
    } catch (e) {
        console.log(e)
        res.status(500).send('ERROR')
    }
})


app.post('/albums/update/', async (req, res) => {
    const {id, title, image, idGroup, description} = req.body; // Assuming parameters has `role` and `name` are present in the form

    try {
        const album = await knex('Albums').where({id}).first()
        if (!album) {
            res.status(404).send('not found')
        }
        const updateCount = await knex('albums')
            .update({id, title, image, idGroup, description})
            .where({id})

        if (updateCount) {
            res.status(201).redirect('/albums')
        } else {
            res.status(404).send({success: false, message: 'Group not found.'});
        }

    } catch (e) {
        console.log(e)
        res.status(500).send({success: false, message: e.message});
    }
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
