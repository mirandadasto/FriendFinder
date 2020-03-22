const friends = require('../app/data/friends.js');

function createRoutes(app)
{
       app.get('/api/friends', function (request, response) 
    {
        return response.json(friends)
    });

    app.post('/api/friends', function (request, response) 
    {
        const surveyResults = request.body;
     
        response.end();
    });
}

module.exports = {
    createRoutes
};