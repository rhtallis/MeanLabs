var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
// var db = mongojs('institutedb', ['labcountries']);
var db = mongojs('mongodb://tallisuser:u3s4e2r4@ds049631.mlab.com:49631/institutedb', ['countrys'])


router.get('/countries', (req,res,next) => {
    db.labcountries.find( (err,data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});

// get single country from mongoLabs
router.get('/country/:id', (req,res,next) => {
    db.labcountries.findOne( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});

// create a single country in mongoLabs
router.post('/country', (req,res,err) => {
    var country = req.body;
    if (!country.StartDate){
        country.StartDate = new Date();
    }

    if (!country.FirstName || !country.LastName || !country.School){
        res.status(400);
        res.json(
            {error: "Bad data, could not insert in database"}
        )
    }else{
        db.labcountries.save(country, (err,data) => {
            if (err){
                res.send(err)
            }
            res.status(200);
            res.json(data);
        })
    }
});

// delete single country from mongoLabs
router.delete('/country/:id', (req,res,next) => {
    db.labcountries.remove( {_id: mongojs.ObjectId(req.params.id)}, (err,data) => {
        if (err){
            res.send(err);
        }
        res.json(data);
    });
});

// update country
router.put('/country/:id', (req,res,next) => {
    var country = req.body;
    var changedcountry = {};

    if (country.FirstName) {
        changedcountry.FirstName = country.FirstName;
    }
    if (country.LastName) {
        changedcountry.LastName = country.LastName;
    }
    if (country.School) {
        changedcountry.School = country.School;
    }
    if (country.StartDate) {
        changedcountry.StartDate = country.StartDate;
    }

    if (!changedcountry){
        res.status(400);
        res.json( {error: "Bad data"} )
    }else{
        db.labcountries.update(
            {_id: mongojs.ObjectId(req.params.id)},
            changedcountry, {}, (err,data) => {
                if (err){
                    res.send(err);
                }
                res.json(data);
            }
        )
    }
})


module.exports = router;