import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const handleErrors = (response) => {
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return response.json();
};

const getUsers = () =>
  fetch(`${endpoint}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleErrors)
    .catch((error) => {
      console.error('Error fetching users:', error);
      throw error;
    });

const getUsersById = (id) =>
  fetch(`${endpoint}/users?orderBy=id&equalTo=${encodeURIComponent(id)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleErrors)
    .catch((error) => {
      console.error(`Error fetching user by ID (${id}):`, error);
      throw error;
    });

const getUsersByUid = (uid) =>
  fetch(`${endpoint}/users?orderBy=uid&equalTo=${encodeURIComponent(uid)}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(handleErrors)
    .then((data) => {
      const users = Object.values(data);
      return users.length > 0 ? users[0] : null;
    })
    .catch((error) => {
      console.error(`Error fetching user by UID (${uid}):`, error);
      throw error;
    });

const createUser = (payload) =>
  fetch(`${endpoint}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(handleErrors)
    .catch((error) => {
      console.error('Error creating user:', error);
      throw error;
    });

const updateUser = (payload) => {
  if (!payload.id) throw new Error('Error: Missing user ID');
  return fetch(`${endpoint}/users/${payload.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(handleErrors)
    .catch((error) => {
      console.error(`Error updating user (${payload.id}):`, error);
      throw error;
    });
};

const deleteUser = (id) =>
  fetch(`${endpoint}/users/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return response.status === 204 ? null : response.json();
    })
    .catch((error) => {
      console.error(`Error deleting user (${id}):`, error);
      throw error;
    });

export { deleteUser, getUsers, getUsersById, createUser, updateUser, getUsersByUid };
