const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });

const fruitSchema = new mongoose.Schema (
    {
        name: String,
        rating: Number,
        review: String
    }
);

const Fruit = mongoose.model('Fruits', fruitSchema);

const fruit = new Fruit({ 
    name: "Apple",
    rating: 5,
    review: "The best Apples in the world!"
 });

 const kiwi = new Fruit({ 
    name: "Kiwi",
    rating: 10,
    review: "I love it!"
 });

 const orange = new Fruit({ 
    name: "Orange",
    rating: 9,
    review: "Kinda sour!"
 });

 const banana = new Fruit({ 
    name: "Banana",
    rating: 3,
    review: "Not sweet!"
 });

 Fruit.insertMany([kiwi, orange, banana], function(err){
     if (err) {
         console.log(err);
         
     } else {
         console.log("Successfully saved!");
         
     }
 });


 const peopleSchema = new mongoose.Schema ({
     name: String,
     age: Number
 });

 const Person = mongoose.model("Person", peopleSchema);

 const person = new Person ({
     name: "Umida",
     age: 24
 }); 






person.save();




