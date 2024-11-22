const express = require('express');//web application framework for node.js
const bodyParser = require('body-parser');//middleware which helps parse incoming request bodies before your handlers
//middleware is software that lies bw OS and applications
//here it refers to functions that process requests bw client and server
const plansRoutes = require('./routes/plans');//import routes declared in plans.js

//Initializes an Express application instance, allowing you to configure middleware, define routes, and start the server.
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Registers the /plans route with the Express application. Any HTTP request that starts with /plans will be handled
// by the plansRoutes middleware, which contains the specific route handlers defined in ./routes/plans
app.use('/plans', plansRoutes);

// Server Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
