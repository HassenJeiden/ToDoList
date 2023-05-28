import { ADD_TASK } from "../Constants/Actions_types";
import { UPDATE_TASK } from "../Constants/Actions_types";
import { FILTER_TASK } from "../Constants/Actions_types";
import { DELETE_TASK } from "../Constants/Actions_types";

export const addTask = (newTask)=>{
    return{
        type:ADD_TASK,
        payload: newTask
    }
}

export const editTask=(upDate)=>{
    return{
        type:UPDATE_TASK,
        payload:upDate
    }
}
export const filerUser = (filerUser) => {
    return {
      type: FILTER_TASK,
      payload: filerUser
    };
  };
  export const deleteTask=(taskId)=>{
    return{
        type:DELETE_TASK,
        payload:taskId
    }
}