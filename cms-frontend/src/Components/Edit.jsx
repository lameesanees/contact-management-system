import React, { useState, useEffect } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const baseUrl = 'http://localhost:8001';
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const { cId } = useParams();
  console.log(cId);

  const fetchContact = async () => {
    const result = await axios.get(`${baseUrl}/api/view-contact/${cId}`);
    console.log(result.data.contact);
    setId(result.data.contact.id);
    setName(result.data.contact.name);
    setPhone(result.data.contact.phone);
    setEmail(result.data.contact.email);
    setAddress(result.data.contact.address);
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const handleUpdate = async () => {
    const body = { id, name, phone, email, address };
    const result = await axios.post(`${baseUrl}/api/update-contact/${id}`,body);
    console.log("Contact details updated successfully");
    alert(result.data.message);
    navigate('/');
  };

  return (
    <>
      <div>
        <h2 className='text-center mt-2 p-3'>Update Contact Details</h2>
        <div className='border border mt-2 mb-5 justify-content-center' style={{ width: '80%', height: '500px', marginLeft: '150px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
          <form action="" className='p-5'>
            <MDBInput wrapperClass='mb-4' id='form9Example1' value={id} onChange={(e) => setId(e.target.value)} label='Id' style={{ width: '90%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' id='form9Example1' value={name} onChange={(e) => setName(e.target.value)} label='Name' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' id='form9Example1' value={phone} onChange={(e) => setPhone(e.target.value)} label='Phone' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' id='form9Example1' value={email} onChange={(e) => setEmail(e.target.value)} label='Email' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <MDBInput wrapperClass='mb-4' id='form9Example1' value={address} onChange={(e) => setAddress(e.target.value)} label='Address' style={{ width: '100%', height: '40px', marginBottom: '30px', color: 'black' }} />
            <button onClick={handleUpdate} className='btn p-2 ' style={{ marginLeft: '550px' }}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Edit;
