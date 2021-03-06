import React, { Component } from 'react';
import { Dialog, RaisedButton, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { closeModal, openModal, sendEmail } from '../actions';

class SendForm extends Component {

  /* Render text fields for each Field in form */
  renderField(field) {
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        {field.label === 'Message' ? (
          <textarea className="form-control" type="text" {...field.input}/>
        ) : (
          <input className="form-control" type="text" {...field.input}/>
        )}
        <div className="text-help">{touched && error}</div>
      </div>
    );
  }

  onSubmit(values) {
    const { reset } = this.props;
    this.props.sendEmail(values);

    reset();
  }


  render() {
    const { handleSubmit, reset } = this.props;

    const actions = [
      <FlatButton
        label="Done"
        secondary={true}
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
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="to" label="To" component={this.renderField} />
          <Field name="from" label="From" component={this.renderField} />
          <Field name="subject" label="Subject" component={this.renderField} />
          <Field name="message" label="Message" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Dialog>
    );
  }
}

/* Redux-form text validation */
function validate(values) {
  const errors = {};

  if(!values.to || !values.to.includes('@')) {
    errors.to = "Enter a valid email"
  }
  if(!values.from || !values.to.includes('@')) {
    errors.from = "Enter a valid email"
  }
  if(!values.subject) {
    errors.subject = "Enter a subject"
  }
  if(!values.message) {
    errors.message = "Are you sure you want to submit an empty message?"
  }

  return errors;
}

function mapStateToProps(state) {
  return { modalOpen: state.modal, status: state.status };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeModal: closeModal,
      sendEmail: sendEmail
    },
    dispatch
  );
}

export default reduxForm({
  validate,
  form: 'SendFormForm'
})(connect(mapStateToProps, mapDispatchToProps)(SendForm));
