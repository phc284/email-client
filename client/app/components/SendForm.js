import React, { Component } from 'react';
import { Dialog, RaisedButton, FlatButton} from 'material-ui';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { closeModal, openModal } from '../actions'

class SendForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.props.closeModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.closeModal}
      />
    ];
    return (
      <Dialog
        title="Send Your Email"
        actions={actions}
        modal={false}
        open={this.props.modalOpen}
        onRequestClose={this.props.closeModal}
        autoScrollBodyContent={true}
      >
        <form>
          <div className="form-group">
            <label>To</label>
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Sending To"/>
          </div>
          <div className="form-group">
            <label>From</label>
            <input className="form-control" id="exampleInputPassword1" placeholder="Your Email"/>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input className="form-control" id="exampleInputPassword1" placeholder="Subject"/>
          </div>
          <div className="form-group">
            <label>CC</label>
            <input className="form-control" id="exampleInputPassword1" placeholder="CC"/>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" id="exampleInputPassword1" placeholder="Message"/>
          </div>
        </form>
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return { modalOpen: state.modal }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({
    closeModal: closeModal,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SendForm);
