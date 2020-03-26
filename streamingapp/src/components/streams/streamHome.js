import React, { Component } from 'react';
import { Jumbotron, Button , Carousel} from 'react-bootstrap';

import GoogleAuth from '../GoogleAuth';

class Home extends Component{
render(){
    return(
        <div> 
            
<Carousel id="hover">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
      alt='/fox'
    />
    <Carousel.Caption>
      <h3>Stream 1</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


            <Jumbotron >
                <h2> Welcome to Stream Snipe </h2>
                <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
   <GoogleAuth/>
  </p>
            </Jumbotron>


        </div>
    )
}

}

export default Home;