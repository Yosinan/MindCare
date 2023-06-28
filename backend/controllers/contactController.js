const Contact = require('../models/contactModel');


// Create a new contact
const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({
            name,
            email,
            message
        });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// // Get all contacts
// const getContacts = async (req, res) => {
//     try {
//         // Get all contacts from the MongoDB collection
//         const contacts = await Contact.find();
//         res.json(contacts);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }

// // Get a contact by ID
// const getContactById =  async (req, res) => {
//     try {
//         // Find a contact by ID from the MongoDB collection
//         const contact = await Contact.findById(req.params.id);
//         res.json(contact);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }



// // Update a contact
// const updateContact = async (req, res) => {
//     try {
//         const { name, email, message } = req.body;
//         const updatedContact = await Contact.findByIdAndUpdate(
//             req.params.id,
//             { name, email, message },
//             { new: true }
//         );
//         res.json(updatedContact);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// }

// // Delete a contact


// const deleteContact = async (req, res) => {
//     try {
//         const deletedContact = await Contact.findByIdAndDelete(req.params.id);
//         res.json(deletedContact);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// }

module.exports = { createContact
    // getContacts,
    // getContactById,
    // updateContact,
    // deleteContact
};