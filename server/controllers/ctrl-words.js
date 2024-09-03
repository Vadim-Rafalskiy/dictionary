const words = require('../data');
const { HttpError } = require('../helpers');
const Joi = require('joi');

const addShema = Joi.object({
    pl: Joi.string().required(),
    uk: Joi.string().required(),
    serf: Joi.string().required(),
    partOfSpeech: Joi.string().required(),
});

const getWords = async (req, res) => {
    try {
        const allWords = await words.getAll();
        res.json(allWords);
    } catch (error) {
        next(error);
    }
};

const getWordById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const word = await words.getById(id);
        if (!word) throw HttpError(404);
        res.json(word);
    } catch (error) {
        next(error);
    }
};

const addWord = async (req, res, next) => {
    try {
        const { error } = addShema.validate(req.body);
        if (error) throw HttpError(400, error.message);

        const newWord = await words.add(req.body);
        res.status(201).json(newWord);
    } catch (error) {
        next(error);
    }
};

const updateWord = async (req, res, next) => {
    const { id } = req.params;

    try {
        const { error } = addShema.validate(req.body);
        if (error) throw HttpError(400, error.message);

        const updatedWord = await words.updateById(id, req.body);
        if (!updatedWord) throw HttpError(404);
        res.json(updatedWord);
    } catch (error) {
        next(error);
    }
};

const deleteWord = async (req, res, next) => {
    const { id } = req.params;

    try {
        const deletedWord = await words.deleteById(id);
        if (!deletedWord) throw HttpError(404);
        res.json(deletedWord);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getWords,
    getWordById,
    addWord,
    updateWord,
    deleteWord,
};
