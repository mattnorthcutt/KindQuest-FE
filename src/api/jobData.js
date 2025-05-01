import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getJobs = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
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

const deleteJob = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { deleteJob, getJobs, getJobsById, createJob, updateJob };
