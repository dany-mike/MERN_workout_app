import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'

class ExerciseDetail extends React.Component {

      
        render () {
                  // JSX CODE
                return (
                        <div>
                        <Card style={{ width: '18rem' }}>
                 <Card.Body>
                        <Card.Title>{this.props.exerciseName}</Card.Title>
                                <ListGroup>
                                        <ListGroupItem>
                                                Day: {this.props.dayWeek} 
                                        </ListGroupItem>
                                        <ListGroupItem>
                                                Weight: {this.props.weight} 
                                        </ListGroupItem>
                                        <ListGroupItem>
                                                Sets: {this.props.sets}  
                                        </ListGroupItem>
                                        <ListGroupItem>
                                                Reps: {this.props.reps}
                                        </ListGroupItem>
                                </ListGroup> 
                                <br/>
                                <Link to={'/update/' + this.props._id}>
                                        <Button variant='success'>
                                                EDIT
                                        </Button>        
                                </Link>
                                {` - `}
                                <Button variant="danger" onClick={() => this.props.deleteExercise(this.props._id)}>Delete</Button> 
                        </Card.Body>
                        </Card>
                        <br/>
                        </div>
                )
        }

}

export default ExerciseDetail 