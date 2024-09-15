const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount' },
  amount: { type: Number, required: true },
  transactionType: { type: String, enum: ['deposit', 'withdrawal', 'transfer'], required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);
