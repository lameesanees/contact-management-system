import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const baseUrl = 'http://localhost:8001';
  const navigate = useNavigate();

  // State variables for form inputs
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Function to handle form submission
  const addContact = async () => {
    // Check if ID is empty
    if (!id.trim()) {
      alert("Please enter an ID");
      return;
    }
  
    // Prepare data to be sent in the request body
    const body = { id, name, phone, email, address };
  
    // Send POST request to the backend API
   
      const result = await axios.post(`${baseUrl}/api/add-contact`, body);
      console.log(result); // Log the response for debugging
      alert(result.data.message); // Show success message
      navigate('/'); // Redirect to home page after successful submission
    
  };
  
  return (
    <>
      <div>
        <h2 className='text-center mt-2 p-3'>Add Contact Details</h2>
        <div className='border border mt-2 mb-5 justify-content-center' style={{ width: '80%', height: '500px', marginLeft: '150px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
          <form action="" className='p-5'>
            {/* Input fields for contact details */}
            <MDBInput wrapperClass='mb-4' onChange={(e) => setId(e.target.value)} id='form9Example1' label='Id' style={{ width: '90%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setName(e.target.value)} id='form9Example1' label='Name' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setPhone(e.target.value)} id='form9Example1' label='Phone' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} id='form9Example1' label='Email' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' onChange={(e) => setAddress(e.target.value)} id='form9Example1' label='Address' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            {/* Button to submit the form */}
            <button onClick={addContact} className='btn p-2' style={{ marginLeft: '550px' }}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
