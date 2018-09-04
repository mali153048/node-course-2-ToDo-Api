const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function (error,db) {
    if(error)
    {
        return console.log('Unable to connect to mongodb database');
    }
    console.log('Connected to database');

   /* db.collection('Todos').find({_id:new ObjectID('5b8c44bcdaf7ff1c441c2a54')}).toArray().then(function (data) {
        console.log("ToDos");
        console.log(JSON.stringify(data,undefined,2));
    },function (error) {
        console.log("Unable to fetch documents",error);
    });*/


    db.collection('Users').find({name:"Muhammad Ali"})
        .count()
        .then(function (data) {
        console.log("ToDos count");
        console.log(JSON.stringify(data,undefined,2));
    },function (error) {
        console.log("Unable to fetch documents",error);
    });
    //db.close();
});