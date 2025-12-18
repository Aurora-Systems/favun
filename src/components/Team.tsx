import { Row, Col, Card} from 'react-bootstrap';
import Bg from './BgImg';

const Team = () => {
  return (
    <section id="team" className="section-padding container mb-5">
        <Row className="mb-5 p-5" style={{...Bg("https://aurorasystems.sirv.com/729.jpg")}}>
          <Col lg={8} className="mx-auto text-center opacity-bg text-white rounded">
            <h2 className="display-3 fw-bold text-white m ">
              Meet Our Team
            </h2>
            <p className="">
              Our team differentiates us from other players. Their combined knowledge and skill sets make us a valuable partner in business.
            </p>
          </Col>
        </Row>
        
        <Row className=" mb-3 gap-3">
          <Col className='s_bg rounded '>
            <Card className="border-0">
              <Card.Body className="p-5 s_bg  rounded text-white">
                <Row className=''>
                
                  <Col className='' >
                    <h3 className="text-white mb-2">Reason Mahigere</h3>
                    <h6 className="text-white mb-3">
                      Managing Partner
                    </h6>
                    <p className="text-white" >
                      Leading Favun Advisory with strategic vision and expertise, Reason brings extensive experience 
                      in management consulting and business development to drive client success.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col className='s_bg rounded'>
            <Card className="border-0 text-white ">
              <Card.Body className="p-5 s_bg rounded">
                <h3 className="text-white mb-2">Elizabeth Machigere</h3>
                <h6 className="text-white mb-3">
                  Managing Partner
                </h6>
                <p className="text-white mb-4">
                  Leading Favun Advisory with strategic vision and expertise, Elizabeth brings extensive experience 
                  in management consulting and business development to drive client success.
                </p>
                
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className=" mb-3 gap-3">
          <Col className='s_bg rounded '>
            <Card className="border-0">
              <Card.Body className="p-5 s_bg  rounded text-white">
                <Row className=''>
                
                  <Col className='' >
                    <h3 className="text-white mb-2">Fungai T Machigere</h3>
                    <h6 className="text-white mb-3">
                      Managing Partner
                    </h6>
                    <p className="text-white" >
                      Leading Favun Advisory with strategic vision and expertise, Fungai brings extensive experience 
                      in management consulting and business development to drive client success.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
          <Col className='s_bg rounded'>
            <Card className="border-0 text-white ">
              <Card.Body className="p-5 s_bg rounded">
                <h3 className="text-white mb-2">Tinomudaishe Machigere</h3>
                <h6 className="text-white mb-3">
                  Business Development Manager
                </h6>
                <p className="text-white mb-4">
                  Driving business growth and client relationships, Tinomudaishe brings strategic expertise 
                  in business development to expand Favun Advisory's reach and impact.
                </p>
                
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className=' d-flex justify-content-center gap-3 align-items-center text-center text-white'>
                  <Col className="mb-3 p_bg p-3 rounded">
                    <div className="h2 text-white fw-bold">Innovation</div>
                    <small >Driven Solutions</small>
                  </Col>
                  <Col className="mb-3 p_bg p-3 rounded">
                    <div className="h2 text-white fw-bold">100%</div>
                    <small >Client Focused</small>
                  </Col>
                  <Col className="mb-3 p_bg p-3 rounded h-100">
                    <div className="h2 text-white fw-bold">Expertise</div>
                    <small >Proven Results</small>
                  </Col>
        </Row>
    </section>
  );
};

export default Team;
