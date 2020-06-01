const Exercise = require('../models/exercise')


exports.getExercise = (req, res, next) => {
    Exercise.find()
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err))
}

exports.addExercise = (req, res) => { 
    const name =  req.body.name
    const weight = Number (req.body.weight)
    const reps = Number (req.body.reps)
    const sets = Number (req.body.sets)
    const date = new Date()

    const newExercise = new Exercise({
        name,
        weight,
        reps,
        sets,
        date
    });
    
    newExercise.save()
    .then(()=> {res.json('Exercise added!')})
    .catch(err => console.log(err))
}

exports.getExerciseById = (req, res, next) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err))
}

exports.deleteExercise = (req, res, next) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted'))
    .catch(err => console.log(err))
}

exports.updateExercise = (req, res, next) => {
    Exercise.findById(req.params.id)
    .then (exercise => {
        exercise.name = req.body.name
        exercise.weight = Number(req.body.weight)
        exercise.reps = Number(req.body.reps)
        exercise.sets = Number(req.body.sets)

        exercise.save()
        .then(() => {res.json('Exercise Updated')})
        .catch(err => console.log(err))
    })
}