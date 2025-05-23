import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getJobsByProjectId = (projectId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs?orderBy="projectId"&equalTo="${projectId}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const getJobs = (projectId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const filteredJobs = Object.values(data).filter((job) => job.projectId === projectId);
          resolve(filteredJobs);
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const getJobsById = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs?orderBy="id"&equalTo="${id}"`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const createJob = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs`, {
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

const updateJob = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteJob = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => resolve(true))
      .catch(reject);
  });

export { deleteJob, getJobs, getJobsById, createJob, updateJob, getJobsByProjectId };
