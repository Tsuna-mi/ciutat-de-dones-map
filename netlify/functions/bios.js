const path = require("path");
const fs = require("fs");

exports.handler = async (event, context) => {
  const pathToJson = path.resolve(path.join(__dirname, '..', '..', 'dist', 'data', 'bios.json'));
  console.log(path.resolve(__dirname, '..', '..', 'dist', 'data', 'bios.json'));
  console.log(fs.existsSync(pathToJson));
  const data = fs.readFileSync(pathToJson);

  try {
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
