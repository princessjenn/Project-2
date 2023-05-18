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

router.get('/adopt', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const dogData = await Dog.findAll({
    });

    // Serialize data so the template can read it
    const dogs = dogData.map((dog) => dog.get({ plain: true }));

    // Pass serialized data and session flag into template

    console.log(req.session)
    res.render('adopt', { 
      dogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/visit-us', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('visit-us', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/contact', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('contact', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/newdogs', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('newdogs', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
