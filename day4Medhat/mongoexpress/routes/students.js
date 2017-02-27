var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var db = mongojs("mongodb://bcit:Mang0@ds151108.mlab.com:51108/institutedb", ['students']);

router.get("/students", (req, res, next) => {
    //res.send("STUDENTS API Page");
    db.students.find( (err,data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// get single student

router.get("/student/:id", (req, res, next) => {
    db.students.findOne( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

// create/add student
router.post("/student", (res, req, err) => {
    var student = req.body;
    if (!student.StartDate) {
        student.StartDate = new Date();
    }

    if (!student.FirstName || !student.LastName || !student.School) {
        res.status(400);
        res.json(
            {error: "Bad data, could not insert in database"}
        );
    } else {
        db.students.save(student, (err, data) => {
            if (err) {
                res.send(err)
            }
            res.status(200);
            res.json(data);
        });
    }
});

module.exports = router;