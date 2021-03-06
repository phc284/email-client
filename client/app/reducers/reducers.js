import { SEND_EMAIL, OPEN_MODAL, CLOSE_MODAL } from '../actions';

export function emailReducer(state={}, action) {

  switch (action.type) {
    case SEND_EMAIL:
      return {...state}
    default:
      return state
  }
}

export function modalReducer(state=false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return true
    case CLOSE_MODAL:
      return false
    default:
      return state
  }
}
