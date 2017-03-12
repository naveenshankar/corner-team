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

app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.route('/getAuthCode')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		let options = {
		  host: 'oauth-pp.opentable.com',
		  port: 443,
		  path: '/api/v2/oauth/token?grant_type=client_credentials',
		  method: 'POST',
		  headers: {
		    'Authorization': 'Basic ' + new Buffer('cpa_5069' + ':' + 'aMrmcXH4BuUlLIyN6paPhseSlrzMh6Lz').toString('base64')
		  }
		};
		
		let request = https.get(options, (response) => {
			let body = ""
			response.on('data', (data) => body += data )
            //here we have the full response, html or json object
			response.on('end', () => res.send(body))
			response.on('error', (e) => console.log("Got error: " + e.message) )
		});
	
    })

app.route('/getListings')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		let options = {
		  host: 'platform.otqa.com',
		  port: 443,
		  path: '/sync/listings',
		  method: 'GET',
		  headers: {
		  	'Authorization': 'bearer 27037c67-f394-4cfd-ab51-069ac71132fb',
		  	'Content-Type': 'application/json'
		  }
		};
		
		let request = https.get(options, (response) => {
			let body = "";
			response.on('data', function(data) {
				console.log(data);
				body += data;
			});
			response.on('end', function() {
				//here we have the full response, html or json object
				console.log('typeof body', typeof body);
				res.send(body);
			})
			response.on('error', function(e) {
				console.log("Got error: " + e.message)
			});
		});
	
    })
 app.route('/getRestaurantInfo')
    .get((req, res) => {
        console.log("getting restaurants from opentable");

		let options = {
		  host: 'oauth-pp.opentable.com',
		  port: 443,
		  path: '/api/v2/oauth/token?grant_type=client_credentials',
		  method: 'POST',
		  headers: {
		    'Authorization': 'Basic ' + new Buffer('cpa_5069' + ':' + 'aMrmcXH4BuUlLIyN6paPhseSlrzMh6Lz').toString('base64')
		  }
		};

		console.log(options)

		let request = https.get(options, (response) => {
			let body = "";
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

app.use(express.static(__dirname + '/public'))

server.listen(3000, () => console.log('Listening on 3000'))
