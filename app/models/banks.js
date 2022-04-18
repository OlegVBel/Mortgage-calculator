const mongoose = require('mongoose');

const BanksSchema = new mongoose.Schema({
  id: Number,
  name: String,
  rate: mongoose.Schema.Types.Decimal128,
  loan: mongoose.Schema.Types.Decimal128,
  payment: mongoose.Schema.Types.Decimal128,
  term: {type: Number , default: 1, min: 1},
  image: String,
  altDesc: String,
});
mongoose.model('Banks', BanksSchema);
