const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Create a bank account
router.post('/bank-accounts', accountController.createBankAccount);

// Get bank account details
router.get('/bank-accounts/:id', accountController.getBankAccountDetails);

module.exports = router;
