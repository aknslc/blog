const express = require('express');

const app = express();

app.get('/', (req, res)=>{

    res.send("Index page");

});

const port = 3000;

app.listen(port, ()=>{
    console.log(`server ${port} portunda calisti`);
});