const express = require('express') 
const	app = express()
const	port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const models = require('api/models/models')


app.get('/', (req, res) => {
	res.send('Welcome to the Geo Data API')
})

app.get('/state/:id', function(req, res){
	res.send('state: ' + req.params.id)
})

app.get('/county/:id', function(req, res){
	res.send('county: ' + req.params.id)
})

app.get('/zip/:id', function(req, res){
	res.send('zip: ' + req.params.id)
})

mongoose.connect('mongodb://localhost:27017', {
	useUnifiedTopology: true
}, () => {
	console.log('connected to the databse')
})


app.listen(port, ()=> {
	console.log('Geo Data API was started on: ' + port);
})


