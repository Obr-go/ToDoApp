const mongodb = require('mongodb').MongoClient;
mongodb.connect('mongodb://localhost:27017/TodoApp1',(err,client)=>{
  if(err){
    console.log("Unable to connect to database")
  }else{
    const db = client.db('TodoApp1')

    db.collection('Users').find().toArray().then((docs)=>{
      console.log(docs[0]);
    },(err)=>{
      console.log("Unable to fetch docs")
    });

    db.collection('Users').find({age:31, name:'Gagan'}).count().then((count)=>{
      console.log('Count is :' + count)
    },(err)=>{
      console.log("Unable to fetch docs")
    });

    client.close();
  }
})
