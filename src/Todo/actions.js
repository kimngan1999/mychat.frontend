import {SET_JOB, ADD_JOB, DEL_JOB } from './constants'

export const setJob = pageLoad =>{
  return {
    type: SET_JOB,
    pageLoad
  }
}

export const addJob = pageLoad =>{
  return {
    type: ADD_JOB,
    pageLoad
  }
}
export const delJob = pageLoad =>{
  return {
    type: DEL_JOB,
    pageLoad
  }
}