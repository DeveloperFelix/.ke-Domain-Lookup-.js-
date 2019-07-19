'use strict';

let http = require('http');
let bodyParser =require('body-parser');
let path =require('path');
let express = require('express');
const pug =require('pug');
let lookup=require('./js/whois');
let format =require('./js/domain_format');



let app = express();
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(express.static(__dirname +'/public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/views/index.html');
});

app.post('/api',function(req,res){

	let domain = req.body.value;

    if(format.check(domain)){
        lookup.initConn(domain,res);
	}else{
		res.render('error');
	}

});

http.createServer(app)
    .listen(process.env.PORT);

console.log('Server Started....');       
   
