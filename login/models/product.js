import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  label: String,
  price: Number
});
const Product = mongoose.model('Product', ProductSchema);

export default Product;
 