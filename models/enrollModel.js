const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const classRoleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: [true, 'Please provide the userID'],
  },

  class: {
    type: mongoose.Schema.ObjectId,
    ref: 'Class',
    required: [true, 'Please provide the class ID'],
  },

  role: {
    type: String,
    enum: ['member', 'teacher'],
    default: 'member',
  },
}, {
  timestamp: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

classRoleSchema.index({ user: 1, class: 1 }, { unique: true });

classRoleSchema.plugin(uniqueValidator, {
  message: 'Error, {VALUE} is already taken',
});

const ClassRole = mongoose.model('ClassRole', classRoleSchema);
module.exports = ClassRole;
