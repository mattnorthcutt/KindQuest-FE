'use client';

import React from 'react';

import { Row, Card } from 'react-bootstrap';

function BasicExample() {
  return (
    <div className="fade-in text-center my-4">
      <Card style={{ textAlign: 'center', border: 'none' }}>
        <h1 className="text-2xl font-semibold mt-8 mb-3">Organizations</h1>
        <h3 className="text-lg mb-6 text-gray-700">KindQuest is a community-powered platform designed to connect passionate volunteers with impactful projects in their local area and beyond. Our mission is to make doing good easier, more visible, and more collaborative.</h3>
      </Card>

      <Row className="m-3 fade-in">
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

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://partnership.who.int/images/librariesprovider14/default-album/who.tmb-small.jpg?Culture=en&sfvrsn=3cfe386a_3" alt="World Health Organization" />
          <Card.Body>
            <Card.Title>World Health Organization</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WhGGVJM40POuLlbaE0dIu8d4cDTFoJ7ZZQ&s" alt="UNICEF" />
          <Card.Body>
            <Card.Title>UNICEF</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://cdn-images-1.medium.com/max/1200/1*1ZF1lEpi9odcxZz2jgmI6g.png" alt="World Food Programme" />
          <Card.Body>
            <Card.Title>World Food Programme</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://www.globalhand.org/system/images/c82f30f69e0919edd2e74c81c9d1a7b40efd9a9e/original/UNFPA%20Logo.jpg?1332603291" alt="United Nations Population Fund" />
          <Card.Body>
            <Card.Title>United Nations Population Fund</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsF1n_YOWcAHZkZSFc0bzsdpfaXNBdFEP3Q&s" alt="UNESCO" />
          <Card.Body>
            <Card.Title>UNESCO</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMjw15MPB0eA6PVXp-964Hf61uQ64vUJ5UA&s" alt="World Bank" />
          <Card.Body>
            <Card.Title>FAO</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHuXEbewh2Rb2YjMMbaqofLXkfSzRmLNc8w&s" alt="UNESCO" />
          <Card.Body>
            <Card.Title>IFAD</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WqYGMCCd6Jg2GjUseKOc83D-L39G8yh3Dg&s" alt="United Way" />
          <Card.Body>
            <Card.Title>United Way</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTElOkPLwyLtwOesVHqppar8Gtp1-ZswGx6A&s" alt="VolunteerMatch" />
          <Card.Body>
            <Card.Title>VolunteerMatch</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://www.charities.org/wp-content/uploads/2020/03/MAW-Updated-Logo_1.9.2018.png" alt="Make-A-Wish" />
          <Card.Body>
            <Card.Title>Make-A-Wish</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://www.handhousing.org/wp-content/uploads/volunteers-for-america.jpg" alt="Volunteers of America" />
          <Card.Body>
            <Card.Title>Volunteers of America</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>

        <Card className="m-3" style={{ width: '18rem', border: '2px solid', padding: '0px' }}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoJO-xrbH-fHA-HoPtIASpypzdYzd4vNQtCQ&s" alt="Habitat For Humanity" />
          <Card.Body>
            <Card.Title>Habitat For Humanity</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a.</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default BasicExample;
