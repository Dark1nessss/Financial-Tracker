const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bankAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount' }],
  cryptoAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CryptoAccount' }],
  investmentAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InvestmentAccount' }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
