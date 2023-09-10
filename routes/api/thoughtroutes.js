const router = require('express').Router();

// object with functions of controller calls imported from controller
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtcontroller');
//routes for thoughts and reactions (getting, adding, deleting, updating etc..)
router
.route('/')
.get(getAllThoughts)
.post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/:thoughtId/reactions')
.post(createReaction);

router.
route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;
