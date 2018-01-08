let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ele');

let db = mongoose.connection;

db.on('error', () => {
    console.log('error');
});
db.once('open', () => {
    console.log('open mongoDB');
});
db.once('disconnected', () => {
    console.log('disconnected');
});

module.exports = mongoose;