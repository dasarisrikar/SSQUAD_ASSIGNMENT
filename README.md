# SSQUAD_ASSIGNMENT

## Structure of Assignment

- **app.js**  
  Main entry point for the application.

- **routes/plans.js**  
  Routes for managing plans.

- **controllers/plansController.js**  
  Logic for handling plans.

- **models/planModel.js**  
  Plan-related database queries.

- **db.js**  
  Establishes a connection to the MySQL database.

---

### Description of File Roles:

- **app.js**  
  - Starts the backend server on port `3000`.  
  - It uses the `routes/plans.js` file to route requests to `/plans`.

- **routes/plans.js**  
  - Determines whether the request is a `GET` or `POST` request.  
  - A `GET` request fetches plans, while a `POST` request creates a new plan.  
  - It forwards the appropriate request to `controllers/plansController.js`.

- **controllers/plansController.js**  
  - Handles database queries based on the inputs from the frontend.  
  - It interacts with `models/planModel.js` to execute these queries.

- **models/planModel.js**  
  - This file directly handles the database queries.  
  - The functions in this file are used by `controllers/plansController.js` to communicate with the database.

