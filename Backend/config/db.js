const mongoose=require("mongoose")

const ConnectDB= async()=>{
    try {
        await mongoose.connect(process.env.mongodb_url)
        console.log("Database Connected")
    } catch (error) {
        console.log("Failed to Connect the DB")
        process.exit(1)
    }
}
module.exports=ConnectDB