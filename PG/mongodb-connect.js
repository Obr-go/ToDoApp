const mongoclient = require('mongodb').MongoClient;

mongoclient.connect('mongodb://localhost:27017/TodoApp1',(err,client)=>{
  if(err){
    console.log("Connection Failed")
  }else{
    console.log("Connection Successful");
    const db = client.db('TodoApp1')
    db.collection('Users').insertOne({
      name: 'Gagan',
      age: 31,
      location: 'New Delhi'
    },(err, result)=>{
      if(err){
        console.log("Problem in inserting record", err)
      }
      else{
        console.log(JSON.stringify(result.ops[0].name))
      }
    })
    client.close();
  }
});
