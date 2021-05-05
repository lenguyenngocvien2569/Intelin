import mongoose, { Schema, Document } from 'mongoose';
const Category_Schema: Schema = new Schema({
    category_id: {type: String,required: true},
    category_name:{type: String,required: true},
    create_date:{type: Date,required: true},
    update_date:{type: Date,required: true},
})
const Category = mongoose.model("Category", Category_Schema);
export default Category;