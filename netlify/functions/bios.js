const { readFileSync } = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const data = readFileSync(path.join(__dirname, '..', '..', 'dist', 'data', 'bios.json'));
    return {
      statusCode: 200,
      body: data.toString(),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: error.toString(),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
