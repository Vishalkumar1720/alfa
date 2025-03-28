import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaUsers, FaPaintBrush, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import "../App.css"; // Assuming you have a CSS file for styles

const WorkingProcess = () => {
  const steps = [
    { icon: <FaUsers />, title: "Discuss with Client", description: "Requirements & goals" },
    { icon: <FaPaintBrush />, title: "Design", description: "Blueprint and Mockup" },
    { icon: <FaCode />, title: "Development", description: "Site Architecture & DB" },
    { icon: <FaLaptopCode />, title: "Build Out", description: "Final website setup" },
    { icon: <FaRocket />, title: "Go Live", description: "Test and launch" }
  ];

  return (
    <Container className="text-center my-5 py-0">
      <h2 className="text-primary fw-bold mb-4">Our Working Process</h2>
      <Row className="justify-content-center">
        {steps.map((step, index) => (
          <Col key={index} md={2} className="mx-2 process-step">
            <div className="process-icon">{step.icon}</div>
            <h5 className="mt-3 gradient-text">{step.title}</h5>
            <p>{step.description}</p>
          </Col>
        ))}
      </Row>

      {/* Get Quote Button */}
      <div className="mt-4">
        <Button className="quote-btn" variant="primary">Get Quote</Button>
      </div>
    </Container>
  );
};

export default WorkingProcess;
