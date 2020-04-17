var express = require("express");
var app = express();
const Alipay = require('../lib/Alipay');
import * as mongoose from 'mongoose';
/*
http://localhost:4000/getPaymentResponse?
sale_id=5e96b6f2484db&
out_trade_no=5e96b6f2484db&
total_fee=3.00&
trade_status=TRADE_FINISHED&
sign=dfb2a8dd34b48a1558350d3b9abeef48&
trade_no=2020041522001379100501039004&
currency=USD&
sign_type=MD5

*/

//Add send box accounts
  const alipay = new Alipay({
  service: 'create_forex_trade',
  partner: 'PLEASE SELF CREATED',
  key: 'PLEASE SELF CREATED',
  gateway: 'https://openapi.alipaydev.com/gateway.do?_input_charset=utf-8',
  sign_type: 'MD5'
});

const redirectForm = alipay.buildRedirect('get', {
 out_trade_no: '6666',
  total_fee: 5,
  subject: 'Test Case ',
  currency: 'USD',
  return_url: 'http://localhost:2000/getPaymentResponse?',
  product_code: 'NEW_OVERSEAS_SELLER',
});

//http://localhost/alipaywithnodejs/index/getPaymentResponse?sale_id=1&out_trade_no=123456&total_fee=2.00&trade_status=TRADE_FINISHED&sign=3cf33c72f09275bcaa6bcafc1af3ca82&trade_no=2020041522001379100501038721&currency=USD&sign_type=MD5/




app.listen(2000,(req,res,next)=>{
	console.log('Lockdown');
 
/* var add_url =" http://localhost/alipaywithnodejs/index/getPaymentResponse?sale_id=1&out_trade_no=123456&total_fee=2.00&trade_status=TRADE_FINISHED&sign=3cf33c72f09275bcaa6bcafc1af3ca82&trade_no=2020041522001379100501038721&currency=USD&sign_type=MD5";
var data = add_url.split("?")
var addurl =data[1];	
for(addurl in items){
 var data3 = items.split("=");
	var t1 = '"'+data3[0]+'"';
	var t2 =  '"'+data3[1]+'"';
	console.log("{"+ t1 + ":" + t2 +"}"); 
} */

/* var doc = { sale_id: "123", out_trade_no: "123456",total_fee: "1", trade_status:"TRADE_FINISHED"
,sign: "3cf33c72f09275bcaa6bcafc1af3ca82", trade_no: "2020041522001379100501038721",currency: "USD", sign_type: "MD5"};   */



/* function myFunction(item, index) {
	var data3 = item.split("=");
	var t1 = '"'+data3[0]+'"';
	var t2 =  '"'+data3[1]+'"';
	console.log("{"+ t1 + ":" + t2 +"}"); 
}
 */


//-----------------MongoDB Connection-----------------------------

/* 	const databaseUrl = "mongodb://localhost:27017/alipaydb";
	//mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
	  mongoose.connect(databaseUrl, function(err, db) {
	  console.log('connected to database');		
		var doc = { name: "Anil", age: "30" };    
		// insert document to 'users' collection using insertOne
		db.collection("users").insertOne(doc, function(err, res) {
			if (err) throw err;
			console.log("Document inserted");
			// close the connection to db when you are done with it
			
		});	
	});
	 */
//-----------------MongoDB Connection-----------------------------
   
});

//http://localhost:3000/createpayment
/* app.get('http://localhost/alipaywithnodejs/index/getPaymentResponse?sale_id=1&out_trade_no=123456&total_fee=2.00&trade_status=TRADE_FINISHED&sign=3cf33c72f09275bcaa6bcafc1af3ca82&trade_no=2020041522001379100501038721&currency=USD&sign_type=MD5/', function (req, res) {
   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log("fullUrl1111: "+fullUrl);
}); */


app.get('/createpayment',(req,res)=>{
	
	console.log('om1');
	res.send(redirectForm)
	console.log('om2');
	var sale_id = req.query['sale_id'];
	console.log("sale_id: "+sale_id);
	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	console.log("RequestUrl: "+fullUrl);

});

app.get('/getPaymentResponse',(req,res)=>{
	
	/* console.log('om3');
	var sale_id = req.query['sale_id'];
	var out_trade_no = req.query['out_trade_no'];
	var total_fee = req.query['total_fee'];
	var trade_status = req.query['trade_status'];
	var sign = req.query['sign'];
	var trade_no = req.query['trade_no'];
	var currency = req.query['currency'];
	var sign_type = req.query['sign_type'];
	console.log('om4');
console.log(sale_id+"--"+out_trade_no+"--"+trade_status); */
/* var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl; */
	/* console.log("ResponseUrl: "+fullUrl); */

/* console.log("REQUEST :"+res);http://localhost/alipaywithnodejs/getPaymentResponse?sale_id=1&out_trade_no=123456
	console.log("RESPONSE :"+res); */
	/* console.log("RESPONSE :"+req.query['sale_id']);
	console.log('hello words');
	/* console.log(req.query['sign']);
	console.log(req.query);*/
	//const isValidResponse = this.alipay.verifyResponse(req.query['sign'], req.query); // Usage in Express.js
	/* console.log("isValidResponse: ");  */
	

	
	const databaseUrl = "mongodb://localhost:27017/alipaydb";	
	mongoose.connect(databaseUrl, function(err, db) {
	console.log('connected to database');		

	var doc = {sale_id: "123", out_trade_no: "123456",total_fee: "1", trade_status:"TRADE_FINISHED",sign: "3cf33c72f09275bcaa6bcafc1af3ca82", trade_no: "2020041522001379100501038721",currency: "USD", sign_type: "MD5"};
	

	db.collection("users").insertOne(doc, function(err, res) {
		if (err) throw err;
		console.log("Document inserted");
		// close the connection to db when you are done with it
		
	});	
	});	
	
	
	
});
//console.log(redirectForm); // Usage in Express.js



/* 
const regexForHash = /(.+)name=\"sign\" value=\"([a-z0-9]+)\"(.+)/;

const html = alipay.buildRedirect('get', {
  out_trade_no: '12345',
  total_fee: 1,
  subject: 'Alipay.js',
  currency: 'USD',
  return_url: 'https://github.com/hyunseob'
});

const hashResult = regexForHash.exec(html)[2];

assert.strictEqual(hashResult, '50dd0e25993f11f0d3a231ede014afe1');

const html2 = alipay.buildRedirect('get', {
  currency: 'USD',
  return_url: 'https://github.com/hyunseob',
  out_trade_no: '12345',
  total_fee: 1,
  subject: 'Alipay.js'
});

const hashResult2 = regexForHash.exec(html2)[2];

assert.strictEqual(hashResult, hashResult2);

const validResponse = alipay.verifyResponse('fb123866e56a5b687e71d43068367e7a', {
  trade_status: 'TRADE_FINISHED',
  out_trade_no: '12345',
  trade_no: '67890'
});

assert(validResponse);

const validResponse2 = alipay.verifyResponse('fb123866e56a5b687e71d43068367e7a', {
  out_trade_no: '12345',
  trade_no: '67890',
  trade_status: 'TRADE_FINISHED'
});

assert(validResponse2);
 */