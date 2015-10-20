/*
 * Model for basic bank account inside site
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BasicAccountSchema = new Schema({
  account: Schema.ObjectId,
  name: String,
  account_number  : { type: String, required: true },
  description     : { type: String, required: false },
  available_balance : { type: Number, required: false },
  total_balance   : { type: Number, required: false },
  date_created    : { type: Date, required: true  },
  account_type    : { type: String, required: false },
  active: Boolean
});

module.exports = mongoose.model('BasicAccount', BasicAccountSchema);