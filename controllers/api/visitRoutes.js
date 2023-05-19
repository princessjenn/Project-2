const router = require('express').Router();


router.get('/visit', (req, res) => {
  const phone = {
    main: '(555)-YAY-DOGS',
    alt: '(555) 929-3647'
  };

  res.render('visit', { address, phone, hours });
});

module.exports = router;