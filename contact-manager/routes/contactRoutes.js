//1
import express from 'express';
const router = express.Router();

//3
import {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact }
    from '../controllers/contactController.js';

//1
router.route("/").get((req, res) => {
  res.status(200).json({message: 'Hello from the Contact Manager API!'});
});

//2
// router.route("/").get((req, res) => {
//   res.status(200).json({message: 'Get all Contacts'});
// });

//3
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

//1
export default router;