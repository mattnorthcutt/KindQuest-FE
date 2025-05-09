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
    fetch(`${endpoint}/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(resolve)
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

const updateProjects = (projectId, payload) =>
  new Promise((resolve, reject) => {
    if (!projectId || typeof projectId !== 'string') {
      reject(new Error('Invalid project ID'));
      return;
    }

    if (!payload || typeof payload !== 'object') {
      reject(new Error('Invalid update data'));
      return;
    }

    fetch(`${endpoint}/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Update failed: ${text || response.statusText}`);
        }
        return response.json();
      })
      .then(resolve)
      .catch((error) => {
        console.error('Update error:', error);
        reject(error);
      });
  });

const deleteProjects = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Failed to delete project: ${text}`);
          });
        }
        return response.status === 204 ? null : response.json(); // Fix empty response error
      })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getProjects, getProjectsById, deleteProjects, createProject, updateProjects };
