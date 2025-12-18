import { Container, Row, Col, Card } from 'react-bootstrap';

const Values = () => {
  const values = [
    {
      icon: "🎯",
      title: "Expertise", 
      description: "Our team brings deep knowledge and specialized skills to deliver exceptional results for our clients."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparent communication in all our dealings."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We leverage cutting-edge technology and creative solutions to drive growth and transformation."
    },
    {
      icon: "👥", 
      title: "Client-centricity",
      description: "Your success is our priority. We focus on understanding your needs and delivering tailored solutions."
    }
  ];

  return (
    <section id="values" className="section-padding container bg-light mb-5 rounded">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold text-primary-custom">
              Our Core Values
            </h2>
            <p>
              The principles that guide everything we do
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 justify-content-center">
          {values.map((value, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="border-0 h-100 text-center">
                <Card.Body className="p-4">
                  {/* <div className="value-icon mb-4">{value.icon}</div> */}
                  <h5 className="text-primary-custom mb-3">{value.title}</h5>
                  <p className="text-muted" style={{lineHeight: '1.7'}}>
                    {value.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Values;
