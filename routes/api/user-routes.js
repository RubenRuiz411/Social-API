const router = require('express').Router();

const {
  getallusers,
  getuserbyid,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/usercontroller');

router.route('/').get(getallusers).post(createUser);

router.route('/:id').get(getuserbyid).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
