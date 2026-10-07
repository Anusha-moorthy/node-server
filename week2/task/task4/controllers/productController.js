import Product from "../models/Product.js"


export const createProduct = async (req,res)=>{

    const{productName,price,category} = req.body

    if(productName === '' || price === '' || category === '') {
        res.status(401).json({msg:"Please Provide Product Details"})
        return
    }
    const saveData = {productName,price,category}
    const data = await Product.create(saveData)
    res.status(200).json({msg:"Success", data})
}

export const getProduct = async (req,res)=>{

    const datas = await Product.collection.find().toArray()

    res.status(201).json({msg:"Successfully Done", datas})

}