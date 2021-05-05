import mongoose, { Schema } from 'mongoose';
const Category_Schema = new Schema({
    category_id: String,
    category_name: String,
});
module.exports = mongoose.model("categories", Category_Schema);