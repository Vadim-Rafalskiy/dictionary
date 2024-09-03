const express = require('express');
const router = express.Router();

const ctrl = require('../../../controllers/ctrl-words');

router.get('/', ctrl.getWords);

router.get('/:id', ctrl.getWordById);

router.post('/', ctrl.addWord);

router.put('/:id', ctrl.updateWord);

router.delete('/:id', ctrl.deleteWord);

module.exports = router;
