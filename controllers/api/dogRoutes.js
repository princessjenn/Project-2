const router = require('express').Router();
const { Dog } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
  console.log(req.body)
  try {
    const newDog = await Dog.create({
      ...req.body,
    });

    res.status(200).json(newDog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const dogData = await Dog.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!dogData) {
      res.status(404).json({ message: 'No dog found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Dog entry deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
