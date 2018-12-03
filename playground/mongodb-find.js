// MongoDB module V3 -- 3.1.10 according to package.json
/******************************************************/
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/* var obj = new ObjectID();
console.log(obj); */ 
// Make new variables from objects properties with object destructuring
/* var user = {name: 'herni', age: 36};
var {name} = user;
console.log(name) */

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server')
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp')
    
    /* db.collection('Todos').find({_id: new ObjectID('5c0562e6d9048740ac6f182d')}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */
        // console.log(JSON.stringify(new Date(result.ops[0]._id.getTimestamp()), undefined, 2));
        //db.close();

        db.collection('Todos').find().count().then((count) => {
            console.log('count: ' + count);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
    });