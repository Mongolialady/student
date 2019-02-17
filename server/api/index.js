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

router.put('/students/create', function(){

});

module.exports = router;