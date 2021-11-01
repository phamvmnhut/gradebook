const mongoose = require('mongoose');
const slugify = require('slugify');
const uniqueValidator = require('mongoose-unique-validator');
const idValidator = require('mongoose-id-validator');
const convVie = require('../utils/convVie');
const enrollModel = require('./enrollModel');

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: [true, 'A class should have a name'],
    unique: true,
    trim: true,
    default: '',
  },
  classNameTextSearch: {
    type: String,
    select: false,
  },

  description: {
    type: String,
  },
  descriptionTextSearch: {
    type: String,
    select: false,
  },

  slug: {
    type: String,
    unique: [true, 'A class should have a slug unique'],
  },

  cover: {
    type: String,
  },

  createBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  toObject: { virtuals: true },
});

classSchema.index({ slug: 1 });
classSchema.index({ classNameTextSearch: 'text', descriptionTextSearch: 'text' });

// vitural full class
classSchema.virtual('teachers', {
  ref: 'Enroll',
  foreignField: 'class',
  localField: '_id',
  // options: { sort: { updatedAt: -1 } },
});

classSchema.plugin(uniqueValidator, {
  message: 'Error, {VALUE} is already taken',
});

classSchema.plugin(idValidator);

classSchema.pre('save', async function (next) {
  // make it bester
  if (this.description) this.descriptionTextSearch = convVie(this.description).toLowerCase();
  this.classNameTextSearch = convVie(this.className).toLowerCase();
  this.slug = slugify(convVie(this.className), { lower: true });
  return next();
});

classSchema.post('save', async function () {
  // set user is teacher of class
  await enrollModel.create({
    user: this.createBy._id,
    class: this._id,
    role: 'teacher',
  });
});

classSchema.pre(/findOneAndUpdate|updateOne|update/, async function (next) {
  const docUpdate = this.getUpdate();
  if (!docUpdate) return next();
  const updateDocs = {};
  if (docUpdate.className) {
    updateDocs.classNameTextSearch = convVie(docUpdate.className).toLowerCase();
    updateDocs.slug = slugify(convVie(docUpdate.className), { lower: true });
  }
  if (docUpdate.description) {
    updateDocs.descriptionTextSearch = convVie(docUpdate.description).toLowerCase();
  }
  // update
  this.findOneAndUpdate({}, updateDocs, { runValidators: true, context: 'query' });
  return next();
});

classSchema.post(
  /findOneAndDelete|findOneAndRemove|deleteOne|remove/,
  { document: true, query: true },
  async (result) => {
    await enrollModel.deleteMany({ classId: result._id });
  },
);
const Class = mongoose.model('Class', classSchema);
module.exports = Class;
