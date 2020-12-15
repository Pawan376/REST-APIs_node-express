const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    timestamps : true
});
module.exports = mongoose.model('Users',UserSchema);