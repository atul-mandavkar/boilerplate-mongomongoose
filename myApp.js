require('dotenv').config();
const { Schema, model } = require('mongoose');
var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const presonSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model("Person", presonSchema);

// To create a new person instance in createAndSavePerson function
const createAndSavePerson = (done) => {
  let p1 = new Person({name: "Atul Mandavkar", age: 29, favoriteFoods: ["Eggs", "Milk", "Paneer", "Fruits"]});
  
  p1.save(function(err, data){
    if(err){
      console.log(err);
    }
    else{
      done(null, data);
      // data of p1 is not available in mongoose clustor in altas because in server.js, in function createAndSavePerson it is removed by .remove() method
    }
  })
};

var arrayOfPeople = [{name: "Ruhii Singh", age: 22, favoriteFoods: ["Milkshakes", "Ice-cream", "Fruits", "Salads"]}, {name: "Shivangi Joshi", age: 27, favoriteFoods: ["Chocolate", "Cake", "Ice-creams", "Juices"]}, {name: "Harsh Rane", age: 34, favoriteFoods: ["Salads", "Milk", "Vegetables"]}];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      done(null, data);
    }
  })
  //done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      done(null, data);
    }
  })
  //done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
