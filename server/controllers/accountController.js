const BankAccount = require('../models/accountModel');

// Create a new bank account
exports.createBankAccount = async (req, res) => {
  try {
    const { accountNumber, bankName, userId } = req.body;
    const newBankAccount = new BankAccount({ accountNumber, bankName, userId });
    await newBankAccount.save();
    res.status(201).json({ message: 'Bank account created successfully', newBankAccount });
  } catch (error) {
    res.status(500).json({ message: 'Error creating bank account', error });
  }
};

// Get bank account details
exports.getBankAccountDetails = async (req, res) => {
  try {
    const account = await BankAccount.findById(req.params.id).populate('transactions');
    if (!account) {
      return res.status(404).json({ message: 'Bank account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bank account details', error });
  }
};
