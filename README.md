# SSQUAD_ASSIGNMENT

structure of assignment
-app.js //main entry point for application
-routes/plans.js //Routes for plans
-controllers/plansController.js //Logic for handling plans
-models/planModel.js //Plan related database queries
-db.js //establishing connection to mySQL database

The provided files will briefly handles the situation based on some assumptions on Frontend.

app.js->It starts backend server at 3000 and backend at 3000/plans using routes/plans.js file.

routes/plans.js->It will decide whether the code uses a GET request to fetch plans or POST request to craete a new plan using controllers/plansController.js file.

controllers/plansController.js->It handles database queries from frontend inputs using models/planModel.js file.

models/planModels.js->This file is the actual one which handles the database queries.The functions created in this file is used by controllers/plansController.js to handle the Frontend.
