const mongoose = require('mongoose');
let connectionCount = 0;

const options = {
	autoIndex: false,
	poolSize: 10,
	bufferMaxEntries: 0,
	useNewUrlParser: true,
	useUnifiedTopology: true
};

const connectWithRetry = () => {
	console.log('MongoDB connection this will retry up to 10 times')
	mongoose.connect("mongodb://localhost:27017/geo-locate", options).then(() =>{
		console.log('Connection to MongoDB successful')
	}).catch(err=>{
		console.log('MongoDB connection was unsuccessful, attempted retry will occur. ', ++count);
		setTimeout(connectWithRetry, 5000);
	})
};

connectWithRetry();

exports.mongoose = mongoose;
