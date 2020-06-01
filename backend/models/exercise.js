const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
    name: {type: String, required: true},
    weight: {type: Number, required: true},
    reps: {type: Number, required: true},
    sets: {type: Number, required: true}, 
    date: {type: Date, required: true}
},

{
    timestamps: true
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise