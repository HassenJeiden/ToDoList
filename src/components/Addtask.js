import React, { useState } from 'react';
import { addTask,filerUser } from '../ReduxFiles/Actions/Actions';
import { connect } from 'react-redux';



const mapDispatchToProps = dispatch => {
    return {
        addNewTask: tasks => dispatch(addTask(tasks)),
        setFilter: filterT=>dispatch(filerUser(filterT))
    }
}

const Addtask = (props) => {

    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNewTask({
            id: Date.now(),
            description,
            isDone: 'No'
        })
        props.setFilter('All')
        e.target.reset();
    }

    return (
        <div >
            <form className='addtask' onSubmit={handleSubmit}>
                <label className='labl'>Description</label>
                <input type='text' className='inp' placeholder="Leave a comment here" onChange={e => setDescription(e.target.value)} />
                <button type='submit' className='btn'>Add Task</button>
            </form>
            
        </div>
    )
}

export default connect(null, mapDispatchToProps)(Addtask)