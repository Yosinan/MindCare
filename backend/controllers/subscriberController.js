const {Subscriber} = require('../models/subscriberModel');

// Subscribe to the newsletter
const subscribe = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if subscriber already exists
      const existingSubscriber = await Subscriber.findOne({ email });
      if (existingSubscriber) {
        res.status(409).json({ message: 'Subscriber already exists.' });
        return;
      }
  
      const newSubscriber = new Subscriber({ email });
      await newSubscriber.save();
      res.sendStatus(201);
    } catch (error) {
      console.error('Error subscribing to the newsletter:', error);
      res.sendStatus(500);
    }
  };
  
  // Unsubscribe from the newsletter
  const unsubscribe =  async (req, res) => {
    try {
      const { email } = req.body;
  
      // Find and update the subscriber
      const subscriber = await Subscriber.findOneAndUpdate(
        { email },
        { subscribed: false }
      );
  
      if (subscriber) {
        res.sendStatus(200);
      } else {
        res.status(404).json({ message: 'Subscriber not found.' });
      }
    } catch (error) {
      console.error('Error unsubscribing from the newsletter:', error);
      res.sendStatus(500);
    }
  };
  
module.exports = { subscribe, unsubscribe };