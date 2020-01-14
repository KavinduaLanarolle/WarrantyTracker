var mysql = require('mysql');

var conn = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'4313@Samadhi',
        database:'wt'
});

conn.connect((err)=>{
        if(!err)
        console.log("DB Connected")
        else
        console.log(err)
});

const express = require('express');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8080,()=>console.log("Express Server Sratrted"));

app.post('/api/add',(req,res)=>{

	var values = [req.body.itemID,req.body.itemName,req.body.itemCompany,req.body.itemFault,req.body.itemInvoiceDate,req.body.itemCustomer,req.body.itemContact];
	var sql = "INSERT INTO item VALUES (?)";
	conn.query(sql,[values],(err,rows,field)=>{
	if(!err)
	res.send({'status':true})
	else
	res.send({'status':false})
	console.log(err)
});
});

app.post('/api/view',(req,res)=>{

	var sql = "SELECT * FROM item WHERE itemID = (?)";
	conn.query(sql,[req.body.itemID],(err,rows,fields)=>{
	if(!err)
	res.send(rows)
	else
	res.send({'status':false})
	console.log(err)
});
});
