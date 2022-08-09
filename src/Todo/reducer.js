import {SET_JOB, ADD_JOB, DEL_JOB } from './constants'

export const initState = {
    job: '',
    jobs: []
  }

const reducer = (state, action) =>{
    switch(action.type){
      case SET_JOB:
        return {
          ...state, 
          job: action.pageLoad
        }
      case ADD_JOB:
          return {
            ...state, 
            jobs: [...state.jobs, action.pageLoad]
          }
      case DEL_JOB:
          const newJobs = [...state.jobs]
          newJobs.splice(action.pageLoad, 1)
          return {
            ...state, 
            jobs: newJobs
          }   
      default:
        throw new Error('Invalid action')
    }
  }

export default reducer