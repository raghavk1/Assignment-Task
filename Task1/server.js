const express = require('express');
const app = express();
const formRoutes = require('./routes/formRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', formRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
