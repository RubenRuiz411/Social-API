const router = require('express').Router();

// object with functions of controller calls imported from controller
const  {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/usercontroller');
// routes for users/thoughts/updating/deleting users and adding friends
router.route('/').get(getAllUser).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
