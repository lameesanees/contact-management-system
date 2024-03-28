import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const baseUrl = 'http://localhost:8001'
  const [contactData, setContact] = useState([])
  const fetchData = async () => {
    const response = await axios.get(`${baseUrl}/api/get-all-contact`)
    console.log(response.data.contacts);
    setContact(response.data.contacts)
  }
  console.log(contactData);

  useEffect(() => {
    fetchData();
  }, [])
  const handleDelete = async (id) => {
    await axios.delete(`${baseUrl}/api/delete-contact/${id}`);
    alert("deleted successfully")
    // After deletion, fetch updated data
    fetchData();
  };
  return (
    <>
      <div className='row'>
        <div className='col-md-6 p-5 '>
          <h1 className='text-center' style={{ marginTop: '100px', fontSize: "35px" }}>Contact Management System</h1>
          <p className='text-center' style={{ fontSize: "20px" }}>Manage contacts with ease, a system that's sleek,
            Create, Read, Update, Delete, every tweak.
            Efficiency thrives with each operation CRUD,
            In our system, contact management's a breeze, not a dud.</p>
          <Link to='/add'>
            <div className='text-center'>
              <MDBBtn rounded className='mx-2' color='dark'>
                GET STARTED
              </MDBBtn>
            </div>
          </Link>
        </div>
        <div className=' col col-md-6 p-5'>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/developer-doing-website-development-8350552-6648977.png"
            className='img-fluid' style={{ width: "80%", marginLeft: '100px' }} alt="" />
        </div>
      </div>

      {/* features */}
      <div>
        <h1 className='text-center mt-1 p-5'>Features</h1>
        <div className='cards row col-md-6 text-center mt-3 mb-5' style={{ width: "100%" }}>
          <div className=' col shadow-lg md-6' style={{ marginLeft: "20px" }}>
            <img src="https://png.pngtree.com/png-clipart/20230811/original/pngtree-female-programmer-flat-color-vector-detailed-character-vector-woman-worker-vector-picture-image_10351249.png"
              className='img-fluid  mt-2' style={{ width: '60%' }} alt="" />
            <h4 className='mt-5'>Create Contacts</h4>
            <p>Seamlessly add contacts with customizable fields,
              ensuring thorough data collection.</p>
          </div>
          <div className=' col shadow-lg md-6 ' style={{ marginLeft: "20px" }}>
            <img src="https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-beauty-female-programmer-with-laptop-at-workplace-png-image_6058798.png"
              className='img-fluid  mt-2' style={{ width: '60%' }} alt="" />
            <h4 className='mt-5'>Read Contacts</h4>
            <p>Effortlessly access and view contact details with a user-friendly
              interface for referencing.</p>
          </div>
          <div className=' col shadow-lg md-6' style={{ marginLeft: "20px" }}>
            <img src="https://static.vecteezy.com/system/resources/previews/012/793/963/non_2x/3d-illustration-of-programmer-coding-on-computer-png.png"
              className='img-fluid  mt-2' style={{ width: '60%' }} alt="" />
            <h4 className='mt-5'>Update Contacts</h4>
            <p>Modify contact information swiftly, maintaining
              accuracy and relevance with ease.</p>
          </div>
          <div className=' col shadow-lg md-6' style={{ marginLeft: "20px" }}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/react-native-programmer-7464458-6109661.png"
              className='img-fluid  mt-2' style={{ width: '60%' }} alt="" />
            <h4 className='mt-5'>Delete Contacts</h4>
            <p>Remove outdated or unnecessary contacts securely,
              keeping your database organized.</p>
          </div>
        </div>

        {/* Manage contacts */}
        <div>
          <h1 className='text-center mt-5 p-5 md-6'>Manage Your Contacts</h1>

          <Row className="g-4 mb-5 md-6 ">
            <Link to='/add'>
              <button className='btn p-2' style={{ marginLeft: '90%' }}>
                <i className='fa-solid fa-plus fa-lg text-black' ></i>
              </button>
            </Link>
            {
              contactData.map((item) => (
                <Col className='m-3'>
                  <Card className='shadow-lg md-6' style={{ width: '18rem', marginLeft: '20px' }}>
                    <Card.Body>
                      <Card.Title className='text-black text-center'>{item.name}</Card.Title>
                      <Card.Text className='text-info text-center'>
                        {item.email}
                      </Card.Text>
                      <Card.Footer className='md-6'>
                        <Link to={`view/${item.id}`}>
                          <button className='btn p-3' style={{ marginLeft: "10px" }}>
                            <i className='fa-solid fa-eye text-primary' ></i>
                          </button>
                        </Link>
                        <Link to={`edit/${item.id}`}>
                          <button className='btn p-3' style={{ marginLeft: "10px" }}>
                            <i className='fa-solid fa-pencil text-success' ></i>
                          </button>
                        </Link>
                        <Link to=''>
                          <button className='btn p-3'onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px" }}>
                            <i className='fa-solid fa-trash text-danger' ></i>
                          </button>
                        </Link>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </div>
      </div>
    </>
  )
}

export default Admin
