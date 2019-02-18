var express = require('express');
var router = express.Router();
var service = require('../service/studentService');

router.get('/', function(req, res, next) {
    service.getStudents({}).then((data)=>{
        res.send(JSON.stringify(data));

    }, (error)=>{
        next(error);
    })
});

router.post('/students', function(req, res, next){
    var student = req.body;
    console.log(student);
    service.createStudent(student).then(() => {
        res.send("{}")
    }, (error)=> {
        next(error)
    })
});

router.get('/students/:rollNo', function(req, res, next){
    service.getStudent(req.params.rollNo).then(
        (data) => {
            res.send(JSON.stringify(data));
        }, (error) => {
            next(error);
        }
    );
});


router.put('/students/:rollNo', function(req, res, next){
    var rollNo = req.params.rollNo;
    service.updateStudent(rollNo, req.body).then(
        (data) => {
            res.send(JSON.stringify(data));
        }, (error) => {
            next(error);
        }
    )
});

router.delete('/students/:rollNo', function(req, res, next){
    var rollNo = req.params.rollNo;
    service.deleteStudent(rollNo).then(
        () => {

        }, () => {

        }
    )
});

module.exports = router;