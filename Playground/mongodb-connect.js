const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',function (error,db) {
    if(error)
    {
        return console.log('Unable to connect to mongodb database');
    }
   console.log('Connected to database');

    /*db.collection('Todos').insertOne({
         text:'walk the dog',
         completed:false
     },function (error,result) {
         if(error)
         {
             return console.log("Unable to insert ToDo",error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
     });*/

     db.collection('Users').insertOne({
         name:'Muhammad Luqman',
         age:21,
         location:'Islamabad'
     },function (error,result) {
         if(error)
         {
             return console.log("Unable to insert User",error);
         }
         console.log(JSON.stringify(result.ops,undefined,2));
     });
    db.close();
});