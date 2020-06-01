import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
export class EditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            weight: '',
            reps: '',
            sets: '',
            id: 0,
        }
    }
    // Retrieve datas of my exercise I want to update
    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:5000/exercises/"+ this.props.match.params.id)
            this.setState({
                name: response.data.name,
                weight: response.data.weight,
                reps: response.data.reps,
                sets: response.data.sets
            })    
        } catch(err) {
            console.log(err);
        }
                  
    }

    // Post request to update my exercise
    async handleSubmit(e) {
        try {
            e.preventDefault()
            const exercise = this.state
            await axios.post("http://localhost:5000/exercises/update/" + this.props.match.params.id, exercise)

            window.location = '/'
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

    render() {
        return (
            // JSX CODE
            <div>
                <Container>
                <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
                    <h1>Edit exercise</h1>
                    <h2>{this.state.name}</h2>
                    <br/>
                    <h3>Weight</h3>
                    <Form.Control type='number' name='weight'  value={this.state.weight} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <h3>Sets</h3>
                    <Form.Control type='number' name='sets'  value={this.state.sets} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <h3>Reps</h3>
                    <Form.Control type='number' name='reps'  value={this.state.reps} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <Button variant='primary' type='submit'>Edit the exercise</Button>
                    </form> 
                    <br/>
                </Container>
            </div>
               
        )
    }
}

export default EditForm
