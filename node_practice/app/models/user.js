
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  address: {
    street: {
      type: String,
      required: true,
    },
    suite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
    geo: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },

  phone: {
    type: Number,
    required: true,
  },

  website: {
    type: String,
    required: true,
  },

  company: {
    cname: {
      type: String,
      required: true,
    },
    catchphrase: {
      type: String,
      required: true,
    },

    bs: {
      type: String,
      required: true,
    },
  },
});


const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;