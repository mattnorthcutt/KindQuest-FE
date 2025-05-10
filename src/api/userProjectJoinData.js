import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

export const updateProjectVols = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/projects/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        volunteers: payload.volunteers.map((user) => ({ id: user.id })),
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to update project');
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });

export default updateProjectVols;
