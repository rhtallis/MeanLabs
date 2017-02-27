var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
// var db = mongojs('mongodb://tallisuser:u3s4e2r4@ds049631.mlab.com:49631/institutedb', ['students'])
var db = mongojs('institutedb', ['students'])


router.get('/students', (req, res, next) => {
    // res.send('STUDENTS API PAGE');
    db.students.find( (err,data)=> {
        if (err){
            res.send(err);
        }
        res.json(data);
    })
});


// get single student from mongoLabs
router.get('/student/:id', (req,res,next) => {
    db.students.findOne( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});

// create a single student in mongoLabs
router.post('/student', (req,res,err) => {
    var student = req.body;
    if (!student.StartDate){
        student.StartDate = new Date();
    }

    if (!student.FirstName || !student.LastName || !student.School){
        res.status(400);
        res.json(
            {error: "Bad data, could not insert in database"}
        )
    }else{
        db.students.save(student, (err,data) => {
            if (err){
                res.send(err)
            }
            res.status(200);
            res.json(data);
        })
    }
});

// delete single student from mongoLabs
router.delete('/student/:id', (req,res,next) => {
    db.students.remove( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});

// update student
router.put('/student/:id', (req,res,next) => {
    var student = req.body;
    var changedStudent = {};

    if (student.FirstName) {
        changedStudent.FirstName = student.FirstName;
    }
    if (student.LastName) {
        changedStudent.LastName = student.LastName;
    }
    if (student.School) {
        changedStudent.School = student.School;
    }
    if (student.StartDate) {
        changedStudent.StartDate = student.StartDate;
    }

    if (!changedStudent){
        res.status(400);
        res.json( {error: "Bad data"} )
    }else{
        db.students.update(
            {_id: mongojs.ObjectId(req.params.id)},
            changedStudent, {}, (err,data) => {
                if (err){
                    res.send(err);
                }
                res.json(data);
            }
        )
    }
})

module.exports = router;