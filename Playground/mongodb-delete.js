const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function (error,db) {
    if(error)
    {
        return console.log('Unable to connect to mongodb database');
    }
    console.log('Connected to database');


    //deleteMany
    /*db.collection('Todos').deleteMany({text:'Eat lunch'}).then(function (result) {
        console.log(result);
    });*/
    //deleteOne
    /*db.collection('Todos').deleteOne({text:'wash the car'}).then(function (result) {
        console.log(result);
    });*/

    //findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({completed:false}).then(function (result) {
        console.log(JSON.stringify(result),undefined,2);
    });*/

    //Deleteing many from users collection
   /* db.collection('Users').deleteMany({name:"Muhammad Ali"}).then(function (result) {
        console.log(result);
    });*/

    //Finding and then Deleteing from users collection
    db.collection('Users').findOneAndDelete({_id:new ObjectID("5b8e2429e6eb7c016cc358a1")})
        .then(function (result) {
            console.log(result);
        });

});