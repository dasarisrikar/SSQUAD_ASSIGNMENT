const db = require('../db');

// Fetch plans with sorting and filtering
const fetchPlans = (userId, sort, filter, callback) => {
    let query = '';
    //? is nothing but we should input it frontend should...
    if (filter === 'Friends') {
        // Query plans visible to friends of the user
        query = `
            SELECT p.*
            FROM plans p
            INNER JOIN friends f ON p.user_id = f.friend_id
            WHERE f.user_id = ?
        `;
    } else if (filter === 'FriendsOfFriends') {
        // Query plans visible to friends-of-friends of the user
        query = `
            SELECT p.*
            FROM plans p
            INNER JOIN friends f1 ON p.user_id = f1.friend_id
            INNER JOIN friends f2 ON f1.user_id = f2.friend_id
            WHERE f2.user_id = ?
        `;
    } else {
        // No specific filter; fetch all plans
        query = 'SELECT * FROM plans';
    }
    if (sort === 'postedTime') {
        query += ' ORDER BY created_at DESC';
    } else if (sort === 'plannedTime') {
        query += ' ORDER BY time ASC';
    }

    db.query(query, callback);
};

// Add a new plan
const addPlan = (plans, callback) => {
    const query = `
        INSERT INTO plans (name, description, time, creator_id, max_participants, visibility)
        VALUES ('${plans.name}', '${plans.description}', '${plans.time}', ${plans.creator_id}, ${plans.max_participants}, '${plans.visibility}')
    `;

    db.query(query, callback);
};


module.exports = { fetchPlans, addPlan };
