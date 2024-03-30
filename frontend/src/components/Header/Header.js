import React from "react";
import { Form, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto d-flex justify-content-between"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          {userInfo ? (
            <Nav>
              <Nav.Link className="text-light">
                <Link to={"/mynotes"}>My Notes</Link>
              </Nav.Link>

              <NavDropdown title={userInfo?.name} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav.Link className="text-light">
              <Link to={"/login"}>Login</Link>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
