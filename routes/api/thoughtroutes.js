const router = require('express').Router();

const {
  getthoughts,
  getthoughtsbyid,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtcontroller');

router.route('/').get(getthoughts).post(createThought);

router
  .route('/:id')
  .get(getthoughtsbyid)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
