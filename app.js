const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Specify the allowed email and password
const allowedEmail = 'aman@gmail.com';
const allowedPassword = 'password1234';

app.use(bodyParser.json());

// API endpoint to check email and password
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the provided email and password match the allowed values
  if (email === allowedEmail && password === allowedPassword) {
    // If the email and password are correct, return a success message
    return res.json({ message: 'Login successful', email, password });
  }

  // If the email or password is incorrect, return an error
  console.log("invalide")
  return res.status(401).json({ message: 'Invalid email or password' });
});

app.get('/get', (req, res) => {
    // const { email, password } = req.body;
  
    // Check if the provided email and password match the allowed values
    // if (email === allowedEmail && password === allowedPassword) {
    //   // If the email and password are correct, return a success message
    //   return res.json({ message: 'Login successful', email, password });
    // }
    console.log("working fine")
  return res.json({message:"working fine"})

    // If the email or password is incorrect, return an error
    // return res.status(401).json({ message: 'Invalid email or password' });
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
