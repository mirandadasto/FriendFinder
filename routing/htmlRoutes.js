const path = require('path');

function createRoutes(app)
{
    const basePath = path.join(__dirname, '..');

    console.log(basePath);

    app.get('/', (request, response) => 
    {
        const filePath = path.join(basePath, "public/home.html");
        response.sendFile(filePath);
    });

    app.get("/survey", (request, response) =>
    {
        const filePath = path.join(basePath, "public/survey.html");
        response.sendFile(filePath);
    });
}

 module.exports = {
     createRoutes
 };