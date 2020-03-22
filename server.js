const express = require ("express");
const app = express();

const PORT = process.env.PORT || 8080;

const htmlRoutes = require('./routing/htmlRoutes');
const apiRoutes = require('./routing/apiRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

htmlRoutes.createRoutes(app);
apiRoutes.createRoutes(app);

app.listen(PORT, function() {
return console.log('listening on port ' + PORT);
});