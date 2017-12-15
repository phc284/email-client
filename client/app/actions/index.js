import axios from 'axios';

export const SEND_EMAIL = 'send_email';
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

export const sendEmail = (values) => {
  console.log('action values', values)
  var request = axios.post('/api/send', values)
    .then(() => 'Success')
    .catch((err) => 'Error')
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
