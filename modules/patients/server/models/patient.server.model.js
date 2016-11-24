'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Patient Schema
 */
var PatientSchema = new Schema({
  fname: {
    type: String,
    default: '',
    required: 'Please fill Patient first name',
    trim: true
  },
  lname: {
    type: String,
    default: '',
    required: 'Please fill Patient last name',
    trim: true
  },
  age: {
    type: String,
    default: '',
    required: 'Please fill Patient age',
    trim: true
  },
  dob: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    default: '',
    required: 'Please fill gender',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    required: 'Please fill phone ',
    trim: true
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

mongoose.model('Patient', PatientSchema);
