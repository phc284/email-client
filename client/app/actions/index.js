import axios from 'axios';

export const SEND_EMAIL = 'send_email';
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

export const sendEmail = (values) => {
  /* ReduxPromise middleware will fulfill `request` when sent to reducer */
  var request = axios.post('/api/send', values)

  return {
    type: SEND_EMAIL,
    payload: request
  }
}

export const openModal = () => {
  return {
    type: OPEN_MODAL
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}
