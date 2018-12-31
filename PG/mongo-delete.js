const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/TodoApp1',(err,client)=>{
  if(err){
    console.log("Unable to connect to database")
  }else{
    const db = client.db('TodoApp1')
    //deleteMany
  //  db.collection('Users').deleteMany({name: 'Gagan1'}).then(function(result){
    //  console.log(result);
    //})
    //findoneandupdate
    db.collection('Users').findOneAndDelete({name: 'Gagan2'}).then((res)=>{
      console.log(res)
    })

    //deleteone  --same as deleteMany
  }

})
