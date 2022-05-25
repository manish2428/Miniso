const Profile = require('../models/profileSchema');
const User = require('../models/userSchema');

exports.getProfile = async (req, res) => {
  const errors = {};
  await Profile.findOne({ user: req.user.id })
    .populate('user', {
      name: 1,
      email: 1,
      phone: 1,
      isAdmin: 1,
      isRecruiter: 1,
    })
    .then((profile) => {
      if (!profile) {
        errors.msg = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      return res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
};

exports.getProfiles = (req, res) => {
  const errors = {};
  // console.log('first');
  Profile.find()
    .populate('user')
    .then((profiles) => {
      if (!profiles) {
        errors.msg = 'Their are no profiles';
        res.status(404).json(errors);
      }
      res.status(200).json(profiles);
    })
    .catch((err) => res.status(400).json({ profile: 'There are no profiles' }));
};

exports.getHandle = (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .populate('user', { name: 1, email: 1, phone: 1 })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'Their is no profile for this user';
        return res.status(404).json(errors);
      }
      return res.json(profile);
    })
    .catch((err) => res.status(400).json(err));
};

exports.getProfileAnother = async (req, res) => {
  const errors = {};
  await Profile.findOne({ user: req.params.user_id })
    .populate('user', ['name', 'email', 'phone'])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(404).json(errors);
      }
      return res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
};

exports.setProfileData = (req, res) => {
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.company) profileFields.company = req.body.company;
  if (req.body.website) profileFields.website = req.body.website;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.status) profileFields.status = req.body.status;
  if (req.body.github) profileFields.github = req.body.github;
  // Skills - Spilt into array
  if (typeof req.body.skills !== 'undefined') {
    profileFields.skills = req.body.skills;
  }

  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

  Profile.findOne({ user: req.user.id }).then((profile) => {
    if (profile) {
      Profile.findOne({ user: req.user.id }).then((profile) => {
        profile.user = req.user.id;
        if (req.body.handle) profile.handle = req.body.handle;
        if (req.body.company) profile.company = req.body.company;
        if (req.body.website) profile.website = req.body.website;
        if (req.body.location) profile.location = req.body.location;
        if (req.body.bio) profile.bio = req.body.bio;
        if (req.body.status) profile.status = req.body.status;
        if (req.body.github) profile.github = req.body.github;
        // Skills - Spilt into array
        if (typeof req.body.skills !== 'undefined') {
          profile.skills = req.body.skills;
        }

        profile.social = {};
        if (req.body.youtube) profile.social.youtube = req.body.youtube;
        if (req.body.twitter) profile.social.twitter = req.body.twitter;
        if (req.body.facebook) profile.social.facebook = req.body.facebook;
        if (req.body.linkedin) profile.social.linkedin = req.body.linkedin;
        if (req.body.instagram) profile.social.instagram = req.body.instagram;
        profile.save().then((pro) => res.json(pro));
      });
    } else {
      const errors = {};
      Profile.findOne({ handle: profileFields.handle }).then((profile) => {
        if (profile) {
          errors.handle = 'That handle already exists dsd';
          res.status(400).json(errors);
        }
        new Profile(profileFields).save().then((profile) => res.json(profile));
      });
    }
  });
};

exports.addExp = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    const newExp = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description,
    };

    profile.experience.unshift(newExp);

    profile.save().then((profile) => res.json(profile));
  });
};

exports.addEdu = (req, res) => {
  // console.log('first');
  Profile.findOne({ user: req.user.id })
    .then((profile) => {
      // console.log(profile);
      const newEdu = {
        school: req.body.school,
        degree: req.body.degree,
        fieldOfStudy: req.body.fieldOfStudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description,
      };

      profile.education.unshift(newEdu);

      profile.save().then((profile) => res.json(profile));
    })
    .catch((error) => res.json(error));
};

exports.deleteExp = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    const removeIndex = profile.experience
      .map((item) => item.id)
      .indexOf(req.params.expid);

    profile.experience.splice(removeIndex, 1);

    profile
      .save()
      .then((profile) => res.json(profile))
      .catch((error) => res.status(404).json(error));
  });
};

exports.deleteEdu = (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    const removeIndex = profile.experience
      .map((item) => item.id)
      .indexOf(req.params.eduid);

    profile.education.splice(removeIndex, 1);

    profile
      .save()
      .then((profile) => res.json(profile))
      .catch((error) => res.status(404).json(error));
  });
};

exports.deleteProfile = (req, res) => {
  Profile.findOneAndUpdate({ id: req.user.id }, { $set: { isDel: true } }).then(
    () => {
      User.findOneAndUpdate(
        { id: req.user.id },
        { $set: { isDel: true } }
      ).then((data) => {
        res.json({ success: true, data });
      });
    }
  );
};
