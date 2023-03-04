const RESOURCES_API_URL = 'https://localhost:7253/';
const BOOKING_API_URL = 'https://localhost:7040/';

async function fetchResources() {
  const response = await fetch(`${RESOURCES_API_URL}api/resources`);
  const data = await response.json();
  return data;
}

async function bookResource(resource) {
  const response = await fetch(`${BOOKING_API_URL}api/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(resource)
  });
  const data = await response.json();
  return data;
}

export { fetchResources, bookResource };