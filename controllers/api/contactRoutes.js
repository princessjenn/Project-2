const router = require('express').Router();

// Endpoint to process form submission
router.post('/submit-form', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const confirmationMessage = 'Thank you for your message. We will get back to you within 48 hours!';

    res.render('confirmation', { message: confirmationMessage });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'An error occurred during form submission' });
  }
});

module.exports = router;