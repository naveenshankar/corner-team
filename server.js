//const mongojs = require('mongojs')
const express = require('express')
const http = require('http')
const https = require('https')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const base64 = require('base-64');

//const db = mongojs('lang-exchange', ['users'])
const app = express()
const server = http.createServer(app)

app.use(express.static(__dirname + '/public'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.route('/getAuthCode')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		var options = {
		  host: 'oauth-pp.opentable.com',
		  port: 443,
		  path: '/api/v2/oauth/token?grant_type=client_credentials',
		  method: 'POST',
		  headers: {
		    'Authorization': 'Basic ' + new Buffer('cpa_5069' + ':' + 'aMrmcXH4BuUlLIyN6paPhseSlrzMh6Lz').toString('base64')
		  }
		};

		console.log(options)

		//https.get('https://oauth-pp.opentable.com/api/v2/oauth/token?grant_type=client_credentials', (response) => {
		
		var request = https.get(options, (response) => {
			var body = "";
			response.on('data', function(data) {
				console.log(data);
				body += data;
				res.send(body);
			});
			response.on('end', function() {
				//here we have the full response, html or json object
				console.log(body);
			})
			response.on('error', function(e) {
				console.log("Got error: " + e.message)
			});
		});
	
    })

app.route('/getRestaurant/:id')
    .get((req, res) => {
        console.log("getting restaurant information from opentable");
        res.send({});
    })

server.listen(3002) 
