const path = require('path');

function createRoutes(app)
{
    const basePath = path.join(__dirname, '..');

    console.log(basePath);
}

 module.exports = {
     createRoutes
 };