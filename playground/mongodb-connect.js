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

   /*  db.collection('Todos').insertOne({
        text: 'something fucked up',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo');
        }
        var now = new Date();
        console.log(now);
        var utc = new Date(result.ops[0]._id.getTimestamp() + now.getTimezoneOffset() * 60000);

        db.collection('Todos').find().toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(dosc, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
        console.log(utc);
        // console.log(JSON.stringify(new Date(result.ops[0]._id.getTimestamp()), undefined, 2));
        //db.close();
    });
 */

    client.close();
});