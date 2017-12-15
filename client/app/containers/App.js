//Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RaisedButton } from 'material-ui';

//components
import SendForm from '../components/SendForm';

//Actions
import { openModal, closeModal} from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row title justify-content-center align-items-center">
          <h1 className="title">Welcome to Email-Client</h1>
        </div>
        <div className="row justify-content-center">
          <RaisedButton
            label="Send Email"
            primary={true}
            onClick={() => this.props.openModal()}
          />
          <SendForm />
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { modalOpen: state.modal }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({
    openModal: openModal
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
