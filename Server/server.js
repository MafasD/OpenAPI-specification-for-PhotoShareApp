const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const app = express();

//This loads OpenAPI specification from the file system
const openApiSpec = JSON.parse(fs.readFileSync('../API/openapi.json', 'utf8'));

app.use('', swaggerUi.serve, swaggerUi.setup(openApiSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
