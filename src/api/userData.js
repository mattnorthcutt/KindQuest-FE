import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getUsers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });
const getUsersById = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users?orderBy="id"&equalTo="${id}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });
const getUsersByUid = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const users = Object.values(data);
        const gotchaUser = users.find((user) => user.uid === uid);
        resolve(gotchaUser || null);
      })
      .catch(reject);
  });
const createUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateUser = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload, (key, value) => {
        if (key === 'volunteeredProjects' && Array.isArray(value)) {
          return value.map((project) => ({ id: project.id }));
        }
        return value;
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error('Update failed:', text);
            throw new Error('Failed to update user');
          });
        }
        return response.text().then((text) => (text ? JSON.parse(text) : {}));
      })
      .then(resolve)
      .catch(reject);
  });

const deleteUser = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
export { deleteUser, getUsers, getUsersById, createUser, updateUser, getUsersByUid };
