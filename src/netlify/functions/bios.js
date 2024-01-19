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
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
