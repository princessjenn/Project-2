const router = require('express').Router();


router.get('/visit', (req, res) => {
  const address = {
    street: '222 Rainbow Way',
    city: 'Anytown',
    state: 'TX',
    zip: '12345',
    country: 'USA'
  };

  const phone = {
    main: '(555)-YAY-DOGS',
    alt: '(555) 929-3647'
  };

  const hours = {
    mondayToFriday: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed'
  };

  res.render('visit', { address, phone, hours });
});

module.exports = router;