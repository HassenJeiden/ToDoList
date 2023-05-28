import React, { useState } from 'react';
import { addTask } from '../ReduxFiles/Actions/Actions';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/comp.css';

const mapDispatchToProps = dispatch => {
    return {
        addNewTask: tasks => dispatch(addTask(tasks))
    }
}

const Addtask = (props) => {

    const [description, setDescription] = useState('')
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchToggle = () => {
        setIsChecked(!isChecked);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNewTask({
            id: Date.now(),
            description,
            isChecked
        })
    }

    return (
        <div>
            <Form style={{ maxWidth: '700px' }} onSubmit={console.log(isChecked)}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label >Task Id</Form.Label>
                    <Form.Control type="email" placeholder="Task Id" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}
                        onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Check type="switch" id="custom-switch" label={isChecked ? 'IsDone?:Yes' : 'IsDone?:NotYet'}
                    checked={isChecked} onChange={handleSwitchToggle} />
            </Form>
            <Button as="input" type="submit" value="Submit"/>
        </div>
    )
}
                <Form.Check type="switch" id="custom-switch" label={isChecked ? 'IsDone?:Yes' : 'IsDone?:NotYet'}
                    checked={isChecked} onChange={handleSwitchToggle} />
export default connect(null, mapDispatchToProps)(Addtask)
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchToggle = () => {
        setIsChecked(!isChecked);
        setIsDone(isChecked ? 'No' : 'Yes')
    }