
let data = []
export const createStudent = (req,res)=>{

    const{name,course} = req.body
    if(name === "" || course === "") {
        res.status(401).json({msg:"Please Provide Details"})
        return
    }
    const saveData = {name,course}
    // console.log(saveData);
    
    data.push(saveData)
    res.status(200).json({msg:"Success", data})
    
}

export const getStudent = (req,res)=>{
    
    res.status(201).json({msg:"Successfully Done", data})
}