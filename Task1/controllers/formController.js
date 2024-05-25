const { Form } = require('../models');

exports.createForm = (req, res) => {
  res.send(`
    <form action="/fill-data" method="POST">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title"><br><br>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br><br>
      <label for="phonenumber">Phone Number:</label>
      <input type="text" id="phonenumber" name="phonenumber"><br><br>
      <label for="isGraduate">Are you a graduate?</label>
      <input type="checkbox" id="isGraduate" name="isGraduate"><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
};

exports.addFormData = async (req, res) => {
  try {
    const { title, name, email, phonenumber, isGraduate } = req.body;
    const newForm = await Form.create({ title, name, email, phonenumber, isGraduate: isGraduate === 'on' });
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: 'Error adding form data' });
  }
};

exports.getFormData = async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching form data' });
  }
};
