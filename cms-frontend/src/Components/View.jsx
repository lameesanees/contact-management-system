import React,{useState,useEffect} from 'react';
import {
  MDBCard,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function View() {
  const [contactData, setContactData] = useState({})
  const baseUrl = 'http://localhost:8001'
  const {id} = useParams()
  const viewContact = async () => {
    const result = await axios.get(`${baseUrl}/api/view-contact/${id}`);
    console.log(result.data.contact);
    setContactData(result.data.contact);
  }
  useEffect(() => {
    viewContact()
  },[])
  return (
    <>
      <div className='mb-5 mt-2'>
        <h2 className='text-center p-3'>View Contact Details</h2>
        <div className='d-flex justify-content-center'>
          <MDBCard className='p-2 shadow-lg' style={{ width: '30%', height: "50%", marginLeft: "30px",backgroundColor:'#abb8ae' }}>
            <MDBListGroup flush style={{ fontSize: '20px'}}>
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""  className='img-fluid mt-2 mb-2'style={{width:'40%',marginLeft:"130px"}} />
              <MDBListGroupItem><strong>Contact ID:</strong> <span style={{ color: 'green' }}> {contactData.id}</span></MDBListGroupItem>
              <MDBListGroupItem><strong>Full Name:</strong><span style={{ color: 'green' }}> {contactData.name}</span></MDBListGroupItem>
              <MDBListGroupItem><strong>Phone: </strong><span style={{ color: 'green' }}> {contactData.phone}</span></MDBListGroupItem>
              <MDBListGroupItem><strong>Email: </strong><span style={{ color: 'green' }}> {contactData.email}</span> </MDBListGroupItem>
              <MDBListGroupItem><strong>Address:</strong> <span style={{ color: 'green' }}> {contactData.address}</span></MDBListGroupItem>
            </MDBListGroup>
          </MDBCard>
        </div>
        <Link to="/">
          <button className='btn p-2 mt-4' style={{ marginLeft: '720px' }}>
            BACK TO HOME
          </button>
        </Link>
      </div>


    </>
  )
}

export default View
