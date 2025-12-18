import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" s_bg  container  rounded  text-white ">
      <div className='s_bg  rounded p-5'>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <h5 className="text-white mb-4">Favun Advisory</h5>
            <p className="text-light opacity-75 mb-4">
              Management consulting firm offering innovative solutions in Strategy, Sustainability, and Innovation. 
              Empowering businesses in Zimbabwe and the region to thrive.
            </p>
           
          </Col>
          
          <Col lg={2} md={6}>
            <h6 className="text-white mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-light opacity-75 text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-light opacity-75 text-decoration-none">Services</a>
              </li>
              <li className="mb-2">
                <a href="#team" className="text-light opacity-75 text-decoration-none">Our Team</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light opacity-75 text-decoration-none">Contact</a>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="text-white mb-4">Services</h6>
            <ul className="list-unstyled">
              <a href="https://wa.me/263782065654?text=Management Consulting" target="_blank"><li className="mb-2 text-light opacity-75">Management Consulting</li></a>
               <a href="https://wa.me/263782065654?text=HR Consulting" target="_blank"><li className="mb-2 text-light opacity-75">HR Consulting</li></a>
               <a href="https://wa.me/263782065654?text=Investment & Finance Consulting" target="_blank"><li className="mb-2 text-light opacity-75">Investment & Finance Consulting</li></a>
               <a href="https://wa.me/263782065654?text=Research" target="_blank"><li className="mb-2 text-light opacity-75">Research</li></a>
               <a href="https://wa.me/263782065654?text=Trainings" target="_blank"><li className="mb-2 text-light opacity-75">Trainings</li></a>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="text-white mb-4">Contact Info</h6>
            <div className="text-light opacity-75">
              <p className="mb-2">info@favun.co.zw</p>
              <p className="mb-2">+263 78 206 5654</p>
              <p className="mb-2">Zimbabwe</p>
              <p className="mb-0">Mon - Fri: 8:00 AM - 5:00 PM</p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-5 opacity-25" />
        
        <Row>
          <Col md={6}>
            <p className="text-light opacity-75 mb-0">
              © 2024 Favun Advisory. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-light opacity-75 mb-0">
              Management Consulting | Strategy & Innovation
            </p>
          </Col>
        </Row>
              </div>

    </footer>
  );
};

export default Footer;
