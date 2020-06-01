import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import ExerciseDetail from './ExerciseDetail'
import axios from 'axios'
import './ExerciseForm.css'

const exercise = []

localStorage.setItem('exercise', JSON.stringify(exercise))


class ExerciseForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            name: '',
            weight: '',
            reps: '',
            sets: '',
            id: 0,
            isSubmited: false,
            exercise: []
        }
        this.deleteExercice = this.deleteExercice.bind(this)
    }

    // Retrieve my exercises from mongodb
    async componentDidMount() {
        try{
            const response = await axios.get("http://localhost:5000/exercises/")
            const data = await  response.data
            this.setState({exercise: data})
        } catch(err) {
            console.log(err)
        }
    }

    // Delete an exercise of my database
    async deleteExercice (id) {
        try{
            await axios.delete(`http://localhost:5000/exercises/${id}`)
            window.location = '/'
        } 
        catch(err) {
            console.log(err);
        }
    }

    // Add an exercise in my database    
    async handleSubmit() {
        try {
            const exercise = this.state
            await axios.post("http://localhost:5000/exercises/add", exercise)
        } catch(err) {
            console.log(err);
        }
    }
    // Check the changes in my inputs
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })  
    }  
    // My button submit is activated only if all forms are filled
    canBeSubmitted() {
        const {name, weight, reps, sets} = this.state
        return name.length > 0 && weight.length > 0 && reps.length > 0 && sets.length > 0
    }

    render() {
       const isEnabled = this.canBeSubmitted()
       // JSX CODE 
        return (
            <div>
                <Container>
                <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
                    <h1>Create an exercise</h1>
                    <div className='select'>
                        <select name='name' onChange={this.handleChange.bind(this)}>
                            <option value=''>Choose an Exercise</option>
                            <option value='Bench Press'>Bench Press</option>
                            <option value='Squat'>Squat</option>
                            <option value='Rowing'>Rowing</option>
                            <option value='Pull Ups'>Pull Ups</option>
                            <option value='Push Ups'>Push Ups</option>
                            <option value='Dead Lift'>Dead Lift</option>
                            <option value='Sit-Ups'>Sit-Ups</option>
                        </select>
                    </div>
                    <br/>
                    <h3>Weight</h3>
                    <Form.Control type='number' name='weight' value={this.state.weight} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <h3>Sets</h3>
                    <Form.Control type='number' name='sets' value={this.state.sets} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <h3>Reps</h3>
                    <Form.Control type='number' name='reps' value={this.state.reps} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <Button variant='primary' type='submit' disabled={!isEnabled}>Create the exercise</Button>
                    </form> 
                    <br/>
                    {/* MAP on the array of my MongoDB collection */}
                    {this.state.exercise.reverse().map(ex => {
                        return (
                                <ExerciseDetail 
                                deleteExercise={this.deleteExercice}
                                exerciseName={ex.name}
                                dayWeek={ex.date}
                                weight={ex.weight}
                                reps={ex.reps}
                                sets={ex.sets}
                                key={ex._id}
                                _id={ex._id}
                                /> ) })}
                </Container>
            </div>
        )
    }
}
export default ExerciseForm 