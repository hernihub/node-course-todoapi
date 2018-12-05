// library imports
var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

//local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc); // default 200
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos}); // flexibility: instead of sending back and array, an object is sent
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        res.status(404).send({});
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((e) => res.status(400).send());

});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};