import React from 'react';
import VolunteerCard from '../../components/VolunteerCard';

function VolunteersPage() {
  const volunteers = [
    {
      firebaseKey: 'volunteer001',
      firstName: 'Alice',
      lastName: 'Smith',
      image: 'https://media.craiyon.com/2023-11-30/t5306KhxQ0eadr5H2AR2wA.webp',
      email: 'alice.smith@example.com',
      projects: [
        { firebaseKey: 'project001', name: 'Community Cleanup' },
        { firebaseKey: 'project002', name: 'Tree Planting' },
      ],
    },
    {
      firebaseKey: 'volunteer002',
      firstName: 'Robert',
      lastName: 'Johnson',
      image: 'https://www.workitdaily.com/media-library/proud-volunteer-points-to-his-shirt.jpg?id=27028413&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0',
      email: 'bob.johnson@example.com',
      projects: [
        { firebaseKey: 'project003', name: 'Beach Cleanup' },
        { firebaseKey: 'project004', name: 'School Renovation' },
      ],
    },
    {
      firebaseKey: 'volunteer003',
      firstName: 'Charlie',
      lastName: 'Madison',
      image: 'https://salmonhealth.com/wp-content/uploads/2018/06/the-value-of-volunteering-in-your-golden-years.jpg',
      email: 'charlie.brown@example.com',
      projects: [
        { firebaseKey: 'project005', name: 'Food Drive' },
        { firebaseKey: 'project006', name: 'Fundraising Campaign' },
      ],
    },
    {
      firebaseKey: 'volunteer004',
      firstName: 'Ella',
      lastName: 'Smith',
      image: 'https://bwwla.org/wp-content/uploads/2022/02/DSC08860.jpeg',
      email: 'ella.smith@example.com',
      projects: [
        { firebaseKey: 'project005', name: 'Food Drive' },
        { firebaseKey: 'project006', name: 'Education and Libraries' },
      ],
    },
    {
      firebaseKey: 'volunteer005',
      firstName: 'Hailey',
      lastName: 'Williams',
      image: 'https://s28164.pcdn.co/files/Hailey-and-goat-Matthew-G-pic-1280x720.jpg',
      email: 'charlie.brown@example.com',
      projects: [{ firebaseKey: 'project007', name: 'Agriculture' }],
    },
    {
      firebaseKey: 'volunteer006',
      firstName: 'James',
      lastName: 'Scott',
      image: 'https://c.stocksy.com/a/zNs400/z9/1162375.jpg',
      email: 'j.scott@example.com',
      projects: [{ firebaseKey: 'project009', name: 'Forest Wildlife preservation' }],
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {volunteers.map((volunteer) => (
          <div key={volunteer.firebaseKey} className="col-md-4 col-sm-6 d-flex">
            <VolunteerCard volunteerObj={volunteer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteersPage;
