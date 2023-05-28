import { ADD_TASK, FILTER_TASK, UPDATE_TASK, DELETE_TASK } from "../Constants/Actions_types";
const initialTask = {
    tasks: [{
        id: 'Task Id',
        description: 'what to do',
        isDone: 'Is Done?'
    }], filterT: 'All'
}

const rootReducers = (state = initialTask, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            const updated = state.tasks.map((obj) =>
                obj.id === action.payload.id ? action.payload : obj
            );

            return { ...state, tasks: updated };

        case FILTER_TASK:
            return {
                ...state,
                filterT: action.payload
            }
        case DELETE_TASK:
            const updatedObjects = state.tasks.filter(
                (taskd) => taskd.id !== action.payload
            );

            return { ...state, tasks: updatedObjects };

        default:
            return state
    }
}
export default rootReducers