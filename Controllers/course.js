const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const courseModel = mongoose.model("course");

router.get("/add", (req, res)=> {
    res.render("add-course");
})

router.post("/add", (req, res)=> {
    console.log(req);

    var course = new courseModel();
    course.courseName = req.body.courseName;
    course.courseId = Math.ceil(Math.random() * 100);
    course.courseDuration = req.body.courseDuration;
    course.courseFees  = req.body.courseFees;
    course.save((err, docs) => {
        if(!err) {
            res.redirect("/course/list");
        } else {
            res.send("Error");
        }
    });
    // res.render("add-course");
})

router.get("/list", (req, res) => {
    // var course = new courseModel();
    // course.courseName = "Node JS";
    // course.courseId = "02";
    // course.courseDuration = "3 Months";
    // course.courseFees  = "5000";
    // course.save();
    courseModel.find((err, docs) => {
        if(!err) {
            res.render('list', {data : docs});
        } else {
            res.send('Error');
        }
    });
});

module.exports = router;