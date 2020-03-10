const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });

const fruitSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    }
);

const Fruit = mongoose.model('Fruits', fruitSchema);

const fruit = new Fruit({ 
    name: "Peach",
    rating: 10,
    review: "Peaches are yummy!"
 });

 //  fruit.save();
//  Fruit.deleteOne({name: "Peach"}, function(err){
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Successfully deleted!"); 
//     }
//  });


//  const kiwi = new Fruit({ 
//     name: "Kiwi",
//     rating: 10,
//     review: "I love it!"
//  });

//  const orange = new Fruit({ 
//     name: "Orange",
//     rating: 9,
//     review: "Kinda sour!"
//  });

//  const banana = new Fruit({ 
//     name: "Banana",
//     rating: 3,
//     review: "Not sweet!"
//  });

//  Fruit.insertMany([kiwi, orange, banana], function(err){
//      if (err) {
//          console.log(err);
         
//      } else {
//          console.log("Successfully saved!");
         
//      }
//  });


// Fruit.find(function(err, fruits){
//     if (err) {
//         console.log(err);
//     }else{ 
//         mongoose.connection.close();

//         fruits.forEach(fruit => {
//             console.log(fruit.name);
//         })
//     }
// });



 const peopleSchema = new mongoose.Schema ({
     name: String,
     age: Number,
     favouriteFruit: fruitSchema
 });

 const pineapple = new Fruit ({
     name: "Pineapple",
     rating: 9,
     review: "Great fruit!"
 });

//  pineapple.save();
const Person = mongoose.model("Person", peopleSchema);

const mango = new Fruit ({
    name: "Mango",
    rating: 10,
    review: "Mango, mango again mango!"
});

// mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango});

 

//  const person = new Person ({
//      name: "Amy",
//      age: 20,
//      favouriteFruit: pineapple
//  }); 


// person.save();




