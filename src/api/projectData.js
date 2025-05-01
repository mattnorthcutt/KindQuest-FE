import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getProjects = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const getProjectsById = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects?orderBy="id"&equalTo="${id}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const createProject = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateProjects = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${payload.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteProjects = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getProjects, getProjectsById, deleteProjects, createProject, updateProjects };
