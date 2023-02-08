const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/submit-agent-data', function(req, res){
    let name = req.body.firstName + ' ' + req.body.lastName + ' ' + req.body.agentID;
    res.send(name + ' '  + 'Submitted Request Successfully');
});

// Defines Routes Here...

let server = app.listen(6900, function(){
    console.log('Node Server is Running...');
});