
let data = []
export const createStudent = (req,res)=>{

    const{name,email} = req.body
    if(name === '' || email === '') {
        res.status(401).json({msg:"Please Provide Details"})
        return
    }
    const saveData = {name,email}
    data.push(saveData)
    res.status(200).json({msg:"Success",data})
}