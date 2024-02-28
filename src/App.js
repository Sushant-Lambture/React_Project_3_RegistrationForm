import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  const [formData,setformData]=useState([{}])

  const getValue=(e)=>{
     let input=e.target;
    //  console.log(input)
    let prop=input.name;
    let value="";
    if(input.type=='file'){
      // console.log(input.files[0]);
        value=input.files[0].name;
    }
    else{
        // console.log(input.value)
        value=input.value;
        // document.getElementById('abc').innerHTML=val;
    }
    // console.log(value);
    return setformData((old)=>{
      return{
        ...old,
        [prop]:value
      }
    })
  }

  function getData(e){
    e.preventDefault()
    console.log(formData);
  }

  return (
    <>
      <Container>
        {/* <h1>App</h1>
        <i className='fa fa-plus'></i> &nbsp;
        <i className='fa fa-address-book fs-2'></i> */}
        <Button className='mt-4 fw-bold' variant='success' onClick={() => setShow(true)}>
          <i className='fa fa-plus'></i>Add User
        </Button>
        
        <h1 id='abc'></h1>

        <Modal show={show}>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>
              <h1>User Registration</h1>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={getData}>
              {/* <div className="form-group">
                <label htmlFor="name" className='form-label'>Full Name</label>
                <input type='text' name='name' placeholder='jfgjn' className='form-control'></input>
              </div> */}

              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type='text' name='name' placeholder='Type Your Name Here' onChange={getValue}></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' placeholder='Type Your Email Here' onChange={getValue}></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' placeholder='Type Your Password Here' onChange={getValue}></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type='tel' name='mobile' placeholder='Type Your Mobile Number Here' onChange={getValue}></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type='file' name='dp' placeholder='Upload Your Photo Here' onChange={getValue}></Form.Control>
              </Form.Group>

              <Form.Group className='mt-2'>
                <Button type='submit' >Submit</Button>
              </Form.Group>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='danger' onClick={() => setShow(false)}>
              Close <i className='fa fa-close' ></i>
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default App;
