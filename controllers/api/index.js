const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dogRoutes = require('./dogRoutes');
const contactRoutes = require('./contactRoutes');

router.use('/users', userRoutes);
router.use('/dogs', dogRoutes);
router.use('/contact', contactRoutes);

module.exports = router;
