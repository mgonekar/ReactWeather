const express = require('express');

const app = express();
const PORT = process.env.PORT ||3000;

app.use(function (req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));

app.listen(PORT, function(req, res){
    console.log('Server is up on port ' + PORT);
});
