How to run this Project

Step 1: Clone the repo/ download the repo from github
Step 2: npm i to install the node modules 
Step 3: Update the config for database
Step 4: Run the following command to generate the models file if not already defined
npx sequelize-cli model:generate --name Form --attributes uniqueId:UUID,title:string,name:string,email:string,phonenumber:BIGINT,isGraduate:boolean

Step 5: Apply migration using npx sequelize-cli db:migrate
Step 6: node app.js
Step 7: Open your browser and go to http://localhost:3000/form to see the form.
Step 8: Submit the form to the /fill-data endpoint. Access the data at http://localhost:3000/fill-data.

