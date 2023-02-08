const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<html><body><h1>We Are Many, For I Am Legion...</h1></body></html>');
});
app.post('/submit-data', function(req, res){
    res.send('Post Request');
});
app.put('/update-data', function(req, res){
    res.send('Put Request');
});
app.delete('/delete-data', function(req, res){
    res.send('Delete Request');
});

const server = app.listen(6969, function(){
    console.log('Node Server is Running...');
});