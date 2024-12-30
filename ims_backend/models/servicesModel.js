
const mongoose = require('mongoose');


module.exports = mongoose.model('services22', {
    title: String,
    description: String,
    category: String,
    imageUrl: String,
});



