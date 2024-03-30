import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="w-100  h-100   intro-text">
            <h1 className="title">Welcome to Note Zipper</h1>
            <p className="subtitle">One Safe place for all your notes.</p>
          </div>
          <div className="buttonContainer">
            <div>
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
            </div>
            <div>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
