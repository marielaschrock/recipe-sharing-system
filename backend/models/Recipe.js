// backend/models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'name', required: true,},
  dateAdded: { type: Date, default: Date.now,},
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;