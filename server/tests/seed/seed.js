const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const jwt = require('jsonwebtoken');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: 'hc@now.com',
    password: 'passwordtest1',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId._id, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: userTwoId,
    email: 'lip@now.com',
    password: 'passwordtest2',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userTwoId._id, access: 'auth'}, process.env.JWT_SECRET).toString()
    }]
}];

//Dummy Todos
const todos = [{
    _id: new ObjectID(),
    text: 'First test todo',
    _creator: userOneId
    }, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 3,
    _creator: userTwoId
}];

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};