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

stateSchema.virtual('id').get(function() {
	return this._id.toHexString();
});

stateSchema.set('toJSON', {
	virtuals: true
});

countySchema.virtual('id').get(function() {
	return this._id.toHexString();
});

countrySchema.set('toJSON', {
	virtuals: true
});

zipSchema.virtual('id').get(function() {
	return this._id.toHexString();
});

zipSchema.set('toJSON', {
	virtuals: true
});


const State = mongoose.model('State', stateSchema);
const County = mongoose.model('County', countySchema);
const Zip = mongoose.model('Zip', zipSchema);

exports.findByStateName = (name) => {
	return State.find({name: name});
};

exports.findByStateId = (id) => {
	return State.findById(id)
		.then((result) => {
			result = result.toJSON();
			delete result._id;
		});
};

exports.list = (perPage, page) => {
	return new Promise((resolve, reject) => {
		User.find()
		.limit(perPage)
		.skip(perPage * page)
			.exec(function (err, users) {
				if(err) {
					reject(err);
				} else {
					resolve(users;)
				}
			})
	});
};
