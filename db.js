const mangoose = require('mongoose')

const mangoURL= "mongodb://localhost:27017/hotels";

mangoose.connect(mangoURL,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
})

const db = mangoose.connection;



db.on('connected', ()=>{
    console.log('connected to mongoDB');
});
db.on('error', (err)=>{
    console.log('MongoDB connection error', err);
});

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
});

module.exports= db;