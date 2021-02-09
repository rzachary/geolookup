import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stateSchema = new Schema ({
	id : Number,
	name : String
});

const countySchema = new Schema ({
	id : Number,
	name : String,
	state : { type: Schema.Types.ObjectId, ref: "State" }
});

const zipSchema = new Schema ({
	id : Number,
	name: String,
	counties : [[{ type: Schema.Types.ObjectId, ref: "County" }]]
});

const State = mongoose.model('State', stateSchema);
const County = mongoose.model('County', countySchema);
const Zip = mongoose.model('Zip', zipSchema);