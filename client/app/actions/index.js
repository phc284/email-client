import axios from 'axios';

import keys from '../../../config/keys.js'

export const SEND_EMAIL = 'send_email';
export const OPEN_MODAL = 'open_modal';
export const CLOSE_MODAL = 'close_modal';

export const sendEmail = () => {
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
