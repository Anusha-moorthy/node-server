import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    productName: String,
    price: Number,
    category: String

})

export default mongoose.model('Product', productSchema)