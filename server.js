const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/help', function (req, res) {
    var customizedData= {
        name:"abhishek",
        age:27
    }
    res.send(customizedData);

    // res.send('How can i help u');
  });

  app.get('/contact',  (req, res)=> {
    res.send('Contact us')
  })

// app.listen(3000)
app.listen(3000,()=>{
    console.log("server is running on port 3000"); // we can write callback fun to know that our server is running or not 
})