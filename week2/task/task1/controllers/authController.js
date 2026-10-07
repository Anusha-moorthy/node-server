let data = 'Welcome to Express'
export const getData = (req,res)=>{

    res.status(201).json({msg:"Successfully Done", data})

}