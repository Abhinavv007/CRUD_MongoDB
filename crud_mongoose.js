const mongoose = require('mongoose')  

mongoose.connect('mongodb://127.0.0.1:27017/Names')


let ProductSchema = mongoose.Schema({
    name : String,
    age : Number
});


const addData =async()=>{
    const ProductModel = mongoose.model('data',ProductSchema)
    const data = new ProductModel({
        name:"Abhinav",
        age:"20"
        })
        const result = await data.save()
        console.log(result)
}


const updateInDb=async (req,resp)=>{
    const ProductModel = mongoose.model('data',ProductSchema)
    let data = await ProductModel.updateOne(
        {name:"Abhinav"},
        {$set : {name : "Mohit"}}
        )
        console.log(data)

}


const deletefunc= async(req,resp)=>{
    let ProductModel = mongoose.model('data',ProductSchema)
    let data = await ProductModel.deleteOne({name:"Abhinav"})
    console.log(data)

}

const readInDb = async()=>{
    let ProductModel = mongoose.model('data',ProductSchema)
    let data = await ProductModel.find({})
    console.log(data)
}
readInDb()

deletefunc()

updateInDb()

addData()


  