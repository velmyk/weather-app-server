'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CitySchema = new Schema({
	_id: Number,
	name: Array,
  	country: String,
  	coord: {
  		lon: String,
  		lat: Number
  	},
  	pole: Number
}, {collection: 'all-cities'});

module.exports = mongoose.model('City', CitySchema);