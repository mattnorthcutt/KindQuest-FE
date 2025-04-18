'use client';

import React from 'react';

import { Row, Card } from 'react-bootstrap';

function BasicExample() {
  return (
    <>
      <Card style={{ textAlign: 'center', border: 'none' }}>
        <h1 className="text-2xl font-semibold mt-8 mb-3">Organizations</h1>
        <h3 className="text-lg mb-6 text-gray-700">KindQuest is a community-powered platform designed to connect passionate volunteers with impactful projects in their local area and beyond. Our mission is to make doing good easier, more visible, and more collaborative.</h3>
      </Card>

      <Row className="m-3">
        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img src="https://www.skylandtrail.org/wp-content/uploads/2020/02/blue-cross-blue-shield.png" alt="Blue Cross Blue Shield" />
          <Card.Body>
            <Card.Title>Blue Cross Blue Shield</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacBP4_g1oNLcZHAKYWev8xc-zFh8yhm52oQ&s" alt="Doctors Without Borders" />
          <Card.Body>
            <Card.Title>Doctors without Borders</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img src="https://bloximages.chicago2.vip.townnews.com/tillamookheadlightherald.com/content/tncms/assets/v3/editorial/9/7d/97d3e872-94dd-11e3-bcbf-0019bb2963f4/52fd10835246c.image.jpg" alt="American Red Cross" />
          <Card.Body>
            <Card.Title>American Red Cross</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmbV6NEpv4_bt1dksLliz7RDjPuwjsaVTTA&s" alt="American Heart Association" />
          <Card.Body>
            <Card.Title>American Heart Association</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH82Rgf3z6uG_63le1D24pa1l_bdOnVGIjiw&s" alt="American Medical Association" />
          <Card.Body>
            <Card.Title>American Medical Association</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYNqcAhYsLT9Ub-IDelx7AEhXnlwi0jXdRg&s" alt="American Cancer Society" />
          <Card.Body>
            <Card.Title>American Cancer Society</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

export default BasicExample;
