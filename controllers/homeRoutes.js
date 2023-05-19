const router = require('express').Router();
const { Dog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    console.log(req.session)
    res.render('homepage', {  
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//OR
router.get('/home', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Get 'About' endpoint from homepage
router.get('/about', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('about', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Get ALL Dogs from homepage to Adopt endpoint
router.get('/adopt', async (req, res) => {
  try {
    const dogData = await Dog.findAll({
    });
    const dogs = dogData.map((dog) => dog.get({ plain: true }));

    console.log(req.session)
    res.render('adopt', { 
      dogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get ONE Dog by ID
router.get('/adopt/:id', async (req, res) => {
  try {
    const dogData = await Dog.findByPk(req.params.id);
    const dog = dogData.get ({  plain: true });
    
    res.render('adopt-details', { dog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//Get 'Vist Us' from homepage
router.get('/visit-us', async (req, res) => {
  try {
    res.render('visit-us', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



//Get 'Contact' from homepage
router.get('/contact', async (req, res) => {
  try {
    res.render('contact', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get 'Log In' endpoint from homepage
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
