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
    
    // db.collection('Todos').deleteMany({text: 'eat sandwich'}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });
    
    //db.close();
});