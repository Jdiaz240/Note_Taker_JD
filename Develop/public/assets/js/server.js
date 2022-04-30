const express = require('express');
//TODO add the required routes for our api/html
const apiRoutes = require('../../../routes/apiRoutes');
const htmlRoutes = require('../../../routes/htmlRoutes');
//Initialize the app and create a part
const app = express();
const PORT = process.env.PORT || 3001;
    
//TODO Set up some body parsing, static, and route the middleware
app.use(express.json());
app.use(express.urlendcoded({ extended: true }));
app.use(express.static('public'));
app.use('/api',apiRoutes);
app.use('/', htmlRoutes);

//Start the server on the port
app.listen(PORT, () => console.log(`This porrt is listening at ${PORT}`));