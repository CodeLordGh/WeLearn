import { React, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './signup.css';
import { Link } from 'react-router-dom';
import proImg from '../assets/pro.jpg';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  //image upload state
  const [image, setImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  async function validateImg(e){
    const file = e.target.files[0];
    if(file.size > 1048576){
      return alert("File max size should be 1mb!");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function uploadImage(e){
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'WeCode');
    try {
      setImageUploading(true);
      let res = await fetch ('https://api.cloudinary.com/v1_1/dnlengfbp/image/upload', {
        method: 'post',
        body: data
      })
      const urlData = await res.json();
      setImageUploading(false);
      return urlData.url
    } catch (error) {
      setImageUploading(false);
      console.log(error)
    }

  }

  async function handleSignUp(e) {
    e.preventDefault();
    if(!image) return alert('Please upload a profile picture!');
    const url = await uploadImage(image);
    console.log(url);
    //SignUp user
    
    }

  return (
    <Container>
      <Row>
        <Col className='d-flex align-items-center justify-content-center flex-direction-column'>
        <Form style={{width:'80%', maxWidth: '500'}} onSubmit={handleSignUp}>
        <h1 className='text-center'>Create account</h1>
          <div className='signup-profile-pic__container'>
            <img src={ imagePreview || proImg } alt='profile' className='signup-profile-pic'/>
            <label className='image-upload-label' htmlFor='image-upload'>
              <i className='fas fa-plus-circle add-picture-icon'></i>
            </label>
            <input type='file' id='image-upload' hidden onChange={validateImg} accept='image/png image.jpeg'/>
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" onChange={ (e) => setName(e.target.value)} value={name} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={ (e) => setEmail(e.target.value)} value={email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={ (e) => setPassword(e.target.value)} value={password}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            {imageUploading ? 'Signing you up...' : 'Signup'}
          </Button>
          <div className='py-4'>
        <p className='text-center'>
          Have an account? <Link to='/login'>login</Link>
        </p>
      </div>
        </Form>

        </Col>
        <Col md={5} className='signup__bg'></Col>
      </Row>
    </Container>
  )
}

export default Signup