const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    isDel: { type: Boolean, default: false },
    handle: {
      type: String,
      required: true,
      max: 40,
    },
    company: String,
    website: String,
    location: String,
    status: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    bio: String,
    github: String,
    experience: [
      {
        title: {
          type: String,
          required: true,
        },
        company: {
          type: String,
          required: true,
        },
        location: {
          type: String,
        },
        from: {
          type: String,
        },
        to: {
          type: String,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: String,
      },
    ],
    education: [
      {
        school: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        fieldOfStudy: {
          type: String,
          required: true,
        },
        from: {
          type: String,
        },
        to: {
          type: String,
        },
        current: {
          type: Boolean,
          default: false,
        },
        description: String,
      },
    ],
    social: {
      youtube: {
        type: String,
      },
      twitter: {
        type: String,
      },
      facebook: {
        type: String,
      },
      linkedin: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

ProfileSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ isDel: { $ne: true } });
  next();
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
