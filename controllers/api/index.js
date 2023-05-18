const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dogRoutes = require('./dogRoutes');
const contactRoutes = require('./contactRoutes');
const visitRoutes = require('./visitRoutes');

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);
router.use('/contact', contactRoutes);
router.use('/visit', visitRoutes);

module.exports = router;
