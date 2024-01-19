const { readFileSync } = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Adjust the path according to your file structure
    const data = readFileSync(path.join(__dirname, '..', '..', 'dist', 'data', 'bios.json'));
    return {
      statusCode: 200,
      body: data.toString(),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Internal Server Error" }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
