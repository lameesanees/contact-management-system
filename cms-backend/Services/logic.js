const db = require('./db')

const getContacts = ()=>{
    return db.Contact.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contacts:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'No data found'
                }
            }
        }
    )
}
const viewContact = (id)=>{
    return db.Contact.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contact:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'No data found'
                }
            }
        }
    )
}
const addContact = (id,name,phone,email,address)=>{
    return db.Contact.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:401,
                    message:'contact already exists'
                }
            }
            else{
                const contactData=new db.Contact({id,name,phone,email,address})
                contactData.save()
                return{
                    statusCode:200,
                    message:'Contact added successfully'
                }
            }
        }
    )
}

const deleteContact = (id) => {
    return db.Contact.deleteOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    message: 'Contact Deleted Successfully!'
                };
            } else {
                return {
                    statusCode: 404,
                    message: 'Contact deletion failed'
                };
            }
        }
    );
};

const updateContact = (id, name, phone, email, address) => {
    return db.Contact.findOne({ id }).then((response) => {
        if (response) {
            response.id = id;
            response.name = name;
            response.phone = phone;
            response.email = email;
            response.address = address;

            response.save();
            return {
                statusCode: 200,
                message: "Updated Successfully"
            };
        } else {
            return {
                statusCode: 404,
                message: "Updation failed"
            };
        }
    });
};
module.exports={
    getContacts,
    viewContact,
    addContact,
    deleteContact,
    updateContact
}