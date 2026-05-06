const http = require('http');

const data = JSON.stringify({
  goal: "muscle gain",
  level: "intermediate",
  equipment: "dumbbells"
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/workout-plan',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let responseBody = '';

  res.on('data', (chunk) => {
    responseBody += chunk;
  });

  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${responseBody}`);
  });
});

req.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

req.write(data);
req.end();
