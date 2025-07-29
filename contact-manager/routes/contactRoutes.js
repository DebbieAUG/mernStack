import express from 'express';
const router = express.Router();

import {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact }
    from '../controllers/contactController.js';

router.route("/").get((req, res) => {
  res.status(200).json({message: 'Hello from the Contact Manager API!'});
});

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

export default router;