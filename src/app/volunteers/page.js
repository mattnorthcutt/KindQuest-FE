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
  ];

  return (
    <div className="cards-container">
      {volunteers.map((volunteer) => (
        <VolunteerCard key={volunteer.firebaseKey} volunteerObj={volunteer} />
      ))}
    </div>
  );
}

export default VolunteersPage;
