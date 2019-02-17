var StudentModel = require("../model/studentmodel");

function createStudent(student){
    var instance = new StudentModel({
        rollNo: student.rollNo,
        firstName: student.firstName,
        lastName: student.lastName,
        rank: student.rank
    });
    return new Promise(function (resolve, reject) {
       instance.save(function(error) {
           if (error) {
               reject(error);
           } else {
               resolve({})
           }
       })
   })
}

function updateStudent(rollNo, student){
    var newStudent = {
        rollNo: student.rollNo,
        firstName: student.firstName,
        lastName: student.lastName,
        rank: student.rank
    };
    return new Promise(function(resolve, reject){
        StudentModel.findOneAndUpdate({'rollNo': rollNo}, newStudent, {upsert: true}, function(error, doc){
            if(error){
                reject(error);
            }else{
                resolve({doc})
            }
        })
    })
}

function deleteStudent(rollNo){
    return new Promise(function (resolve, reject) {
        StudentModel.remove({'rollNo': rollNo}, function (error) {
            if(error){
                reject(error);
            }else{
                resolve({});
            }
        });
    })
}


/**
 *  sort: {field, order: 'asc/desc'}
 *
 * @param sort
 * @returns {Promise<any>}
 */

function getStudents(sort){

    return new Promise(function(resolve, reject) {
        StudentModel.find({}).sort(sort).exec(function(error, docs) {
            if (error) {
                reject(error);
            } else {
                resolve(docs);
            }
        })
    })
}

function getStudent(rollNo){
    return new Promise(function(resolve, reject) {
        StudentModel.findOne({'rollNo': rollNo}, function(error, doc){
            if(error){
                reject(error);
            }else{
                resolve({doc});
            }
        })
    })
}

module.exports = {
    'createStudent': createStudent,
    'updateStudent': updateStudent,
    'deleteStudent': deleteStudent,
    'getStudents': getStudents,
    'getStudent': getStudent
}