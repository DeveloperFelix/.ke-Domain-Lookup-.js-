'use strict';

let net    = require('net');
const port = 43;
const host = 'whois.kenic.or.ke';


exports.initConn=function(domain,app){

  let conn = net.createConnection(port,host);
               conn.setEncoding('utf-8');

	conn.on('connect',function(){
	   console.log('Connected to WHOIS Server @ ' + host.toUpperCase());
	   conn.write(domain);
	});

	conn.on('data',function(res){
	    app.render('results',{list:res});
	});

	conn.on('error',function(){
		app.render('error');
		conn.end();
	});

}
	

	
	





