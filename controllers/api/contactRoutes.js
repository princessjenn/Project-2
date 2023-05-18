const router = require('express').Router();

router.post('/submit-form' , (req, res) => {
  // Process the form submission data
  const { name, email, phone, message } = req.body;

  // Prepare the data for the confirmation page
  const confirmationMessage = 'Thank you for your message. We will get back to you during our operating hours!';

  // Render the confirmation page with the data
  res.render('confirmation', { message: confirmationMessage });
});

module.exports = router;