const planModel = require('../models/planModel');

// Fetch plans with sorting and filtering
const getPlans = (req, res) => {
    const { sort, filter } = req.query;//Let the frontend send the req

    planModel.fetchPlans(sort, filter, (err, results) => {
        if (err) {
            console.error('Error fetching plans:', err.message);
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
};

// Create a new plan
const createPlan = (req, res) => {
    const { title, location, time, creator_id, max_participants, visibility } = req.body;//Let the frontend send the req

    planModel.addPlan(
        { title, location, time, creator_id, max_participants, visibility },
        (err, result) => {
            if (err) {
                console.error('Error creating plan:', err.message);
                return res.status(500).send('Server error');
            }
            res.status(201).send('Plan created successfully');
        }
    );
};

module.exports = { getPlans, createPlan };