const express = require('express');
const { getPlans, createPlan } = require('../controllers/plansController');

const router = express.Router();//Creates a new router instance, which is used to use http methods.

// Routes
//Defines a GET route for the root path (/). When this route is accessed, the getPlans function
//from plansController is called to handle the request and fetch plans.
router.get('/', getPlans); // Fetch plans
//Defines a POST route for the root path (/). When this route is accessed, the createPlan function
//from plansController is called to handle the request and create a new plan.
router.post('/', createPlan); // Create a new plan

module.exports = router;
//Exports the router instance so it can be imported and used in other parts of the application,
//such as in your main application file (app.js).
