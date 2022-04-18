const mongoose = require('mongoose');

const Banks = mongoose.model('Banks');

const getAll = (req, res) => {
  Banks.find()
    .exec()
    .then((banks) => res.json(banks))
    .catch((err) => res.status(500).json(err));
};

const create = (req, res) => {
  Banks.create(req.body)
    .then((createBanks) => res.json(createBanks))
    .catch((err) => res.status(500).json(err));
};

const update = (req, res) => {
  Banks.findOneAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((bank) => res.json(bank))
    .catch((err) => res.status(500).json(err));
};

const remove = (req, res) => {
  Banks.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
