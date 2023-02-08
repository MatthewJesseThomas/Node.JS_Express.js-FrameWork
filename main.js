const express = require('express');
const app = express();

app.get('/home', function(req, res){
    res.send('<html><body><h1>Welcome To The Danger Zone...</h1></body></html>');
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
// Defines Routes Here...

let server = app.listen(5000, function(){
    console.log('Node Server is Running...');
});