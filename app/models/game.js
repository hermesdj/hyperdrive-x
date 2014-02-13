/**
 * New node file
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var GameSchema = new Schema({
	name: {
		type: String,
		unique: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

/**
 * Validations
 */
GameSchema.path('name').validate(function(name) {
    return name.length;
}, 'Game name cannot be blank');

/**
 * Statics
 */
GameSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};


mongoose.model('Games', GameSchema);