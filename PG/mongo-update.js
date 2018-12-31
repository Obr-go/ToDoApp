const mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/TodoApp1',(err,client)=>{
  if(err){
    console.log("Unable to connect to database")
  }else{
    const db = client.db('TodoApp1')
    db.collection('Users').findOneAndUpdate({name :'Gagan'},{ $
      set:{name:'Gagan1'}, $inc:{age:1}},{returnOriginal:false}).then((res)=>{
      console.log(res);
    })

  }
});
