var mongoose = require('mongoose');

// use promises
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {mongoose};