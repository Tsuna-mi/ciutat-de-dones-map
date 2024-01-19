exports.handler = async (event, context) => {
  try {
    const data = require('../../dist/data/bios.json');
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
