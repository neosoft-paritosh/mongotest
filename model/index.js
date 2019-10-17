const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Students", { useNewUrlParser: true, useUnifiedTopology: true } ,(error) => {
    if(!error) {
        console.log('Success Connect');
    }else {
        console.log("Error connection to database");
    }
});

const Course = require("./course.model");