const express = require('express')

const cors = require('cors')

const logic = require('./Services/logic')

const emsServer = express()

emsServer.use(cors({
    origin:'http://localhost:5173'
}))

emsServer.use(express.json())

emsServer.listen(8001,()=>{
    console.log("emsServer listening on port 8001")
})
emsServer.get('/api/get-all-contact',(req,res)=>{
    logic.getContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})
emsServer.get('/api/view-contact/:id',(req,res)=>{
    logic.viewContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})
emsServer.post('/api/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.name,req.body.phone,req.body.email,
        req.body.address).then((response)=>{
            res.status(response.statusCode).json(response)
        })
})
emsServer.delete('/api/delete-contact/:id', (req, res) => {
    logic.deleteContact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response);
    });
});
emsServer.post('/api/update-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id, req.body.name, req.body.phone, 
        req.body.email, req.body.address)
        .then((response) => {
            res.status(response.statusCode).json(response);
        })
    });