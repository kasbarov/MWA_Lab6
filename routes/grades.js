var express = require('express');
var router = express.Router();
var jsonParser = express.json();

var grades = [{ "id": 1, "name": "Asaad Saad", "course": "CS572", "grade": "95" }];

// get all
router.get('/', function (req, res, next) {
    res.json(grades);
});


// get by id
router.get('/:id', function (req, res, next) {
    let id = req.params['id'];
    res.json(grades.filter(function (grade) { return grade.id == id }));
});

// post
router.post('/', function (req, res, next) {

    grades.push(req.body);
    console.log(grades);

    res.json("SUCCESS");

});

// put
router.put('/', function (req, res, next) {

    let id = req.body.id;

    // find the element to update in the array
    let toUpdateIndex = grades.findIndex(function (grade, index) {
        return grade.id == id;
    });

    console.log (toUpdateIndex);

    // item exist
    if (toUpdateIndex>-1){
        grades[toUpdateIndex] = req.body;
        res.json("SUCCESS");

    }else{ // item does not exist
        res.json("Item does not exist");
    }
   

});

// delete
router.delete('/:id', function (req, res, next) {

    let id = req.params['id'];

    // find the element index to remove from the array
    let toDeleteIndex = grades.findIndex(function (grade, index) {
        return grade.id == id;
    });

    //console.log (toUpdateIndex);

    // item exist
    if (toDeleteIndex>-1){

        //remove element
        grades.splice(toDeleteIndex, 1);
        res.json("SUCCESS");

    }else{ // item does not exist
        res.json("Item does not exist");
    }
   

});


module.exports = router;
