import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Moumen Baccouch </span>
            from <span className="purple"> Gabes 🌴 , Tunisia  </span>
            <br /> I am a baccalaureate Info studyies in Cheneni Gabes
            <br />
            Additionally, I am currently summer academy student at GoMyCode with the Developpers
             community 💻 
          
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lifting Heavy Weight 🏋 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series watch 🍿   
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Competitive Video Games Like (Valorant , CSGO) 🎮 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Moumen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
