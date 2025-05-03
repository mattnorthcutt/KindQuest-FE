'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createUser } from '@/api/userData';
import { useAuth } from '@/utils/context/authContext';

const initialState = {
  firstName: '',
  lastName: '',
  emergencyContact: '',
};

export default function CreateUserForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formInput,
      uid: user.uid,
      profilePic: user.photoURL,
      email: user.email,
    };

    createUser(payload).then(() => {
      router.push('/profile');
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black p-4 bg-light rounded shadow">
      <h2 className="mb-4 text-center">Create Your Profile</h2>

      <FloatingLabel controlId="firstName" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter first name" name="firstName" value={formInput.firstName} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="lastName" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter last name" name="lastName" value={formInput.lastName} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="emergencyContact" label="Emergency Contact" className="mb-3">
        <Form.Control type="tel" placeholder="Enter emergency contact" name="emergencyContact" value={formInput.emergencyContact} onChange={handleChange} required />
      </FloatingLabel>

      <Button variant="primary" type="submit" className="w-100">
        Submit
      </Button>
    </Form>
  );
}
