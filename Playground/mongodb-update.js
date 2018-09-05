const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function (error,db) {
    if (error) {
        return console.log('Unable to connect to mongodb database');
    }
    console.log('Connected to database');

    //updateing record in TOdos collection
    /*db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID('5b8ee1a9e1497c21f09a736f'),  //tells which record to update
    },{
        $set:{
            completed:false
        }
    },{
        returnOriginal:false
    }).then(function (result) {
        console.log(result);
    });*/

    //updateing record in TOdos collection
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b8e243c451ddb252888930d')
    },{
        $set:{
            name:'Muhammad Ali'
        },
        $inc:{
            age:1
        },

    },{
        returnOriginal:false
    }).then(function (result) {
        console.log(result);
    })
});