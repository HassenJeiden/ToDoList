import React from 'react'
import { connect } from 'react-redux'
import { deleteTask, editTask } from '../ReduxFiles/Actions/Actions'

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filter: state.filterT
    }
}
const ListTask = (props) => {
    const handleDelete = (taskId) => {
        props.deleteTask(taskId);
    };
    const handleEdit = (taskId) => {
        props.editTask(taskId);
    };
    return (
        <div >
            <h1>Display Tasks by: {props.filter} Tasks</h1>
            {props.filter === 'All' ? props.tasks.map((task) => <div className='task4' id={task.id} key={task.id}>
                <h4 >{task.id}</h4>
                <h4>{task.isDone}</h4>
                <h4>{task.description}</h4>
                <button className='btn' onClick={() => handleEdit({ ...task, isDone: task.isDone==='No' ? 'Yes' : 'No' })}>
                {task.isDone === 'Yes' ? 'UnDone' : 'Done'}
                </button>
                <button className='btn' onClick={() => handleDelete(task.id)}>Delete</button>
            </div>) : props.filter === 'Done' ? props.tasks.filter(el => el.isDone === 'Yes').map((task) => <div className='task4' id={task.id} key={task.id}>
                <h4 >{task.id}</h4>
                <h4>{task.isDone}</h4>
                <h4>{task.description}</h4>
                <button className='btn' onClick={() => handleEdit({ ...task, isDone: task.isDone === 'Yes' ? 'No' : 'Yes' })}>
                    {task.isDone === 'Yes' ? 'UnDone' : 'Done'}
                </button>
                <button className='btn' onClick={() => handleDelete(task.id)}>Delete</button>
            </div>) : props.tasks.filter(el => el.isDone === 'No').map((task) => <div className='task4' id={task.id} key={task.id}>
                <h4 >{task.id}</h4>
                <h4>{task.isDone}</h4>
                <h4>{task.description}</h4>
                <button className='btn'onClick={() => handleEdit({ ...task, isDone: task.isDone === 'Yes' ? 'No' : 'Yes' })}>
                {task.isDone === 'Yes' ? 'UnDone' : 'Done'}
                    </button>
                <button className='btn' onClick={() => handleDelete(task.id)}>Delete</button>
            </div>)}
        </div>
    )
}

export default connect(mapStateToProps, { deleteTask, editTask })(ListTask)