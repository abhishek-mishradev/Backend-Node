const mangoose = require('mongoose');
require('dotenv').config();


const mongoURL = process.env.MONGODB_URL_LOCAL
// const mongoURL= process.env.MONGODB_URL

mangoose.connect(mongoURL,{
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