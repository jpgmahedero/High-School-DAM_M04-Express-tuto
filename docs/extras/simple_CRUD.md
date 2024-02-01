# SIMPLE CRUD

```angular2html
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let items = [];

// CREATE
app.post('/items', function(req, res) {
    const item = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(item);
    res.status(201).send(item);
});

// READ (All items)
app.get('/items', function(req, res) {
    res.status(200).send(items);
});

// READ (Single item)
app.get('/items/:id', function(req, res) {
    const id = parseInt(req.params.id);
    let found = null;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            found = items[i];
            break;
        }
    }
    if (!found) res.status(404).send('Item not found');
    else res.status(200).send(found);
});

// UPDATE
app.put('/items/:id', function(req, res) {
    const id = parseInt(req.params.id);
    let found = null;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            items[i].name = req.body.name;
            found = items[i];
            break;
        }
    }
    if (!found) res.status(404).send('Item not found');
    else res.status(200).send(found);
});

// DELETE
app.delete('/items/:id', function(req, res) {
    const id = parseInt(req.params.id);
    let foundIndex = -1;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            foundIndex = i;
            break;
        }
    }
    if (foundIndex === -1) res.status(404).send('Item not found');
    else {
        items = items.filter(function(item, index) {
            return index !== foundIndex;
        });
        res.status(204).send();
    }
});

app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`);
});

```