import React, { PropTypes, Component } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

class AuthenticateContainer extends Component {

  handleAuth = () => {
    this.props.fetchAndHandleAuthedUser()
  }
  render () {
    console.log("isFetching?", this.props.isFetching)
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    )
  }
}

Authenticate.propTypes = {
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
}

function mapStateToProps(state){
  return {
    isFetching: state.isFetching,
    error: state.error
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(userActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
