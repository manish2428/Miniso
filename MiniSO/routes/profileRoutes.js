const router = require('express').Router();
const {
  getProfiles,
  getProfile,
  addExp,
  addEdu,
  setProfileData,
  getHandle,
  deleteExp,
  deleteEdu,
  deleteProfile,
  getProfileAnother,
} = require('../controller/profileController');
const { jwtVerify } = require('../controller/userController');

// localhost:8080/profile/
router.get('/', jwtVerify, getProfile);

router.get('/all', getProfiles);

router.get('/handle/:handle', getHandle);

router.get('/user/:user_id', getProfileAnother);

router.post('/', jwtVerify, setProfileData);

router.post('/experience', jwtVerify, addExp);

router.post('/education', jwtVerify, addEdu);

router.delete('/experience/:exp_id', jwtVerify, deleteExp);

router.delete('/education/:edu_id', jwtVerify, deleteEdu);

router.delete('/', jwtVerify, deleteProfile);

module.exports = router;
