const express = require('express')
const { createRecord, getSingleRecord, getAllRecords, deleteSingleRecord, updateSingleRecord } = require('../controllers/recordController')
const router = express.Router()

// GET all items
router.get('/', getAllRecords)

// GET a single items
router.get('/:id', getSingleRecord)

// POST a new item
router.post('/', createRecord)

// DELETE a single item
router.delete('/:id', deleteSingleRecord)

// UPDATE a single item
router.patch('/:id', updateSingleRecord)

module.exports = router