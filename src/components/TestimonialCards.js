import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const testimonials = [
  {
    quote: 'KindQuest helped us find volunteers faster than ever! We completed our community project in 2 weeks!',
    author: 'Rando',
  },
  {
    quote: 'It felt amazing to give back and meet great people. I’ve already signed up for my next project!',
    author: 'CalebTDS',
  },
  {
    quote: 'Our nonprofit now always has help when we need it. KindQuest connects us with people who truly care.',
    author: 'Daysi',
  },
  {
    quote: 'As a student, I was looking for a way to make a difference. KindQuest made it so easy to jump in.',
    author: 'Dinner Doggy',
  },
  {
    quote: 'I posted a cleanup project and within 24 hours, we had 12 volunteers ready to go. It was incredible.',
    author: 'Toren',
  },
  {
    quote: 'KindQuest reminds me that small actions really can build a stronger community!',
    author: 'Josh',
  },
  {
    quote: 'What I love about KindQuest is the transparency! You see where help is needed and how you’re contributing!',
    author: 'Dr. T',
  },
];

export default function TestimonialCard({ theme }) {
  // currentIndex tells us which testimonial in the array to show
  // It starts at 0 (the first testimonial)
  // When we want to change the quote, we update this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect runs when the component mounts
  // setInterval() runs code every 5,000 milliseconds (10 seconds)
  // It updates currentIndex:
  // If we're at the last quote, go back to the first (index 0)
  // Otherwise, move to the next one
  // The return () => clearInterval(interval) part:
  // Makes sure the interval is cleared when the component unmounts
  // Prevents memory leaks or duplicate timers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // This picks the quote to show from the testimonials[] array
  // It uses the current index (which updates every 10s)
  const currentTestimonial = testimonials[currentIndex];

  return (
    <Card className={`border-start border-5 shadow-sm transition-opacity duration-500 ease-in-out ${theme === 'dark' ? 'bg-secondary text-light' : 'bg-light text-dark'}`}>
      <Card.Body>
        <Card.Text className="fst-italic">“{currentTestimonial.quote}”</Card.Text>
        <Card.Subtitle className={`text-end fw-semibold mt-2 ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>{currentTestimonial.author}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

TestimonialCard.propTypes = {
  theme: PropTypes.node.isRequired,
};
