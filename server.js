const express = require ('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, 'src','public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000

// app.use(express.static(__dirname + '/src'));
app.get('/', function(req, res){
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(port, function(){
    console.log(`App Running at ${port}`);
});