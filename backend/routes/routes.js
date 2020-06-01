// Router

const express = require('express')
const router = express.Router()

const exerciseController = require('../controllers/exercise')

router.get('/exercises' , exerciseController.getExercise)

router.get('/exercises/:id', exerciseController.getExerciseById)

router.post('/exercises/add', exerciseController.addExercise)

router.post('/exercises/update/:id', exerciseController.updateExercise)

router.delete('/exercises/:id', exerciseController.deleteExercise)

module.exports = router