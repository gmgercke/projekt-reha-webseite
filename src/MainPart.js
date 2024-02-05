import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MainPart.css";

const images = [
  "https://us.images.westend61.de/0000855271pw/smiling-students-watching-teacher-in-adult-education-classroom-CAIF12852.jpg",
  "https://www.windsor-forest.ac.uk/app/uploads/2023/04/Untitled-design-1-scaled.jpg",
  "https://static7.depositphotos.com/1192060/781/i/450/depositphotos_7811803-stock-photo-businessman-in-a-wheelchair.jpg",
];

export default function MainPart() {
    return (
        <div className="MainPart">
          <div class="scrolltext">
            <h2>++ NEWS +++ NEWS +++ NEWS +++ NEWS +++ NEWS ++ </h2>
            </div>
            <div table-responsive-md>
              <table>
                <tr>
                  <td>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Adresse</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Passwort</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Einloggen
      </Button>
    </Form>
    </td>
    <td>
          <h4>Neuanfang mit dem BFW</h4>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </td>
    </tr>
    </table>
            </div>
            <div className="box" >
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
        </div>
      );
}