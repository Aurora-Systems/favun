import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Management Consulting",
      description: "Strategic planning, operational improvement, and organizational development to help your business achieve its goals."
    },
    {
      number: "02", 
      title: "HR Consulting",
      description: "Talent management, performance management, and change management to build high-performing teams and organizations."
    },
    {
      number: "03",
      title: "Investment & Finance Consulting",
      description: "Financial planning, investment analysis, and risk management to optimize your financial strategy and decision-making."
    },
    {
      number: "04",
      title: "Project Management",
      description: "End-to-end project planning, execution, and delivery to ensure successful outcomes and timely completion of initiatives."
    },
    {
      number: "05",
      title: "Sustainability Management",
      description: "Sustainable business practices, environmental management, and corporate social responsibility strategies for long-term success."
    },
    {
      number: "06",
      title: "Tourism Development Planning",
      description: "Strategic tourism planning, destination development, and sustainable tourism initiatives to boost regional tourism growth."
    },
    {
      number: "07",
      title: "Urban and Rural Development Planning",
      description: "Comprehensive planning solutions for urban and rural development, infrastructure planning, and community development strategies."
    },
    {
      number: "08",
      title: "Research",
      description: "Market research, feasibility studies, and data analytics to inform business decisions and identify opportunities."
    },
    {
      number: "09",
      title: "Trainings",
      description: "Capacity-building programs for individuals and organizations, enhancing skills and knowledge in key areas."
    }
  ];

  return (
    <section id="services" className="section-padding mb-5">
      <Container>
        <Row className="">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-3 fw-bold text-primary-custom">
              Our Services
            </h2>
            <p className="">
              Innovative business solutions across Strategy, Sustainability, and Innovation
            </p>
          </Col>
        </Row>
        
        <Row className="g-4 d-flex justify-content-center">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <Card className="border-0 h-100 text-center shadow">
                <Card.Body className="p-4">
                  <div 
                    className={`service-number text-white mb-4 ${
                      index % 2 === 0 ? 's_bg' : 's_bg'
                    }`}
                  >
                    {service.number}
                  </div>
                  <h5 className="text-primary-custom mb-3">{service.title}</h5>
                  <p className="text-muted" style={{lineHeight: '1.7'}}>
                    {service.description}
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

export default Services;
