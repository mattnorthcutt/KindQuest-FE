'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTheme } from '@/utils/context/ThemeContext';
import RateCard from '@/components/RateCard';

export default function AboutUs() {
  const { theme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}>
      <section className={`py-5 text-center ${theme === 'dark' ? 'bg-gradient bg-dark text-light' : 'bg-gradient bg-info text-white'}`}>
        <Container>
          <h1 className="display-4 fw-bold">About KindQuest</h1>
          <p className="lead">Empowering everyday kindness through community-driven action.</p>
        </Container>
      </section>
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h2 className="h4 fw-semibold">Why We Exist</h2>
            <p>Whether you are an organization seeking help, a volunteer looking to give back, or a community leader with an idea — you belong here.</p>
            <p>KindQuest was created to streamline how people connect with causes that matter. We believe small acts of kindness can build lasting impact.</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h2 className="h4 fw-semibold">Our Vision</h2>
            <p>We envision a world where communities are empowered to take initiative, solve problems, and support one another—one project at a time. KindQuest is here to be the bridge between intention and action.</p>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={{ span: 10, offset: 1 }}>
            <RateCard theme={theme} />
          </Col>
        </Row>

        <Row className="text-center mt-4">
          <Col>
            <Link href="/contributors" passHref>
              <Button variant={theme === 'dark' ? 'outline-light' : 'outline-dark'}>Meet the Contributors</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
