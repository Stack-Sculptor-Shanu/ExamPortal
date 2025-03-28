const mongoose=require("mongoose")

const user_schema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is Required']
    },
    email:{
        type:String,
        require:[true,'Email is Required']
    },
    mobilenumber:{
        type:String,
        require:[true,'Mobile is Required']
    },
    course:{
        type:String,
        require:[true,'Course is Required']
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    password:{
        type:String,
        require:[true,'Password is required']
    }
},
{
    timestamps:true
}
);

const users=mongoose.model('users',user_schema)
module.exports=users