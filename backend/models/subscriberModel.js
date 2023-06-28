const mongoose = require('mongoose');

// Subscriber model
const SubscriberSchema = new mongoose.Schema({
    // name: {
    //   type: String,
    //   required: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        message: 'Please enter a valid email address.',
      },
    },
    subscribed: {
      type: Boolean,
      default: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Subscriber = mongoose.model('Subscriber', SubscriberSchema);