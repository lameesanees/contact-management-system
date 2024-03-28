const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/cms')

const Contact = mongoose.model('Contact',{
    id:String,
    name:String,
    phone:String,
    email:String,
    address:String,
})

module.exports={
    Contact
}