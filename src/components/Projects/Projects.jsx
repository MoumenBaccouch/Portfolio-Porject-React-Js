import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codeEditor from "../../Assets/Projects/codeEditor.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="GoMyGym"
              description="Are you a gym owner or a trainer looking forward to providing an online presence for your business? Why not create your own website?"
              ghLink="https://github.com/MoumenBaccouch/Final-Project-GoMyCode"
              demoLink="https://github.com/MoumenBaccouch/Final-Project-GoMyCode"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Simple Portfolio"
              description="This Portfolio Talks about me and my skills and its pretty good looking portfolio"
              ghLink="https://github.com/MoumenBaccouch/Simple-Portfolio"
              demoLink="https://github.com/MoumenBaccouch/Simple-Portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="No Project yet"
              description=""
              ghLink="https://github.com/MoumenBaccouch"
              demoLink="https://github.com/MoumenBaccouch"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="No Project yet"
              description=""
              ghLink="https://github.com/MoumenBaccouch"
              demoLink="https://github.com/MoumenBaccouch"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="No Project yet"
              description=""
              ghLink="https://github.com/MoumenBaccouch"
              demoLink="https://github.com/MoumenBaccouch"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="No Project yet"
              description=""
              ghLink="https://github.com/MoumenBaccouch"
              demoLink="https://github.com/MoumenBaccouch"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
