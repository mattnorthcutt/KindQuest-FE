const endpoint = 'https://localhost:7225';

const getProjects = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects.json`, {
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
    fetch(`${endpoint}/projects.json?orderBy="id"&equalTo="${id}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const createProjects = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects.json`, {
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

const updateProjects = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${payload.id}.json`, {
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
    fetch(`${endpoint}/projects/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getProjects, getProjectsById, deleteProjects, createProjects, updateProjects };
