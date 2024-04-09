const mongoose = require('mongoose');

const Group = mongoose.model('group',
    mongoose.Schema({
        name: String
    })
);


module.exports = Group;
